import { ReactComponent as Meditation } from '../../assets/sidemenuIcons/meditation-icon.svg';
import { ReactComponent as Swimming } from '../../assets/sidemenuIcons/swimming-icon.svg';
import { ReactComponent as Bike } from '../../assets/sidemenuIcons/bike-icon.svg';
import { ReactComponent as WeightTrain } from '../../assets/sidemenuIcons/weight-icon.svg';
import style from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={style.sideBarContainer}>
      <div className={style.iconContainer}>
        <Meditation width={50} className={style.icon} />
        <Swimming width={50} className={style.icon} />
        <Bike width={50} className={style.icon} />
        <WeightTrain width={50} className={style.icon} />
      </div>
      <div className={style.copyright}>
        <span>Copyright, SportSee 2020</span>
      </div>
    </div>
  );
}
