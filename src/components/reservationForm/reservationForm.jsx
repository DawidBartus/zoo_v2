import style from './reservationFormStyle.module.css';

const ReservationForm = () => {
  return (
    <section className={style.resFormContainder}>
      <ul className={style.checkList}>
        <p>Przed wyjazdem:</p>
        <li className={style}>
          <input type="checkbox" name="1" className={style.checkedIteams} />
          Książeczka
        </li>
      </ul>

      <form className={style.resForm}>
        <label htmlFor="name" className={style.resFormLabel}>
          Imię i nazwisko
        </label>
        <input type="text" name="name" className={style.resFormInput} />

        <label htmlFor="dogName" className={style.resFormLabel}>
          Imię psa
        </label>
        <input type="text" name="dogName" className={style.resFormInput} />

        <label htmlFor="dogBreed" className={style.resFormLabel}>
          Rasa psa
        </label>
        <input type="text" name="dogBreed" className={style.resFormInput} />

        <label htmlFor="dogAge" className={style.resFormLabel}>
          Wiek psa
        </label>
        <input type="number" name="dogAge" className={style.resFormInput} />

        <label htmlFor="date" className={style.resFormLabel}>
          Data pobytu
        </label>
        <input type="text" name="date" className={style.resFormInput} />

        <label htmlFor="email" className={style.resFormLabel}>
          email
        </label>
        <input type="email" name="" id="" className={style.resFormInput} />

        <label htmlFor="tele" className={style.resFormLabel}>
          Numer telefonu{' '}
        </label>
        <input type="email" name="tele" id="" className={style.resFormInput} />
        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
};

export default ReservationForm;
