import React from 'react'

export default class OtpInput extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: []
        }
    }
    componentDidMount() {
        let inputs = [...this.state.inputs];
        [...new Array(this.props.numberOfelements)].map((el) => {
            return inputs.push('') //creating a new array
        })
        this.setState({ inputs })
    }

    onHandheChange = (value, index) => {
        let inputs = [...this.state.inputs];
        const reg = /^[0-9]*$/
        if (value !== '') { // adding valut in to the 
            if (reg.test(value)) {
                inputs[index] = value;
                if (index + 1 < inputs.length) {
                    this[`input${index + 1}`].focus()
                }
            }
        }
        else if (value === '') {
            inputs[index] = value;
            if (index - 1 >= 0) { //if value === '' then removing from array and focus and select the previous input box
                this[`input${index - 1}`].focus()
                this[`input${index - 1}`].select()
            }
        }
        this.setState({ inputs })
    }
    render() {
        const { inputs } = this.state
        return (
            <div>
                {
                    inputs.map((el, i) => {
                        return (
                            <input
                                key={i}
                                ref={input => this[`input${i}`] = input} //input ref 
                                type="text"
                                value={el}
                                placeholder="0"
                                maxLength={1}
                                onChange={(e) => this.onHandheChange(e.target.value, i)}
                                style={{ height: 30, width: 30, margin: 10, textAlign:'center' }}
                            />
                        )
                    })
                }
                <p>{JSON.stringify(inputs)}</p>
            </div>
        )
    }
}
