import React from 'react'
import styled from 'styled-components';
import {ResultData} from '../assets/data/resultData'
import { useSearchParams, useNavigate } from 'react-router-dom';
import HomeButton from './component/homeButton';
import { Link } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData, setResultData] = React.useState({});

    React.useEffect(() => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    }, [mbti])

    return (
        <Wrapper>
            <Header>Your Matching Cat is</Header>
            <Contents>
                <LogoImage>
                    <img src={resultData.image} className='rounded-circle'></img>
                </LogoImage>
                <Desc>{resultData.name}</Desc>
                <CatDescription>{resultData.desc}</CatDescription>
                <Link to={'/'}> 
                     <HomeButton label='Try Again!'/>
                </Link>
           </Contents>
        </Wrapper>
    )
}

export default Result;

const Wrapper = styled.div`
   padding-top: 50px;
   height: 100vh;
   width: 100%;
   background-image: url('/ResultBackground.png');  // 수정
   background-size: cover;
   background-position: center;
`;

const Header = styled.div `
    font-family: Permanent Marker;
    font-size: 20pt;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 12pt;
`;

const Contents = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  img {
    border-radius: 50%;  // 이미지를 동그랗게 만드는 스타일
    width: 200px;  // 이미지의 가로 크기
    height: 200px;  // 이미지의 세로 크기
    object-fit: cover;  // 이미지가 div에 꽉 차도록 조절
  }
`;

const Desc = styled.div`
     font-size: 20pt;
     margin-top: 20px;
     color: white;
     font-family: Permanent Marker;
`

const CatDescription = styled.div `
     font-size: 13.5pt;
     margin-top: 20px;
     text-align: center;
     color: white;
     font-family: 'Lexend', sans-serif;
`