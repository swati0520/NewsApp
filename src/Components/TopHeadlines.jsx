import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopHeadlines = () => {
 
    const [Allnews, setAllnews] = useState([]);

    console.log(Allnews);
    
   async function  getAllNews (){
      let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b150f4aea9a1408b81b155836de537b1')
  
    //   console.log(res.data.articles);
      setAllnews(res.data.articles)
      
    }
    useEffect(()=>{
  getAllNews()
    },[])
    return (
        <div>
            {
                Allnews.map((news)=>{
                    return news.urlToImage &&  <Link to = {news.url} className='border flex flex-col justify-between py-0 px-2 border-spacing-1 border-black lg:col-span-3 md:col-4 sm:col-6 col-span-12'>
                    <img src={news.urlToImage} alt="" />
                    <h1 className='font-bold my-1'>Title: {news.title}</h1>
                   <h1 className='font-bold my-2'>{news.title}</h1>
                    <button className='my-1 text-black bg-orange-200 hover:bg-slate-500 rounded-md'>View Full News</button>
                    
                    
                    </Link>
                            })
            }

        </div>
    )
}

export default TopHeadlines
