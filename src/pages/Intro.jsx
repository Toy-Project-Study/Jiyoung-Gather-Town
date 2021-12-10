import React from 'react';
import Styled from 'styled-components';

import { character1, character2 } from '../assets/index';
function Intro() {
  return (
    <SRoot>
      <SContainer>
        <SProfile>
          <img src={character1} alt="" />
          <img src={character2} alt="" />
        </SProfile>
        <SContent>
          <p>Name your character</p>
          <p>Pick a name for your character – don’t worry, you’ll be able to customize it after!</p>
          <input type="text" placeholder="   Enter your name" />
          <button>Back</button>
          <button>Finish</button>
        </SContent>
      </SContainer>
    </SRoot>
  );
}

export default Intro;

const SRoot = Styled.div`
  background-color: ${({ theme: { colors } }) => colors.navy1};
  height: 940px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SContainer = Styled.div`
  width: 436px;
  height: 580px;
  border-radius: 32px;
  background-color: ${({ theme: { colors } }) => colors.navy1};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
`;
const SProfile = Styled.section`
  height: 240px;
  border-radius: 32px 32px 0 0;
  background-color: ${({ theme: { colors } }) => colors.navy2};
  display: flex;
  justify-content: space-around;
  & > img {
    width: 70px;
    height: 120px;
    margin-top: 50px;
  }
`;
const SContent = Styled.section`
  width: 372px;
  height: 264px;
  position: absolute;
  left: 50%;
  top: 72%;
  transform: translate(-50%, -50%);
  & > p {
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.blue};
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 20px;
  }
  & > p:first-child {
    font-size: 18px;
    color: white;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
  }
  & > input {
    width: 380px;
    height: 40px;
    border-radius: 16px;
    border: 2px solid ${({ theme: { colors } }) => colors.blue};
    margin-bottom: 50px;
    font-weight: 700;
    color: white;
  }
  & > button {
    width: 71px;
    height: 48px;
    border-radius: 16px;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.navy1};
    background-color: ${({ theme: { colors } }) => colors.green};
  }

  & > button:nth-of-type(1) {
    color: white;
    background-color: ${({ theme: { colors } }) => colors.navy2};
    margin-left: 100px;
    margin-right: 20px;
  }
`;
