import iconNinePoints from 'shared/assets/img/nine-points.svg';
import iconArrowBack from 'shared/assets/img/arrow-back.svg';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

const sections: string[] = ['Просмотр', 'Управление'];

const Header = () => {
  const [selectedSection, setSelectedSection] = useState<string>('Просмотр');
  return (
    <header className={styles.header}>
      <img src={iconNinePoints} alt="" className={styles.iconNinePoints} />
      <img src={iconArrowBack} alt="" className={styles.iconArrowBack} />
      {sections.map((nameOfSection) => (
        <button
          onClick={() => setSelectedSection(nameOfSection)}
          className={clsx(
            styles.btn,
            selectedSection === nameOfSection && styles.btnActive
          )}
          type="button"
        >
          {nameOfSection}
        </button>
      ))}
    </header>
  );
};

export { Header };
