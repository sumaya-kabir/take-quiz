import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCards from '../TopicCards/TopicCards';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-5xl mb-10'>All Topics Are Here</h2>
            <div className='md:grid grid-cols-4'>
            {
                topics.data.map(topic => <TopicCards
                key={topic.id}
                topic= {topic}
                ></TopicCards>)
            }
            </div>
        </div>
    );
};

export default Topics;