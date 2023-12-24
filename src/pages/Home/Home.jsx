import { DailyNorma } from 'components';
import MonthStatsTable from '../../components/Home/MonthStatsTable/MonthStatsTable';
import { DailyNorma, WaterRatioPanel } from 'components';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <DailyNorma />
      <MonthStatsTable />
      <WaterRatioPanel />
      <button onClick={openModal}>Open Modal</button>

    </div >
  );
};

export default Home;
