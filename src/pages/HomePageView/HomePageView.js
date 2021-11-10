import Container from '../../components/Container';
import LoginForm from 'components/LogInForm/LoginForm';
// import RegistrationForm from '../../components/RegistrationForm';
import s from './HomePage.module.css';
import imgText from '../../images/svg/Kapusta.svg';

const HomePageView = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.mainWrapper}>
          <div className={s.textWrapper}>
            <img className={s.kapusta} src={imgText} alt="Kapusta" />
            <h1 className={s.title}>smart finance</h1>
          </div>

          <div className={s.loginWrapper}>
            <LoginForm />
            {/* <RegistrationForm /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePageView;
