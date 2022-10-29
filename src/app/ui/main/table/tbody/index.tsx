// import iconPackageOne from 'shared/assets/img/package-one.svg';
// import iconPackageTwo from 'shared/assets/img/package-two.svg';
// import iconFile from 'shared/assets/img/file.svg';

// import styles from './styles.module.scss';

// type data = {
//   level: 0 | 1 | 2;
//   type: 'file' | 'package';
// };

// const arr: data[] = [
//   { level: 0, type: 'package' },
//   { level: 1, type: 'package' },
//   { level: 2, type: 'file' },
//   { level: 2, type: 'file' },
// ];

// const Tbody = () => (
//   <tbody>
//     {arr.map(({ level, type }) => (
//       <tr>
//         <td>
//           <div
//             className={styles.container}
//             style={{
//               marginLeft: 16 * (type === 'package' ? level : level - 1),
//             }}
//           >
//             {level === 0 && (
//               <img className={styles.img} src={iconPackageOne} alt="" />
//             )}
//             {level === 1 && (
//               <img className={styles.img} src={iconPackageTwo} alt="" />
//             )}
//             {type === 'file' && (
//               <img src={iconFile} alt="" style={{ marginLeft: 12 }} />
//             )}
//             {level !== 0 && (
//               <div
//                 className={styles.line}
//                 style={{ transform: `translate(${16 * (level - 2)}px,-55px)` }}
//               >
//                 <div className={styles.verticalLine} />
//                 <div className={styles.gorizontalLine} />
//               </div>
//             )}
//           </div>
//         </td>
//         <td>
//           <input type="text" />
//         </td>
//         <td>1</td>
//         <td>1</td>
//         <td>1</td>
//       </tr>
//     ))}
//   </tbody>
// );

// export default Tbody;

import iconPackageOne from 'shared/assets/img/package-one.svg';
import iconPackageTwo from 'shared/assets/img/package-two.svg';
import iconFile from 'shared/assets/img/file.svg';

import styles from './styles.module.scss';

type data = {
  level: 0 | 1 | 2;
  type: 'file' | 'package';
};

const arr: data[] = [
  { level: 0, type: 'package' },
  { level: 1, type: 'package' },
  { level: 2, type: 'file' },
  { level: 2, type: 'file' },
  { level: 0, type: 'package' },
  { level: 1, type: 'package' },
  { level: 2, type: 'file' },
  { level: 2, type: 'file' },
  { level: 2, type: 'file' },
  { level: 1, type: 'package' },
];

const length = arr.map(({ level }, idx) => {
  if (level === 0) {
    return idx;
  }
  return null;
});

const Tbody = () => (
  <tbody>
    {arr.map(({ level, type }, idx) => {
      // let lenth2 = 0;
      if (level === 1) {
        // lenth2 = length.filter((item));
      }
      return (
        <tr>
          <td>
            <div
              className={styles.container}
              style={{
                marginLeft: level * 16,
              }}
            >
              {level === 0 && (
                <img className={styles.img} src={iconPackageOne} alt="" />
              )}
              {level === 1 && (
                <img className={styles.img} src={iconPackageTwo} alt="" />
              )}
              {type === 'file' && (
                <img
                  src={iconFile}
                  alt=""
                  className={styles.img}
                  style={{ marginLeft: 12, left: 0 }}
                />
              )}
              {level !== 0 && (
                <div
                  className={styles.line}
                  style={{ transform: `translate(0,-55px)` }}
                >
                  <div
                    className={styles.verticalLine}
                    style={{ height: '200px' }}
                  />
                  <div className={styles.gorizontalLine} />
                </div>
              )}
            </div>
          </td>
          <td>
            <input type="text" />
          </td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      );
    })}
  </tbody>
);

export default Tbody;
