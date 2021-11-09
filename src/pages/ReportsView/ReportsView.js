import React from 'react';
import Container from 'components/Container';
import ArrowToGoBack from 'components/ArrowToGoBack';
import Report from 'components/Report';
import s from './ReportView.module.css';

const ReportsView = () => {
  return (
    <section className={s.section}>
      <Container>
        <ArrowToGoBack />
        <Report />
      </Container>
    </section>
  );
};

export default ReportsView;
