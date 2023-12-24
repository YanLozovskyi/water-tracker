import { DailyNorma } from 'components';
import MonthStatsTable from '../../components/Home/MonthStatsTable/MonthStatsTable';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <DailyNorma />
      <MonthStatsTable />
    </div>
  );
};

export default Home;
