import React, { useState } from "react";
import s from "./Balance.module.css";
import ConfirmButtonBalance from "components/ConfirmButtonBalance";
import GoToReports from "components/GoToReports";
import Notification from "components/Notification";
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
            <GoToReports />            
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
                    <ConfirmButtonBalance onSubmit={handleSubmit} />
                    {/* </label> */}
                </form>
            </div>
        </div>
    );
    
};
export default Balance;