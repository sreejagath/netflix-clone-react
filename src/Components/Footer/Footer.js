import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-class'>
             <section class="link">
      <div class="logos">
        <a href="#"><i class="fab fa-facebook-square fa-2x"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
        <a><i class="fab fa-youtube fa-2x"></i></a>
      </div>
      <div class="sub-links">
        <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </section>
    <br></br>
    <div className="footer-sec">
    <footer>
      <p> <span class="copyright">&copy;</span> 1997-2018 Netflix, Inc.</p>
      <p>Carlos Avila <span class="copyright">&copy;</span> 2018</p>
    </footer>
    </div>
        </div>
    )
}

export default Footer
