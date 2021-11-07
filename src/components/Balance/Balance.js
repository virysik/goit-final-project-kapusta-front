import React, { useState } from "react";
import s from "./Balance.module.css";
import Notification from "components/Notification"
const Balance = ({ onSubmit }) => {
    const [balance, setBalance] = useState("")

    const handleChange = (e) => {
        setBalance(e.target.value)    
    };
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(balance);
    }
    return (
        <div className={s.containerBalanse}>
            <a className={s.link} href="/">Перейти к отчетам
                {/* <span className={s.goBalance}>Перейти к отчетам</span> */}
                <svg className={s.svg} width="14px" height="14px">
                    <use href="../../images/svg/Vector.svg"></use>
                </svg>
            </a>
            <div className={s.confirmBalance}>
                <span className={s.balanceSpan}>Баланс:</span>
                <form className={s.formBalance} onSubmit={handleSubmit}>
                    {/* <label htmlFor="balance" className={s.balanceLabel}> */}
                    {/* Баланс: */}
                    <input
                        type="text"
                        name="balance"
                        maxLength="10"
                        placeholder="00.00 UAH"
                        onChange={handleChange}
                        className={s.balanceInput}
                        autoComplete="off"
                    />
                    <Notification />
                    <button className={s.confirmButton}>ПОДТВЕРДИТЬ</button>
                    {/* </label> */}
                </form>
            </div>
        </div>
    );
    
};
export default Balance;