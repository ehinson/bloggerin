import { css } from 'styled-components';

const sizes = {
  jumbo: 2100,
  giant: 1800,
  large: 1500,
  medium: 1200,
  tablet: 900
};

// iterate through the sizes and create a media template
export const maxMedia = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const minMedia = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export function verticalAlign() {
  return `
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  `;
}

export function verticalAlignAbsolute() {
  return `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `;
}
export function verticalGoldenAbsolute() {
  return `
    position: absolute;
    top: 38%;
    transform: translateY(-38%);
  `;
}

export function horizontalAlign() {
  return `
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `;
}

export function horizontalAlignAbsolute() {
  return `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `;
}

export function sassyList(color) {
  return `
    list-style-type: none;
    position: relative;
    margin-left: 1em;
    padding-left: 0;

    li:before {
        content: '\\2022';
        position: absolute;
        left: -1em;
        color: ${color};
        margin-right: 5px;
  }
  `;
}

export function unstyleButton({
  color = 'transparent',
  fontSize = 'inherit',
  fontWeight = 'inherit'
}) {
  return `
    outline: ${color};
    border-color: ${color};
    background-color: ${color};
    padding: 0;
    padding-left: 0;
    border-radius: 0;

    &:hover{
      background-color: ${color};
      border-color: ${color};
      color: inherit;
      box-shadow: none;
    }
    &:active, &.active {
      background-color: ${color};
      border-color: ${color};
      color: inherit;
      box-shadow: none;
    }
    &:focus{
      background-color: ${color};
      border-color: ${color};
      color: inherit;
      box-shadow: none;
    }
    &:visited{
      background-color: ${color};
      border-color: ${color};
      color: inherit;
      box-shadow: none;
    }
    a{
      padding: 15px;
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    }
  `;
}
