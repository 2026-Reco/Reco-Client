import React from "react";
import styled from "styled-components";
import { CommonLayout } from "../components/CommonLayout";

// 이미지 (assets/img 폴더에 glassIcon.svg 파일이 있는지 확인하세요!)
import GlassIcon from "../assets/img/glassIcon.svg";

/* ===== Styles (기존과 동일) ===== */
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
  background-image: url(${GlassIcon});
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
const GlassDetail = () => {
    return (
        <CommonLayout>
            <PageContent>
                <HeaderTitle>유리</HeaderTitle>
                <MainIcon />

                <ContentCard>
                    <CardTitle>유리 이렇게 버려요.</CardTitle>
                    <StepList>
                        <StepItem>
                            <StepHeader>1. 내용물 비우기</StepHeader>
                            <SubText>→ 병 안에 남아 있는 음료나 내용물을 모두 비워주세요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>2. 뚜껑 분리</StepHeader>
                            <SubText>→ 금속이나 플라스틱으로 된 뚜껑은 분리해서 버려주세요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>3. 세척하기</StepHeader>
                            <SubText>→ 가능하다면 물로 한 번 헹궈 깨끗하게 해주세요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>4. 안전하게 배출</StepHeader>
                            <SubText>→ 깨지지 않도록 조심해서 배출해주세요</SubText>
                            <SubText>→ 깨진 유리는 신문지에 싸서 일반쓰레기로 버려주세요</SubText>
                        </StepItem>
                        <StepItem>
                            <StepHeader>5. 유리 구분하기</StepHeader>
                            <SubText>→ 도자기, 거울, 내열유리는 재활용이 되지 않아요</SubText>
                        </StepItem>
                    </StepList>
                    <Tip>💡 유리는 "병만" 재활용 가능해요</Tip>
                </ContentCard>

                <WarningCard>
                    <WarningTitle>유리 - ⚠️ 주의사항</WarningTitle>
                    <WarningList>
                        <li>깨진 유리는 재활용이 불가능해요</li>
                        <li>도자기, 거울, 내열유리는 함께 버리면 안 돼요</li>
                        <li>배출 시 다치지 않도록 주의해주세요</li>
                    </WarningList>
                </WarningCard>
            </PageContent>
        </CommonLayout>
    );
};

export default GlassDetail;