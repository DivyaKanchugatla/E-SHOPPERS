import React,{useState} from 'react';
import Login from '../components/LoginPage/Login';



const Home = () => {

  const [loginmodal, setLoginModal] = useState(false);
  const modalClose =(info)=>{
    setLoginModal(info)
  }
  return (
    <div>
       <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
   
   <div>{loginmodal && <Login modalClose={modalClose} />}</div>
    </div>
  )
}

export default Home