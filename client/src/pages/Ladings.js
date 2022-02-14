import React from 'react'

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Ladings() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          I'm baby heirloom knausgaard pug blue bottle paleo bushwick flexitarian 
          jean shorts irony jianbing lomo tattooed activated charcoal chambray 
          post-ironic. Butcher poutine cornhole migas
          </p>
        </div>
        <Link to='/register' className='btn btn-hero'>
            Login/Register
        </Link>
      </div>
      <img src={main} alt='job hunt' className='img main-img'/>
    </Wrapper>
  )
}

export default Ladings