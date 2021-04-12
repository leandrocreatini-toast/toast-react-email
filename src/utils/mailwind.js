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

const spacingClasses = makeTailwindSizedClasses(
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
    return { ...acc, ...rules }
  }, {})
}

function convertFromTailwind(tailwindClasses) {
  return (cssClassObject) => {
    let output = {}
    Object.keys(cssClassObject).forEach((className) => {
      output[className] = cssClassObject[className]
        .split(' ')
        .reduce((acc, tailwindClass) => {
          return { ...acc, ...tailwindClasses[tailwindClass] }
        }, {})
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

const typographyStyles = {
  'type-display': {
    fontFamily: '"Effra Regular", Arial',
    fontSize: '68px',
    lineHeight: '68px',
    letterSpacing: 'normal'
  },
  'type-headline-1': {
    fontFamily: '"Effra Regular", Arial',
    fontSize: '50px',
    lineHeight: '50px',
    letterSpacing: 'normal'
  },
  'type-headline-2': {
    fontFamily: '"Effra Regular", Arial',
    fontSize: '38px',
    lineHeight: '42px',
    letterSpacing: 'normal'
  },
  'type-headline-3': {
    fontFamily: '"Effra Regular", Arial',
    fontSize: '30px',
    lineHeight: '34px',
    letterSpacing: 'normal'
  },
  'type-headline-4': {
    fontFamily: '"Effra Regular", Arial',
    fontSize: '26px',
    lineHeight: '30px',
    letterSpacing: 'normal'
  },
  'type-headline-5': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '22px',
    lineHeight: '26px',
    letterSpacing: 'normal'
  },
  'type-default': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0.2
  },
  'type-small': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: 0.2
  },
  'type-subhead': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '15px',
    lineHeight: '17px',
    letterSpacing: 0.5
  },
  'type-caption': {
    fontFamily: '"Effra Regular", Arial',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: 0.4
  },
  'type-overline': {
    fontFamily: '"Source Sans Pro", Arial',
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: 1.2
  }
}

const displayStyles = {
  hidden: { display: 'none' },
  block: { display: 'block' },
  'inline-block': { display: 'inline-block' },
  inline: { display: 'inline' },
  flex: { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  table: { display: 'table' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-column-group': { display: 'table-column-group' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row-group': { display: 'table-row-group' },
  'table-row': { display: 'table-row' },
  'flow-root': { display: 'flow-root' },
  grid: { display: 'grid' },
  'inline-grid': { display: 'inline-grid' },
  contents: { display: 'contents' }
}

const colorStyles = {
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
  'text-gray-125': { color: '#252525' },
  'text-gray-110': { color: '#474747' },
  'text-gray-100': { color: '#666666' },
  'text-gray-75': { color: '#7A7A7A' },
  'text-gray-50': { color: '#C0C0C0' },
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
  border: { borderStyle: 'solid', borderWidth: '1px' },
  'border-0': { borderStyle: 'solid', borderWidth: '0px' },
  'border-2': { borderStyle: 'solid', borderWidth: '2px' },
  'border-4': { borderStyle: 'solid', borderWidth: '4px' },
  'border-8': { borderStyle: 'solid', borderWidth: '8px' }
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

const floatStyles = {
  'float-right': { float: 'right' },
  'float-left': { float: 'left' },
  'float-none': { float: 'none' },
  'clear-left': { clear: 'left' },
  'clear-right': { clear: 'right' },
  'clear-both': { clear: 'both' },
  'clear-none': { clear: 'none' },
  'clear-fix': { clear: 'both', display: 'table' }
}

const supportedTailwindClasses = {
  ...spacingClasses,
  ...borderStyles,
  ...borderRadiusStyles,
  ...borderColorStyles,
  ...displayStyles,
  ...fontStyleStyles,
  ...fontWeightStyles,
  ...lineHeight,
  ...listStyles,
  ...typographyStyles,
  ...colorStyles,
  ...floatStyles
}

export const fromTailwind = convertFromTailwind(supportedTailwindClasses)
