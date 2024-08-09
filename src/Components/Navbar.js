import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="image-wrapper">
        <img
          className="navbar-img"
          src="https://naru-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.ed8ec4bc.png&w=256&q=75"
        />
      </div>
      <div className="navbar-burger">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="Navbar_navbur__gkiaQ"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
