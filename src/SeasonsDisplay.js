import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burrrr its cold!',
        iconNmae: 'snowflake'
    }
};

const getSeaons = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonsDisplay  = (props) => {
    const season = getSeaons(props.lat, new Date().getMonth());

    const { text, iconName } = seasonConfig[season]; //text and iconName

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1> { text } </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonsDisplay;