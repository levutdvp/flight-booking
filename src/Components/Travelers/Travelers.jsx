import React, {useEffect} from 'react'


import dubai from '../../assets/dubai.png'
import paris from '../../assets/paris.jpg'
import newyork from '../../assets/newyork.jpg'
import london from '../../assets/london.jpg'
import traveler1 from '../../assets/user(1).jpg'
import traveler2 from '../../assets/user(2).jpg'
import traveler3 from '../../assets/user(3).jpg'
import traveler4 from '../../assets/user(4).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
const travelers = [
  {
    id:1,
    destinationImage: paris, 
    travelerImage: traveler1,
    travelerName:'VuTech',
    socialLink:'@tech'
  },

  {
    id:2,
    destinationImage: newyork, 
    travelerImage: traveler2,
    travelerName:'Wilson Lindsey',
    socialLink:'@wilsonlindsey'
  },

  {
    id:3,
    destinationImage: dubai, 
    travelerImage: traveler3,
    travelerName:'Nicola',
    socialLink:'@nicola'
  },

  {
    id:4,
    destinationImage: london, 
    travelerImage: traveler4,
    travelerName:'Naresh Lamer',
    socialLink:'@nareshlamer'
  }
]

const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <div className='travelers container section'>

      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>

        <div className="travelersContainer grid">

          
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
              return(
                  <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">

                      <img src={destinationImage} className='destinationImage' />
                      <div className="travelerDetails">

                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers