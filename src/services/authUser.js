const parseStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"))
  } catch {
    return null
  }
}

const normalizeUserId = (value) => {
  if (value === null || value === undefined) return null

  const stringValue = String(value).trim()
  if (!stringValue || stringValue === "null" || stringValue === "undefined") return null

  const numericUserId = Number(stringValue)
  return Number.isFinite(numericUserId) && numericUserId > 0 ? numericUserId : stringValue
}

export const getCurrentUserId = () => {
  const storedUser = parseStoredUser()
  const userId = storedUser?.id ?? storedUser?.userId ?? localStorage.getItem("userId")

  return normalizeUserId(userId)
}

export const getStoredUser = () => parseStoredUser()

export const getCurrentUserName = () => {
  const storedUser = parseStoredUser()
  const userName =
    localStorage.getItem("userName") ||
    storedUser?.name ||
    storedUser?.username ||
    localStorage.getItem("username") ||
    localStorage.getItem("userId")

  return userName || "사용자"
}

export const syncStoredUserName = (name, userPatch = {}) => {
  const currentUser = parseStoredUser() || {}
  const nextName = String(
    name ||
      userPatch.name ||
      userPatch.username ||
      currentUser.name ||
      currentUser.username ||
      localStorage.getItem("userName") ||
      localStorage.getItem("username") ||
      "",
  ).trim()

  if (!nextName) return currentUser

  const nextUser = {
    ...currentUser,
    ...userPatch,
    id: userPatch.id ?? currentUser.id ?? localStorage.getItem("userId"),
    name: nextName,
    username: userPatch.username ?? currentUser.username ?? nextName,
  }

  localStorage.setItem("userName", nextName)
  localStorage.setItem("username", nextUser.username || nextName)
  localStorage.setItem("user", JSON.stringify(nextUser))
  window.dispatchEvent(new Event("reco-user-change"))

  return nextUser
}

export const hasLoginSession = () => {
  return Boolean(
    getCurrentUserId() ||
      parseStoredUser() ||
      localStorage.getItem("username") ||
      localStorage.getItem("accessToken"),
  )
}
