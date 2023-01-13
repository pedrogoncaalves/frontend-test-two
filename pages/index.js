
import { useState } from "react";

import  Header  from "../components/Header";



export default function Home ({ news }) {

    
    return(
        <>
        <Header/>
        <ul>
            {news.map((n) => (
                <li key={n}>{n}
                {n.author}
                </li>
            ))}
        </ul>

        </>
    )
}

export const getServerSideProps = async () => {
    const apiKey = '109f03afaddf6f94afd50d8945d2c275';
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}`)
    const primaryData = await response.json();
    const arrayOfNews = primaryData.data
    

    const newsTitle = arrayOfNews.map((news) => news.title);

    return {
        props: {
            news: newsTitle
        }
        }
    }
