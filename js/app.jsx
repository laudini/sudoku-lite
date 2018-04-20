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
            square: [],
            squareOne : [],
            squareTwo : [],
            squareThree : [],
            squareFour : [],
            squareFive : [],
            squareSex : [],
            squareSeven : [],
            squareEight : [],
            squareNine : [],

        }
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
    render() {
        fetch('https://sugoku.herokuapp.com/board?difficulty=easy').then(r => {
            return r.json();
        }).then(obj => {
            return obj.board
        }).then(arr => {
            this.setState({
                square : arr
            })
        });
        // this.fillBoard();

        // /////////////// xx
        // let data = {
        //     board: [[0, 0, 1, 0, 0, 0, 0, 0, 0],
        //         [2, 0, 0, 0, 0, 0, 0, 7, 0],
        //         [0, 7, 0, 0, 0, 0, 0, 0, 0],
        //         [1, 0, 0, 4, 0, 6, 0, 0, 7],
        //         [0, 0, 0, 0, 0, 0, 0, 0, 0],
        //         [0, 0, 0, 0, 1, 2, 5, 4, 6],
        //         [3, 0, 2, 7, 6, 0, 9, 8, 0],
        //         [0, 6, 4, 9, 0, 3, 0, 0, 1],
        //         [9, 8, 0, 5, 2, 1, 0, 6, 0]]
        // };
        // fetch('https://sugoku.herokuapp.com/validate', {
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     });

        return (
            <div className="board">
                <button onClick={this.fillBoard}>START</button>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                </div>
                <div className="main-square">
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                    <div className="small-square">b</div>
                </div>
                <div className="main-square">
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                    <div className="small-square">c</div>
                </div>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                </div>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                </div>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                </div>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                </div>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                </div>
                <div className="main-square">
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
                    <div className="small-square">a</div>
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