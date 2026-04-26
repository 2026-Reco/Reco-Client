import React from 'react';
import styled from 'styled-components';
import BottomNav from './BottomNav'; // 새로 만든 컴포넌트 import

const LayoutWrapper = styled.div`
  width: 393px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  padding-bottom: 88px; 
`;

export const CommonLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
      <BottomNav />
    </LayoutWrapper>
  );
};