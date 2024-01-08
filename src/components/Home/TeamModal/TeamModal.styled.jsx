import styled from '@emotion/styled';

export const TeamBox = styled.div`
  width: 280px;
  padding: 0 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 720px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 768px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.78;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  gap: 16px;

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 16px;
  } */
`;

export const Item = styled.li`
  width: 232px;
  height: 340px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};

  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 156px;
    height: 240px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 168px;
    height: 253px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const Photo = styled.img`
  width: 232px;
  height: 232px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 156px;
    height: 156px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 168px;
    height: 168px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 8px;
  }

  & div {
    display: flex;
    gap: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      gap: 12px;
    }
  }
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 12px;
  line-height: 1.66;
  margin-bottom: 8px;
  margin-top: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 4px;
    margin-top: 0;
  }
`;

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;
  fill: #9ebbff;

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    fill: ${({ theme }) => theme.color.accent};
  }
`;
