import React, { Component } from 'react';


// required to manage 'states'
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Put the cursor-poiter in the input-field immedietly after the page gets loaded
    componentDidMount() {
        this._searchInput.focus();
    }

    // let the user see what s/he is going to write in the text-input-field
    handleOnChange(e) {
        // console.log(e.target.value);
        let typedText = e.target.value;
        // this.state.term = typedText;
        this.setState({
            term: typedText
        });
    }


    // Youtube API will be made using axios in the HOC.
    handleSubmit(e) {
        e.preventDefault();

        // console.log("Submitted: ", this.state.term);

        // [Extra Work: so that user can simply paste the URL in the input field] *****************************
        let str = this.state.term;

        let extracted_result = str.split('v=')[1]
        // console.log(extracted_result);
        // [Extra Work] *****************************

        // this.props.handleSubmitMain(this.state.term)   // call the submit func from HOC, also pass the 'term' as a param, bcz the main-HOC func "handleSubmitMain" expects a param.
        this.props.handleSubmitMain(extracted_result)
    }

    render() {
        return(
            <div>
                <h3 className="text-red-700 text-4xl mb-20">Video Stats</h3>
                <form className="w-full max-w-xl" onSubmit={this.handleSubmit}>
                    <div className="flex items-center border-b border-red-700 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" 
                                placeholder="Paste the youtube video url" 
                                aria-label="Full name"
                                value={this.state.term}
                                onChange={(elem) => {
                                    this.handleOnChange(elem)
                                }}
                                ref={(elem) => {
                                    this._searchInput = elem
                                }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;