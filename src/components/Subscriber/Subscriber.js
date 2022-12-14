import React from 'react';
import './Subscriber.css';

const Subscriber = () => {
  return (
    <>
      <div class="container-fluid my-5 subscriber-container" style={{backgroundColor: '#edf7fe'}}>
        <div class="row justify-content-md-center py-5 px-xl-5">
            <div class="col-md-6 col-12 py-5">
                <div class="text-center mb-2 pb-2">
                    <h2 class="section-title px-5 mb-3">
                      <span class="px-2">Stay Updated</span></h2>
                    <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                </div>
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control border-white p-4" placeholder="Email Goes Here" fdprocessedid="l3wz9"/>
                        <div class="input-group-append">
                            <button class="btn px-4" style={{backgroundColor: "#ac0d1c77"}} fdprocessedid="q0fsq">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscriber;