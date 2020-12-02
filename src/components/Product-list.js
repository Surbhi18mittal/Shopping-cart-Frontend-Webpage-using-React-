import React from "react";
import {Row,Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import Product from "./images/product.jpg"
import "./ProductList.css"
class ProductList extends React.Component{
    state={
        images:["one","two","three","four","five","six","seven","eight"],
    
    }

    render(){
        const {images}=this.state;
        const productList= images.length?(images.map(image=>{
            return(
                <Col lg={3} sm={3} md={3} sx={3} className="down" key={image} >
                  <div className="pro">
                      <img className="product-img" src={Product} alt={image} width="140px" height="155px"></img>
                      <div className="check">
                          <FontAwesomeIcon icon={faCheckCircle}/>
                      </div>
                  </div>
                </Col>
    
            )
        })):(<p>There are no images</p>)
    return(
 <>
  <Row className="no-gutters"> 
  <span className="virtual-heading">
 Virtual Shop
    </span>
    </Row>
    <Row className="no-gutters">
    <p className="virtual-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standart dummy text ever since the 1500's, when an unknown printer took a gallery of type and scrambled it to make a type of specimen book.</p>
    </Row>
    
  <Row className="all" >
  {productList}
  </Row>
  </>
)
    }
    
}
export default ProductList