import React from 'react';

export default function CurrentDate() {
        let separator = "-";
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
    return (
        <button className="dateholder">
            {`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}
        </button>
    )
}
