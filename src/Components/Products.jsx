import React from 'react'
import { assets, projectsData } from '../assets/assets'

const Products = () => {
  return (
  <div>
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('./product_banner.jpg')"}} id='Header'>
           <div className='container flex-col justify-center items-center'>
           <h2 className='text-6xl text-center text-white font-bold'>All Products</h2>
           <p className='text-center block py-2 text-white font-thin'>Raha Shoes Quality Prduct and Low Price</p>
           </div>
     </div>
    <div className='grid grid-cols-1 md:grid-cols-4'>
  {projectsData
   // Qaado 4-ta ugu dambeysa ee liiska
    .map((project, index) => {
      return (
        <div key={index} className="shadow-md bg-[#f5f9fb] mx-10 px-10 py-10 my-5">
          <img src={project.image} alt="" />
          <h2 className='text-gray-400'>--{project.Category}---</h2>
          <h2 className='text-xl font-bold'>{project.title}</h2>
          <h2 className='text-xl'>{project.price}</h2>
          <button className='bg-[#00618E] rounded-full py-1 px-3 text-white mt-4'>Buy Now</button>
        </div>
      );
    })}
</div>

  </div>
  )
}

export default Products