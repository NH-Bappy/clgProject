import React from 'react'
import Container from './Container'

const About = () => {
  return (
    <div className='py-10'>
      <Container>
        <div className="py-8">
          <h2 className='text-3xl font-bold py-1.5'>Bangladesh</h2>
        <p className='w-90 text-base border-b-2 font-sans text-emerald-600 font-medium border-rose-700'>Experiential journeys will make you a storyteller</p>
        </div>

        <div className="w-full bg-green-50 py-4 ">
        <h2 className='text-xl font-bold py-2'>About Bangladesh</h2>
        <p className='text-sm font-sans text-gray-700'>Bangladesh is divided into 64 districts, each rich in culture, history, and natural beauty. The capital, Dhaka, is a bustling hub of politics, commerce, and education. Chattogram (formerly Chittagong), the second-largest city, is a major seaport and commercial center. Sylhet, known for its tea gardens and natural landscapes, is a gateway to the northeastern hills. Rajshahi is famous for mangoes, silk, and its vibrant academic environment. Khulna, near the Sundarbans, is an important industrial area. Barisal, with its riverine beauty, is known for rice and guava production. Rangpur and Mymensingh are agricultural heartlands, while districts like Cox’s Bazar and Bandarban in the southeast are famous for their scenic beaches and tribal heritage. Each district contributes uniquely to the nation’s economy, culture, and identity, reflecting the diversity and resilience of Bangladesh.</p>
      </div>
      </Container>
    </div>
  )
}

export default About