import React from 'react';
import "./S4.css"

const S4 = ({handleClick}) => {
    return (
        <div className="S4_container" onClick={handleClick}>
            <p>hello world</p>
        </div>
    );
};

export default S4;