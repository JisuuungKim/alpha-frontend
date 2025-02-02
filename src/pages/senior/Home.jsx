import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeniorBigButton } from '../../components/Button/SeniorButton';

import WaitingCameraModal from '../../components/Menu/Modal/WaitingCameraModal';

const Container = styled.div`
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBlock = styled.img`
  margin-bottom: 34px;
  width: 200px;
  height: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: 53px;
`;

const ErrorSpan = styled.span`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 45px;
  color: #e93e18;
`;

export default function SeniorMain() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <LogoBlock
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + '/Images/Main/Logo.svg'}
      />
      <ButtonContainer>
        <SeniorBigButton
          onClick={() => {
            navigate('/seniorSelectBurgerOrSide');
          }}
        >
          매장 식사하기
        </SeniorBigButton>
        <SeniorBigButton
          onClick={() => {
            navigate('/seniorSelectBurgerOrSide');
          }}
        >
          포장하기
        </SeniorBigButton>
      </ButtonContainer>
      <ErrorSpan>일부 메뉴 선택에 제한이 있을 수 있습니다</ErrorSpan>
    </Container>
  );
}
