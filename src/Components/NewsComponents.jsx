import React from 'react'
import { Link } from 'react-router-dom'

const NewsComponents = (props) => {
  return (
    <div>
       <div className='grid grid-cols-12 gap-5 bg-white '> 
   {  
       props.Allnews.map((news)=>{
return news.urlToImage &&  <div className='border flex flex-col justify-between py-0 px-2 border-spacing-1 border-black lg:col-span-3 md:col-4 sm:col-6 col-span-12'>
<img src={news.urlToImage} alt="" />
<h1 className='font-bold my-1'>Title: {news.title}</h1>
<h1 className='my-1'>Author:<small>{news.author}</small></h1>
<h1 className='my-1'>published: <span>{news.publishedAt}</span></h1>
<Link to = {news.url} className='my-1 text-black bg-lime-100 hover:bg-slate-300 rounded-md text-center'>View Full News</Link>


</div>
        })
      }
   </div>
    </div>
  )
}

export default NewsComponents
