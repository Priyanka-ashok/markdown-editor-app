import { css } from 'styled-components'
const sizes = {
   tablet: 700,
   mobile: 500
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})

export const lightTheme = {
  light : '#F0F0F0',
  text : 'black',
  fontFamily: 'Open Sans, sans-serif'
 }
 
 export const darkTheme = {
   light : '#474747',
   color : 'white',
   fontFamily: 'Cabin, sans-serif'
 }

 