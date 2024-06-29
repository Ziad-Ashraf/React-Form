import "./Navbar.scss"

interface IProps {
  companyName : string,
  aboutTxt: string,
  isLoggedIn: boolean,
  setLoginState : (value:boolean) =>void
}
const Navbar = ({companyName, aboutTxt, isLoggedIn, setLoginState}: IProps) => {

    return (
        <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{companyName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{aboutTxt}</a>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => {
            setLoginState(!isLoggedIn)
          }}>{isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Display</a></li>
            <li><a className="dropdown-item" href="#">Pricing</a></li>
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;
