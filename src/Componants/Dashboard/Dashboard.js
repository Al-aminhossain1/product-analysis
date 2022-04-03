import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    const data01 = [
        { month: 'Mar', sell: 241 },
        { month: 'Apr', sell: 423 },
        { month: 'May', sell: 726 },
        { month: 'Jun', sell: 529 },
    ];
    const data02 = [
        { month: 'Jan', sell: 100 },
        { month: 'Feb', sell: 300 },
        { month: 'Mar', sell: 100 },
        { month: 'Apr', sell: 80 },
        { month: 'May', sell: 40 },
        { month: 'Jun', sell: 30 },
        { month: 'Jul', sell: 50 },
        { month: 'Aug', sell: 100 },
        { month: 'Sep', sell: 200 },
        { month: 'Act', sell: 150 },
        { month: 'Dec', sell: 50 }
    ];
    return (
        <div className='dashboard'>

            <div>
                <LineChart width={600} height={400} data={data}>
                    <Line dataKey={'revenue'} > </Line>
                    <Line dataKey={'sell'} > </Line>
                    <Line dataKey={'investment'} > </Line>

                    <XAxis dataKey={'month'} ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
                <h4>Line Chart</h4>
            </div>

            <div className='pie-chart'>
                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
                <h4>Pie Chart</h4>
            </div>

        </div>

    );
};

export default Dashboard;