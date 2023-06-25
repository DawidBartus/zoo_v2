import style from './navigationStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldBeDark, setShouldBeDark] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  const scrollToElement = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    let heightLessThan;

    if (scrollTop < 500) {
      heightLessThan = true;
      setShouldBeDark(false);
    }

    if (heightLessThan && scrollTop >= 400) {
      heightLessThan = false;
      console.log('works');
      setShouldBeDark(true);
    }

    if (scrollTop > 0) {
      setIsScrolled(true);
    }
    if (scrollTop === 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
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
          isScrolled ? style.displayFixed : ''
        }`}
        id="menu"
      >
        <button
          onClick={() => scrollToElement('services')}
          className={shouldBeDark ? style.blackButton : style.lightButton}
        >
          Hotel
        </button>
        <button
          onClick={() => scrollToElement('price')}
          className={shouldBeDark ? style.blackButton : style.lightButton}
        >
          Cennik
        </button>
        <button
          onClick={() => scrollToElement('footer')}
          className={shouldBeDark ? style.blackButton : style.lightButton}
        >
          Kontakt
        </button>
      </nav>
      {isOnTop ? (
        <FontAwesomeIcon
          icon={faArrowUp}
          className={style.arrowUp}
          onClick={() => scrollToElement('root')}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Navigation;
