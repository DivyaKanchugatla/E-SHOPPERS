import React from 'react';
import './Subscriber.css';

const Subscriber = () => {
  return (
    <>
      <div style={{backgroundColor: '#edf7fe', height:'70vh'}}>
        <div className="container-fluid  my-3">
          <div className="row justify-content-lg-center py-3 px-xl-3">
            <div className="col-md-6 col-12 py-3">
              <div className="text-center mb-2 pb-2">
                <div className="product-container">
                  <h1 className="deco">
                    <span className="description">Stay Updated</span>
                  </h1>
                </div>
                <p>
                  Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                  diam labore at justo ipsum eirmod duo labore labore.
                </p>
              </div>
              <form className='mb-3'>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-3"
                    placeholder="Email Goes Here"
                  />
                  <div className="input-group-append">
                    <button className="input-button px-5">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscriber;