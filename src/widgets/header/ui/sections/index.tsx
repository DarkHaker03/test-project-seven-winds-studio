import clsx from 'clsx';
import { setSelectedSection } from 'widgets/header/model';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import styles from './styles.module.scss';

const Sections = () => {
  const { sections, selectedSection } = useAppSelector(
    (state) => state.headerReducer
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {sections.map((sectionName) => (
        <button
          key={sectionName}
          onClick={() => dispatch(setSelectedSection(sectionName))}
          className={clsx(
            styles.btn,
            selectedSection === sectionName && styles.btnActive
          )}
          type="button"
        >
          {sectionName}
        </button>
      ))}
    </>
  );
};

export { Sections };
