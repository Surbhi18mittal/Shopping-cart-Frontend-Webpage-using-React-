import React from "react";
import {Row,Col,Button} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
const Footer=()=>{
    return(
        <>
    <Row className="no-gutters"  >
        <Col lg="6" className="add-cart">
            <div className="circle"><span>3</span></div> 
            <span className="text">Products Added</span>
        </Col>
        <Col lg="6">
        <Button className="view-cart">View Cart</Button>
        </Col>
        </Row>
        <Row className="no-gutters end">
        <Col lg="6">
        <div  className="copyright">
        <FontAwesomeIcon icon={faCopyright} style={{marginRight:"5px"}}/>
         <span>2020 DirectlyItaly.Inc</span>
         </div>
         </Col>
         <Col className="terms" lg="6">
         <div className="align">
             <span>Privacy</span>
             <span>Accessibility</span>
             <span>Terms</span>
             </div>
         </Col>
        </Row>
    </>
    )
}
export default Footer