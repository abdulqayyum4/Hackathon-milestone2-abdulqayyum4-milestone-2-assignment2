import React from 'react'


const Bikes =() =>{

    const bikesData = [
        {id: 1, name: 'Kawasaki ninja z1000', price: 15900, description: 'Unmatched Power', image: 'about2.jpg'},
        {id: 2, name: 'Kawasaki ninja zx10r', price: 18799, description: 'Speed Thrills', image: '/zx10r.jpg'},
        {id: 3, name: 'Kawasaki ninja zx14r', price: 1970000, description: 'Precision Engineering', image: '/zx14r.jpg'},
        {id: 4, name: 'Yamaha r1', price: 14939, description: 'Ultimate Ride', image: 'yamahar1.jpg'},
        {id: 5, name: 'Ducati Panigale V4', price: 21995, description: 'Speed Dominance', image: 'ducati.jpg'},
        {id: 6, name: 'BMWs1000rr', price: 17895, description: 'Track Titan', image: 'bmws1000rr.jpg'}
    ]



  return (
    <div className='bikes grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {bikesData.map(bike => (
            <div key={bike.id} className='bike-card bg-white p-5 rounded-md shadow-md text-center'>
                <img src={bike.image} alt={bike.name} className='w-full rounded-md transition-transform duration-300 hover:scale-110' />
                <h3 className='mt-4 text-2xl font-bold'>{bike.name}</h3>
                <p className='text-gray-500'>{bike.description}</p>
                <div className='price text-blue-500 text-xl font-semibold mt-2'>${bike.price}</div>
                <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add to cart</button>
            </div>
        ))}

    </div>
  )
}

export default Bikes
