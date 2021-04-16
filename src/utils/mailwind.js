const spacingRulesMapping = {
  h: 'height',
  w: 'width',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft'
}

const sizingConfig = {
  baseSize: 4,
  sizes: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    28,
    32,
    36,
    40
  ]
}

const spacingStyles = makeTailwindSizedClasses(
  spacingRulesMapping,
  sizingConfig
)

function makeTailwindSizedClasses(mapping, config) {
  return Object.keys(mapping).reduce((acc, tailwindClass) => {
    const inlineCssName = mapping[tailwindClass]
    const rules = {}
    config.sizes.forEach((size) => {
      rules[`${tailwindClass}-${size}`] = {
        [inlineCssName]: `${size * config.baseSize}px`
      }
    })
    return blend(acc, rules)
  }, {})
}

function convertFromTailwind(tailwindClasses) {
  return (cssClassObject) => {
    let output = {}
    Object.keys(cssClassObject).forEach((className) => {
      output[className] =
        typeof cssClassObject[className] === 'string'
          ? cssClassObject[className]
              .split(' ')
              .reduce(
                (acc, tailwindClass) =>
                  blend(acc, tailwindClasses[tailwindClass]),
                {}
              )
          : cssClassObject[className]
    })
    return output
  }
}

const lineHeight = {
  'leading-none': {
    lineHeight: 1
  },
  'leading-tight': {
    lineHeight: 1.25
  },
  'leading-snug': {
    lineHeight: 1.375
  },
  'leading-normal': {
    lineHeight: 1.5
  },
  'leading-relaxed': {
    lineHeight: 1.625
  },
  'leading-loose': {
    lineHeight: 2
  },
  'leading-3': {
    lineHeight: '12px'
  },
  'leading-4': {
    lineHeight: '16px'
  },
  'leading-5': {
    lineHeight: '20px'
  },
  'leading-6': {
    lineHeight: '24px'
  },
  'leading-7': {
    lineHeight: '28px'
  },
  'leading-8': {
    lineHeight: '32px'
  },
  'leading-9': {
    lineHeight: '36px'
  },
  'leading-10': {
    lineHeight: '40px'
  }
}

const fontStyleStyles = {
  italic: { fontStyle: 'italic' },
  'not-italic': { fontStyle: 'normal' }
}

const fontSizeStyles = {
  'text-xs': { fontSize: '12px', lineHeight: '16px' },
  'text-sm': { fontSize: '14px', lineHeight: '18px' },
  'text-base': { fontSize: '16px', lineHeight: '24px' },
  'text-lg': { fontSize: '18px', lineHeight: '22px' },
  'text-xl': { fontSize: '20px', lineHeight: '28px' },
  'text-2xl': { fontSize: '24px', lineHeight: '32px' },
  'text-3xl': { fontSize: '30px', lineHeight: '36px' },
  'text-4xl': { fontSize: '36px', lineHeight: '40px' }
}

const fontWeightStyles = {
  'font-thin': { fontWeight: 100 },
  'font-extralight': { fontWeight: 200 },
  'font-light': { fontWeight: 300 },
  'font-normal': { fontWeight: 400 },
  'font-medium': { fontWeight: 500 },
  'font-semibold': { fontWeight: 600 },
  'font-bold': { fontWeight: 700 },
  'font-extrabold': { fontWeight: 800 },
  'font-black': { fontWeight: 900 }
}

const listStyles = {
  'list-none': { listStyleType: 'none' },
  'list-disc': { listStyleType: 'disc' },
  'list-decimal': { listStyleType: 'decimal' }
}

const textAlignStyles = {
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' }
}

const typographyStyles = {
  'type-headline-1': {
    fontFamily: '"Effra Medium", Arial',
    fontSize: '35px',
    lineHeight: '35px',
    letterSpacing: 'normal',
    color: '#1C1C1C',
    margin: '0'
  },
  'type-headline-2': {
    fontFamily: '"Effra Medium", Arial',
    fontSize: '18px',
    lineHeight: '32px',
    letterSpacing: 'normal',
    color: '#080809',
    margin: '0'
  },
  'type-headline-3': {
    fontFamily: '"Effra Medium", Arial',
    fontSize: '15px',
    lineHeight: '15px',
    letterSpacing: 'normal',
    color: '#080809',
    margin: '0'
  },
  'type-headline-4': {
    fontFamily: '"Effra Medium", Arial',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: 'normal',
    color: '#080809',
    margin: '0'
  },
  'type-headline-5': {
    fontFamily: '"Effra Medium", Arial',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 'normal',
    color: '#080809',
    margin: '0'
  },
  'type-default': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 0.2,
    color: '#525252',
    margin: '0'
  },
  'type-small': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '9px',
    lineHeight: '16px',
    letterSpacing: 0.2,
    color: '#525252'
  },
  'type-subhead': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '15px',
    lineHeight: '15px',
    letterSpacing: 0.5,
    color: '#1C1C1C'
  },
  'type-caption': {
    fontFamily: '"Effra Medium", Arial',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: 0.4
  },
  'type-overline': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: 1.2
  },
  underline: { textDecoration: 'underline' }
}

