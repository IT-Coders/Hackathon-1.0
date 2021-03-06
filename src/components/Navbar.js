import { Link } from 'react-router-dom';
import '../css/Navbar.css'


// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');

//   burger.addEventListener('click', () => {
//       nav.classList.toggle("nav-active");

//       navLinks.forEach((link, index) => {
//           if(link.style.animation) {
//               link.style.animation = '';
//           }
//           else {
//               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//           }
//       });

//       burger.classList.toggle('toggle');
//   });
// }

const Navbar = () => {
  return (
    <nav>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Feedback</a></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <div class="burger">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
      </div>
    </nav>
    
  );
};

export default Navbar;