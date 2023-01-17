
import { useState } from "react";

import  Header  from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { FilterForm } from "../components/FilterForm";
import { apiKey, renderNews } from "../services/config";

export default function Home ({ news }) {

    const [filter, setFilter] = useState('')
    
    const filteredNews = news.filter((n) => n.title.includes(filter))
    console.log(filteredNews)
    console.log(filter)

    return(
        <>
        <Header/>

        <FilterForm type="text" value={filter}
        onChange={(event) => setFilter(event.target.value)}/>
        
        <div className="container">
            <main className="main__content">
        <ul>
            {filteredNews.map((n) =>   (
                <li key={n}>
                    <span className="news__title">{n.category.toUpperCase()}</span>
                    
                    <br/>
                   <Link href={n.url}>
                   {n.image && <Image src={`https://res.cloudinary.com/demo/image/fetch/${n.image}`} alt="news image" width={300} height={160}/>}

                     {n.title}</Link>

                </li>
            ))}
        </ul>
        </main>
        </div>

        </>
    )
}
export const getServerSideProps = async () => {
    const response = await renderNews(apiKey, 'br')
    const primaryData = await response.json();
    const arrayOfNews = primaryData.data
    

    const newsTitle = arrayOfNews.filter((news) => news.category == 'technology');
    const newsImage = arrayOfNews.map((news) => news.image);
  

    return {
        props: {
            news: newsTitle,
            image: newsImage
        }
        }
    }
