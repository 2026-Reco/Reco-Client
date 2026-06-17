import { getRequiredEnv } from "../config/env"

const API_BASE_URL = getRequiredEnv("VITE_SPRING_API_BASE_URL")

const parseUserResponse = async (response) => {
  const text = await response.text()
  if (!text) return null

  return JSON.parse(text)
}

export const getUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}`)

  if (!response.ok) {
    throw new Error("Failed to load user.")
  }

  return parseUserResponse(response)
}

export const updateUserName = async (userId, name) => {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })

  if (!response.ok) {
    throw new Error("Failed to update user name.")
  }

  return parseUserResponse(response)
}
