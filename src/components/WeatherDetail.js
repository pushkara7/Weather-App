import React, {Fragment} from 'react';
import './Weather.css';

const WeatherDetail = ({locationInfo, weatherInfo}) => {
    const { name, lat, lon, country } = locationInfo;
    const { condition: {icon, text}, feelslike_f, temp_f} = weatherInfo;

    return(
        <Fragment>
            <div className=''>
                <img src={icon} alt="Weather data by WeatherAPI.com" border="0" />
                    <h2>{name}, {country}</h2>
                    <h3 className='description'>{text}</h3>
                    <h4>lat:{lat}, long:{lon}</h4>
                    <h5>Feels like {feelslike_f} °</h5>
                    <h5>Temperature {temp_f}°</h5>
            </div>
        </Fragment>

    )

};

export default WeatherDetail;
