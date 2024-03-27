import React from 'react';
import './Quiz.css'
export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: 'تعداد حلقه های المپیک؟',
                    answerOptions: [
                        { answerText: '7', isCorrect: false },
                        { answerText: '6', isCorrect: false },
                        { answerText: '5', isCorrect: true },
                        { answerText: '8', isCorrect: false },
                    ],
                },
                {
                    questionText: 'کدام درخت نماد صلح است؟',
                    answerOptions: [
                        { answerText: 'سرو', isCorrect: false },
                        { answerText: 'زیتون', isCorrect: true },
                        { answerText: 'سیب', isCorrect: false },
                        { answerText: 'نارنج', isCorrect: false },
                    ],
                },
                {
                    questionText: 'جنگ صد ساله چند سال طول کشید؟',
                    answerOptions: [
                        { answerText: '116سال', isCorrect: true },
                        { answerText: '97سال', isCorrect: false },
                        { answerText: '100سال', isCorrect: false },
                        { answerText: '121سال', isCorrect: false },
                    ],
                },
                {
                    questionText: ' به کدام یک عروس کوه های ایران می گویند؟',
                    answerOptions: [
                        { answerText: 'دنا', isCorrect: false },
                        { answerText: 'سهند', isCorrect: true },
                        { answerText: 'سبلان', isCorrect: false },
                        { answerText: 'دماوند', isCorrect: false },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0,
            minetue : 5,
            second : 59
        }

    }

    clickHandler(isCorrect) {
        if (isCorrect) {
            this.setState((prevstate) => {
                return { score: prevstate.score + 1 }
            })
        }
        if (this.state.currentQuestion < 3) {
            this.setState((prevstate) => {
                return { currentQuestion: prevstate.currentQuestion + 1 }
            })
        } else {
            this.setState({
                showScore: true
            })
        }
    }

    render() {
        return (
                <div className='app'>
                    {/* next div is for showing user score */}
                    {this.state.showScore ? (
                        <div className='score-section'>
                            امتیاز شما {this.state.score} از {this.state.questions.length} میباشد
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>سوال {this.state.questions.length}</span>/ {this.state.currentQuestion + 1}
                                </div>
                                <div className='question-text'> {this.state.questions[this.state.currentQuestion].questionText}  </div>
                            </div>
                            <div className='answer-section'>
                                {
                                    this.state.questions[this.state.currentQuestion].answerOptions.map((user) => (
                                        <button onClick={this.clickHandler.bind(this, user.isCorrect)} key={user.answerText}>{user.answerText}</button>
                                        // console.log(user);
                                    ))
                                }
                            </div>
                        </>

                    )}
                </div>
        )
    }
}
