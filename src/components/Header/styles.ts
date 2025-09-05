import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  height: fit-content;
  width: 670px;
  padding: 30px 30px 30px 30px;
  margin: 60px auto 40px auto;
  background-color: ${theme.COLORS.DEEP_BLACK};
  border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 95%;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  > h1 {
    font-size: 60px;
    font-weight: 700;
    color: ${theme.COLORS.GOLDEN};
  }

  > p {
    font-size: 20px;
    font-weight: 400;
    color: ${theme.COLORS.GOLDEN_TEXT};
  }
`;

export const Nav = styled.div`
  width: fit-content;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  gap: 15px;

  > a {
    color: ${({ theme }) => theme.COLORS.GOLDEN_TEXT};
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }

  .active {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GOLDEN_TEXT};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.GOLDEN_TEXT};
  }
`;
