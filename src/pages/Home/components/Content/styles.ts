import styled, { keyframes } from 'styled-components';
import theme from '../../../../styles/theme';

const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 90px);
  width: fit-content;
  gap: 5px;

  animation: ${slideInFromTop} 0.4s ease-out;

  > div {
    width: 90px;
    height: 35px;
    border: none;
    border-bottom: 1px solid ${theme.COLORS.GOLDEN_TEXT};
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      color: ${theme.COLORS.GOLDEN_TEXT};
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 90px);
  width: fit-content;
  gap: 5px;
  margin-top: 20px;

  > div:nth-of-type(-n + 6) {
    animation: ${slideInFromTop} 0.4s ease-out;
  }

  > div {
    width: 90px;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;

    &[data-status="success"] {
      background: ${theme.COLORS.GREEN}90;
      border: 2px solid ${theme.COLORS.GREEN};
    }

    &[data-status="partial"] {
      background: ${theme.COLORS.ORANGE}90;
      border: 2px solid ${theme.COLORS.ORANGE};
    }

    &[data-status="fail"] {
      background: ${theme.COLORS.RED}90;
      border: 2px solid ${theme.COLORS.RED};
    }

    > img {
      width: 22px;
    }

    > p {
      font-weight: 500;
      color: ${theme.COLORS.WHITE};
      text-transform: lowercase;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &[data-year-direction="higher"] {
      background-image: url("/images/indicator-higher.png");
      background-size: 90px 70px;
      background-repeat: no-repeat;
      background-position: center;
    }

    &[data-year-direction="lower"] {
      background-image: url("/images/indicator-lower.png");
      background-size: 90px 70px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .icon {
    border: 2px solid ${theme.COLORS.GOLDEN_TEXT} !important;
    overflow: hidden;
    padding: 0;
    flex-wrap: nowrap;

    > img {
      width: 96px;
      object-fit: cover;
    }
  }
`;
