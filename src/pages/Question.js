import React from 'react'
import styled from 'styled-components'
import { QuestionData } from '../assets/data/questionsData'
import { createSearchParams, useNavigate} from 'react-router-dom'
import CustomButton from './component/styleButton'

//<ProgressBarClass striped now={(questionNo / QuestionData.length) * 100}/>
const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore] = React.useState([
        {id: "EI", score: 0},
        {id: "SN", score: 0},
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ])

    const navigate = useNavigate();

    const handleClickButton = (no, type) => {
        const newScore = totalScore.map((s) =>
           s.id === type ? {id: s.id, score: s.score + no} : s
        );

        setTotalScore(newScore);
        if(QuestionData.length !== questionNo + 1) {
            setQuestionNo(questionNo + 1);
        } else {
            const mbti = newScore.reduce (
                (acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0,1): curr.id.substring(1,2)),
                ""           
            );
            
            navigate({
                pathname: "/result",
                search: `?${createSearchParams ({
                    mbti: mbti,
                })}`
            });
        }

        if (type === "EI") {
            const addScore = totalScore[0].score + no;
            const newObject = { id: "EI", score: addScore};
            totalScore.splice(0, 1, newObject);
        } else if (type === "SN") {
            const addScore = totalScore[1].score + no;
            const newObject = { id: "SN", score: addScore};
            totalScore.splice(1, 1, newObject);
        } else if (type === "TF") {
            const addScore = totalScore[2].score + no;
            const newObject = { id: "TF", score: addScore};
            totalScore.splice(2, 1, newObject);
        } else if (type === "JP") {
            const addScore = totalScore[3].score + no;
            const newObject = { id: "JP", score: addScore};
            totalScore.splice(3, 1, newObject);
        }
        setQuestionNo(questionNo + 1);
      }

      return (
        <div>
          <Wrapper className='wrapper'>
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
              <CustomButton onClick={() => handleClickButton(1, QuestionData[questionNo].type)}>
                {QuestionData[questionNo].answera}
              </CustomButton>
              <CustomButton onClick={() => handleClickButton(0, QuestionData[questionNo].type)} marginLeft>
                {QuestionData[questionNo].answerb}
              </CustomButton>
            </ButtonGroup>
          </Wrapper>
        </div>
      );
};

export default Question;

const Wrapper = styled.div `
    height: 100vh;
    width: 100%;
    padding-top: 35px;
    background-image: url('/QuestionBackground.png');
    background-size: cover;
    background-position: center;
`

const Title = styled.div`
    font-size: 18pt;
    width: 85%;
    height: 100px;
    margin: 0 auto;
    font-family: 'Bebas Neue', sans-serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: transparent;
    margin-top: 30pt;
    padding-top: 13pt;
    padding-bottom: 10pt;
    padding-left: 20pt;
    padding-right: 20pt;
    border-radius: 10px;
    border: 3px solid white;
`;

const ButtonGroup = styled.div` 
    display: flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin-top: 30pt;
    margin-bottom: 50pt;
    
`