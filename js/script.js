
// --Gameboard {} module
//   --gameboard []
//   --gamePlay()
//   --displayGameboard ()

// --Player{} factory
//   --name 
//   --choices [] //max 3 //private
//   --score   //private

const Gameboard = ((gameboard = []) => {
    const getGameboard = () => gameboard;
    const addToGameboard = (string) => { getGameboard().push(string); }
    const spaceBetweenChoices = () => {
        // const sortedChoices = getGameboard().toSorted((a, b) => { return a - b });
        // debugger;
        //if playerSYmbol shows up in a certain pattern within the array, that person has won
        // getGameboard().includes()
        // let arr = [0, 1, 3, 2, 7, 6];

        // const hor_1 = [0, 1, 2];

        // arr.every((element) => {
        //     return arr.include(element);
        // });
        const arr = ['one', 'two', 'three', 'four'];
        const values = ['one', 'two'];

        const multipleExist = values.every(value => {
            return arr.includes(value);
        });

        // console.log(multipleExist); // 👉️ true
        return multipleExist;

    }

    const gameResults = () => {
        console.log(`space=${spaceBetweenChoices()}`);
        switch (spaceBetweenChoices()) {
            case 1:
            case 2:
            case 3:
            case 4:
                console.log(`A PLayer has won -> space=${spaceBetweenChoices()}`);
            //player won
            default:
                console.log(`nobody won`);

            //nobody won
        }
    };

    return { gameboard, getGameboard, addToGameboard, gameResults };


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
                    //Gameboard.gameboard.push(`X`);
                    Gameboard.addToGameboard(e.target.id);
                    firstPlayerTurn = false;
                }
                else {
                    e.target.textContent = `O`;
                    // Gameboard.gameboard.push(`O`);
                    Gameboard.addToGameboard(e.target.id);
                    firstPlayerTurn = true;
                }
            }
            console.log(e.target.id);
            console.log(Gameboard.getGameboard());
            console.log(Gameboard.gameResults());
        }

    });

});