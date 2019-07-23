/* --- Global Dependencies --- */
import PropType from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is';
import { borders, borderColor, space, width, fontSize, fontWeight, color, textAlign, style } from 'styled-system'
import { palette as palettes } from 'styled-theme'

/* --- Style(s) --- */
const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
})

const textShadow = style({
  prop: 'textShadow',
  cssProperty: 'textShadow',
  key: 'textShadow',
})

/* --- Component --- */
const Text = styled.p`
${borders}
${borderColor}
${color}
color: ${({palette}) => palette ? palettes(palette[0], palette[1]) : null};
${cursor}
${width}
${fontSize}
${fontWeight}
${textAlign}
${textShadow}
${space}
${is('underline')`
    position: relative;
    &:after {
      background-color: #c8c9d1;
      content: '';
      bottom: -3px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      position: absolute;
      height: 1px;
      width: 0px;
      transition: width 250ms;
    }
    &:hover:after {
      width: 100%;
    }
  `};
`

Text.propTypes = {
  color: PropType.string,
  m: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  mx: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  my: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  mt: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  mb: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  ml: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  mr: PropType.oneOfType([
    PropType.string,
    PropType.array
  ]),
  textAlign: PropType.oneOfType([
    PropType.string,
    PropType.array
  ])
}

Text.defaultProps = {
  mt: 0
}

export default Text