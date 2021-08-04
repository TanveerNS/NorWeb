import React from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'

function Products() {
    const products = [
        {
            title:"Software",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
    ];
    
    return (
        <>  
            <Container className="top-der btm-der">
                
                <Row className="justify-content-xs-center">
                    <h1 className="t-center top-der btm-der">{products[0].title}</h1>
                    
                    <Col>
                        <div>
                            <Image style={{width:'100%'}} alt="product one" src="./images/our-image2.jpg" fluid rounded/>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="class">
                            <p>{products[0].description}</p>
                            <Button>More Details..</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
                
        </>
    )
}



export default Products

