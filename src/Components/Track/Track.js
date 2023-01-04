import React from 'react';
import './Track.css';

const Track = (props) => {
    const renderAction = () => {
        if (true) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }
    
    return (
        <div className="Track">
            <div className="Track-information">
                {/*<h3><!-- track name will go here --></h3>*/}
                <h3>{props.track.name}</h3>
                {/*<p><!-- track artist will go here--> | <!-- track album will go here --></p>*/}
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;