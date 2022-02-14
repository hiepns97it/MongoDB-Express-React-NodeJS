import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

function Ladings() {
  return (
    <main>
      <nav>
        <img src={logo} alt='job' className="logo"/>
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
        <button className='btn btn-hero'>
          Login/Register
        </button>
      </div>
      <img src={main} alt='job hunt' className='img main-img'/>
    </main>
  )
}

export default Ladings