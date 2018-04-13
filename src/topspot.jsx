import React from 'react';

export default props => (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a type="button" className="btn btn-lg btn-primary" href={"https://maps.google.com/?q=" + props.location}>Open in Google Maps</a>
    </div>
);