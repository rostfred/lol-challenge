import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  > h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${theme.COLORS.GOLDEN};
  }

  > p {
    margin-top: 12px;
    font-size: 20px;
    font-weight: 400;
    color: ${theme.COLORS.GOLDEN_TEXT};
  }
`;
