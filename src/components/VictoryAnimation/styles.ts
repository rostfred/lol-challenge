import styled, { keyframes } from 'styled-components';

const flyFromLeft = keyframes`
  0% {
    transform: translateX(-100px) translateY(0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(50vw - 50px)) translateY(-200px) rotate(360deg);
    opacity: 0;
  }
`;

const flyFromRight = keyframes`
  0% {
    transform: translateX(100px) translateY(0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(-50vw + 50px)) translateY(-200px) rotate(-360deg);
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

interface EmojiProps {
	$side: 'left' | 'right';
	$delay: number;
	$startPosition: number;
}

export const Emoji = styled.div<EmojiProps>`
  position: absolute;
  font-size: 2.5rem;
  opacity: 0;

  ${(props) =>
		props.$side === 'left'
			? `top: ${props.$startPosition}%; left: -100px;`
			: `top: ${props.$startPosition}%; right: -100px;`}

  animation: ${(props) =>
		props.$side === 'left' ? flyFromLeft : flyFromRight} 3s ease-out forwards;
  animation-delay: ${(props) => props.$delay}ms;

  user-select: none;
  pointer-events: none;
`;
