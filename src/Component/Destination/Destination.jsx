import React from 'react';
import './Destination.css';
import DestinationData from './DestinationData';
import Mountain1 from '../../assets/1.jpg';
import Mountain2 from '../../assets/2.jpg';
import Mountain3 from '../../assets/3.jpg';
import Mountain4 from '../../assets/4.jpg';


const Destination = () => {
  return (
    <>
       <div className="destination">
        <h1>Popular Destination</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
       
       <DestinationData
           className= "first-des"
           heading ="Lorem ipsum dolor sit" 
           text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra dolor nec dui faucibus, nec rhoncus ipsum lacinia. Proin mauris risus, hendrerit ac posuere sit amet, tristique in ligula. Mauris gravida leo ut nisl varius, a accumsan urna rutrum. Maecenas tortor mauris, facilisis ac ipsum ut, pretium placerat sem. Curabitur semper nec enim eget consectetur. Morbi finibus odio ante, ac commodo ligula fringilla non. Donec feugiat sit amet odio a mollis. Donec quis ante vitae justo mollis hendrerit. Nulla in luctus arcu. Aliquam sollicitudin dignissim ex eu accumsan.' 
           img1 ={Mountain1}
           img2 ={Mountain2}/>

       <DestinationData
           className= "first-des-reverse"
           heading ="Lorem ipsum dolor sit" 
           text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra dolor nec dui faucibus, nec rhoncus ipsum lacinia. Proin mauris risus, hendrerit ac posuere sit amet, tristique in ligula. Mauris gravida leo ut nisl varius, a accumsan urna rutrum. Maecenas tortor mauris, facilisis ac ipsum ut, pretium placerat sem. Curabitur semper nec enim eget consectetur. Morbi finibus odio ante, ac commodo ligula fringilla non. Donec feugiat sit amet odio a mollis. Donec quis ante vitae justo mollis hendrerit. Nulla in luctus arcu. Aliquam sollicitudin dignissim ex eu accumsan.' 
           img1 ={Mountain3}
           img2 ={Mountain4}/>
       </div>
    </>
  )
}

export default Destination ;