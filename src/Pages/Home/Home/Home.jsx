import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const AllNews = useLoaderData()
    return (
        <div>
            <h2>This is home component{AllNews.length}</h2>
            {
                AllNews.map(news=><NewsSummaryCard key={news._id} news={news}/>)
            }
        </div>
    );
};

export default Home;