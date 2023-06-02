import style from './reservationFormStyle.module.css';

const ReservationForm = () => {
  return (
    <section className={style.resFormContainder}>
      <form action="">
        <p>Przed wyjazdem:</p>
        <label htmlFor="">
          <input type="checkbox" name="" id="" /> Książeczka
        </label>
      </form>

      <form className={style.resForm}>
        <label htmlFor="name">Imię i nazwisko</label>
        <input type="text" name="name" />

        <label htmlFor="dogName">Imię psa</label>
        <input type="text" name="dogName" />

        <label htmlFor="dogBreed">Rasa psa</label>
        <input type="text" name="dogBreed" />

        <label htmlFor="dogAge">Wiek psa</label>
        <input type="text" name="dogAge" />

        <label htmlFor="date">Data pobytu</label>
        <input type="text" name="date" />

        <label htmlFor="email">email</label>
        <input type="email" name="" id="" />

        <label htmlFor="tele">Numer telefonu </label>
        <input type="email" name="tele" id="" />
      </form>
    </section>
  );
};

export default ReservationForm;
