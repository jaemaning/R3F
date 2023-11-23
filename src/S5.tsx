import React from 'react';
import "./S5.css"

const S5 = ({handleClick}) => {
    return (
        <div className="S5_container" onClick={handleClick}>
            <p>hello world</p>
        </div>
    );
};

export default S5;