import PropTypes from 'prop-types';

import s from './ConfirmButtonBalance.module.css';

const ConfirmButtonBalance = ({ onSubmit }) => (
    <button className={s.confirmButton} onClick={onSubmit}>ПОДТВЕРДИТЬ</button>
);

ConfirmButtonBalance.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default ConfirmButtonBalance;