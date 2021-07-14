import React, { Component } from 'react'
import './QuizComponent.css';

export default class QuizComponent extends Component {
    render() {
        return (
            <div>
               <div className="quiz-container">
                   <h1>Question</h1>
                   <p>Which is the only mammal that can't jump?</p>
                   <div className="ans-btn">
                       <button>Dog</button>
                       <button>Goat</button>
                       <button>Elephant</button>
                       <button>Lion</button>
                   </div>
                   <div className="pnq-btns">
                       <button className="prev-btn">Previous</button>
                       <button className="next-btn">Next</button>
                       <button className="quit-btn">Quit</button>
                   </div>
               </div>
            </div>
        )
    }
}
