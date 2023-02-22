import NutritionCard from '../../components/NutritionCard';
import Header from '../../layouts/Header';
import SideBar from '../../layouts/SideBar';
import { ReactComponent as FireIcon } from '../../assets/nutritionCardIcons/fire-icon.svg';

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <SideBar />
      <NutritionCard nutrition="calories">
        <FireIcon />
      </NutritionCard>
    </div>
  );
}
