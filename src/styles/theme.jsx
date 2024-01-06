//  Usage example:

// const SomeName = styled.div`
//   color: ${({theme}) => theme.color.black};

//   &:hover, &:focus {
//     color: ${({theme}) => theme.color.secondaryLightBlue};
//     background-color: ${({theme}) => theme.color.secondaryLightBlue
//   };
//   }

// @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
//   color: ${({theme}) => theme.color.black};
// }
// @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
//   color: ${({theme}) => theme.color.black};
// }
//  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
//   color: ${({theme}) => theme.color.black};
//  }

export const theme = {
  // // Colors

  // color: {
  //   white: '#FFFFFF',
  //   black: '#2F2F2F',
  //   accent: '#407BFF',

  //   secondaryWhite: '#ecf2ff',
  //   secondaryRed: '#ef5050',
  //   secondaryLightBlue: '#9ebbff',
  //   secondaryYellow: '#ff9d43',
  //   secondaryPowderBlue: '#d7e3ff',
  // },

  // // Breakpoints
  // breakpoint: {
  //   mobile: '320px',
  //   tablet: '768px',
  //   desktop: '1440px',
  // },

  // // Animation (transition) on hover & focus
  // transition: {
  //   main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
  //   modal: '300ms ease-in-out',
  // },

  // boxShadowforButton: {
  //   normalButton: '0 4px 8px rgba(64, 123, 255, 0.34)',
  //   hoverButton: '0 4px 14px rgba(64, 123, 255, 0.54)',
  //   activeButton: 'none',
  // },

  // modalBoxShadow: {
  //   modal: '0 4px 14px rgba(64, 123, 255, 0.3)',
  // },

  lightTheme: {
    // Colors
    color: {
      white: '#FFFFFF',
      black: '#2F2F2F',
      accent: '#407BFF',
      secondaryWhite: '#ecf2ff',
      secondaryRed: '#ef5050',
      secondaryLightBlue: '#9ebbff',
      secondaryYellow: '#ff9d43',
      secondaryPowderBlue: '#d7e3ff',
    },
    // Animation (transition) on hover & focus
    boxShadowforButton: {
      normalButton: '0 4px 8px rgba(64, 123, 255, 0.34)',
      hoverButton: '0 4px 14px rgba(64, 123, 255, 0.54)',
      activeButton: 'none',
    },
    transition: {
      main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
      modal: '300ms ease-in-out',
    },
    modalBoxShadow: {
      modal: '0 4px 14px rgba(64, 123, 255, 0.3)',
    },
    // Breakpoints
    breakpoint: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1440px',
    },
  },

  darkTheme: {
    // Colors
    color: {
      white: '#1F283A',
      black: '#FFFFFF',
      accent: '#407BFF',
      secondaryWhite: '#2E4167',
      secondaryRed: '#ef5050',
      secondaryLightBlue: '#7FAAFD',
      secondaryYellow: '#DF9E63',
      secondaryPowderBlue: '#283F6C',
    },
    // Animation (transition) on hover & focus
    boxShadowforButton: {
      normalButton: '0 4px 8px rgba(64, 123, 255, 0.18)',
      hoverButton: '0 4px 8px rgba(64, 123, 255, 0.18)',
      activeButton: 'none',
    },
    transition: {
      main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
      modal: '300ms ease-in-out',
    },
    modalBoxShadow: {
      modal: '0 4px 8px rgba(50, 73, 120, 0.5)',
    },
    // Breakpoints
    breakpoint: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1440px',
    },
  },
};

// export const media = breakpoint => {
//   return `@media screen and (min-width: ${breakpoint[0]}px)`;
// };

// export const breakpoint = {
//   mobile: '320px',
//   tablet: '768px',
//   desktop: '1440px',
// };

// export const media = size => {
//   return `@media screen and (min-width: ${breakpoint[size]}px)`;
// };
