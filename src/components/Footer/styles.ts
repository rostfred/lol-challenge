import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.footer`
  height: 54px;
  width: fit-content;
  margin: 30px auto 0px;
  padding: 16px 16px;
  background-color: ${theme.COLORS.DEEP_BLACK};
  border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
  border-radius: 12px;
  display: flex;
  align-items: center;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  > p {
    color: ${theme.COLORS.GOLDEN_TEXT};
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    display: flex;
    gap: 4px;

    > a {
      height: 24px;
      width: 24px;
      transition: 0.3s;

      &:hover {
        opacity: 0.8;
        scale: 1.05;
      }
    }
  }
`;
