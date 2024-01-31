

import { Link } from "react-router-dom"







const NavBar =()=>{
    const link={
        textDecoration:"none",color:"red"

    }
    const listStyle={
        margin:7
    }

return( 
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item"  style={listStyle} >
        <Link to="/" style={link}>home</Link>
      </li>
     <li className="nav-item"    style={listStyle}>
     <Link to="/product" style={link}>products</Link>
      </li>
      <li className="nav-item"   style={listStyle}>
      <Link to="/settings" style={link}>settings</Link>
      </li>
      <li className="nav-item"     style={listStyle} >
      <Link to="/about" style={link}>About</Link>
      </li>
    </ul>
  </div>
</nav>





 
)
}
export default NavBar