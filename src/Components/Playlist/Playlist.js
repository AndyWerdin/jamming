import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = (props) => {
    const handleNameChange = (e) => {
        props.onNameChange(e.target.value);
    }

    return (
        <div className="Playlist">
            <input defaultValue={ props.playlistName } onChange={handleNameChange}/>
                <TrackList tracks={ props.playlistTracks } onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;