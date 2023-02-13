import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../Redux/action'

const Theme = () => {
    const {theme} = useSelector((state)=>state.themeReducer)
    const dispatch = useDispatch()
    const handleThemechange=(theme)=>{
            handleTheme(dispatch,theme)
    }
  return (
    <div>
        <button disabled = {theme=="light"} onClick={()=>handleThemechange("light")}>Switch to Light</button>
        <button disabled = {theme=="dark"} onClick={()=>handleThemechange("dark")}>Switch to Dark</button>
    </div>
  )
}

export default Theme