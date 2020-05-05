import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';

const ChampionBase = ({ selectedChampion }) => {  
    if (!selectedChampion) {
      history.push('/');
      return <div>You will be sent back to the home page.</div>
    } else {
      return (
        <div>
            ChampionBase
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return { selectedChampion: state.selectedChampion };
  }
  
  export default connect(mapStateToProps)(ChampionBase);