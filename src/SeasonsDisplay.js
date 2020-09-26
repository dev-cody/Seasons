import React from 'react'

const getSeaons = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonsDisplay  = (props) => {
    const season = getSeaons(props.lat, new Date().getMonth());
    const text = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    const icon = season === 'Winter' ? 'snowflake' : 'sun';


    return(
        <div>
            <i className={`${icon} icon`} />
            <h1>{ text }</h1>
            <i className={`${icon} icon`} />
        </div>
    )
};

export default SeasonsDisplay;