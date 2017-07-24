import React from 'react';
import {Panel} from 'react-bootstrap';


class MusicTrackListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit() {
    console.log(this.props.track);
  }

  render() {
    return (
      <div>
        <Panel header={this.props.track.name}>
          <div className='col-sm-3' >
            <img className="media-object" src={this.props.track.album.images[0].url} style={{height: 100, width: 170}} />
          </div>
          <div className='col-sm-6'>
            {this.props.track.artists[0].name}
          </div>
          <div className='col-sm-3'>
            <h1>{this.props.BPM}</h1>
          </div>
        </Panel>
      </div>
    );
  }
}

export default MusicTrackListEntry;