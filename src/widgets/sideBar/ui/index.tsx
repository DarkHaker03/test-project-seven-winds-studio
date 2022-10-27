import Bottom from './bottom';
import Top from './top';
import styles from './styles.module.scss';

const SideBar = () => (
  <aside className={styles.sideBar}>
    <Top />
    <Bottom />
  </aside>
);

export { SideBar };
