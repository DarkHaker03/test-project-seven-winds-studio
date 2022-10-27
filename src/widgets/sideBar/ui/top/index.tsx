import iconArrowBottom from 'shared/assets/img/arrow-bottom.svg';
import styles from './styles.module.scss';

const Top = () => (
  <div className={styles.top}>
    <div>
      <div className={styles.fz14}>Название проекта</div>
      <div className={styles.fz10}>Аббревиатура</div>
    </div>
    <button type="button">
      <img src={iconArrowBottom} alt="" />
    </button>
  </div>
);

export default Top;
