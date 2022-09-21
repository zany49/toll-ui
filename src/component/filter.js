import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'



const Filter = ({data,setSelectval})=>{


      
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const handleClick = (id,name)=>{
      console.log("id,name--->",id,name)
      setSelectval(name)
      setIsMenuOpen(!isMenuOpen)
    }
    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
          setIsMenuOpen(false)
        }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [isMenuOpen])
    return (
      <div className="wrapper" ref={ref}>
        <button className="fil-btn" onClick={() => setIsMenuOpen(oldState => !oldState)}>
        <FontAwesomeIcon icon={faFilter} color="gray" />
        </button>
        {isMenuOpen && (data !== null|| data !== undefined) ?(
           <ul className="list">
    {
        data.map((d,i)=>{
          return(
            <li className="list-item" value={d.tollName} onClick={()=>handleClick(i,d.tollName)}>{d.tollName}</li>
        )})
    }
    </ul>
     ) :(<></>)}
      </div>
    )

}

export default Filter


