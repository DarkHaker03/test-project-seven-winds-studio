import { useEffect } from 'react';
import { Header } from 'widgets/header/ui';
import { SideBar } from 'widgets/sideBar/ui';
import Main from './main';
import styles from './styles.module.scss';

const eID = 2358;
const rowName = '77d886a9-2a6a-49e9-8e1c-3a3a7377e229';

const data = JSON.stringify({
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  parentId: null,
  rowName: 'sffffing',
  salary: 0,
  supportCosts: 0,
});

// fetch('http://185.244.172.108:8081/v1/outlay-rows/entity/2358/row/create', {
//   method: 'POST',
// headers: {
//   'Content-Type': 'application/json',
// },
//   body: data,
// });

const App = () => {
  console.log(3);
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    // xhr.open(
    //   'POST',
    //   'http://185.244.172.108:8081/v1/outlay-rows/entity/2358/row/create'
    // );
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(data);
    // fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`, {
    //   method: 'POST',
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res, 'list'));
    // console.log(data);
    fetch('http://185.244.172.108:8081/v1/outlay-rows/entity/2358/row/create', {
      method: 'POST',
      headers: [
        // [
        //   'Accept',
        //   'application/json,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        // ],
        // ['Accept', '*/*'],
        // ['Content-Type', 'application/json'],
        // ['Content-Length', '193'],
        // ['Host', '185.244.172.108:8081'],
        // [
        //   'User-Agent',
        //   'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.124 Mobile Safari/537.36',
        // ],
        // ['Accept', '*/*'],
        // ['Accept-Encoding', 'gzip, deflate, br'],
        // ['Connection', 'keep-alive'],
        ['Access-Control-Allow-Origin', '*'],
        ['Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'],
        [
          'Access-Control-Allow-Headers',
          'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        ],
        // ['Access-Control-Allow-Headers', '*'],
      ],
      // credentials: 'include',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => console.log(res, 'create'));
    // fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`, {
    //   method: 'GET',
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res, 'list'));
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default App;
