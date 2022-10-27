import { Header } from 'widgets/header/ui';
import { SideBar } from 'widgets/sideBar/ui';
import styles from './styles.module.scss';

const App = () => {
  console.log(3);
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default App;
