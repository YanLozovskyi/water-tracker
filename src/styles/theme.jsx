/* Usage example:

const SomeName = styled.div`
  color: ${({theme}) => theme.color.black};
  color: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.accent};

  &:hover, &:focus {
    color: ${({theme}) => theme.color.secondaryLightBlue};
    background-color: ${({theme}) => theme.color.secondaryLightBlue
  };
  }



@media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
  color: ${({theme}) => theme.color.black};
}
@media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
  color: ${({theme}) => theme.color.black};
}
 @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  color: ${({theme}) => theme.color.black};
 }

`
*/

export const theme = {
  // Colors

  color: {
    black: '#2F2F2F',
    white: '#FFFFFF',
    accent: '#407BFF',

    secondaryWhite: '#ecf2ff',
    secondaryRed: '#ef5050',
    secondaryLightBlue: '#9ebbff',
    secondaryYellow: '#ff9d43',
    secondaryPowderBlue: '#d7e3ff',
  },

  // Breakpoints
  breakpoint: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1440px',
  },

  // Animation (transition) on hover & focus
  transition: {
    main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
    modal: '300ms ease-in-out',
  },

  boxShadowforButton: {
    normalButton: '0 4px 8px rgba(64, 123, 255, 0.34)',
    hoverButton: '0 4px 14px rgba(64, 123, 255, 0.54)',
    activeButton: 'none',
  },

  modalBoxShadow: {
    modal: '0 4px 14px rgba(64, 123, 255, 0.3)',
  },
};
