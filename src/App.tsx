import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const isLogin = mode === 'login'

  return (
    <main className="app-shell">
      <section className="phone-screen">
        <div className="status-time">9:41</div>
        <div className="auth-content">
          <p className="welcome-text">
            {isLogin ? '다시 만나서 반갑습니다!' : '안녕하세요, 처음 만나서 반가워요!'}
          </p>
          <h1 className="auth-title">
            3초만에 <span>{isLogin ? '로그인' : '회원가입'}</span> 완료하기
          </h1>

          <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="auth-id">아이디</label>
            <input id="auth-id" type="text" placeholder="아이디를 입력하시오" />

            <label htmlFor="auth-password">비밀번호</label>
            <input
              id="auth-password"
              type="password"
              placeholder="비밀번호를 입력하시오"
            />

            {!isLogin && (
              <>
                <label htmlFor="auth-password-check">비밀번호 확인</label>
                <input
                  id="auth-password-check"
                  type="password"
                  placeholder="비밀번호를 확인하시오"
                />
              </>
            )}

            <button type="submit" className="primary-button">
              {isLogin ? '로그인' : '회원가입'}
            </button>
          </form>

          <p className="switch-text">
            {isLogin ? '아직 회원이 아니신가요? ' : '이미 계정이 있으신가요? '}
            <button
              type="button"
              className="switch-link"
              onClick={() => setMode(isLogin ? 'signup' : 'login')}
            >
              {isLogin ? '회원가입' : '로그인'}
            </button>
          </p>

          <div className="sns-section">
            <div className="divider">
              <span>SNS 계정으로 로그인</span>
            </div>
            <button type="button" className="google-button" aria-label="구글 로그인 버튼">
              <span className="google-mark">G</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
