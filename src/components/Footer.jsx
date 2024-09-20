import {Link} from "react-router-dom";
const Footer = ()=>{
  return(
    <footer>
    <div className="footer_container">
        <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/shoes">Shoes</Link>
            <Link to="/beauty">Beauty</Link>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/shoes">Shoes</Link>
            <Link to="/beauty">Beauty</Link>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/shoes">Shoes</Link>
            <Link to="/beauty">Beauty</Link>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
        </div>
    </div>
    <hr/>

    <div className="copyright">
        © 2024 www.myntra.com. All rights reserved.
    </div>
</footer>
  )
}

export default Footer;