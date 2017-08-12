import styled from 'styled-components';
import Formsy from 'formsy-react';

export const Form = styled(Formsy.Form)`
max-width: 400px;
display: block;
margin: auto;
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  background-color: none !important;
}
`;

export const TextField = styled.input`
  position: relative;
  display: block;
  float: right;
  padding: 1em;
  width: 60%;
  border: none;
  border-radius: 0;
  background: #f0f0f0;
  font-weight: 300;
  font-family: 'Zilla Slab ', sans-serif;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  padding-left: 2.75em;
  color: #6a7989;
  &:focus {
    outline: none;
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  float: right;
  padding: 0 1em;
  width: 40%;
  color: #6a7989;
  font-weight: bold;
  font-size: 0.9em;
  -webkit-touch-callout: none;
  user-select: none;
  position: absolute;
  width: 100%;
  text-align: left;
  pointer-events: none;
  color: #d2d2d2;
`;

export const TextContainer = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 400px;
  width: calc(100% - 2em);
  vertical-align: top;
  overflow: hidden;
  background: #fff;
`;

export const LabelContent = styled.span`
  position: relative;
  display: block;
  padding: 1.6em 0;
  width: 100%;
  display: inline-block;
  width: auto;
  transform: translate3d(-1.75em, 0, 0);
  transition: transform 0.3s, opacity 0.3s;
`;

export const LabelBefore = styled.span`
  display: inline-block;
  margin-top: 0.9em;
  -webkit-transform: translate3d(-6em, 0, 0);
  transform: translate3d(-6em, 0, 0);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
`;
