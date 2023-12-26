import {
  DailyNorma,
  MonthStatsTable,
  TodayWaterList,
  WaterRatioPanel,
} from 'components';

import { BoxHome, HomeSection, HomeStatistics } from './Home.styled';

const Home = () => {
  return (
    <HomeSection>
      <BoxHome>
        <div>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <HomeStatistics>
          <TodayWaterList />
          <MonthStatsTable />
        </HomeStatistics>
      </BoxHome>
    </HomeSection>
  );
};

export default Home;
