import React from "react"
import "./Header.css"
import {  Row, Col,Label,Dropdown,DropdownToggle,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faShoppingCart,faGlobeAmericas,faSearch} from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
  return(
      <>
      <Row className="no-gutters">
          <Col className="profile" lg="6">
              <span className="info">Hi <b>Roger Andrews</b></span>
              <br></br>
              <span className="desc">neque porro quisquam est qui dolorem ipsum...</span>
          </Col>
          <Col lg="6" className="icons">
          <div className="language">
                  <FontAwesomeIcon className="flag" icon={faGlobeAmericas}/>
              </div>
              <div className="calender">
                  <FontAwesomeIcon icon={faCalendarAlt}/>
              </div>
              
              <div className="cart">
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
          </Col>
      </Row>
      <Row className="no-gutters searchbar">
      <FontAwesomeIcon icon={faSearch}/>
      <span className="search"><b>Search</b></span>
      </Row>
      <Row className="no-gutters inputs">
      <Col lg={4}>
          <Label>PRODUCT CATEGORIES</Label>
          <Dropdown >
      <DropdownToggle caret>
      <b>
        Choose Category
        </b>
        </DropdownToggle>
        </Dropdown>
      </Col>
      <Col lg={4}>
          <Label>SEARCH BY PRODUCT</Label>
          <Input type="text" id="input-product" placeholder="Enter Product Name" />
      </Col>
      <Col lg={4}>
      <div className="dome">
          <Label>DOME</Label>
   
          <Dropdown className="set-width" >
      <DropdownToggle className="dropdowns" caret>
      <b>
        Select Dome
        </b>
        </DropdownToggle>
        </Dropdown>
        </div>
      </Col>
      </Row>
      </>
  )  
}
export default Header;