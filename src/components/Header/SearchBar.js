import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';

import { selectChampion } from '../../actions';

class SearchBar extends React.Component {
  render() {
    const NavigateToChampion = (event, value) => {
      if (value) {
        this.props.selectChampion(value);
        history.push(`/champion/${value.key}`);
      }
    }

    return (
      <nav>
        <div className='nav-wrapper grey darken-2'>
          <div className='input-field'>
            <input className='autocomplete' id='search' type='search' autoComplete='off' />
            <label className='label-icon' htmlFor='search'><i className='material-icons'>search</i></label>
            <i className='material-icons'>close</i>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
    return { champions: state.champions }
  }
  
  export default connect(mapStateToProps, { selectChampion })(SearchBar);