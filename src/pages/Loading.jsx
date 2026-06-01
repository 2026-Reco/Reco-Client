import styled from "styled-components"
import bium from "../assets/loading.gif"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getRequiredEnv } from "../config/env"

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

const FASTAPI_BASE = getRequiredEnv("VITE_API_BASE_URL")

const normalizeResult = (data) => {
  const steps = data.disposal_steps || data.disposalSteps || []

  return {
    ...data,
    itemName: data.waste_type_ko || data.itemName || data.item,
    item: data.waste_type_ko || data.itemName || data.item,
    primaryMaterial: data.primary_material || data.material,
    aiSummary: data.ai_summary || data.summary,
    disposalSteps: steps,
    disposalMethodSummary: steps.join("\n"),
    contaminationStatus:
      data.contamination?.level === "clean"
        ? "good"
        : data.contamination?.level === "low"
        ? "normal"
        : data.contamination?.level === "high"
        ? "bad"
        : "good",
    isRecyclable: data.recyclable?.possible ?? true,
    confidence: Math.round((data.confidence || 0.9) * 100),
  }
}

const Loading = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const {
    mode,
    file,
    previewImage,
    result,
    capturedImage,
    additionalAnswers,
    questionType,
  } = location.state || {}

  useEffect(() => {
    const analyze = async () => {
      const formData = new FormData()
      formData.append("image", file)

      const response = await fetch(`${FASTAPI_BASE}/api/v1/materials/analyze`, {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      navigate("/result", {
        state: {
          result: normalizeResult(data),
          capturedImage: previewImage,
        },
      })
    }

    const reanalyze = async () => {
      const response = await fetch(`${FASTAPI_BASE}/api/v1/materials/reanalyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          previous_result: result,
          additional_answers: additionalAnswers,
          question_type: questionType,
        }),
      })

      const data = await response.json()

      navigate("/result", {
        state: {
          result: normalizeResult(data),
          capturedImage,
        },
      })
    }

    if (mode === "analyze") analyze()
    if (mode === "reanalyze") reanalyze()
  }, [])

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
      <Image src={bium} alt="비움 캐릭터" />
      <Title>
        {mode === "reanalyze"
          ? "비움이가 다시 분석하고 있어요"
          : "비움이가 분리배출 방법을 찾고있어요"}
      </Title>
      <SubTitle>
        AI 비움이가 결과를 분석하고 있어요<br />
        앱을 종료하지 마시고 잠깐만 기다려 주세요
      </SubTitle>
    </Container>
  )
}

export default Loading
