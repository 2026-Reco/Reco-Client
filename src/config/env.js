export const getRequiredEnv = (key) => {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`${key} 환경변수가 설정되지 않았습니다.`);
  }

  return value;
};
