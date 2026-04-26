// sns계정 로그인 텍스트 + 구글 + 카카오 묶음
import styled from "styled-components"
import googleIcon from "../assets/google.png"
import kakaoIcon from "../assets/kakao.png"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`

const SnsText = styled.p`
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.50);
`

const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const IconButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: white;
  cursor: pointer;
`
const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #E2E8F0;
`

const SnsLogin = () => {
  return (
    <Wrapper>
      <Divider>
        <Line />
          <SnsText>SNS 계정으로 로그인</SnsText>
        <Line />
      </Divider>
      <BtnWrapper>
        <IconButton><img src={googleIcon} width="44" /></IconButton>
        <IconButton><img src={kakaoIcon} width="44" /></IconButton>
      </BtnWrapper>
    </Wrapper>
  )
}

export default SnsLogin