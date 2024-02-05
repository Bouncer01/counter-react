import React from 'react'

function Team() {
    const data = [
             {photo: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg', name: 'Walter White', job:'Web Development', description: 'Magni qui quod omnis unde et eos fuga et exercitationem.'},
            {photo: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg', name:'Sarah Jhinson', job: 'Marketing', description: 'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.'},
            {photo: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg', name:'William Anderson', job: 'Content', description: 'Voluptas necessitatibus occaecati quia.'},
            ];

            return (
                 <div>
                       {data.map((bouncer) => {
                          return (
                              <div key={data.id}>
                                 <div class="card" style={{ width: '18rem'}}>
                                 <img src={bouncer.photo} class="d-block w-100" alt="..." height={400}/>
                                         <div class="card-body">
                                            <h5>{bouncer.name}</h5>
                                            <h6>{bouncer.job }</h6>
                                             <p>{bouncer.description}</p>
                                        </div>
                                </div>
                                <img src={item.photo} alt='' width={200} height={200}/>
                                <h5>{item.name}</h5>
                              </div>
                          );
                      })}
                 </div>
                 );
                 }

export default Team