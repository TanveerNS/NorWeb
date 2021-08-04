import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

import Home from './Home';
import Blog  from "./Blog";
import About  from "./About";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav>
                    <span style={{fontSize:'22px',}}>NorWeb</span>
                    <NavMenu>
                        <Link to="/">
                            <img src="/images/home-icon.svg" />
                            <span>HOME</span> 
                        </Link>
                        <Link to="/blog">
                            <img src="/images/watchlist-icon.svg" />
                            <span>BLOG</span>
                        </Link>
                        <Link to="/about">
                            <img src="/images/original-icon.svg" />
                            <span>ABOUT</span>
                        </Link>
                        <Link to="/contact">
                            <img src="/images/movie-icon.svg" />
                            <span>CONTACT</span>
                        </Link>
                    </NavMenu>
                    <UserImg src="/images/group-icon.png" />
                </Nav>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
                
            </BrowserRouter>
        )
    }
}

export default Main;


const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    flex: 1;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        img {
            height: 20px;
        }

        span {
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after {
                background: white;
                content: "";
                height: 2px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
