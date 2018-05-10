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
        }).then(arr => {
            console.log('hej');
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
        console.log(allSmallSquares);
        for (let i = 0; i < allSmallSquares.length; i++) {
            if (allSmallSquares[i].value > 0 && allSmallSquares[i].value < 10 || allSmallSquares[i].innerText > 0 && allSmallSquares[i].innerText < 10 ) {
                allSolved = true;
            } else {
                console.log('x', allSmallSquares[i]);
                return allSolved = false;
            }
        }
        let sq1 = Array.from(document.querySelectorAll(".sq1"));
        let sq2 = Array.from(document.querySelectorAll(".sq2"));
        let sq3 = Array.from(document.querySelectorAll(".sq3"));
        let sq4 = Array.from(document.querySelectorAll(".sq4"));
        let sq5 = Array.from(document.querySelectorAll(".sq5"));
        let sq6 = Array.from(document.querySelectorAll(".sq6"));
        let sq7 = Array.from(document.querySelectorAll(".sq7"));
        let sq8 = Array.from(document.querySelectorAll(".sq8"));
        let sq9 = Array.from(document.querySelectorAll(".sq9"));

        let data = {
            board: [
                sq1,
                sq2,
                sq3,
                sq4,
                sq5,
                sq6,
                sq7,
                sq8,
                sq9
            ]
        };
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
                    square5.push(<div className="small-square s5">{e}</div>)
                )
            } else {
                return (
                    square5.push(<input className="small-square s5" type="text"/>)
                )
            }
        });

        this.state.squareSix.map((e, i) => {
            if (e > 0) {
                return (
                    square6.push(<div className="small-square s6">{e}</div>)
                )
            } else {
                return (
                    square6.push(<input className="small-square s6" type="text"/>)
                )
            }
        });

        this.state.squareSeven.map((e, i) => {
            if (e > 0) {
                return (
                    square7.push(<div className="small-square s7">{e}</div>)
                )
            } else {
                return (
                    square7.push(<input className="small-square s7" type="text"/>)
                )
            }
        });

        this.state.squareEight.map((e, i) => {
            if (e > 0) {
                return (
                    square8.push(<div className="small-square s8">{e}</div>)
                )
            } else {
                return (
                    square8.push(<input className="small-square s8" type="text"/>)
                )
            }
        });
        this.state.squareNine.map((e, i) => {
            if (e > 0) {
                return (
                    square9.push(<div className="small-square s9">{e}</div>)
                )
            } else {
                return (
                    square9.push(<input className="small-square s9" type="text"/>)
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