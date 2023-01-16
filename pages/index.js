
import { useState } from "react";

import  Header  from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { FilterForm } from "../components/FilterForm";


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
    const apiKey = '109f03afaddf6f94afd50d8945d2c275';
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=us&limit=100`)
    const primaryData = await response.json();
    const arrayOfNews = primaryData.data
    

    
    return {
        props: {
            news: arrayOfNews,
            
        }
        }
    }
