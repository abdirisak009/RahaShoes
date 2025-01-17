import React from 'react'
import { assets, projectsData } from '../assets/assets'
import { Link } from 'react-router-dom';
const TrandingProducts = () => {
  return (
   
    <div >
        <div className='container my-5 mx-5 py-6 px-6 flex justify-center items-center'>
      <h2 className='text-5xl font-bold text-[#00618E]'>Tranding <span className='text-5xl font-thin'>Products</span></h2>
    </div >
   
    <div className='grid grid-cols-1 md:grid-cols-4'>
  {projectsData
    .slice(-4) // Qaado 4-ta ugu dambeysa ee liiska
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


    <div className='container flex justify-center align-items-center py-5'>
        <Link to='/viewall' className='border border-spacing-2 border-black rounded-full px-5 py-3 hover:bg-[#00618E] hover:text-white'>View All Products</Link>
    </div>
   </div>
   
    
  )
}

export default TrandingProducts