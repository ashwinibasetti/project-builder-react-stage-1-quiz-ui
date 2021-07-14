import React, { Component } from 'react'
import './ResultComponent.css';

export default class ResultComponent extends Component {
    render() {
        return (
            <div>
                <h1>Result</h1>
                <div className="score-container">
                    <p className="heading">You need more practice!</p>
                    <p className="score">Your Score: 20%</p>
                    <div className="score-details">
                        <p>Total number of questions</p>
                        <p>15</p>
                    </div>
                    <div className="score-details">
                        <p>Number of attempted questions</p>
                        <p>9</p>
                    </div>
                    <div className="score-details">
                        <p>Number of Correct Answers</p>
                        <p>3</p>
                    </div>
                    <div className="score-details">
                        <p>Number of Wrong Answers</p>
                        <p>6</p>
                    </div>

                </div>
                <div className="pb-btn">
                    <button className="play-btn">Play Again</button>
                    <button className="home-btn">Back to Home</button>
                </div>
                
            </div>
        )
    }
}
