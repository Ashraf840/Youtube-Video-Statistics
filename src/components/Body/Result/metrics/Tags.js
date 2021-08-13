import React from 'react';

var tagListTemplate = (items, index) => {
    return(
        <div key={index} className="mb-3">
            <li>- { items }</li>
        </div>
    );
};

function Tags(props) {
    var tags = props.tags.map(tagListTemplate) // iterate the 'tagListTemplate' until the 'props.tags' doesn't have any item left; a big collection of tagListTemplate-JSX
    return(
        <div className="w-1/2 rounded overflow-hidden shadow-xl bg-red-100 mr-3">
            <div className="h-full">
                <h2 className="text-4xl text-bold text-left p-3">Tags</h2>
                <section className="mt-6 text-justify px-8 text-base">
                    <ul>
                        { tags }
                    </ul>
                </section>
            </div>
        </div>
    );
};


export default Tags;