import React from 'react'
import Container from './Container'
import Card from './Card'
import dhaka from '../image/dhaka.jpg'
import chittagong from '../image/chittagong.jpg'
import rangpur from '../image/rangpur.jpg'
import sylhet from '../image/sylhet.jpg'
import barishal from '../image/barishal.jpg'
import khulna from '../image/khulna.webp'
import rajshahi from '../image/rajshahi.jpg'
import mymensingh from '../image/mymensingh.jpg'
import bazar from '../image/bazar.jpg'

const Division = () => {
  return (
    <div className='py-20'>
        <Container>
            <div className="w-full bg-gray-50 rounded-xl shadow-md">
                <h2 className='text-4xl font-bold py-3 flex justify-center border-b-[0.5px] border-b-white '>Division </h2>
                <div className="py-4">
                <div className="py-12">
                  <div className="flex justify-around py-12">
                  <Card src={dhaka} alt={dhaka} title={"Dhaka"}/>

                  <Card title={"Chittagong"} src={chittagong} alt={chittagong}/>

                  <Card title={"Rangpur"} src={rangpur} alt={rangpur}/>
                  </div>
                  <div className="flex justify-around py-12">
                  <Card title={"Sylhet"} src={sylhet} alt={sylhet}/>

                  <Card title={"Barishal"} src={barishal} alt={barishal}/>
                  
                  <Card title={"Khulna"} src={khulna} alt={khulna}/>
                  </div>
                  <div className="flex justify-around">
                  <Card title={"Rajshahi"} src={rajshahi} alt={rajshahi}/>
                  <Card title={"Mymensingh"} src={mymensingh} alt={mymensingh}/>
                  <Card title={"cox's bazar"} src={bazar} alt={bazar}/>
                  </div>

                </div>
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default Division