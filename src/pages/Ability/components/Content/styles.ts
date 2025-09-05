import styled, { keyframes } from 'styled-components';
import theme from '../../../../styles/theme';

const correctEntryAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px) scale(1.1);
  }
  70% {
    transform: translateY(2px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const incorrectEntryAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  20% {
    opacity: 1;
    transform: translateX(10px);
  }
  40% {
    transform: translateX(-8px);
  }
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;
`;

export const Content = styled.div`
  display: flex;
  width: 340px;
  height: 90px;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  div {
    width: 44px;
    height: 44px;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
    border-radius: 8px;
    overflow: hidden;

    > img {
      width: 47px;
      object-fit: cover;
    }
  }

  p {
    color: ${theme.COLORS.WHITE};
  }

  &[data-status="success"] {
    background: ${theme.COLORS.GREEN}90;
    border: 2px solid ${theme.COLORS.GREEN};
    animation: ${correctEntryAnimation} 0.8s ease-out;

    div {
      border-color: ${theme.COLORS.GREEN};
    }
  }

  &[data-status="fail"] {
    background: ${theme.COLORS.RED}90;
    border: 2px solid ${theme.COLORS.RED};
    animation: ${incorrectEntryAnimation} 0.6s ease-out;

    div {
      border-color: ${theme.COLORS.RED};
    }
  }
`;
