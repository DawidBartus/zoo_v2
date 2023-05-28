const Navigation = () => {
  const scrollToElement = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <button onClick={() => scrollToElement('1')}>Hotel</button>
      <button onClick={() => scrollToElement('price')}>Cennik</button>
      <button onClick={() => scrollToElement('b')}>Kontakt</button>
    </nav>
  );
};

export default Navigation;
