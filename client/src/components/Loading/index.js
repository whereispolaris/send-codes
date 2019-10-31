import React from 'react';
import loadingImage from './Blocks-1s-200px.gif';
import './Loading.css';

const Loading = () => {
    return(
        <div className="loading-div">
            <img src={loadingImage} alt="loading..." />
        </div>
    )
}

export default Loading;