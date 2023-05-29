import { normalPrice, holidayPrice, extras } from './priceListUtils/price';
import style from './priceListStyle.module.css';

const priceListGenerator = array => {
  return array.map(price => {
    return (
      <li key={price.id} className={style.priceListIteam}>
        <p>{price.price}</p>
        <p>{price.service}</p>
      </li>
    );
  });
};

const PriceList = () => {
  return (
    <section id="price" className={style.priceListHolder}>
      <ul className={style.priceList}>{priceListGenerator(normalPrice)}</ul>
      <ul className={style.priceList}>{priceListGenerator(holidayPrice)}</ul>
      <ul className={style.priceList}>{priceListGenerator(extras)}</ul>
    </section>
  );
};

export default PriceList;
