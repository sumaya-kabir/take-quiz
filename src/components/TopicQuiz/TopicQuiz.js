import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicQuiz = () => {
    const topicQuizes = useLoaderData();
    const quizes = topicQuizes.data.questions;
    
    const [countCorrect, setCountCorrect] = useState(0)
    const [countWrong, setCountWrong] = useState(0);
    
    return (
        <div className='md:grid grid-cols-3'>
            <div className='text-center col-span-2'>
            <h2 className='text-3xl font-bold'>Quiz of {topicQuizes.data.name}</h2>
            {
                quizes.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                countWrong={countWrong}
                setCountWrong={setCountWrong}
                countCorrect={countCorrect}
                setCountCorrect={setCountCorrect}
                count
                ></Quiz>)
            }
        </div>

        <div className='m-5 h-96 text-center bg-red-400 text-white font-medium p-12 mt-32 mr-5 rounded-xl'>
            <h2 className='text-2xl pb-5'>Quiz Result</h2>
            <p>Correct Answer: {countCorrect}</p>
            <p>Wrong Answer: {countWrong}</p>
        </div>
        </div>
    );
};

export default TopicQuiz;