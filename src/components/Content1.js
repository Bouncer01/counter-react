import React from 'react'
import Photo1 from "./images/photo1.jpg";

function Content1() {
    const product = [
        {
            id: 1,
            name: 'Milo',
            price: '#50',
            image: 'https://media.istockphoto.com/id/536051709/photo/red-car.jpg?s=612x612&w=0&k=20&c=Zq-kN1bUdT-MV3AES5BBHJFaAXCeomyAtM3mnrXxSRI='
        },
        {
            id: 2,
            name: 'Milo',
            price: '#80',
            image: 'https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_1280.png'
        },
        {
            id: 3,
            name: 'Milo',
            price: '#80',
            image: 'https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_1280.png'
        },
    ];

  return (
    <div>
        {product.map(bouncer => {
            return (
               <div class="container">
      <div class="row">
          <div class="col-md-3 col-12 col-sm-4">
            <div key={product.id}>
              <h1>{bouncer.price}</h1>
              <h1>{bouncer.name}</h1>
              <img src={bouncer.image} alt="" width={100} height = {100} />
           </div>
          </div>
          <div class="col-md-3 col-12 col-sm-4">
            <div key={product.id}>
              <h1>{bouncer.price}</h1>
              <h1>{bouncer.name}</h1>
              <img src={bouncer.image} alt="" width={100} height = {100} />
           </div>
          </div>
          <div class="col-md-3 col-12 col-sm-4">
            <div key={product.id}>
              <h1>{bouncer.price}</h1>
              <h1>{bouncer.name}</h1>
              <img src={bouncer.image} alt="" width={100} height = {100} />
           </div>
          </div>
      </div>
   </div>
            );
        })}
    </div>
  );
}

export default Content1