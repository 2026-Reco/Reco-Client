import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CommonLayout } from "../components/CommonLayout";

// 이미지 파일 import
import Bium from "../assets/img/Bium.svg";
import EarthIcon from "../assets/img/earth30.svg";
import PaperIcon from "../assets/img/paperIcon.svg";
import PlasticIcon from "../assets/img/plasticIcon.svg";
import GlassIcon from "../assets/img/glassIcon.svg";
import FtIcon from "../assets/img/ftIcon.svg";
import CanIcon from "../assets/img/canIcon.svg";
import TrashIcon from "../assets/img/trashIcon.svg";

import HomeIcon from "../assets/img/varhomeOn.svg?url";
import LocationIcon from "../assets/img/varlocation.svg";
import ActivityIcon from "../assets/img/varactivity.svg";
import ProfileIcon from "../assets/img/varprofile.svg";
import CameraIcon from "../assets/img/varcamera.svg";
import MainMapImg from "../assets/img/mainmap.svg";
import SearchIconImg from "../assets/img/search.svg";

/* ===== Styled Components ===== */
const Main = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  margin: 0 auto;
  background: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
`;

const TitleGreen = styled.div`
  position: absolute;
  left: 25px;
  top: 90px;
  width: 154px;
  font-family: Paperlogy;
  font-weight: 600;
  font-size: 28px;
  line-height: 20px;
  color: #53b175;
  text-align: left;
`;

const TitleBlack = styled.div`
  position: absolute;
  left: 25px;
  top: 120px;
  font-family: Paperlogy;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #000;
  text-align: left;
`;

const SubText = styled.div`
  position: absolute;
  left: 25px;
  top: 197px;
  font-family: Paperlogy;
  font-size: 12px;
  line-height: 20px;
  color: #686868;
  text-align: left;
`;

const CharacterImage = styled.div`
  position: absolute;
  width: 183px;
  height: 214px;
  left: 195px;
  top: 36px;
  background-image: url(${Bium});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`;

const EarthBackground = styled.div`
  position: absolute;
  /* 캐릭터와 같은 위치에서 살짝 조정 */
  left: 100px; 
  top: 10px; 
  width: 400px; 
  height: 430px;
  background-image: url(${EarthIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const HeroSection = styled.div`
  position: relative;
`;

const Card = styled.div`
  position: absolute;
  top: 257px;
  left: 0;
  width: 393px;
  height: 596px;
  background: #ffffff !important; /* !important를 추가하여 배경색 강제 적용 */
  box-shadow: 0px 1px 8.3px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
`;

const SearchBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 10px 15px;
  top: 294px;
  left: 21px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  font-family: Paperlogy;
  color: #000;
  width: 100%;
  ::placeholder {
    color: #bdbdbd;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 10px;
`;

const CategoryGrid = styled.div`
  position: absolute;
  top: 359px;
  left: 23px;
  width: 347px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 8px;
  &::-webkit-scrollbar {
  display: none;
  }
`;

const CategoryItem = styled.div`
  flex: 0 0 auto;
  width: 64px;
  text-align: center;
  cursor: pointer;
`;

const CategoryIcon = styled.div`
  width: 52px;
  height: 52px;
  margin: 0 auto 8px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CategoryText = styled.div`
  font-family: Paperlogy;
  font-weight: 400;
  font-size: 14px;
  color: #272727;
`;

const LocationTitle = styled.div`
  position: absolute;
  left: 21px;
  top: 462px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

const LocationSub = styled.div`
  font-family: Paperlogy;
  font-weight: 600;
  font-size: 14px;
  color: #959595;
  text-align: left;
`;

const LocationMain = styled.div`
  font-family: Paperlogy;
  font-weight: 600;
  font-size: 20px;
  color: #000;
  text-align: left;
`;

const LocationBadge = styled.div`
  position: absolute;
  left: 303px;
  top: 491px;
  font-family: Paperlogy;
  font-weight: 400;
  font-size: 10px;
  color: #7a7777;
`;

const MapImage = styled.div`
  position: absolute;
  left: 21px;
  top: 531px;
  width: 351px;
  height: 209px;
  background-image: url(${MainMapImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

/* ===== Bottom Nav 스타일 ===== */
/* ===== Bottom Nav 스타일 (확실한 해결책) ===== */
const BottomNav = styled.div`
  position: absolute;
  bottom: 0;
  width: 393px;
  height: 88px;
  background: #fff;
  box-shadow: 0px -1px 8.3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px 20px 0 0;
  z-index: 10;
  padding-bottom: 5px; /* 약간의 하단 여유 */
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* 아이콘과 텍스트 사이 간격 */
  font-family: Paperlogy;
  font-size: 10px;
  cursor: pointer;
  flex: 1; /* 모든 NavItem이 동일한 너비를 가짐 */
`;

// 일반 아이콘 (Home, Location 등) 스타일 통일
const NavIcon = styled.img`
  width: 24px;   /* 확실한 너비 고정 */
  height: 24px;  /* 확실한 높이 고정 */
  object-fit: contain; /* 비율 유지하며 꽉 차게 */
`;

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
  z-index: 11; /* 일반 NavItem보다 위에 위치 */
  cursor: pointer;
`;

const StyledCameraIcon = styled.img`
  width: 37px;
  height: 37px;
  object-fit: contain;
`;

/* ===== Main Component ===== */
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <CommonLayout>
        <Main>
          <TitleGreen>지구를 위해,</TitleGreen>
          <TitleBlack>분리수거 함께<br />하실래요?</TitleBlack>
          <SubText>
            어떤 쓰레기인지 헷갈리셨죠?<br />
            제가 알려드릴게요!
          </SubText>

          <EarthBackground />

          <CharacterImage />

          <Card />

          <SearchBar>
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon src={SearchIconImg} alt="search" />
          </SearchBar>

          <CategoryGrid>
            <CategoryItem onClick={() => navigate('/paper')}>
              <CategoryIcon img={PaperIcon} />
              <CategoryText>종이</CategoryText>
            </CategoryItem>

            <CategoryItem onClick={() => navigate('/plastic')}>
              <CategoryIcon img={PlasticIcon} />
              <CategoryText>플라스틱</CategoryText>
            </CategoryItem>

            <CategoryItem onClick={() => navigate('/glass')}>
              <CategoryIcon img={GlassIcon} />
              <CategoryText>유리</CategoryText>
            </CategoryItem>

            <CategoryItem onClick={() => navigate('/food')}>
              <CategoryIcon img={FtIcon} />
              <CategoryText>음식물</CategoryText>
            </CategoryItem>

            <CategoryItem onClick={() => navigate('/can')}>
              <CategoryIcon img={CanIcon} />
              <CategoryText>캔</CategoryText>
            </CategoryItem>

            <CategoryItem onClick={() => navigate('/trash')}>
              <CategoryIcon img={TrashIcon} />
              <CategoryText>일반쓰레기</CategoryText>
            </CategoryItem>
          </CategoryGrid>

          <LocationTitle>
            <LocationSub>나의 위치 기반</LocationSub>
            <LocationMain>가까운 분리배출 장소</LocationMain>
          </LocationTitle>
          <LocationBadge>관악구 난곡동</LocationBadge>
          <MapImage />
        </Main>
      </CommonLayout>
    </>
  );
};

export default Home;