import { DailyNorma, WaterRatioPanel, MonthStatsTable, Section } from 'components';

const Home = () => {
  return (
    <Section>
      <h1>Home</h1>
      <DailyNorma />
      <MonthStatsTable />
      <WaterRatioPanel />
    </Section>
  );
};

export default Home;
