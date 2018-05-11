import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Board/>
        )
    }

}

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Main-Container">
                <Square/>
            </div>
        )
    }

}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareOne: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareTwo: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareThree: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareFour: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareFive: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareSix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareSeven: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareEight: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            squareNine: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        }
    }

    componentWillMount() {
        fetch('https://sugoku.herokuapp.com/board?difficulty=easy').then(r => {
            return r.json();
        }).then(obj => {
            return obj.board
        }).then(lines => {
            console.log(lines);
            let arr = [[],[],[],[],[],[],[],[],[]];
            for (let i = 0; i < lines.length; i++) {
                if (i === 0) {
                    arr[i].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i + 1].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i + 2].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 1) {
                    arr[i - 1].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i + 1].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 2) {
                    arr[i - 2].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i - 1].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i ].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 3) {
                    arr[i].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i + 1].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i + 2].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 4) {
                    arr[i - 1].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i + 1].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 5) {
                    arr[i - 2].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i - 1].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 6) {
                    arr[i].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i + 1].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i + 2].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 7) {
                    arr[i - 1].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i + 1].push(lines[i][6],lines[i][7],lines[i][8]);
                } else if (i === 8) {
                    arr[i - 2].push(lines[i][0],lines[i][1],lines[i][2]);
                    arr[i - 1].push(lines[i][3],lines[i][4],lines[i][5]);
                    arr[i].push(lines[i][6],lines[i][7],lines[i][8]);
                }
            }
            this.setState({
                square: arr
            })
        });

    }

    fillBoard = () => {

        this.setState({
            squareOne: this.state.square[0],
            squareTwo: this.state.square[1],
            squareThree: this.state.square[2],
            squareFour: this.state.square[3],
            squareFive: this.state.square[4],
            squareSix: this.state.square[5],
            squareSeven: this.state.square[6],
            squareEight: this.state.square[7],
            squareNine: this.state.square[8],

        })
    };

    checkSolution = () => {
        let allSmallSquares = document.querySelectorAll(".small-square");
        let allSolved = false;
        for (let i = 0; i < allSmallSquares.length; i++) {
            if (allSmallSquares[i].value > 0 && allSmallSquares[i].value < 10 || allSmallSquares[i].innerText > 0 && allSmallSquares[i].innerText < 10 ) {
                allSolved = true;
            } else {
                allSolved = false;
                break;
            }
        }

        let sq1 = Array.from(document.querySelectorAll(".sq1"));
        let sq1elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq1[i].tagName === "DIV") {
                sq1elems.push(sq1[i].innerText)
            } else {
                sq1elems.push(sq1[i].value)
            }
        }

        let sq2 = Array.from(document.querySelectorAll(".sq2"));
        let sq2elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq2[i].tagName === "DIV") {
                sq2elems.push(sq2[i].innerText)
            } else {
                sq2elems.push(sq2[i].value)
            }
        }

        let sq3 = Array.from(document.querySelectorAll(".sq3"));
        let sq3elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq3[i].tagName === "DIV") {
                sq3elems.push(sq3[i].innerText)
            } else {
                sq3elems.push(sq3[i].value)
            }
        }

        let sq4 = Array.from(document.querySelectorAll(".sq4"));
        let sq4elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq4[i].tagName === "DIV") {
                sq4elems.push(sq4[i].innerText)
            } else {
                sq4elems.push(sq4[i].value)
            }
        }

        let sq5 = Array.from(document.querySelectorAll(".sq5"));
        let sq5elems = [];
        for (let j = 0; j < 9; j++) {
            if (sq5[j].tagName === "DIV") {
                sq5elems.push(sq5[j].innerText)
            } else {
                sq5elems.push(sq5[j].value)
            }
        }

        let sq6 = Array.from(document.querySelectorAll(".sq6"));
        let sq6elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq6[i].tagName === "DIV") {
                sq6elems.push(sq6[i].innerText)
            } else {
                sq6elems.push(sq6[i].value)
            }
        }

        let sq7 = Array.from(document.querySelectorAll(".sq7"));
        let sq7elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq7[i].tagName === "DIV") {
                sq7elems.push(sq7[i].innerText)
            } else {
                sq7elems.push(sq7[i].value)
            }
        }

        let sq8 = Array.from(document.querySelectorAll(".sq8"));
        let sq8elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq8[i].tagName === "DIV") {
                sq8elems.push(sq8[i].innerText)
            } else {
                sq8elems.push(sq8[i].value)
            }
        }

        let sq9 = Array.from(document.querySelectorAll(".sq9"));
        let sq9elems = [];
        for (let i = 0; i < 9; i++) {
            if (sq9[i].tagName === "DIV") {
                sq9elems.push(sq9[i].innerText)
            } else {
                sq9elems.push(sq9[i].value)
            }
        }
        let finishedLines = [sq1elems, sq2elems, sq3elems, sq4elems, sq5elems, sq6elems, sq7elems, sq8elems, sq9elems]
        let finalArray = [[],[],[],[],[],[],[],[],[]];
        for (let i = 0; i < finishedLines.length; i++) {
            if (i === 0) {
                finalArray[i].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i + 1].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i + 2].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 1) {
                finalArray[i - 1].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i + 1].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 2) {
                finalArray[i - 2].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i - 1].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 3) {
                finalArray[i].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i + 1].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i + 2].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 4) {
                finalArray[i - 1].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i + 1].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 5) {
                finalArray[i - 2].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i - 1].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 6) {
                finalArray[i].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i + 1].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i + 2].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 7) {
                finalArray[i - 1].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i + 1].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            } else if (i === 8) {
                finalArray[i - 2].push(finishedLines[i][0], finishedLines[i][1], finishedLines[i][2]);
                finalArray[i - 1].push(finishedLines[i][3], finishedLines[i][4], finishedLines[i][5]);
                finalArray[i].push(finishedLines[i][6], finishedLines[i][7], finishedLines[i][8]);
            }
        }

        let data = {
            board: [
                finalArray[0],
                finalArray[1],
                finalArray[2],
                finalArray[3],
                finalArray[4],
                finalArray[5],
                finalArray[6],
                finalArray[7],
                finalArray[8]
            ]
        };
        console.log(data);
        fetch('https://sugoku.herokuapp.com/validate', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                console.log(data)
            });
    };

    render() {
        const square1 = [];
        const square2 = [];
        const square3 = [];
        const square4 = [];
        const square5 = [];
        const square6 = [];
        const square7 = [];
        const square8 = [];
        const square9 = [];

        this.state.squareOne.map((e, i) => {
            if (e > 0) {
                return (
                    square1.push(<div className="small-square sq1">{e}</div>)
                )
            } else {
                return (
                    square1.push(<input className="small-square sq1" type="text"/>)
                )
            }
        });

        this.state.squareTwo.map((e, i) => {
            if (e > 0) {
                return (
                    square2.push(<div className="small-square sq2">{e}</div>)
                )
            } else {
                return (
                    square2.push(<input className="small-square sq2" type="text"/>)
                )
            }
        });

        this.state.squareThree.map((e, i) => {
            if (e > 0) {
                return (
                    square3.push(<div className="small-square sq3">{e}</div>)
                )
            } else {
                return (
                    square3.push(<input className="small-square sq3" type="text"/>)
                )
            }
        });

        this.state.squareFour.map((e, i) => {
            if (e > 0) {
                return (
                    square4.push(<div className="small-square sq4">{e}</div>)
                )
            } else {
                return (
                    square4.push(<input className="small-square sq4" type="text"/>)
                )
            }
        });

        this.state.squareFive.map((e, i) => {
            if (e > 0) {
                return (
                    square5.push(<div className="small-square sq5">{e}</div>)
                )
            } else {
                return (
                    square5.push(<input className="small-square sq5" type="text"/>)
                )
            }
        });

        this.state.squareSix.map((e, i) => {
            if (e > 0) {
                return (
                    square6.push(<div className="small-square sq6">{e}</div>)
                )
            } else {
                return (
                    square6.push(<input className="small-square sq6" type="text"/>)
                )
            }
        });

        this.state.squareSeven.map((e, i) => {
            if (e > 0) {
                return (
                    square7.push(<div className="small-square sq7">{e}</div>)
                )
            } else {
                return (
                    square7.push(<input className="small-square sq7" type="text"/>)
                )
            }
        });

        this.state.squareEight.map((e, i) => {
            if (e > 0) {
                return (
                    square8.push(<div className="small-square sq8">{e}</div>)
                )
            } else {
                return (
                    square8.push(<input className="small-square sq8" type="text"/>)
                )
            }
        });
        this.state.squareNine.map((e, i) => {
            if (e > 0) {
                return (
                    square9.push(<div className="small-square sq9">{e}</div>)
                )
            } else {
                return (
                    square9.push(<input className="small-square sq9" type="text"/>)
                )
            }
        });

        return (
            <div>

                <button onClick={this.fillBoard}>START</button>
                <button onClick={this.checkSolution}>APPROVE AND CHECK</button>
                <div className="board">
                    <div className="main-square">
                        {square1}
                    </div>
                    <div className="main-square">
                        {square2}
                    </div>
                    <div className="main-square">
                        {square3}
                    </div>
                    <div className="main-square">
                        {square4}
                    </div>
                    <div className="main-square">
                        {square5}
                    </div>
                    <div className="main-square">
                        {square6}
                    </div>
                    <div className="main-square">
                        {square7}
                    </div>
                    <div className="main-square">
                        {square8}
                    </div>
                    <div className="main-square">
                        {square9}
                    </div>
                </div>
            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});