import iconNinePoints from 'shared/assets/img/nine-points.svg';
import iconArrowBack from 'shared/assets/img/arrow-back.svg';
import styles from './styles.module.scss';
import { Sections } from './sections';

const Header = () => (
  <header className={styles.header}>
    <img src={iconNinePoints} alt="" className={styles.iconNinePoints} />
    <img src={iconArrowBack} alt="" className={styles.iconArrowBack} />
    <Sections />
  </header>
);

export { Header };
