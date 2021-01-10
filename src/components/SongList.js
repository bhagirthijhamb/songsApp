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
              // selectSong is the action creator. if we call it, it will take the action that gets returned and send it to redux's dispatch function
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
    // this.props = { songs: state.songs}
    console.log(this.props) // also has dispatch function(from the redux store to manualy dispatch an action after calling an action creator)/ selectSong action creator function

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
  // this object that we return from mapStateToTProps is goin to show up as props inside our component
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong: selectSong }) (SongList);

// function connect(){
//   return function(){
//     return 'Hi There!';
//   }
// }

// connect()() // Hi There!

// when we pass an action creator to connect, the action that gets returned on calling the action creator is automatically passed to the dispatch function (and hence forwared to reducer) for us.
