import React from "react";
import s from "./InputBalance.module.css"

export default function InputBalance() {
    return (
        <input
            type="text"
            name="balance"
            maxLength="10"
            placeholder="00.00 UAH"
          
            className={s.balanceInput}
            autoComplete="off"
        />
        
    )
}