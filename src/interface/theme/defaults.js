const theme = {
  breakpoints: [540, 760, 980, 1220, 1430, 1620, 2010],
  borderImage: {
    turqoise: 'linear-gradient(to right,#54a0c4,#42c68f)',
    crimson: 'linear-gradient(to right, #642B73, #C6426E)',
    colorWheel: 'linear-gradient(to right, #F4D03F,  #16A085, #e35d5b)',
  },
  fonts: {
    body: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Roboto,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
  },
  fontFamily: {
    default: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Roboto,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
  },
  fontSizes: [
    10, 11, 14, 18, 24, 36, 48, 72, 92, 118
  ],
  palette: {
    primary: ['#2855de'],
    blue: ['#5a67c4', '#5168a4', '#2855de', '#92aff8'],
    purple: ['#4e3d63', '#b294d8'],
    rust: ['#b34a4a'],
    turquoise: ['#56c4ac'],
    grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff']
  },
  colors: {
    // Brand Color Styles
    primary:'#2855de',
    secondary: '#09272a',
    tertiary: '#F45C43',

    // Generic color Styles
    // blue:'#2855de',
    blue:'#5a67c4',
    blueAlice:'#edf2f6',
    blueAlge: '#09272a',
    blueLight:'#466fec',
    bluePurple: '#5646ff',
    blueZodiac: '#3f4257',
    charcoal: '#4a4a4a',
    cherry: '#F45C43',
    disabled: '#c8c9d1',
    // green: '#0dcf7c',
    // green: '#34bfa3',
    green: '#34bfa3',
    gray: '#f2f2f2',
    grayLine: '#e0e0e0',
    grayBackground: '#f3f4f8',
    grayBlue: '#9aaeb7',
    grayDark: '#9e9e9e',
    grayLight: '#f6f6f6',
    grayMute: '#d8d8d8',
    // grayMute: '#c8c9d1',
    grayNavy: '#494C62',
    grayHeader: '#ebecf1',
    grayItem: '#fbfbfc',
    neon: '#90ff90',
    red: '#f4516c',
    rust: '#b34a4a',
    purple: '#716aca',
    whiteOpaque: 'rgba(255,255,255, 0.7)'
  },
  gradient: {
    // Brand Gradient Styles
    primary: ['#2855de', '#466fec'],
    seconday: ['#2855de', '#466fec'],
    tertiary: ['#2855de', '#466fec'],

    // Generic Gradient Styles
    black: ['#232526', '#414345'],
    blueZodiac: ['#3f4257', '#333965'],
    blueOcean: ['#3f4e90', '#5a68a4' ],
    // blue: ['#2855de', '#466fec'],
    blue: ['#46a7ec', '#282ede'],
    blurple: ['#0599f7', '#680294'],
    charcoal: ['#283048', '#859398'],
    cherry: ['#EB3349', '#F45C43'],

    // green: ['#00AFA6', '#00C9A7'],
    green: ['#a1c900', '#00af4e'],
    moss: ['#e5ed68' ,'#45cc81', '#00C9A7'],
    gray: ['#e7dfdf', '#f3f8fa'],
    purple: ['#4E3DF5', '#6832A2'],
    // orange: ['#ff5e3a', '#ff5e3a'],
    orange: ['#ffa319', '#fb3306'],
    orangish: ['#ffb123', '#e9a100'],
    red: ['#ef473a', '#cb2d3e'],
    sunrise: ['#f6d365', '#fda085', '#f6d365'],
    sunset: ['#c521b6', '#fda919', ],
    bluePurple: ['#2583b0', '#7324cc'],
    white: ['#FFF','#fefefe'],
  },
  textShadow: {
    0: [
      '1px 2px 1px rgba(93, 93, 93, 0.15)',
      '2px 1px 9px rgba(0,0,0, 0.0125)',
      '1px 2px 15px rgba(0,0,0, 0.05)', 
      '2px 2px 1px rgba(93,93,93, 0.15)'
    ],
    light:'0 2px 0px rgba(50,50,93,.08), 1px 0px 1px rgba(0,0,0,.20), 2px 2px 3px rgba(93,93,93,.1)',
    lightHazy: [
      '0px 2px 7px rgba(50,50 , 93, 0.08)',
      '0px 1px 9px rgba(0,0,0, 0.05)',
      '1px 2px 5px rgba(0,0,0, 0.15)', 
      '0px 2px 0px rgba(93,93,93, 0.15)'
    ],
    1:[
      '1px 2px 1px rgba(93', '93', '93', '0.15)', '2px 1px 4px rgba(0,0,0', '0.05)',
      '1px 2px 4px rgba(0,0,0', '0.05)', '2px 2px 1px rgba(20,20,20', '0.15)',
      '1px 1px 0px rgba(0', '0', '0', '0.05)', '1px 1px 2px rgba(93,93,93', '0.15)'
    ],
    dark:[
      '0 4px 6px rgba(50,50,93, .14)', 
      '0 1px 3px rgba(0,0,0, .275)',
      '1px 1px 2px rgba(0,0,0, .275)',
      '0 1px 5px rgba(93,93,93, .15)'
    ],
    darkHazy: [
      '0px 2px 7px rgba(50,50 , 93, 0.15)',
      '2px 1px 12px rgba(0,0,0, 0.15)',
      '1px 2px 7px rgba(0,0,0, 0.175)', 
      '0px 2px 0px rgba(93,93,93, 0.15)'
    ],
    darkPurple:[
      '0 4px 6px rgba(13, 13, 150, 0.068)',
      '0 1px 3px rgba(87, 28, 173, 0.25)', 
      '0 1px 5px rgba(72, 20, 222, 0.45)'
    ],
    
  },
  shadows: {
    0: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    1: '0 2px 4px rgba(0,0,0,0.14), 0 2px 3px rgba(0,0,0,0.20)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    6: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    7: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    8: '0px 2px 20px rgba(0, 0, 0, 0.13), 2px 2px 20px rgba(0, 0, 0, 0)',
    float: '2px 12px 8px -8px #373737a3, 0px 38px 20px 3px #0c0d0d14',
    input: '0px 1px 5px rgba(0, 0, 0, 0.09)',
    cardHover: '5px 7px 26px -5px #e1e1f059, 5px -6px 17px -5px #e1e1f0ba',
    light: '5px 7px 26px -5px #e1e1f0',
    lightHover: '0 3px 16px -4px #a09ccf',
    darkHover: '0 13px 21px -4px #a09ccf',
    // input: '1px 1px 1px rgba(0, 0, 0, 0.22)',

    // Inset
    insetBottom: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetBottomLight: [
      'inset 0 -10px 10px -10px rgba(0,0,0,0.19)',
      'inset 0 -10px 10px -10px rgba(0,0,0,0.23)'
    ],
    insetBottomHeavy: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.73)'
    ],
    insetTop: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetTopLight: 'inset -3px 11px 6px -18px rgba(0,0,0,0.19), inset 0px 16px 8px -15px rgba(0,0,0,0.23)',
    insetTopHeavy: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.73)'
    ],

    rightLight: [
      '9px 0px 10px 0px rgba(0,0,0,0.19)',
    ],
    insetLeftLight: [
      'inset 10px 0px 15px 0px rgba(0, 0, 0, 0.24)',
    ],
  }
}

export default theme
