import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    
    return (
        <div>
        <LineChart width={600} height={300} data={data.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total"/>
        </LineChart>
      ;
        </div>
    );
};

export default Statistics;