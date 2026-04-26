import styled from "styled-components"
import bium from "../assets/loading.gif"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #fdfbfd;
  position: relative; 
`

const Image = styled.img`
  width: 280px;
  margin-bottom: 10px;
`

const Title = styled.p`
  font-family: 'Paperlogy';
  font-size: 20px;
  font-weight: 500;
  color: #272727;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
`

const SubTitle = styled.p`
  font-family: 'Paperlogy';
  font-size: 13px;
  color: #5D5D5D;
  text-align: center;
  line-height: 1.5;
`
const BackButton = styled.button`
   background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;  /* ← 변경 */
  top: 20px;           /* ← 상단에 고정 */
  left: 24px;
`

const Loading = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
            <Image src={bium} alt="비움 캐릭터" />
            <Title>비움이가 분리배출 방법을 찾고있어요</Title>
            <SubTitle>
                ai 비움이가 분리배출 방법을 찾고있어요<br />
                앱을 종료하지 마시고 잠깐만 기다려 주세요
            </SubTitle>
        </Container>
    )
}

export default Loading