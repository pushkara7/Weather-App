import React, {Component, Fragment} from 'react';
import WeatherDetail from "./WeatherDetail";
import {connect} from 'react-redux';
import {getData} from '../ducks/actions';
import './Weather.css';

class Weather extends Component{
    constructor(props) {
        super(props);
        this.state={
            searchInput : '',
            error: '',
            submittedButton: false,
        }
    }

    onSearchInputChange = (event) => {
        this.setState({
            ...this.state,
            submittedButton: false,
            searchInput: event.target.value,
        })

    }

    onSubmit = () => {
        const {getData} = this.props;
        const {searchInput} = this.state;
        getData(searchInput);
        this.setState({
            searchInput: '',
            submittedButton: true,
        })

    }
    render(){
        const { searchInput, submittedButton } = this.state;
        const { stateData} = this.props;
        return(
            <div className="weather-main">
                <input type="text" value={searchInput} className="" placeholder="Enter City" onChange={this.onSearchInputChange} />
                <button type="submit" className="" onClick={this.onSubmit}> submit </button>
                <p>{submittedButton && stateData.apiError ? <Fragment> {stateData.apiError} </Fragment>: null}</p>
                <p>{submittedButton && stateData.loading ? <Fragment> Loading.... </Fragment>: null}</p>

                {submittedButton && Object.keys(stateData.locationInfo).length !== 0 && Object.keys(stateData.weatherInfo).length !== 0 ?
                    <WeatherDetail locationInfo={stateData.locationInfo} weatherInfo={stateData.weatherInfo} /> : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        stateData: state.data,
    }
}

export default connect(mapStateToProps, {getData})(Weather);
