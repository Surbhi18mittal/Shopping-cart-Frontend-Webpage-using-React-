import {React} from "react";
import "./Navbar.css"
import logo from "./images/logo.jpg"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink,Button } from 'reactstrap';
  const Navbars=()=>{
      
      return(
        <Navbar  >
        <NavbarBrand href="#"><img className="logo "src={logo}></img></NavbarBrand>
       
          <Nav className="justify-content-end">
            <NavItem><NavLink href="#"><b className="border-right">Pricing</b></NavLink></NavItem>
          <NavItem>  <NavLink href="#"><b className="border-right">Blogs</b></NavLink> </NavItem>
          <NavItem>  <NavLink href="#"><b className="border-right">Support</b></NavLink> </NavItem>
          <NavItem>  <NavLink href="#"><b>About Us</b></NavLink> </NavItem>
         
          <NavItem><Button className="register" style={{marginRight: "10px"}}><b>Register</b></Button></NavItem>
            <NavItem><Button className="login">Login</Button></NavItem>
            </Nav>
         
   
      </Navbar>
      )
      }
  
  export default Navbars;