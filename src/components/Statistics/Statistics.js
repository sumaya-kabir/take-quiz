import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    
    return (
        <div>
          <h2 className='text-2xl font-bold text-center mb-20'>This chart is showing total questions number of each topic</h2>
          <div className='flex justify-center items-center'>
            <LineChart width={600} height={300} data={data.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis dataKey="total"/>
              <Tooltip />
            </LineChart>
      ;
        </div>
        </div>
    );
};

export default Statistics;