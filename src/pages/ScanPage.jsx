import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

import BackIcon from "../assets/img/VectorWhite.svg";

const ScanPage = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("카메라를 시작할 수 없습니다:", err);
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);
  
  const analyzeImage = async (file, previewImage) => {
    navigate("/loading", {
      state: {
        mode: "analyze",
        file,
        previewImage,
      },
    });
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;
 
    const ctx = canvas.getContext("2d");

    const videoRealWidth = video.videoWidth;
    const videoRealHeight = video.videoHeight;

    const videoDisplayWidth = video.clientWidth;
    const videoDisplayHeight = video.clientHeight;

    const scale = Math.max(videoRealWidth / videoDisplayWidth, videoRealHeight / videoDisplayHeight);
    
    const xOffset = (videoDisplayWidth * scale - videoRealWidth) / 2;
    const yOffset = (videoDisplayHeight * scale - videoRealHeight) / 2;

    const frameSize = 288;
    const frameLeft = (videoDisplayWidth - frameSize) / 2;
    const frameTop = videoDisplayHeight * 0.48 - frameSize / 2; 

    const sx = frameLeft * scale - xOffset;
    const sy = frameTop * scale - yOffset;
    const sw = frameSize * scale;
    const sh = frameSize * scale;

    canvas.width = 500;
    canvas.height = 500;

    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

    const base64ImageData = canvas.toDataURL("image/jpeg", 0.85);

    canvas.toBlob(
      async (blob) => {
        if (!blob) return;

        const file = new File([blob], "capture.jpg", {
          type: "image/jpeg",
        });

        await analyzeImage(file, base64ImageData);
      },
      "image/jpeg",
      0.85,
    );
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64ImageData = reader.result;
      await analyzeImage(file, base64ImageData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <BackBtn onClick={() => navigate(-1)}>
        <BackIconImg src={BackIcon} alt="Back" />
      </BackBtn>

      <GuideText>화면 가운데에 사물을 맞춰 주세요.</GuideText>

      <Video ref={videoRef} autoPlay playsInline muted />
      <ScanFrame />

      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
      />

      <UploadButton onClick={handleUploadClick}>Upload photo</UploadButton>

      <HiddenCanvas ref={canvasRef} />

      <BottomNav onCapture={handleCapture} />
    </Container>
  );
};

/* ===== Styled Components ===== */
const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 393px;
  height: 100dvh; 
  margin: 0 auto;
  background-color: #727272;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(1) !important;
`;

const HiddenCanvas = styled.canvas`
  display: none;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const BackBtn = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
`;

const BackIconImg = styled.img`
  width: 12px;
  height: auto;
`;

const GuideText = styled.div`
  position: absolute;
  top: 20%; 
  width: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
  z-index: 10;
  line-height: 1.4;
  font-family: "Pretendard", sans-serif;
`;

const ScanFrame = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 288px;
  height: 288px;
  border: 3.5px solid #53b175;
  border-radius: 24px;
  box-shadow: 0 0 0 9999px rgba(40, 40, 40, 0.4);
  z-index: 5;
  pointer-events: none;
`;

const UploadButton = styled.div`
  position: absolute;
  top: calc(48% + 168px); 
  left: 50%;
  transform: translateX(-50%);

  background-color: #53b175;
  color: #ffffff;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 500;

  padding: 12px 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  cursor: pointer;
  z-index: 10;
  text-align: center;
  white-space: nowrap;

  transition: background 0.2s ease-in-out;
  &:active {
    background-color: #439460;
  }
`;

export default ScanPage;