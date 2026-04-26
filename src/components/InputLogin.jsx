// 로그인 아이디, 비밀번호 입력창
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%; 
`

 const Label = styled.label`
    font-family: 'Paperlogy';
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: #272727;
    align-self: flex-start;
    margin-left: 5px; 
    
    `

const Input = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 10px;
  border: 1px solid #00000026;
  background: #FFF;
  padding: 0 10px;
  font-family: 'Paperlogy';
  outline: none;

  &:focus {
    border-color: #53B175;
}   
`

const InputLogin = ({ label, placeholder, type, value, onChange }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default InputLogin