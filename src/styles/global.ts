import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`

// CSS-Reset

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
}

// Global

html {
	height: 100%;
}

body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	color: ${theme.COLORS.GRAY_500};
  background-image: url("/images/image-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-color: ${theme.COLORS.DEEP_BLACK};

	&::-webkit-scrollbar {
      width: 10px;
    }

  &::-webkit-scrollbar-track {
    background: #D9D9D977;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.COLORS.GRAY_100};
    border-radius: 10px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.COLORS.GRAY_50};
  }
}

#root {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

body, input, textarea, button, strong, span, div, button, h1, h2, p {
	font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

.p-autocomplete-panel {
  margin-top: -20px !important;
  padding-top: 20px !important;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
  border: 2px solid ${theme.COLORS.GOLDEN_TEXT} !important;
  background-color: ${theme.COLORS.DEEP_BLACK} !important;
  z-index: 98 !important;
  overflow: hidden !important;
}

.p-autocomplete-items {
  max-height: 200px !important;
  overflow-y: auto !important;

  &::-webkit-scrollbar {
    width: 8px !important;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.COLORS.GRAY_200}1A !important;
    border-radius: 4px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.COLORS.GRAY_100} !important;
    border-radius: 4px !important;
    cursor: pointer !important;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.COLORS.GRAY_50} !important;
  }
}

.p-autocomplete-item {
  border: 0 !important;
}

.p-autocomplete-item + .p-autocomplete-item {
  border-top: 1px solid ${theme.COLORS.GOLDEN_TEXT} !important;
}
`;
