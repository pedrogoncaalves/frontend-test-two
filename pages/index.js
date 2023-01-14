
import { useState } from "react";

import  Header  from "../components/Header";
import Image from "next/image";


export default function Home ({ news }) {

    
    return(
        <>
        <Header/>
        <div className="container">
        <ul>
            {news.map((n) => (
                <li key={n}>
                    <Image width="100" height="50" alt="news image" src={n.image}/>
                    {n.title}
                
                </li>
            ))}
        </ul>
        </div>

        </>
    )
}

export const getServerSideProps = async () => {
    const apiKey = '109f03afaddf6f94afd50d8945d2c275';
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=br`)
    const primaryData = await response.json();
    const arrayOfNews = primaryData.data
    

    const newsTitle = arrayOfNews.map((news) => news);
    const newsImage = arrayOfNews.map((news) => news.image);
  //  console.log(newsImage)

 

    return {
        props: {
            news: newsTitle,
            image: newsImage
        }
        }
    }
