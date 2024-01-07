import styled from '@emotion/styled';

export const TeamBox = styled.div`
  width: 768px;
  padding: 0 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h2`
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.78;
  /* margin-bottom: 24px; */
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 0;
  /* margin-left: auto;
  margin-right: auto; */
`;

export const Item = styled.li`
  width: 168px;
  height: 253px;
  border-radius: 10px;
  background: #fff;

  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const Photo = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;

  & div {
    display: flex;
    gap: 12px;
  }
`;

export const Name = styled.h3`
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const Role = styled.p`
  color: #2f2f2f;
  font-size: 12px;
  line-height: 1.66;
  margin-bottom: 4px;
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

// export const SocialIcon = styled.svg`
//   width: 24px;
//   height: 24px;
//   fill: transparent;
// `;
