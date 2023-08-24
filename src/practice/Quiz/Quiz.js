import React from "react"
import "./Quiz.css"

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    }

    console.log()
  }

  selectHandler(isCorrect) {
    if (isCorrect) {
      this.setState((prevStatus) => {
        return { score: prevStatus.score + 1 }
      })
    }
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState((prevStatus) => {
        return { currentQuestion: prevStatus.currentQuestion + 1 }
      })
    } else {
      this.setState({
        showScore: true,
      })
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.showScore && (
          <div className="score-section">You scored {this.state.score} out of {this.state.questions.length}</div>
        )}

        {!this.state.showScore && (
          <div className="question-section">
            <div className="question-count">
              <span>Question {this.state.currentQuestion + 1}</span>/{" "}
              {this.state.questions.length}
            </div>
            <div className="question-text">
              {this.state.questions[this.state.currentQuestion].questionText}
            </div>
          </div>
        )}
        {!this.state.showScore && (
          <div className="answer-section">
            {this.state.questions[this.state.currentQuestion].answerOptions.map(
              (option) => (
                <div>
                  <button onClick={() => this.selectHandler(option.isCorrect)}>
                    {option.answerText}
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </div>
    )
  }
}
