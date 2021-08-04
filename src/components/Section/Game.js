import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'

function Game() {
    return (
        <>
        <Container className="top-der btm-der">
            
            <Row className="justify-content-xs-center">
                <h1 className="t-center top-der btm-der">About Our Game</h1>
                
                <Col>
                    <div>
                        <Image style={{width:'100%'}} alt="product one" src="./images/about.jpg" fluid rounded/>
                        <p className="top-der btm-der t-center" >consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et  dolore <br/> magna aliqua. Ut enim conseq consectetur adipiscing elit, 
                         sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim conseq</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Game;

