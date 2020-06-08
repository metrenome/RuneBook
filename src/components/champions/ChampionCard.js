import React from 'react';

const ChampionCard = (props) => {

    return (
        <div className='col s2'>
          <div className='card'>
            <div className='card-image'>
              <img src={`/images/icons/${props.image}`} alt={`champion-${props.name}`} />
            </div>
          </div>
        </div>
    );
};

export default ChampionCard;