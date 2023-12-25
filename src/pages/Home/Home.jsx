import {
  DailyNorma,
  MonthStatsTable,
  TodayWaterList,
  WaterRatioPanel,
} from 'components';

import { BoxHome, HomeSection } from './Home.styled';

const Home = () => {
  return (
    <HomeSection>
      <BoxHome>
        <DailyNorma />
        <WaterRatioPanel />
        <TodayWaterList />
        <MonthStatsTable />
      </BoxHome>
    </HomeSection>
  );
};

export default Home;
