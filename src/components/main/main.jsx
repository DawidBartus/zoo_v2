import { servicesPL } from './mainUtils/services';
import style from './mainStyle.module.css';

const MainPage = () => {
  const servicesGenerator = array => {
    return array.map(services => {
      const { id, service } = services;
      return <li key={id}>{service}</li>;
    });
  };

  return (
    <main className={style.mainContainder} id="services">
      <p className={style.mainContainderHeader}>Co oferujemy?</p>
      <ul className={style.mainServicesList}>
        {servicesGenerator(servicesPL)}
      </ul>
    </main>
  );
};

export default MainPage;
