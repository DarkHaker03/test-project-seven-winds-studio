import clsx from 'clsx';
import iconFourPoints from 'shared/assets/img/four-points.svg';
import styles from './styles.module.scss';

const sections: string[] = ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР'];
const selectedSection = 'СМР';

const Bottom = () => (
  <div className={styles.bottom}>
    {sections.map((sectionName) => (
      <button
        key={sectionName}
        className={clsx(
          styles.btn,
          selectedSection === sectionName && styles.active
        )}
        type="button"
      >
        <img className={styles.icon} src={iconFourPoints} alt="" />
        <span>{sectionName}</span>
      </button>
    ))}
  </div>
);

export default Bottom;
