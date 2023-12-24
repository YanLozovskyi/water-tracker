import { DailyNorma, WaterRatioPanel, MonthStatsTable } from 'components';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <DailyNorma />
      <MonthStatsTable />
      <WaterRatioPanel />
    </div >
  );
};

export default Home;
