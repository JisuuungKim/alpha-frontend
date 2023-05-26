import styled from 'styled-components';

const BigButton = styled.button`
  padding: 79px 12px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 120px;
  text-align: center;
  color: #ffffff;
`;

const SmallButton = styled.button`
  padding: 46px 79px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 82px;
  text-align: center;
  color: #ffffff;
`;

const GoBackHomeButton = styled.button`
  display: flex;
  gap: 20px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 22px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export function SeniorBigButton({ children, onClick }) {
  return <BigButton onClick={onClick}>{children}</BigButton>;
}

export function SeniorSmallButton({ children, onClick }) {
  return <SmallButton onClick={onClick}>{children}</SmallButton>;
}

export function SeniorGoToHomeButton({ children, onClick }) {
  return (
    <GoBackHomeButton onClick={onClick}>
      {
        <>
          <img
            src={process.env.PUBLIC_URL + '/Images/Main/LeftArrow.svg'}
            alt="left arrow"
          />
          처음부터 다시 주문하기
        </>
      }
    </GoBackHomeButton>
  );
}
