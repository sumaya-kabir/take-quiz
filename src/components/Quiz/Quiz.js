import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = ({quiz, countWrong, setCountWrong, countCorrect, setCountCorrect}) => {
    const correctNotify = () => toast("Yeah, You Choose The Correct Answer!");
    const wrongNotify = () => toast("Sorry, You Choose The Wrong Answer!");


    const handleClickAnswer = (ans) => {
        if(ans === quiz.correctAnswer){
            correctNotify();
            setCountCorrect(countCorrect + 1);
        } else {
            
            wrongNotify();
            setCountWrong(countWrong + 1);
        }
    }

    
    const showCorrectAnswer = (answer) => {
        
     alert(`The correct answer is "${answer}"`)
        
    }

    return (
        <div>
            <div className='border-2 bg-red-100 border-red-400 p-16 m-24 rounded-xl'>
                <h4 className='text-xl font-medium pb-5'>Quiz{}:{quiz.question}</h4>

                <FontAwesomeIcon onClick={() => showCorrectAnswer(quiz.correctAnswer)} className='text-xl text-red-600' icon={faEye} />
            
                <div className='grid grid-cols-1'>
                        <button 
                        onClick={() => handleClickAnswer(quiz.options[0])}
                        className='hover:bg-white text-lg font-bold text-red-400 border-2 border-red-400 rounded-xl px-5 py-3 my-3 lg:mx-40'>
                        {quiz.options[0]}
                        </button>
                        
                        <button 
                        onClick={() => handleClickAnswer(quiz.options[1])}
                        className='hover:bg-white text-lg font-bold text-red-400 border-2 border-red-400 rounded-xl px-5 py-3 my-3 lg:mx-40'>
                        {quiz.options[1]}
                        </button>

                        <button
                        onClick={() => handleClickAnswer(quiz.options[2])}
                        className='hover:bg-white text-lg font-bold text-red-400 border-2 border-red-400 rounded-xl px-5 py-3 my-3 lg:mx-40'>
                        {quiz.options[2]}
                        </button>

                        <button 
                        onClick={() => handleClickAnswer(quiz.options[3])}
                        className='hover:bg-white text-lg font-bold text-red-400 border-2 border-red-400 rounded-xl px-5 py-3 my-3 lg:mx-40'>
                        {quiz.options[3]}
                        </button>
                        <ToastContainer />
                </div>
            </div>
        </div>
    );
};



export default Quiz;