import React from 'react'
import JustArrived from '../components/JustArrived/JustArrived';
import Subscriber from '../components/Subscriber/Subscriber';
import Trandy from '../components/Trandy/Trandy';


const Home = () => {
  return (
    <div>
        <Trandy />
        <Subscriber />
        <JustArrived />
    </div>
  )
}

export default Home;