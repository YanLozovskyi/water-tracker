/* Usage example:

const SomeName = styled.div`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.input};
  

  &:hover, &:focus {
    color: ${({theme}) => theme.color.orangeFirst};
    background-color: ${({theme}) => theme.color.inputActive};
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
    color: ${({theme}) => theme.color.black};
    background-color: ${({theme}) => theme.color.accent};
  }
`
*/

export const theme = {
  // Colors
  color: {
    black: '#2F2F2F',
    white: '#FFFFFF',
    accent: '#407BFF',
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
};
