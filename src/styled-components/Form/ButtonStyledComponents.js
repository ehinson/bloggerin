import styled, { keyframes } from 'styled-components';

const colorAnimate = keyframes`
60% {
  -webkit-transform: scale3d(0.8, 0.8, 1);
  transform: scale3d(0.8, 0.8, 1);
}
85% {
  -webkit-transform: scale3d(1.1, 1.1, 1);
  transform: scale3d(1.1, 1.1, 1);
}
100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
`;
export const BouncingButton = styled.button`
  float: left;
  min-width: 100%;
  max-width: 400px;
  display: block;
  margin: 1em auto;
  padding: 1em;
  border: none;
  background: transparent;
  color: inherit;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  font-family: 'Zilla Slab', serif;
  font-size: 1em;
  border: 3px solid rgba(129, 196, 131, 0.5);
  transition: background-color 0.3s, color 0.3s;
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    background: inherit;
    border-radius: none;
    z-index: -1;
    opacity: 0.4;
    transform: scale3d(0.8, 0.5, 1);
  }
  &:focus {
    outline: none;
  }
  &:active {
    animation: ${colorAnimate} 0.3s forwards;
    background-color: rgba(129, 196, 131, 0.5);
    border: transparent;
    color: white;
  }
`;
