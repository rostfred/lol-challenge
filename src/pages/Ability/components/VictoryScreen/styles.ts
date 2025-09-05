import styled, { keyframes } from 'styled-components';
import theme from '../../../../styles/theme';

const slideUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const correctEntryAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.8);
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
  width: 565px;
  margin: 60px auto 40px;
  padding: 40px;
  background-color: ${theme.COLORS.DEEP_BLACK};
  border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
  border-radius: 16px;
  opacity: 95%;
  animation: ${slideUp} 0.6s ease-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > h3 {
    font-size: 48px;
    font-weight: 700;
    color: ${theme.COLORS.GOLDEN};
    text-align: center;
    margin: 0;
  }

  > p {
    font-size: 18px;
    color: ${theme.COLORS.GOLDEN_TEXT};
    text-align: center;
    line-height: 1.5;
  }

  > a {
    text-decoration: none;

    > button {
      padding: 12px 24px;
      background-color: transparent;
      border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
      border-radius: 8px;
      color: ${theme.COLORS.GOLDEN_TEXT};
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: ${theme.COLORS.GOLDEN_TEXT};
        color: ${theme.COLORS.DEEP_BLACK};
        transform: translateY(-2px);
      }
    }
  }
`;

export const ChampionSection = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;

  > div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h4 {
      font-size: 18px;
      font-weight: 600;
      color: ${theme.COLORS.GOLDEN_TEXT};
      margin: 0;

      &:last-of-type {
        font-size: 28px;
        color: ${theme.COLORS.GOLDEN};
      }
    }
  }
`;

export const ChampionImage = styled.div`
  width: 80px !important;
  height: 80px;
  border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 86px;
    object-fit: cover;
  }
`;

export const AbilitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border: 1px solid ${theme.COLORS.GOLDEN_TEXT}40;
  border-radius: 12px;
  background-color: ${theme.COLORS.DEEP_BLACK}80;

  > h4 {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.COLORS.GOLDEN};
    margin: 0;
  }

  > p {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.COLORS.GOLDEN_TEXT};
    margin: 0;
  }
`;

export const AbilityImage = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;

  border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
  border-radius: 8px;

  img {
    width: 100%;
  }
`;

export const SkillButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const SkillButton = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
  border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
  color: ${theme.COLORS.GOLDEN_TEXT};

  &:hover {
    background-color: ${theme.COLORS.GOLDEN_TEXT}20;
    transform: translateY(-2px);
  }

  &[data-status="success"] {
    background: ${theme.COLORS.GREEN}90;
    border: 2px solid ${theme.COLORS.GREEN};
    color: ${theme.COLORS.WHITE};
    animation: ${correctEntryAnimation} 0.8s ease-out;
    cursor: default;

    &:hover {
      background: ${theme.COLORS.GREEN}90;
      transform: none;
    }
  }

  &[data-status="fail"] {
    background: ${theme.COLORS.RED}90;
    border: 2px solid ${theme.COLORS.RED};
    color: ${theme.COLORS.WHITE};
    animation: ${incorrectEntryAnimation} 0.6s ease-out;
    cursor: default;

    &:hover {
      background: ${theme.COLORS.RED}90;
      transform: none;
    }
  }
`;

export const FeedbackText = styled.p<{ $isCorrect: boolean }>`
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0 0 0;
  color: ${(props) =>
		props.$isCorrect ? theme.COLORS.GREEN : theme.COLORS.GOLDEN_TEXT} !important;
  text-align: center;
`;
