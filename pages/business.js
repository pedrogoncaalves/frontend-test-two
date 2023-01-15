import { useState } from "react";

import  Header  from "../components/Header";
import Image from "next/image";
import Link from "next/link";


export default function Business ({ news }) {

    
    return(
        <>
        <Header/>
        <div className="container">
            <main className="main__content">
        <ul>
            {news.map((n) =>   (
                <li key={n}>
                    <span>{n.category.toUpperCase()}</span>
                    <br/>
                   <Link href={n.url}> {n.title}</Link>

                    
                
                </li>
            ))}
        </ul>
        </main>
        </div>

        </>
    )
}

export const getServerSideProps = async () => {
    const apiKey = '109f03afaddf6f94afd50d8945d2c275';
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=us`)
    const primaryData = await response.json();
    const arrayOfNews = primaryData.data
    

    const newsTitle = arrayOfNews.filter((news) => news.category == 'business');
    const newsImage = arrayOfNews.map((news) => news.image);
  

 

    return {
        props: {
            news: newsTitle,
            image: newsImage
        }
        }
    }
