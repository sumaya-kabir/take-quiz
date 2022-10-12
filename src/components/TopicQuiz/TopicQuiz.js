import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicQuiz = () => {
    const topicQuizes = useLoaderData();
    const quizes = topicQuizes.data.questions;
    console.log(topicQuizes)
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold'>Quiz of {topicQuizes.data.name}</h2>
            {
                quizes.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default TopicQuiz;