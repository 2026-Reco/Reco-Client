import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getRequiredEnv } from "../config/env";
import { syncStoredUserName } from "../services/authUser";

const getRedirectUri = (provider) => {
  if (provider === "kakao") return getRequiredEnv("VITE_KAKAO_REDIRECT_URI");
  if (provider === "google") return getRequiredEnv("VITE_GOOGLE_REDIRECT_URI");

  return "";
};

const OAuthCallback = () => {
  const navigate = useNavigate();
  const { provider } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const login = async () => {
      const code = searchParams.get("code");

      if (!code) {
        alert("SNS 로그인에 실패했습니다.");
        navigate("/login");
        return;
      }

      try {
        const SPRING_API_BASE = getRequiredEnv("VITE_SPRING_API_BASE_URL");
        const params = new URLSearchParams({ code });
        const redirectUri = getRedirectUri(provider);

        if (redirectUri) {
          params.set("redirectUri", redirectUri);
        }

        const res = await fetch(
          `${SPRING_API_BASE}/api/auth/${provider}/callback?${params}`,
        );

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText || "소셜 로그인 실패");
        }

        const user = await res.json();
        const displayName = user.name || user.username;

        localStorage.setItem("userId", user.id);
        syncStoredUserName(displayName, user);

        navigate("/");
      } catch (err) {
        console.error("SNS 로그인 오류:", err);
        alert(err.message || "SNS 로그인 처리 중 오류가 발생했습니다.");
        navigate("/login");
      }
    };

    login();
  }, [provider, searchParams, navigate]);

  return <div>로그인 중...</div>;
};

export default OAuthCallback;
