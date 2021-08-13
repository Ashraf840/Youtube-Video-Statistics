import React, { Component } from 'react';
import Form from './Forms/Form';
import Results from './Result/Result';
import youtube from '../../supports/youtube';

// required to manage 'states'
class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            // check the fetch data with Postman to decide which props need to be here.
            tags: [],
            title: '',
            channelTitle: '',
            views: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This func send to LOC (Form); The param will be sent from the LOC to this func.
    // Youtube API call is made using axios. Also fetched all the data to put inside the state of the body, cz this body component is holding both the "Form" & "Results" component. Thus the data fetched from the API will be stored in the body-component, so that the state-obj-props can be sent to the "Results" component easily.
    async handleSubmit(term) {
        const response = await youtube.get('/videos', {
            // combining the param with the main axiosInstance.
            params: {
                id: term
            }
        });
        // console.log(response.data.items);
        this.setState({
            data: response.data.items,
            tags: response.data.items[0].snippet.tags,  // "items" is a list, so specify it with list-index 0
            title: response.data.items[0].snippet.title,
            channelTitle: response.data.items[0].snippet.channelTitle,
            views: response.data.items[0].statistics.viewCount,    // total views of a video
        });
    };


    render() {
        return(
            <div className="py-16">
                <center>
                    <Form handleSubmitMain={this.handleSubmit} />
                    <Results tags={this.state.tags}
                            title={this.state.title}
                            channelTitle={this.state.channelTitle}
                            views={this.state.views} />
                </center>
            </div>
        );
    }
}

export default Body;