import styled from 'styled-components';
import { minMedia } from '../utils';

export const GridContainer = styled.div`
  position: relative;
  background-size: cover;
  background-position: top right;
  ${minMedia.tablet`
    flex-wrap: wrap;
    display: flex;
  `};
`;

export const GridItem = styled.div`
  background-image: url(${props =>
    props.backgroundImage
      ? props.backgroundImage
      : 'https://unsplash.com/?photos/HWbxSLvmSww'});
  background-position: center;
  background-repeat: no-repeat;
  padding: 45px 55px 30px;
  position: relative;
  color: inherit;
  background: #fff;
  min-height: 300px;
  background-size: cover;
  /*cursor: pointer;*/
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s;
  &:before {
    position: absolute;
    content: '';
    background-color: white;
    opacity: 0.85;
    top: 0px;
    right: 35px;
    bottom: 0px;
    left: 35px;
    border-bottom: 1px solid rgba(74, 74, 74, 0.075);
    ${minMedia.tablet`
      top: 5px;
      right: 5px;
      bottom: 5px;
      left: 5px;
      border: 1px solid rgba(74, 74, 74, 0.075);
      -webkit-transition: opacity 0.3s;
      transition: opacity 0.3s;
    `};
  }
  &:hover::before,
  &:focus::before {
    ${minMedia.tablet`
      border: 3px solid rgba(129, 196, 131, 0.5);
    `};
  }

  * {
    z-index: 10;
  }
  h2 {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1em 45px;
    word-spacing: -0.15em;
    font-weight: 300;
    &:hover a {
      opacity: 0.5;
    }
    a {
      color: inherit;
    }
  }
  ${minMedia.tablet`
    width: 33.33%;
    border: none;
  `};
  ${minMedia.medium`
    width: 25%;
    border: none;
  `};
  ${minMedia.large`
    width: 25%;
    border: none;
  `};
  ${minMedia.giant`
    width: 20%;
    border: none;
  `};
  ${minMedia.jumbo`
    width: 16.66%;
    border: none;
  `};
`;

export const Snippet = styled.div`
  width: 50%;
  padding: 1em 10px 0 0;
  margin-top: 1em;
  position: absolute;
  top: 0;
  border-right: 1px solid rgba(202, 202, 202, 0.4);
  text-align: right;
  opacity: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-transform: translate3d(-80px, 0, 0);
  transform: translate3d(-80px, 0, 0);
  letter-spacing: 1px;
  font-size: 78.5%;
  ${GridItem}:hover & {
    opacity: 1;
    transform: translate3d(-35px, 0, 0);
  }
`;
