import React from 'react';
import NewsContent from './NewsContent';
import NewsCard from "./NewsCard";


function NewsCreator(x){
    return(<NewsCard link = {x.link} heading={x.heading} content={x.news}/>)
}

function News(){
    return(
        <div>
            <div>
                {NewsContent.map(NewsCreator)}
            </div>
        </div>
    );
}

export default News;