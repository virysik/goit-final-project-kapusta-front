import Container from 'components/Container';
import s from './HomePage.module.css';
import imgText from '../../images/svg/Kapusta.svg';

const HomePageView = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.textWrapper}>
          <img className={s.kapusta} src={imgText} alt="Kapusta" />
          <h1 className={s.title}>smart finance</h1>
        </div>
      </Container>
    </section>
  );
};

export default HomePageView;
