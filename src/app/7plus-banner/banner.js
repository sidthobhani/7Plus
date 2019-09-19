import React, { Component } from 'react';
import styled from 'styled-components'
import bannerImg from '../../assets/tile.jpg';
import logo from '../../assets/logo.png';

const ImageWrapper = styled.div`
    margin: 0 auto;
    width: 630px;
    max-height: 355px;
    position: relative;
`;

const BannerImg = styled.img`
    width: auto;
    height: auto;
    background-repeat: no-repeat;
    content: url(${bannerImg});
`;

const ImageOverlay = styled.div`
    width: 630px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    position: absolute;
`;

const LogoImg = styled.img`
    width: auto;
    max-height: 100px;
    background-repeat: no-repeat;
    content: url(${logo});
    padding: 10px;
`;

const Title = styled.span`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    padding-left: 10px;
    vertical-align: middle;
`;

class Banner extends Component {
    
    constructor(props) {
        super(props);   
    }
    
    render() {
        return (
            <ImageWrapper>               
                <BannerImg className="img-fluid"></BannerImg>
                <ImageOverlay>
                    <LogoImg></LogoImg>
                    <Title>Home and Away</Title>
                </ImageOverlay>
            </ImageWrapper>
        )
    }
}

export default Banner