import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const handleClickButton = () => {
        navigate('./Question')
    }
    return (
        <Wrapper className='wrapper'>
            <Header className='header'>
                TIME TO FIND YOUR MATCHING<br/>CAT AND MBTI!
            </Header>
            <Contents className='content'>
                <Description className='description'>
                    This website is for MBTI personality test.<br/>
                    There will be 16 questions to answer to<br/>
                    find your matching personality. Result will<br/>
                    be shown with your personality and <br/>
                    description. Then, there will be specific cat<br/> 
                    spieces that fits your personality. Hope this<br/> 
                    is enjoyable and you can have good time. Go find your cat!<br/> 
                </Description>
                <StyledButton onClick={handleClickButton} className='button'>Let's Start Test!</StyledButton>
           </Contents>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('/HomeBackground.png');
    background-size: cover;
    background-position: center;
`;

const Header = styled.div `
    font-family: Permanent Marker;
    font-size: 25pt;
    padding-top: 45pt;
    color: white;
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Description = styled.div `
    font-size: 16.5px;
    margin-top: 20pt;
    margin-bottom: 40pt;
    margin-left: 20px;
    margin-right: 20px;
    color: white;
    font-family: 'Lexend', sans-serif;
`;

const LogoImage = styled.div `
    margin-top: 10px;

`
const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
`

const StyledButton = styled(Button) `
    &.btn {
        background-color: #FF7E00;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 20pt;
        width: 215px;
        height: 70px;
    
        &:hover {
            background-color: red;
        }
    }

`