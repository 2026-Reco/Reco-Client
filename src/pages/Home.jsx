// home.jsx
import React, { useState, useEffect } from "react";
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
  height: 800px;
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden; 
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
  /* 852px(전체높이) - 257px(탑 위치) = 딱 맞게 떨어지는 595px로 변경 */
  height: 595px; 
  background: #ffffff !important;
  box-shadow: 0px 1px 8.3px rgba(0, 0, 0, 0.25);
  border-radius: 12px 12px 0 0;
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

const MapContainer = styled.div`
  position: absolute;
  left: 21px;
  top: 515px; 
  width: 351px;
  height: 249px; 
  border-radius: 10px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer; 
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
  const [currentAddress, setCurrentAddress] = useState("위치 탐색 중...");
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("kakao-map");
    if (!container || !window.kakao) return;

    // 기본 좌표값 (관악구 난곡동)
    const defaultCoords = new window.kakao.maps.LatLng(37.4781, 126.9517);

    const options = {
      center: defaultCoords,
      level: 4,
    };

    const map = new window.kakao.maps.Map(container, options);
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 좌표를 한글 동 주소로 바꾸는 함수
    const searchAddrFromCoords = (coords, callback) => {
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    };

    // 주소 변환 결과 처리 함수
    const displayCenterInfo = (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        for (let i = 0; i < result.length; i++) {
          if (result[i].region_type === "H") {
            setCurrentAddress(result[i].region_3depth_name);
            break;
          }
        }
      }
    };

    // 1. 초기 맵 로드 시 기본 위치 주소 설정
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 2. GPS 권한 허용 시 현재 사용자 위치로 중심 이동
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const currentPos = new window.kakao.maps.LatLng(lat, lon);

          map.setCenter(currentPos);
          searchAddrFromCoords(currentPos, displayCenterInfo);
        },
        (error) => {
          console.error("GPS 위치 정보를 가져오는 데 실패했습니다.", error);
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    }

    // [핵심 추가] 지도가 드래그/확대 등으로 이동했다가 "멈췄을 때(idle)" 중심점 구해서 동 이름 갱신
    window.kakao.maps.event.addListener(map, "idle", () => {
      const centerCoords = map.getCenter(); // 움직여서 멈춘 지도의 중심 좌표 가져오기
      searchAddrFromCoords(centerCoords, displayCenterInfo);
    });

    // 카카오맵 타일 영역 클릭 리스너 (원래대로 페이지 이동)
    window.kakao.maps.event.addListener(map, "click", () => {
      navigate("/location");
    });
  }, [navigate]);

  return (
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
          <CategoryItem onClick={() => navigate('/paper')}><CategoryIcon img={PaperIcon} /><CategoryText>종이</CategoryText></CategoryItem>
          <CategoryItem onClick={() => navigate('/plastic')}><CategoryIcon img={PlasticIcon} /><CategoryText>플라스틱</CategoryText></CategoryItem>
          <CategoryItem onClick={() => navigate('/glass')}><CategoryIcon img={GlassIcon} /><CategoryText>유리</CategoryText></CategoryItem>
          <CategoryItem onClick={() => navigate('/food')}><CategoryIcon img={FtIcon} /><CategoryText>음식물</CategoryText></CategoryItem>
          <CategoryItem onClick={() => navigate('/can')}><CategoryIcon img={CanIcon} /><CategoryText>캔</CategoryText></CategoryItem>
          <CategoryItem onClick={() => navigate('/trash')}><CategoryIcon img={TrashIcon} /><CategoryText>일반쓰레기</CategoryText></CategoryItem>
        </CategoryGrid>

        <LocationTitle>
          <LocationSub>나의 위치 기반</LocationSub>
          <LocationMain>가까운 분리배출 장소</LocationMain>
        </LocationTitle>
        
        <LocationBadge>📍 {currentAddress}</LocationBadge>

        <MapContainer id="kakao-map" onClick={() => navigate("/location")} />

      </Main>
    </CommonLayout>
  );
};

export default Home;