import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const ListOfChefs = () => {

    const[allChef,setAllChef]=useState([])

      useEffect(()=>{
        fetch(`https://bonolota-server-mdsalauddinahmed.vercel.app`)
        .then(res=>res.json())
        .then(data=> setAllChef(data))
        .catch(error=>console.error(error))
      },[])
      console.log(allChef)
    return (
        <div className='lg:cols-row-3'>

      {
       allChef.map(data=> 
          
        <SingleChef data={data} key={data.id}>

        </SingleChef>)
      } 

            
        </div>
    );
};

export default ListOfChefs;