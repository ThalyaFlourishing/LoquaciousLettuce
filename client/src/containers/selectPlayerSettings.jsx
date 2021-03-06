import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'react-bootstrap';
import {changePlayers, changeView} from '../actions/index';
import {selectMode} from '../actions/index';


class SelectPlayerSettings extends React.Component {
  render() {
    var changePlayers = this.props.changePlayers.bind(this);
    var changeView = this.props.changeView.bind(this);
    return (
      <div className = 'selectPlayerPage'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12" style={{background: 'black', height: 500}}>Game<br></br>
              <ButtonGroup vertical className="col-sm-12">
                <Button onClick={()=> {changePlayers(1); changeView('difficulty');} }>Single Player</Button>
                <Button onClick={()=> {changePlayers(2); changeView('difficulty');} }>MultiPlayer</Button>
              </ButtonGroup>
            </div>
          </div>


        </div>

      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    game: state.game,
    view: state.view
  };
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changePlayers: changePlayers, changeView: changeView}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerSettings);

// var mapDispatchToProps = (dispatch) => {
//   // return bindActionCreators({selectMode: selectMode}, dispatch);
//   // return {
//   //   selectMode: (playerMode) => {dispatch(selectMode(playerMode))}
//   // }
// };

