import { normalPrice, holidayPrice, extras } from './priceListUtils/price';
import style from './priceListStyle.module.css';

const priceListGenerator = array => {
  return array.map(prices => {
    const { id, price, service } = prices;

    return (
      <li key={id} className={style.priceListIteam}>
        <p className={style.priceListPrice}>{price}</p>
        <p>{service}</p>
      </li>
    );
  });
};

const PriceList = () => {
  return (
    <section id="price" className={style.priceListHolder}>
      <p>Standard</p>
      <ul className={style.priceList}>{priceListGenerator(normalPrice)}</ul>
      <p>holiday</p>
      <ul className={style.priceList}>{priceListGenerator(holidayPrice)}</ul>
      <p>Extras</p>
      <ul className={style.priceList}>{priceListGenerator(extras)}</ul>
    </section>
  );
};

export default PriceList;
