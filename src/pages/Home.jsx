import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import NewsComponents from '../Components/NewsComponents';
import TopHeadlines from '../Components/TopHeadlines';
import SearchContext from '../context/SearchContext';

const Home = () => {
  let ctx = useContext(SearchContext)
  console.log(ctx.search);
  

  const [Allnews, setAllnews] = useState([]);

  console.log(Allnews);
  
 async function  getAllNews (){
    let res = await axios.get(`https://newsapi.org/v2/everything?q=${ctx.search ? ctx.search : 'world'}&apiKey=b150f4aea9a1408b81b155836de537b1`)



    // console.log(res.data.articles);
    setAllnews(res.data.articles)
    
  }
  useEffect(()=>{
getAllNews()
  },[ctx.search])



  

  return (
    <div className='px-5 grid grid-cols-12 gap-3 '>
      {/* <h1>This is home page</h1> */}
 <div className=' px-5 sm:col-span-9 col-span-12'>
 <NewsComponents Allnews={Allnews} />
 </div>
 <div className=' x-4 col-span-3 md:w-auto w-[250px] sm:block hidden relative overflow-hidden'>
  <h1 className='absolute top-0 left-0 bg-green-100 z-10 w-full p-3 text-center font-bold'>Top Headline</h1>
  <div className='topHeadlines absolute'>  
  <TopHeadlines/>
  </div>
 </div>     
    </div>
  )
}

export default Home
