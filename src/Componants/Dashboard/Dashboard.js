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
        { month: 'Mar', revenue: 10402 },
        { month: 'Apr', revenue: 24500 },
        { month: 'May', revenue: 67010 },
        { month: 'Jun', revenue: 40405 },
    ];
    const data02 = [
        { month: 'Jan', revenue: 10401 },
        { month: 'Feb', revenue: 24500 },
        { month: 'Mar', revenue: 67010 },
        { month: 'Apr', revenue: 40405 },
        { month: 'May', revenue: 50900 },
        { month: 'Jun', revenue: 61000 },
        { month: 'Jul', revenue: 50055 },
        { month: 'Aug', revenue: 54546 },

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
                    <Pie data={data01} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
                <h4>Pie Chart</h4>
            </div>

        </div>

    );
};

export default Dashboard;