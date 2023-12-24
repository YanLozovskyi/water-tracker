import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 12px;
`;

export const Item = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.accent};
    border-radius: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    list-style-position: inside;
  }
`;

export const Tab = styled.div`
  display: inline-block;
  max-width: 280px;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.color.secondaryWhite};
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 32px 24px;
    min-width: 494px;
    height: 332px;
    list-style-position: inside;
    margin: 0;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
