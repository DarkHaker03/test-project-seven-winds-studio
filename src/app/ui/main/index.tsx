import styles from './styles.module.scss';
import Table from './table';

const Main = () => (
  <main className={styles.main}>
    <div className={styles.top}>
      <div className={styles.text}>Строительно-монтажные работы</div>
    </div>
    <Table />
  </main>
);

export default Main;
