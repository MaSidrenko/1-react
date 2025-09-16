import React, { useState } from "react";
import './Quiz.css'

const Quiz = () => {
    const questions = [
        {
            question: 'Что такое CIL/IL-код в .NET',
            options: ['Низкоуровневый код виртуальной машины .NET', 'Язык Программирования', 'Библиотека классов'],
            answer: 'Низкоуровневый код виртуальной машины .NET'
        },
        {
            question: 'Что такое CLR в .NET?',
            options: ['Исполняющая среда для байт кода CIL', 'Assembler в C#', 'Отдельный Язык Программирования'],
            answer: 'Исполняющая среда для байт кода CIL'
        },
        {
            question: 'Какие основные возможности у CLR в .NET?',
            options: ['Управление памятью, безопасность и встроенная поддержка нереляционных БД', 'Управление памятью, безопасность и кроссплатформенная компиляция', 'Управление памятью, загрузка сбокрок, безопасность, обработка исключений'],
            answer: 'Управление памятью, загрузка сбокрок, безопасность, обработка исключений'
        },
        {
            question: 'Для чего нужен JIT в .NET?',
            options: ['Преобразовывает код на .NET совместимых языках, прямо в exe-файл', 'Преобразовывает IL-код в машинные команды', 'Возможность использовать динамическую типизацию'],
            answer: 'Преобразовывает IL-код в машинные команды'
        },
        {
            question: 'Что дает простраво имен System?',
            options: ['Все базовые типы, исползуемые в приложениях', 'Типы для ввод-вывода, обхода дерева катлогов и файлов', 'Типы асинхронных операций'],
            answer: 'Все базовые типы, исползуемые в приложениях'
        }
    ];

    const [CurrentQuestion, setCurrentQustion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, answer]);

        if (CurrentQuestion + 1 < questions.length) {
            setCurrentQustion(CurrentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };
    const restartQuiz = () => {
        setCurrentQustion(0);
        setUserAnswers([]);
        setUserAnswers([]);
        setShowResult(false);
    }
    return (
        <div className="quiz-main">
            {
                showResult ? (
                    <div>
                        <h2>Result: </h2>
                        <ul>
                            {questions.map((question, index) => (
                                <li key={index}>
                                    {question.question} - {question.answer} - {' '}
                                    {userAnswers[index] === question.answer ? 'Correct' : 'Incorrect'}
                                </li>
                            ))}
                        </ul>
                        <button onClick={restartQuiz}>Restart</button>
                    </div>
                ) : (
                    <div>
                        <h2>Question {CurrentQuestion + 1}</h2>
                        <p>{questions[CurrentQuestion].question}</p>
                        <ul className="questions">
                            {questions[CurrentQuestion].options.map((option, index) => (
                                <li className="question" key={index} onClick={() => handleAnswer(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default Quiz;