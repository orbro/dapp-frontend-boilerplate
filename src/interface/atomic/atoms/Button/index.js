/* --- Global Dependencies --- */
import idx from 'idx'
import styled from 'styled-components'
import is from 'styled-is';
import {
  space,
  color,
  width,
  height,
  flex,
  alignSelf,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  opacity,
  style
} from 'styled-system'

/* --- Local Dependencies --- */
const textShadow = style({
  prop: 'textShadow', // React prop name
  cssProperty: 'textShadow', // The corresponding CSS property (defaults to prop argument)
  key: 'textShadow',
})

/* ------ Component ------ */
const ButtonStyled = styled.button`
  ${alignSelf}
  ${color}
  ${letterSpacing}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${boxShadow}
  ${backgroundImage}
  ${flex}
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${textShadow}
  ${width}
  ${height}
  ${opacity}
  ${space}

  border: none;
  cursor: pointer;
  ${props => 
  props.large || props.small? `font-size: ${props.large ? '14px' : '10px'}`: fontSize}
  outline: none;
  position: relative;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out,top 350ms ease-out;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  

  ${is('pill')`
    border-radius: 95px;
    padding-bottom: 12.5px;
    padding-top: 12.5px;
    padding-left: 22.5px;
    padding-right: 22.5px;
  `};

  ${is('large')`
    font-size: 103%;
    padding: 20px;
  `};

  ${props => 
    props.gradient && idx(props, _=>_.theme.gradient[props.gradient]) && !props.transparent
    ? `
      background: ${props.theme.gradient[props.gradient][0]};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '0'}deg , ${props.theme.gradient[props.gradient]});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '0'}deg , ${props.theme.gradient[props.gradient]});
      `
    : null
  }

  ${is('outline')`
    background: none;
    background-image: none;
    border-color: ${props => props.theme.gradient[props.gradient][0]}
    border-style: solid;
    border-width: 1px;
    color: ${props => props.theme.gradient[props.gradient][0]};
    text-shadow: none;
  `};

  ${is('flow')`
    background-position: 0 0;
    background-size: 200% 140% !important;
    transition: 0.5s;

    &:hover {
      background-position: 60px;
    }
  `};
  

  
  ${props => 
    props.transparent
    ? 
    `
      background: transparent !important;
      background-color: transparent !important;
      background-image: unset !important;
      border: 1px solid ${idx(props, _=>_.theme.colors[props.borderColor]) || 'white'} !important};
      box-shadow: unset !important;
    `
    : null
  }
  ${is('disabled')`
    background: ${props => props.theme.gradient['gray'][0]};
    background-image: -webkit-linear-gradient(${props => props.gradientDir ? props.gradientDir : '0'}deg , ${props => props.theme.gradient['gray']});
    background-image: linear-gradient(${props => props.gradientDir ? props.gradientDir : '0'}deg , ${props => props.theme.gradient['gray']});
    color: #737272;
    text-shadow: none;
  `};
  // Button States
  &:active {
    top: 3px;
    outline: none;
  }
  &:hover {
    top: 2px;
    outline: none;
  } 

`

ButtonStyled.defaultProps = {
  bg: 'white',
  gradient: 'white',
  gradientDir: 180,
  borderRadius: 6,
  // boxShadow: 0,
  color: 'blue',
  fontSize: 1,
  textAlign:'center',
  textShadow: 'light',
  py: 10,
  px: 16,
  hover: {
    boxShadow: 2
  }
}

export default ButtonStyled