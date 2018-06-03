import React, { Component } from 'react';
import './index.css';

class MainContent extends Component {
    state = {
        searchCriteria: '',
    }

    handleChange = e => {
        // console.log(e.target.value);
        this.setState({ searchCriteria: e.target.value })
    }

    handleSubmit = () => {
        // console.log('clicked')
        // https://www.google.com/search?q=stuff
        // let inputSearch = document.getElementsByTagName('input')[0].value;
        // console.log(this.state.searchCriteria);
        let search = this.state.searchCriteria;
        // let combined = 'https://www.google.com/search?q=' + search;
        let combined = `https://www.google.com/search?q=${search}`
        // console.log(combined);
        window.location.href = combined; // navigate to combined address
    }

    handleFeeling = () => {
        window.location.href = `https://www.${this.state.searchCriteria}.com`
    }
    render() {
        return (
            <div className='mainContent_wrapper'>
                <div className='inputField'>
                    <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' />
                    <input
                        type='text'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='search_buttons'>
                    <button
                        onClick={this.handleSubmit}
                    >Google Search</button>
                    <button onClick={this.handleFeeling}>I'm feeling lucky</button>
                </div>
            </div>
        );
    }
}

export default MainContent;