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
            square: [0,0,0,0,0,0,0,0,0],
            squareOne: [0,0,0,0,0,0,0,0,0],
            squareTwo: [0,0,0,0,0,0,0,0,0],
            squareThree: [0,0,0,0,0,0,0,0,0],
            squareFour: [0,0,0,0,0,0,0,0,0],
            squareFive: [0,0,0,0,0,0,0,0,0],
            squareSix: [0,0,0,0,0,0,0,0,0],
            squareSeven: [0,0,0,0,0,0,0,0,0],
            squareEight: [0,0,0,0,0,0,0,0,0],
            squareNine: [0,0,0,0,0,0,0,0,0],

        }
    }

    fillBoard = () => {
        console.log('uwaga');
        console.log(this.state.square[0]);
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
                square: arr
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
                    <div className="small-square">{this.state.squareOne[0]}</div>
                    <div className="small-square">{this.state.squareOne[1]}</div>
                    <div className="small-square">{this.state.squareOne[2]}</div>
                    <div className="small-square">{this.state.squareOne[3]}</div>
                    <div className="small-square">{this.state.squareOne[4]}</div>
                    <div className="small-square">{this.state.squareOne[5]}</div>
                    <div className="small-square">{this.state.squareOne[6]}</div>
                    <div className="small-square">{this.state.squareOne[7]}</div>
                    <div className="small-square">{this.state.squareOne[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareTwo[0]}</div>
                    <div className="small-square">{this.state.squareTwo[1]}</div>
                    <div className="small-square">{this.state.squareTwo[2]}</div>
                    <div className="small-square">{this.state.squareTwo[3]}</div>
                    <div className="small-square">{this.state.squareTwo[4]}</div>
                    <div className="small-square">{this.state.squareTwo[5]}</div>
                    <div className="small-square">{this.state.squareTwo[6]}</div>
                    <div className="small-square">{this.state.squareTwo[7]}</div>
                    <div className="small-square">{this.state.squareTwo[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareThree[0]}</div>
                    <div className="small-square">{this.state.squareThree[1]}</div>
                    <div className="small-square">{this.state.squareThree[2]}</div>
                    <div className="small-square">{this.state.squareThree[3]}</div>
                    <div className="small-square">{this.state.squareThree[4]}</div>
                    <div className="small-square">{this.state.squareThree[5]}</div>
                    <div className="small-square">{this.state.squareThree[6]}</div>
                    <div className="small-square">{this.state.squareThree[7]}</div>
                    <div className="small-square">{this.state.squareThree[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareFour[0]}</div>
                    <div className="small-square">{this.state.squareFour[1]}</div>
                    <div className="small-square">{this.state.squareFour[2]}</div>
                    <div className="small-square">{this.state.squareFour[3]}</div>
                    <div className="small-square">{this.state.squareFour[4]}</div>
                    <div className="small-square">{this.state.squareFour[5]}</div>
                    <div className="small-square">{this.state.squareFour[6]}</div>
                    <div className="small-square">{this.state.squareFour[7]}</div>
                    <div className="small-square">{this.state.squareFour[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareFive[0]}</div>
                    <div className="small-square">{this.state.squareFive[1]}</div>
                    <div className="small-square">{this.state.squareFive[2]}</div>
                    <div className="small-square">{this.state.squareFive[3]}</div>
                    <div className="small-square">{this.state.squareFive[4]}</div>
                    <div className="small-square">{this.state.squareFive[5]}</div>
                    <div className="small-square">{this.state.squareFive[6]}</div>
                    <div className="small-square">{this.state.squareFive[7]}</div>
                    <div className="small-square">{this.state.squareFive[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareSix[0]}</div>
                    <div className="small-square">{this.state.squareSix[1]}</div>
                    <div className="small-square">{this.state.squareSix[2]}</div>
                    <div className="small-square">{this.state.squareSix[3]}</div>
                    <div className="small-square">{this.state.squareSix[4]}</div>
                    <div className="small-square">{this.state.squareSix[5]}</div>
                    <div className="small-square">{this.state.squareSix[6]}</div>
                    <div className="small-square">{this.state.squareSix[7]}</div>
                    <div className="small-square">{this.state.squareSix[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareSeven[0]}</div>
                    <div className="small-square">{this.state.squareSeven[1]}</div>
                    <div className="small-square">{this.state.squareSeven[2]}</div>
                    <div className="small-square">{this.state.squareSeven[3]}</div>
                    <div className="small-square">{this.state.squareSeven[4]}</div>
                    <div className="small-square">{this.state.squareSeven[5]}</div>
                    <div className="small-square">{this.state.squareSeven[6]}</div>
                    <div className="small-square">{this.state.squareSeven[7]}</div>
                    <div className="small-square">{this.state.squareSeven[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareEight[0]}</div>
                    <div className="small-square">{this.state.squareEight[1]}</div>
                    <div className="small-square">{this.state.squareEight[2]}</div>
                    <div className="small-square">{this.state.squareEight[3]}</div>
                    <div className="small-square">{this.state.squareEight[4]}</div>
                    <div className="small-square">{this.state.squareEight[5]}</div>
                    <div className="small-square">{this.state.squareEight[6]}</div>
                    <div className="small-square">{this.state.squareEight[7]}</div>
                    <div className="small-square">{this.state.squareEight[8]}</div>
                </div>
                <div className="main-square">
                    <div className="small-square">{this.state.squareNine[0]}</div>
                    <div className="small-square">{this.state.squareNine[1]}</div>
                    <div className="small-square">{this.state.squareNine[2]}</div>
                    <div className="small-square">{this.state.squareNine[3]}</div>
                    <div className="small-square">{this.state.squareNine[4]}</div>
                    <div className="small-square">{this.state.squareNine[5]}</div>
                    <div className="small-square">{this.state.squareNine[6]}</div>
                    <div className="small-square">{this.state.squareNine[7]}</div>
                    <div className="small-square">{this.state.squareNine[8]}</div>
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