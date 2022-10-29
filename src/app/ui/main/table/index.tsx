import styles from './styles.module.scss';
import Tbody from './tbody';

const sections: string[] = [
  'Уровень',
  'Наименование работ',
  'Основная з/п',
  'Накладные расходы',
  'Сметная прибыль',
];

const Table = () => {
  console.log(3);
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.top}>
          <tr className={styles.tr}>
            {sections.map((section) => (
              <th>{section}</th>
            ))}
          </tr>
        </thead>
        <Tbody />
      </table>
    </div>
  );
};

export default Table;
