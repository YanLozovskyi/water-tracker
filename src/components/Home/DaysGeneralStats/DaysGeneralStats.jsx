import { DaysGeneralStatsModal, DaysGeneralStatsList, DaysGeneralStatsInfo, DaysGeneralStatsItem, DaysGeneralStatsData } from "./DaysGeneralStats.styled"

const formatMonth = monthYearString => {
  const [year, month] = monthYearString.split('-').map(Number);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[month - 1];
};

export const DaysGeneralStats = ({ day, stats: { norma, full, servings }, month }) => {
  return <DaysGeneralStatsModal>
    <DaysGeneralStatsList>
      <DaysGeneralStatsItem><DaysGeneralStatsData>{day}, { formatMonth(month)}</DaysGeneralStatsData></DaysGeneralStatsItem>
      <DaysGeneralStatsItem>Daily norma:<DaysGeneralStatsInfo>{norma }</DaysGeneralStatsInfo>
    </DaysGeneralStatsItem>
      <DaysGeneralStatsItem>Fulfillment of the daily norm:<DaysGeneralStatsInfo>{ full}</DaysGeneralStatsInfo></DaysGeneralStatsItem>
      <DaysGeneralStatsItem>How many servings of water:<DaysGeneralStatsInfo>{ servings}</DaysGeneralStatsInfo></DaysGeneralStatsItem></DaysGeneralStatsList>
  </DaysGeneralStatsModal>;
};
