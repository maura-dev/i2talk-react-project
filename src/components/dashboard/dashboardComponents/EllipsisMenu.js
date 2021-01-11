import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToggleMenu } from '../../../actions/menuActions';

class EllipsisMenu extends Component {

  render(){
    const {
      menu,
      display,
      leave,
      view,
      mute,
      search,
      report
    } = this.props;
    console.log(this.props)

    return(
      <React.Fragment>
        <i onClick={this.props.ToggleMenu}
          className={`fas fa-ellipsis-v ${display}`}
        ></i>
  
        <ul className={ menu? "show": "hide" } 
        // id="chat-menu-list"
        >
          <li onClick={()=>{
            this.props.history.goBack();
          }} className={leave===null? "hide": "show"}>{leave}</li>
          <li className={view===null? "hide": "show"}>{view}</li>
          <li className={mute===null? "hide": "show"}>{mute}</li>
          <li className={search===null? "hide": "show"}>{search}</li>
          <li className={report===null? "hide": "show"}>{report}</li>
        </ul>
      </React.Fragment>
      )
  }
  
}

EllipsisMenu.propTypes = {
  ToggleMenu: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	menu: state.menu.menu
})


export default connect(mapStateToProps, { ToggleMenu })( EllipsisMenu );