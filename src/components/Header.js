 import React from 'react'
import PropTypes from 'prop-types'

 import Button from './Button'
 const Header = ()=>{
    const onClick = (e)=>{
         console.log("click")
     }
     return (
         <div className="header">
             <h1>Task Manager</h1>
            <Button color="green" text='Add' onClick={onClick}/>
         </div>
     )
 }


 export default Header;