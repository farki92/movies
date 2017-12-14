import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './LoadingCircleStyle.css';


const LoadingCircle = ({ size, color, isFetching }) => (
    <div>
        <div className={`loadingBottom ${isFetching ? 'showCircle' : 'hideCircle'}`}>
            <CircularProgress size={size} color={color}/>
        </div>
    </div>
);

export default LoadingCircle;
