import React from 'react';
import ReactLoading from "react-loading";

export default function Spinner() {
    return (
        <div className="loading">
            <div className="load">
                <ReactLoading type="spin" color="#ffffff" width={30} height={30} />
            </div>
        </div>
    )
}
