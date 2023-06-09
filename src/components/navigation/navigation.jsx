import style from './navigationStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToElement = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    let isScrolling;

    const handleScrollEnd = () => {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        setIsScrolled(false);
      }, 800);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

  return (
    <>
      <nav
        className={`${style.navContainer} ${
          isScrolled ? style.displayNone : ''
        }`}
        id="menu"
      >
        <button onClick={() => scrollToElement('services')}>Hotel</button>
        <button onClick={() => scrollToElement('price')}>Cennik</button>
        <button onClick={() => scrollToElement('footer')}>Kontakt</button>
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
