
// --Gameboard {} module
//   --gameboard []
//   --gamePlay()
//   --displayGameboard ()

// --Player{} factory
//   --name 
//   --choices [] //max 3 //private
//   --score   //private

const Gameboard = (() => {
    const gameboard = [];
    const addToGameboard = (string) => { gameboard.push(string); }
    const spaceBetweenChoices = () => {
        const sortedChoices = gameboard.toSorted((a, b) => { return a - b });
        let space = 0;
        if ((sortedChoices[2] - sortedChoices[1]) === (sortedChoices[1] - sortedChoices[0])) {
            space = sortedChoices[2] - sortedChoices[1];
        }
        return space;
    }
    return { gameboard };
})();

const Player = (name, symbolChoice) => {
    const getName = () => name;
    const getSymbol = () => symbolChoice;
    const setSymbol = (symbol) => { symbolChoice = symbol; };
    const { gameboard } = Gameboard.gameboard;
    return { getName, getSymbol, setSymbol, gameboard };
};

let firstPlayerTurn = true;

document.querySelectorAll(`.ttt-cell`).forEach((cell) => {
    cell.addEventListener(`click`, (e) => {
        if (typeof +e.target.id === 'number') {
            console.log(e.target.textContent);

            if (e.target.textContent == `X` || e.target.textContent == `O`) {
                //do nothing
            }
            else {

                if (firstPlayerTurn) {
                    e.target.textContent = `X`;
                    Gameboard.gameboard.push(`X`);
                    firstPlayerTurn = false;
                }
                else {
                    e.target.textContent = `O`;
                    Gameboard.gameboard.push(`O`);
                    firstPlayerTurn = true;
                }
            }
            console.log(e.target.id);
            console.log(Gameboard.gameboard);
        }

    });

});