const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const ENDPOINT = `${API_BASE}/api/v1/chatbot/message`;

/**
 * 서버의 비움이 챗봇 엔드포인트로 대화 히스토리를 보내고 응답 텍스트를 받아옵니다.
 * (Gemini 키는 서버에 보관되어 있어 브라우저로 노출되지 않습니다.)
 * @param {Array<{role: "user"|"model", text: string}>} history
 * @returns {Promise<string>} 모델 응답 텍스트
 */
export async function sendChatToGemini(history) {
    const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history }),
    });

    if (!res.ok) {
        let detail = "";
        try {
            const data = await res.json();
            detail = data?.detail || JSON.stringify(data);
        } catch {
            detail = await res.text();
        }
        throw new Error(`챗봇 서버 오류 (${res.status}): ${detail}`);
    }

    const data = await res.json();
    const text = data?.reply?.trim();
    if (!text) {
        throw new Error("챗봇 응답이 비어 있어요.");
    }
    return text;
}
