import React from 'react';
import { connect } from 'react-redux';

import ChampionCard from './ChampionCard';

class ChampionGrid extends React.Component {
    state = {searchString: ''};

    handleChange = (event) => {
        this.setState({searchString: event.target.value });
    }

    filterChampions = () => {
        var filteredChampions = this.props.champions;
        
        return (
                filteredChampions.map(champion => {
                    if (champion.name.toLowerCase().includes(this.state.searchString)){
                        return <ChampionCard 
                            key={champion.key}
                            name={champion.name} 
                            id={champion.key}
                            image={champion.avatar}
                        />
                    } else {
                        return '';
                    }
                })
        );
    }
    
    render() {
        return (
            <React.Fragment>
                <input type='text' id='championSearch' onChange={this.handleChange} placeholder='Enter a champion name (e.x. Ahri)'></input>
                <div className='row'>
                    {this.filterChampions()}
                </div>
            </React.Fragment>
                
        );
    }
}

const mapStateToProps = (state) => {
    return { champions: state.champions };
}

export default connect(mapStateToProps)(ChampionGrid);