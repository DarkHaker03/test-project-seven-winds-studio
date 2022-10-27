import clsx from 'clsx';
import styles from './styles.module.scss';

const sections: string[] = ['Просмотр', 'Управление'];
const selectedSection = 'Просмотр';

const Sections = () => (
  <>
    {sections.map((sectionName) => (
      <button
        key={sectionName}
        className={clsx(
          styles.btn,
          selectedSection === sectionName && styles.active
        )}
        type="button"
      >
        {sectionName}
      </button>
    ))}
  </>
);

export { Sections };
