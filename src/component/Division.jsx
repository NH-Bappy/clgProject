import React from 'react'
import Container from './Container'
import Card from './Card'

const Division = () => {
  return (
    <div className='py-20'>
        <Container>
            <div className="w-full bg-gray-50 rounded-xl shadow-md">
                <h2 className='text-4xl font-bold py-3 flex justify-center border-b-[0.5px] border-b-white '>Division </h2>
                <div className="py-4">
                <div className="py-12">
                  <div className="flex justify-around py-12">
                  <Card/>
                  <Card/>
                  <Card/>
                  </div>
                  <div className="flex justify-around py-12">
                  <Card/>
                  <Card/>
                  <Card/>
                  </div>
                  <div className="flex justify-around">
                  <Card/>
                  <Card/>
                  </div>

                </div>
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default Division