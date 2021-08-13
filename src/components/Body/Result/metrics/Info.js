import React from 'react';


const Info = (props) => {
    return(
        <div className="w-1/2 rounded overflow-hidden shadow-xl bg-green-200 ml-3">
            <div className="h-12">
                <h2 className="text-4xl text-bold text-left p-3">Info</h2>
                <section className="mt-6 text-justify px-8 text-base">
                    <div className="mb-3">
                        <strong>Channel Title: </strong>
                        <span>
                            { props.channelTitle }
                        </span>
                    </div>
                    <div className="mb-3">
                        <strong>Video Title: </strong>
                            <span>
                                { props.title }
                            </span>
                    </div>
                    <div>
                        <strong>Views: </strong>
                            <span>
                                { props.views }
                            </span>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Info;