const displayStyles = {
  hidden: { display: 'none' },
  block: { display: 'block' },
  'inline-block': { display: 'inline-block' },
  inline: { display: 'inline' },
  table: { display: 'table' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-column-group': { display: 'table-column-group' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row-group': { display: 'table-row-group' },
  'table-row': { display: 'table-row' },
  contents: { display: 'contents' }
}

const textColorStyles = {
  'text-white': { color: '#fff' },
  'text-default': { color: '#252525' },
  'text-secondary': { color: '#666666' },
  'text-disabled': { color: '#C0C0C0' },
  'text-light': { color: '#fff' },
  'text-link': { color: '#2B4FB9' },
  'text-link-hover': { color: '#002182' },
  'text-error': { color: '#d40023' },
  'text-error-hover': { color: '#B4001E' },
  'text-warning': { color: '#c54300' },
  'text-success': { color: '#006400' },
  'text-neutral': { color: '#001b59' },
  // Gray
  'text-gray-150': { color: '#080809' },
  'text-gray-125': { color: '#252525' },
  'text-gray-110': { color: '#474747' },
  'text-gray-100': { color: '#666666' },
  'text-gray-75': { color: '#7A7A7A' },
  'text-gray-60': { color: '#525252' },
  'text-gray-50': { color: '#C0C0C0' },
  'text-gray-40': { color: '#A9A9A9' },
  'text-gray-30': { color: '#e5e5e5' },
  'text-gray-25': { color: '#f0f0f0' },
  'text-gray-0': { color: '#f7f7f7' },
  // Primary
  'text-primary-100': { color: '#002182' },
  'text-primary-75': { color: '#2B4FB9' },
  'text-primary-50': { color: '#5069C3' },
  'text-primary-25': { color: '#9aa6db' },
  'text-primary-0': { color: '#e7eaf6' },
  // Brand
  'text-brand-100': { color: '#c12700' },
  'text-brand-75': { color: '#DD3B11' },
  'text-brand-50': { color: '#FF4C00' },
  'text-brand-25': { color: '#ffa788' },
  'text-brand-0': { color: '#fce8e5' },
  //Red
  'text-red-100': { color: '#B4001E' }
}

const backgroundColorStyles = {
  'bg-transparent': { background: 'transparent' },
  'bg-black': { background: '#000' },
  'bg-richBlack': { background: '#252525' },
  'bg-white': { background: '#fff' },
  'bg-focus': { background: '#558EDD' },
  'bg-lighten-80': { background: 'rgba(255,255,255, 0.8)' },
  'bg-lighten-60': { background: 'rgba(255,255,255, 0.6)' },
  'bg-darken-56': { background: 'rgba(0, 0, 0, 0.56)' },
  'bg-darken-30': { background: 'rgba(0, 0, 0, 0.3)' },
  'bg-darken-20': { background: 'rgba(0, 0, 0, 0.2)' },
  'bg-darken-12': { background: 'rgba(0, 0, 0, 0.12)' },
  'bg-darken-8': { background: 'rgba(0, 0, 0, 0.08)' },
  'bg-darken-4': { background: 'rgba(0, 0, 0, 0.04)' },
  'bg-brand-100': { background: '#c12700' },
  'bg-brand-75': { background: '#DD3B11' },
  'bg-brand-50': { background: '#FF4C00' },
  'bg-brand-25': { background: '#ffa788' },
  'bg-brand-0': { background: '#fce8e5' },
  'bg-primary-100': { background: '#002182' },
  'bg-primary-75': { background: '#2B4FB9' },
  'bg-primary-50': { background: '#5069C3' },
  'bg-primary-25': { background: '#9aa6db' },
  'bg-primary-0': { background: '#e7eaf6' },
  'bg-red-100': { background: '#B4001E' },
  'bg-lavender-0': { background: '#F2E7FA' },
  'bg-orchid-0': { background: '#F9E4F7' },
  'bg-gray-125': { background: '#252525' },
  'bg-gray-110': { background: '#474747' },
  'bg-gray-100': { background: '#666666' },
  'bg-gray-75': { background: '#7A7A7A' },
  'bg-gray-50': { background: '#C0C0C0' },
  'bg-gray-30': { background: '#e5e5e5' },
  'bg-gray-25': { background: '#f0f0f0' },
  'bg-gray-0': { background: '#f7f7f7' },
  'bg-neutral-75': { background: '#001b59' },
  'bg-neutral-0': { background: '#E3F0FB' },
  'bg-warning-75': { background: '#c54300' },
  'bg-warning-0': { background: '#FEF6D9' },
  'bg-error-100': { background: '#B4001E' },
  'bg-error-75': { background: '#d40023' },
  'bg-error-0': { background: '#FFE6E9' },
  'bg-success-75': { background: '#006400' },
  'bg-success-0': { background: '#E8F7D4' }
}

const borderRadiusStyles = {
  'rounded-none': { borderRadius: '0px' },
  'rounded-sm': { borderRadius: '2px' },
  rounded: { borderRadius: '4px' },
  'rounded-md': { borderRadius: '6px' },
  'rounded-lg': { borderRadius: '8px' },
  'rounded-xl': { borderRadius: '12px' },
  'rounded-2xl': { borderRadius: '16px' },
  'rounded-3xl': { borderRadius: '24px' },
  'rounded-full': { borderRadius: '9999px' }
}

const borderStyles = {
  'border-collapse': { borderCollapse: 'collapse' },
  border: { borderStyle: 'solid', borderWidth: '1px' },
  'border-0': { borderStyle: 'solid', borderWidth: '0px' },
  'border-2': { borderStyle: 'solid', borderWidth: '2px' },
  'border-4': { borderStyle: 'solid', borderWidth: '4px' },
  'border-8': { borderStyle: 'solid', borderWidth: '8px' },
  'border-t': { borderStyle: 'solid', borderTopWidth: '1px' },
  'border-t-0': { borderStyle: 'solid', borderTopWidth: '0px' },
  'border-t-2': { borderStyle: 'solid', borderTopWidth: '2px' },
  'border-t-4': { borderStyle: 'solid', borderTopWidth: '4px' },
  'border-t-8': { borderStyle: 'solid', borderTopWidth: '8px' },
  'border-r': { borderStyle: 'solid', borderRightWidth: '1px' },
  'border-r-0': { borderStyle: 'solid', borderRightWidth: '0px' },
  'border-r-2': { borderStyle: 'solid', borderRightWidth: '2px' },
  'border-r-4': { borderStyle: 'solid', borderRightWidth: '4px' },
  'border-r-8': { borderStyle: 'solid', borderRightWidth: '8px' },
  'border-b': { borderStyle: 'solid', borderBottomWidth: '1px' },
  'border-b-0': { borderStyle: 'solid', borderBottomWidth: '0px' },
  'border-b-2': { borderStyle: 'solid', borderBottomWidth: '2px' },
  'border-b-4': { borderStyle: 'solid', borderBottomWidth: '4px' },
  'border-b-8': { borderStyle: 'solid', borderBottomWidth: '8px' },
  'border-l': { borderStyle: 'solid', borderLeftWidth: '1px' },
  'border-l-0': { borderStyle: 'solid', borderLeftWidth: '0px' },
  'border-l-2': { borderStyle: 'solid', borderLeftWidth: '2px' },
  'border-l-4': { borderStyle: 'solid', borderLeftWidth: '4px' },
  'border-l-8': { borderStyle: 'solid', borderLeftWidth: '8px' }
}

const borderColorStyles = {
  'border-transparent': { borderColor: 'transparent' },
  'border-current': { borderColor: 'currentColor' },
  'border-black': { borderColor: 'rgba(0, 0, 0, 1)' },
  'border-white': { borderColor: 'rgba(255, 255, 255, 1' },
  'border-gray-50': { borderColor: 'rgba(249, 250, 251, 1)' },
  'border-gray-100': { borderColor: 'rgba(243, 244, 246, 1)' },
  'border-gray-200': { borderColor: 'rgba(229, 231, 235, 1)' },
  'border-gray-300': { borderColor: 'rgba(209, 213, 219, 1)' },
  'border-gray-400': { borderColor: 'rgba(156, 163, 175, 1)' },
  'border-gray-500': { borderColor: 'rgba(107, 114, 128, 1)' },
  'border-gray-600': { borderColor: 'rgba(75, 85, 99, 1)' },
  'border-gray-700': { borderColor: 'rgba(55, 65, 81, 1)' },
  'border-gray-800': { borderColor: 'rgba(31, 41, 55, 1)' },
  'border-gray-900': { borderColor: 'rgba(17, 24, 39, 1)' }
}

const sizingStyles = {
  'w-full': { width: '100%' },
  'w-2-1/2': { width: '6px' },
  'w-1/2': { width: '50%' },
  'h-full': { height: '100%' },
  'h-2-1/2': { height: '6px' },
  'mx-auto': { marginRight: 'auto', marginLeft: 'auto' },
  'mr-auto': { marginRight: 'auto' },
  'ml-auto': { marginLeft: 'auto' }
}

const supportedTailwindClasses = blend(
  spacingStyles,
  sizingStyles,
  backgroundColorStyles,
  borderStyles,
  borderRadiusStyles,
  borderColorStyles,
  displayStyles,
  fontStyleStyles,
  fontSizeStyles,
  fontWeightStyles,
  textAlignStyles,
  lineHeight,
  listStyles,
  typographyStyles,
  textColorStyles
)

export const fromTailwind = convertFromTailwind(supportedTailwindClasses)

export function blend(...allStyles) {
  return allStyles.reduce((acc, styles) => ({ ...acc, ...styles }), {})
}
