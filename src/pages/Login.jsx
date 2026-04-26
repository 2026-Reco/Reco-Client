    import InputLogin from "../components/InputLogin.jsx";
    import SnsLogin from "../components/SnsLogin.jsx";
    import { useState } from "react"
    import styled from "styled-components"
    import { Link } from "react-router-dom"

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px 24px;
    gap: 16px;
    
    color: #272727;
    font-family: 'Paperlogy';
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin-top: 130px;
    `
    const SubTitle = styled.p`
    margin-bottom: 5px;  /* ← 숫자 조절하면서 맞춰봐요 */
    text-align: left;
    /*//  padding: 40px 30px; */
    `

    const Title = styled.p`
    font-family: 'Paperlogy';
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
    color: #272727;
    margin-bottom: 30px;
    text-align: left;
    `

    const GreenText = styled.span`
    color: #53B175;
    `
    

    const Button = styled.button`
    width: 100%;
    height: 54px;
    border-radius: 10px;
    background: #53B175;
    border: none;
    color: white;   
    font-family: 'Paperlogy';
    font-size: 16px;
    cursor: pointer;
    margin-top: 25px;
    border-radius: 10px;
    
    `
    const LoginText = styled.p`
    font-family: 'Paperlogy';
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.80);
    text-align: center;
    text-align: left;
    
    `

    const LoginLink = styled.span`
    font-family: 'Paperlogy';
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(100, 178, 148, 0.80);
    cursor: pointer;
    `

    const SignUp = () => {
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    return (
        <Container>
        <div>
            <SubTitle>다시 만나서 반갑습니다!</SubTitle>
            <Title>3초만에 <GreenText>로그인</GreenText> 완료하기</Title>
        </div>

        <InputLogin
            label="아이디"
            placeholder="아이디를 입력하시오"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
        />
        <InputLogin
            label="비밀번호"
            placeholder="비밀번호를 입력하시오"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <Button>로그인</Button>
        <LoginText>
            아직 회원이 아니신가요? <Link to="/signup"><LoginLink>회원가입</LoginLink></Link>
        </LoginText>
        <SnsLogin />
        </Container>
    )
    }

    export default SignUp