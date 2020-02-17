import React from 'react'

export default function footer() {
   return (
      <div>
         <footer className="footer">
            <ul className="footer-nav">
               <li>
                  <a
                     className="footer-links"
                     target="_blank"
                     // href="https://resant18.github.io/portfolio/"
                     href="https://angel.co/renata-santoso"
                  >
                     <img src={window.social["angellist"]}></img>
                  </a>
               </li>
               <li>
                  <a
                     className="footer-links"
                     target="_blank"
                     href="https://github.com/resant18"
                  >
                     <img src={window.social["github"]}></img>
                  </a>
               </li>
               <li>
                  <a
                     className="footer-links"
                     target="_blank"
                     href="https://www.linkedin.com/in/renata-santoso/"
                  >
                     <img src={window.social["linkedin"]}></img>
                  </a>
               </li>               
            </ul>
         </footer>
      </div>
   );
}


