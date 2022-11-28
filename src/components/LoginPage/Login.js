import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <section className='sect'>
     {/* logincontainer */}
     <div className='login-container'>
            {/* form */}
            <div className='form-container'>
              <form action='' className=''>
                <input type={"email"} name={"email"} placeholder="Username or email"/>
                <input type={"password"} name={"password"} placeholder="Password"/>

              </form>
            

            </div>

      <div className='image-container'>
       <img className='image' 
       src='https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png' alt=''/>
      </div>
    
     </div>

    </section>
  )
}

export default Login
