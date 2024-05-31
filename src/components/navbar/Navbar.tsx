import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>AdminHub</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icons" />
        <img src="/app.svg" alt="" className="icons" />
        <img src="/expand.svg" alt="" className="icons" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://www.imgacademy.com/sites/default/files/img-academy-boarding-school-worlds-most-dedicated.jpg" alt="" />
          <span>Mukul</span>
        </div>
        <img src="/settings.svg" alt="" className="icons" />
      </div>
    </div>
  )
}

export default Navbar
