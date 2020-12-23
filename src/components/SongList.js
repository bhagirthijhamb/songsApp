import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from "../actions";

class SongList extends Component {
  renderList(){
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
            <div className="content">{song.title}</div>
        </div>
      )
    })
  }
  render() {
    console.log(this.props) // also has dispatch function/ selectSong action creator function
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

// This funcion runs with updated state anytime we make chnage to the  state
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong: selectSong }) (SongList);

// function connect(){
//   return function(){
//     return 'Hi There!';
//   }
// }

// connect()() // Hi There!
