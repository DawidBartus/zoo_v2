import { normalPrice, holidayPrice, extras } from './priceListUtils/price';

const priceListGenerator = array => {
  return array.map(price => {
    return (
      <li key={price.id}>
        <p>{price.price}</p>
        <p>{price.service}</p>
      </li>
    );
  });
};

const PriceList = () => {
  return (
    <section id="price">
      <ul>{priceListGenerator(normalPrice)}</ul>
      <ul>{priceListGenerator(holidayPrice)}</ul>
      <ul>{priceListGenerator(extras)}</ul>
    </section>
  );
};

export default PriceList;
