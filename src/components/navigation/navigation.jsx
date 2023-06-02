import style from './navigationStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const scrollToElement = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={style.navContainer} id="menu">
        <button onClick={() => scrollToElement('services')}>Hotel</button>
        <button onClick={() => scrollToElement('price')}>Cennik</button>
        <button onClick={() => scrollToElement('b')}>Kontakt</button>
      </nav>
      <FontAwesomeIcon
        icon={faArrowUp}
        className={style.arrowUp}
        onClick={() => scrollToElement('root')}
      />
    </>
  );
};

export default Navigation;
