import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt,faGlobeAmericas,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Navbars from "./Navbar"
import Header from "./Header"
import ProductList from "./Product-list"
import Footer from "./Footer"
 class Home extends React.Component{
     render(){
         return(
             <div className="products">
             <div className="start">
             <div className="head-icons">
             <FontAwesomeIcon style={{marginRight:"8px"}}icon={faPhoneAlt} />
             <span className="border-right">9874-563-210</span>
             <FontAwesomeIcon className="usa" icon={faGlobeAmericas} />
             <span style={{marginRight:"10px"}}>Eng</span>
             <FontAwesomeIcon className="chev" icon={faChevronDown}/>
             </div>
             </div>
             <div className="head-navbar">
                 <Navbars/>
             </div>
             <div className="header"><Header/> </div>
             <div className="border-bottom"></div>
             <div className="product-image">
                 <ProductList/>
             </div>
             <div className="footer"><Footer/></div>
             </div>
           
         )
     }
 }
 export default Home;