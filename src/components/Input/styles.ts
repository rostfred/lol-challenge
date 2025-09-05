import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledAutoCompleteWrapper = styled.div<{ $disabled?: boolean }>`
  width: 350px;
  margin: 30px auto 0;

  > span {
    width: 100%;
  }

  .p-inputtext {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 2px solid ${theme.COLORS.GOLDEN_TEXT};
    background-color: ${theme.COLORS.DEEP_BLACK};
    color: ${theme.COLORS.GOLDEN_TEXT};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 99 !important;

    &::placeholder {
      color: ${theme.COLORS.GRAY_500};
    }

    &:focus {
      border-color: ${theme.COLORS.GOLDEN};
      outline: none;
    }

    ${(props) =>
			props.$disabled &&
			`
      opacity: 0.6;
      cursor: not-allowed;
      border-color: ${theme.COLORS.GRAY_500};
      
      &:focus {
        border-color: ${theme.COLORS.GRAY_500};
      }
    `}
  }
`;

export const StyledItemTemplate = styled.div`
  display: flex;
  padding: 8px 15px;
  align-items: center;

  background-color: ${theme.COLORS.DEEP_BLACK};
  color: ${theme.COLORS.GOLDEN_TEXT};
  opacity: 95%;

  cursor: pointer;

  &:hover {
    background-color: ${theme.COLORS.GOLDEN_TEXT}1A;
  }

  div {
    width: 32px;
    height: 32px;

    margin-right: 12px;
    border: 1px solid ${theme.COLORS.GOLDEN_TEXT};
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: nowrap;
    overflow: hidden;
    padding: 0;

    > img {
      width: 34px;
      object-fit: cover;
    }
  }

  span {
    line-height: 100%;
  }
`;
