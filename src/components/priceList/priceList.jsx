import { normalPrice, holidayPrice, extras } from './priceListUtils/price';
import style from './priceListStyle.module.css';
import { useState } from 'react';

const CalcComponent = ({ price, onTotalPriceChange }) => {
  const [calc, setCalc] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className={style.priceListCalcOn}>
      <button
        className={style.calcBttn}
        onClick={() => {
          setCalc(prevState => prevState + 1);
          setTotalPrice(prevTotalPrice => (calc + 1) * price);
          onTotalPriceChange((calc + 1) * price);
        }}
      >
        +
      </button>
      {calc > 0 ? (
        <button
          className={style.calcBttn}
          onClick={() => {
            setCalc(prevState => prevState - 1);
            setTotalPrice(prevTotalPrice => (calc - 1) * price);
            onTotalPriceChange((calc - 1) * price);
          }}
        >
          -
        </button>
      ) : (
        ''
      )}
      <p className={style.proceListParagraph}>Ilość: {calc}</p>
      <p className={style.proceListParagraph}>Koszt: {totalPrice}</p>
    </div>
  );
};

const PriceList = () => {
  const [isCalcOn, setIsCalcOn] = useState(false);
  const [totalPrices, setTotalPrices] = useState([]);

  const handleTotalPriceChange = (index, totalPrice) => {
    setTotalPrices(prevTotalPrices => {
      const updatedTotalPrices = [...prevTotalPrices];
      updatedTotalPrices[index] = totalPrice;
      return updatedTotalPrices;
    });
  };

  const priceListGenerator = array => {
    return array.map(({ id, price, service }, index) => {
      return (
        <li key={id} className={style.priceListIteam}>
          <p className={style.priceListPrice}>
            {price} <span>zł</span>
          </p>
          {isCalcOn ? (
            <CalcComponent
              price={price}
              onTotalPriceChange={totalPrice =>
                handleTotalPriceChange(index, totalPrice)
              }
            />
          ) : (
            ''
          )}
          <p className={style.proceListParagraph}>{service}</p>
        </li>
      );
    });
  };

  const calculateTotalPriceSum = () => {
    const numbersOnly = totalPrices.filter(item => typeof item === 'number');
    const sum = numbersOnly.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };

  return (
    <section id="price" className={style.priceListHolder}>
      <p>Standard</p>
      <button
        className={style.calcBttnOnOff}
        onClick={() => {
          setIsCalcOn(!isCalcOn);
        }}
      >
        Kalkulator pobytu
      </button>
      <ul className={style.priceList}>{priceListGenerator(normalPrice)}</ul>
      <p>holiday</p>
      <ul className={style.priceList}>{priceListGenerator(holidayPrice)}</ul>
      <p>Extras</p>
      <ul className={style.priceList}>{priceListGenerator(extras)}</ul>
      {isCalcOn ? (
        <p className={style.totalSumFixed}>
          Total Sum: {calculateTotalPriceSum()}
        </p>
      ) : (
        ''
      )}
    </section>
  );
};

export default PriceList;
