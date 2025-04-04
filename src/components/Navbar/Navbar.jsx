import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav' >
      <div className='nav-logo'>EV-olutions</div>
      <div className='nav-links'>
        <a href="#">HOME</a>
        <a href="#">EXPLORE</a>
        <a href="#">ABOUT</a>
        <a href="#" className='nav-contact'>CONTACT</a>
      </div>
    </div>
  )
}
