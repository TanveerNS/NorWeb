import React from 'react'
import {Container,Row,Col, Image} from 'react-bootstrap';

function Footer() {
    const Logo = () => {
        return(
            <>
            <h1>NorWeb</h1>
            <ul className="footer-log">
                <li><Image src="/images/linkedin.png" /></li>
                <li><Image src="/images/mail.png" /></li>
                <li><Image src="/images/fb.png" /></li>
                <li><Image src="/images/tw.png" /></li>
            </ul>
            </>
        )
    }
    const quickli = [
        'Game','Software','About','Testimonial','Contact'
    ]
    const downloadli = [
        'Age of Ultron','Need for speed','game of throne','Gta','abstract'
    ]
    
    const FotList = (names) =>{
        console.log(names.names[0])
        return(
            <>
            <li>{names.names[0]}</li>
            <li>{names.names[1]}</li>
            <li>{names.names[2]}</li>
            <li>{names.names[3]}</li>
            <li>{names.names[4]}</li>
            </>
        )
    }

    return (
        <>
            <Container >
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <h1 className="t-center"> Newsletter </h1>
                        <div className="newsletterwrapper">
                            <input className="newslatterInput" placeholder="Enter Your Email" type="text" name="Enter Your Email" />
                            <button className="submitbtn">Subscribe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row className="justify-content-xs-center">
                    <Col md={4}>
                        <Logo />
                    </Col>
                    <Col md={4}>
                        <FotList names={quickli} />
                    </Col>
                    <Col md={4}>
                        <FotList names={downloadli} />
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container className="top-der btm-der">
                <p className="t-center">© 2021 All Rights Reserved. NorWeb</p>
            </Container>
        </>
    )
}


export default Footer

