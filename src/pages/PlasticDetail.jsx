import React from "react";
import styled from "styled-components";
import { CommonLayout } from "../components/CommonLayout";

// 이미지 파일
import PlasticIcon from "../assets/img/plasticIcon.svg";

/* ===== Styles ===== */
const PageContent = styled.div`
  padding: 40px 25px;
  text-align: left;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  font-family: 'Paperlogy', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #53b175;
  margin-bottom: 20px;
`;

const MainIcon = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  background-image: url(${PlasticIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ContentCard = styled.div`
  border: 1px solid #53b175;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  font-family: 'Paperlogy';
  font-weight: 600;
  font-size: 20px;
  color: #000;
  margin-bottom: 20px;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StepItem = styled.div`
  font-family: 'Paperlogy';
  font-size: 14px;
  color: #333;
`;

const StepHeader = styled.div`
  font-weight: 700;
  color: #53b175;
  margin-bottom: 4px;
`;

const SubText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #555;
  line-height: 1.6;
  word-break: keep-all;
  padding-left: 10px;
  text-indent: -10px;
`;

const Tip = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 13px;
  color: #53b175;
  text-align: center;
`;

const WarningCard = styled.div`
  border: 1px solid #ff4d4f;
  border-radius: 20px;
  padding: 20px;
`;

const WarningTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const WarningList = styled.ul`
  list-style: none; /* 불렛 제거 */
  padding: 0;
  margin: 0;
  
  /* 디자인 포인트: 가독성을 위한 스타일 */
  font-size: 13px;
  font-weight: 500;    /* 너무 굵지 않게 */
  color: #333;
  line-height: 1.6;    /* 답답하지 않게 줄 간격 확보 */
  text-align: left;    /* 깔끔한 왼쪽 정렬 */
  
  word-break: keep-all; /* 단어 단위로 줄바꿈 */

  li {
    margin-bottom: 8px; /* 문장 간의 간격 확보 */
    position: relative;
    padding-left: 12px; /* 불렛 위치 확보 */
  }
`;

/* ===== Component ===== */
const PlasticDetail = () => {
    return (
        <CommonLayout>
            <PageContent>
                <HeaderTitle>플라스틱</HeaderTitle>
                <MainIcon />

                <ContentCard>
                    <CardTitle>플라스틱 이렇게 버려요.</CardTitle>
                    <StepList>
                        <StepItem>
                            <StepHeader>1. 내용물 완전히 비우기</StepHeader>
                            <SubText>→ 용기 안에 남아 있는 음료나 음식물을 끝까지 비워주세요</SubText>
                            <SubText>→ 남아 있으면 재활용이 어렵고 악취가 발생할 수 있어요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>2. 헹구기</StepHeader>
                            <SubText>→ 물로 한 번 헹궈 이물질과 음식물을 제거해주세요</SubText>
                            <SubText>→ 너무 더러운 상태면 재활용이 불가능해요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>3. 라벨 분리</StepHeader>
                            <SubText>→ 병이나 용기에 붙어 있는 비닐 라벨을 떼어내 주세요</SubText>
                            <SubText>→ 라벨은 비닐류로 따로 버려야 해요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>4. 뚜껑 분리</StepHeader>
                            <SubText>→ 플라스틱과 다른 재질인 뚜껑은 분리해서 배출해주세요</SubText>
                            <SubText>→ 재질이 다르면 재활용 과정에서 문제가 생겨요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>5. 부피 줄이기</StepHeader>
                            <SubText>→ 페트병은 찌그러뜨려서 배출해주세요</SubText>
                            <SubText>→ 공간을 줄여 수거와 운반이 쉬워져요</SubText>
                        </StepItem>
                    </StepList>
                    <Tip>💡 비우고 → 헹구고 → 분리하면 대부분 재활용 가능해요</Tip>
                </ContentCard>

                <WarningCard>
                    <WarningTitle>플라스틱 - ⚠️ 주의사항</WarningTitle>
                    <WarningList>
                        <li>음식물이 남아 있으면 재활용이 어려워요</li>
                        <li>다른 재질(금속, 종이 등)이 붙어 있으면 반드시 분리해주세요</li>
                        <li>너무 오염된 경우 일반쓰레기로 버려야 해요</li>
                    </WarningList>
                </WarningCard>
            </PageContent>
        </CommonLayout>
    );
};

export default PlasticDetail;