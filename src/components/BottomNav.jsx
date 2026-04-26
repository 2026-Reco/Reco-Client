// src/components/BottomNav.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 이미지 import 경로를 확인해서 옮겨오세요
import HomeIcon from "../assets/img/varhome.svg";
import LocationIcon from "../assets/img/varlocation.svg";
import ActivityIcon from "../assets/img/varactivity.svg";
import ProfileIcon from "../assets/img/varprofile.svg";
import CameraIcon from "../assets/img/varcamera.svg";

// --- 스타일 (기존 코드 유지) ---
const BottomNav = styled.div`
  position: fixed; /* 절대위치보다는 화면 하단 고정 */
  bottom: 0;
  width: 393px;
  height: 88px;
  background: #fff;
  box-shadow: 0px -1px 8.3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px 20px 0 0;
  z-index: 100;
`;

const NavItem = styled.div`
  display: flex; 
  flex-direction: 
  column; align-items: center; 
  gap: 4px;
  font-family: Paperlogy; 
  font-size: 10px; 
  cursor: pointer;
`;

const NavIcon = styled.img` 
width: 24px; 
height: 24px; 
object-fit: contain; `;

const CameraWrapper = styled.div`
  width: 60px; 
  height: 60px; 
  background: #53b175; 
  border-radius: 50%;
  margin-top: -10px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(83, 177, 117, 0.3);
`;

const StyledCameraIcon = styled.img` width: 32px; height: 32px; object-fit: contain; `;

// --- 컴포넌트 ---
const BottomNavComponent = () => {
  const navigate = useNavigate();
  return (
    <BottomNav>
      <NavItem onClick={() => navigate('/')}><NavIcon src={HomeIcon} />Home</NavItem>
      <NavItem onClick={() => navigate('/')}><NavIcon src={LocationIcon} />Location</NavItem>
      <CameraWrapper>
        <StyledCameraIcon src={CameraIcon} alt="Camera" />
      </CameraWrapper>
      <NavItem onClick={() => navigate('/')}><NavIcon src={ActivityIcon} />Activity</NavItem>
      <NavItem onClick={() => navigate('/')}><NavIcon src={ProfileIcon} />Profile</NavItem>
    </BottomNav>
  );
};
export default BottomNavComponent;