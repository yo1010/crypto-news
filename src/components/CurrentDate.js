import React from 'react';

export default function CurrentDate() {
        let separator = ", ";
        let space = " ";
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        const locale = "ru";
        month = newDate.toLocaleString(locale, {month: 'long'});
        let year = newDate.getFullYear();
    return (
        <button className="dateholder">
            {`${month<10?`0${month}`:`${month}`}${space}${date}${separator}${year}`}
        </button>
    )
}
