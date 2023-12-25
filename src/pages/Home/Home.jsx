import {
  DailyNorma,
  WaterRatioPanel,
  MonthStatsTable,
  TodayWaterList,
  Section,
} from 'components';

import { BoxHome } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <BoxHome>
        <DailyNorma />
        <WaterRatioPanel />
        <TodayWaterList />
        <MonthStatsTable />
      </BoxHome>
    </Section>
  );
};

export default Home;
