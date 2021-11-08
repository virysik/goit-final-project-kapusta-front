import React from "react";
import s from "./InputBalance.module.css"

export default function InputBalance({handleChange}) {
    return (
        <input
            type="text"
            name="balance"
            maxLength="10"
            placeholder="00.00 UAH"
            onChange={handleChange}
            className={s.balanceInput}
            autoComplete="off"
        />
        
    )
}