import React from 'react';
import './Trip.css';
import TripData from './TripData';
import Trip1 from '../../assets/5.jpg';
import Trip2 from '../../assets/8.jpg';
import Trip3 from '../../assets/6.jpg';

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trip</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       <div className="trip-card">
        <TripData image={Trip1}
                  heading='Nam ultricies ullamcorper' 
                  text='Nam ultricies ullamcorper tempus. Suspendisse id scelerisque ligula, quis ultrices magna. Aliquam erat volutpat. Etiam vel mi nec ligula pretium facilisis. Nunc egestas ipsum libero, quis luctus risus ullamcorper sit amet. Nullam rutrum eget justo in ultrices. Donec laoreet libero arcu, quis suscipit ante elementum sed. Quisque suscipit posuere ligula, sed dictum urna varius molestie.'
                  />
        
        <TripData image={Trip2}
                  heading='Nam ultricies ullamcorper' 
                  text='Nam ultricies ullamcorper tempus. Suspendisse id scelerisque ligula, quis ultrices magna. Aliquam erat volutpat. Etiam vel mi nec ligula pretium facilisis. Nunc egestas ipsum libero, quis luctus risus ullamcorper sit amet. Nullam rutrum eget justo in ultrices. Donec laoreet libero arcu, quis suscipit ante elementum sed. Quisque suscipit posuere ligula, sed dictum urna varius molestie.'
                  />

        <TripData image={Trip3}
                  heading='Nam ultricies ullamcorper' 
                  text='Nam ultricies ullamcorper tempus. Suspendisse id scelerisque ligula, quis ultrices magna. Aliquam erat volutpat. Etiam vel mi nec ligula pretium facilisis. Nunc egestas ipsum libero, quis luctus risus ullamcorper sit amet. Nullam rutrum eget justo in ultrices. Donec laoreet libero arcu, quis suscipit ante elementum sed. Quisque suscipit posuere ligula, sed dictum urna varius molestie.'
                  />
       </div>
    </div>
  )
}

export default Trip
