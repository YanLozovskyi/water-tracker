import styled from '@emotion/styled';

export const DaysGeneralStatsModal = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`;

export const DaysGeneralStatsList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const DaysGeneralStatsItem = styled.li`
  display: flex;
  gap: 6px;
`;

export const DaysGeneralStatsInfo = styled.span`
  color: ${({ theme }) => theme.color.accent};
  font-size: 16px;
  font-weight: 500;
`;
export const DaysGeneralStatsData = styled.p`
  color: ${({ theme }) => theme.color.accent};
`;
