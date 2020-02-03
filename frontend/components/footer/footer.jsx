import React from 'react'

export default function footer() {
   return (
      <div>
         <footer className='footer'>
            <nav className='footer-nav'>
               <a className='footer-links'
                  target='_blank'
                  href='https://resant18.github.io/portfolio/'>
                  <img src={window.personal_logo}></img>
               </a>
               <a className='footer-links'
                  target='_blank'
                  href='https://github.com/resant18'>
                  <img src={window.personal_logo}></img>
               </a>
               <a className='footer-links'
                  target='_blank'
                  href='https://www.linkedin.com/in/renata-santoso/'>
                  <img src={window.personal_logo}></img>
               </a>
            </nav>
         </footer>
      </div>
   )
}


