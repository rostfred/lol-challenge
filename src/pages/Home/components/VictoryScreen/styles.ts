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

    span {
      display: inline-block;
      transform: scaleX(-1);
      font-weight: 700;
      font-size: 48px;
    }
  }

  > h4 {
    font-size: 32px;
    font-weight: 600;
    color: ${theme.COLORS.GOLDEN_TEXT};
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

export const ChampionImage = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid ${theme.COLORS.GOLDEN_TEXT};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.DEEP_BLACK};

  img {
    width: 130px;
    object-fit: cover;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 40px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    > span {
      font-size: 14px;
      color: ${theme.COLORS.GOLDEN_TEXT};
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    > span:nth-of-type(2) {
      font-size: 28px;
      font-weight: 700;
      color: ${theme.COLORS.GOLDEN};
    }
  }
`;
