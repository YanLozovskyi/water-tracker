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
        <div>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <div>
          <TodayWaterList />
          <MonthStatsTable />
        </div>
      </BoxHome>
    </HomeSection>
  );
};

export default Home;
