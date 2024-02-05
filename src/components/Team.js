import React from 'react'

function Team() {
    const data = [
             {photo: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg', name: 'Walter White', job:'Web Development', description: 'Magni qui quod omnis unde et eos fuga et exercitationem.'},
            {photo: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg', name:'Sarah Jhinson', job: 'Marketing', description: 'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.'},
            {photo: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg', name:'William Anderson', job: 'Content', description: 'Voluptas necessitatibus occaecati quia.'},
            ];

            return (
                 <div className='container mt-5'>
                    <div className='row'>
                        {
                            data.map((item)=>{
                                return(
                                    <div className='col-md-4'>
                                        <div className="card" style={{ width: '18rem'}}>
                                        <img src={item.photo} alt="..."className="card-img-top" width={500} height={400}/>
                                         <div className="card-body">
                                            <h3>{item.name}</h3>
                                            <h6>{item.job }</h6>
                                            <p>{item.description}</p>
                                        </div>
                                </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                 </div>
                 );
                 }

export default Team