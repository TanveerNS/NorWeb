import React from 'react';  
import {Container,Row,Col,Image,Button} from 'react-bootstrap';

function Services() {

    const Service = ({language,description,image}) => {
        return(
            <>
                <Container className="top-der btm-der">
                
                    <Row className="justify-content-xs-center">
                        <Col md={8}>
                            <h1>{language}</h1>
                            <p className="t-justify">{description}</p>
                            <Button className="top-der-half btm-der-half" variant="dark">More Details..</Button>
                        </Col>
                        <Col>
                            <Image src={image} fluid rounded className="top-der btm-der"/>
                        </Col>
                    </Row>
                </Container>
            </>
    )}
    const serviceList = [
        {
            title:"Service One",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et',
            image:'./images/our-image1.jpg'
        },
        {
            title:"Service Two",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et',
            image:"./images/our-image2.jpg"
        },
        {
            title:"Service Three",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et',
            image:'./images/our-image3.jpg'
        },
        {
            title:"Service 4",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et',
            image:"./images/our-image2.jpg"
        }
    ]

        
    return (
        <>  
            <div className="class">                
                <Service language={serviceList[0].title} description={serviceList[0].description} image={serviceList[0].image} />
                <Service language={serviceList[1].title} description={serviceList[1].description} image={serviceList[1].image} />
                <Service language={serviceList[2].title} description={serviceList[2].description} image={serviceList[2].image} />
                <Service language={serviceList[3].title} description={serviceList[3].description} image={serviceList[3].image} />
            </div>
        </>
    )
}



export default Services

