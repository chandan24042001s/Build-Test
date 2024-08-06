import React from 'react'

const Home = () => {
    const data=[
      {image:'../download.jpeg'},
      {image:'../images.jpeg'},
      {image:'../images1.jpeg'},
      {image:'../cow.jpeg'},
      {image:'../cow2.jpeg'}
    ]
    
      return (
        <div className="m-6 p-3 rounded-xl flex flex-row gap-6 ">
        {data.map((item)=>(
          <div className='shadow-lg'>
          <img
            className="h-[160px] w-72 rounded-2xl"
            src={item.image}
            alt="dwonload_image"
          />
          <h2 className="font-bold text-lg"> Animal Name: Cow</h2>
          <h4 className="text-sm">Species: Rare </h4>
          <div className="bg-LightGreen h-8 rounded-lg w-14 mt-2 text-Secondry flex justify-center items-center text-sm">
            <i class="fa-solid fa-star p-1"></i>
            Found: Tamil Naidu
          </div>
  
          
        </div>
        ))}
        
          </div>
      );
}

export default Home