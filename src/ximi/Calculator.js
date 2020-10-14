import React, { Component } from 'react';
import './result.css';
import Element_name from './Element.json';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    buttonClicked = (event) => {
        this.props.buttonClicked(this.state.value)
        const re = /^[0-9\b]+$/;
        const first = this.state.value;
        for (var i = 0; i < first.length; i++) {
            if (re.test(first.substr(i, i + 1))) {
                console.log(first.substr(i, i + 1))
            } else {
                console.log(first.substr(i, i + 1))
            }
        }
    }
    render() {
        return (
            <div >
                <label>
                    {//<input value={this.state.value} onChange={this.handleChange} />
                    }
                </label>
                {//<input type="submit" value="Submit" onClick={this.buttonClicked} />
                }
            </div>
        );
    }
}
export default Calculator;