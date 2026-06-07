import { getRequiredEnv } from "../config/env"

const API_BASE = getRequiredEnv("VITE_SPRING_API_BASE_URL")

export const getPlaces = async (type) => {
  const res = await fetch(`${API_BASE}/api/v1/places?type=${type}`)

  if (!res.ok) {
    throw new Error("장소 데이터를 불러오지 못했습니다.")
  }

  return res.json()
}
