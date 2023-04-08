import React from 'react'

import "./menu.scss"
const Menu = ({open,setOpen}) => {
    return (
        <div className={ "menu  "+(open && "active")}>
            <ul>


            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum vel rem voluptate doloremque quis incidunt nemo aspernatur, cumque dolore voluptatem inventore? Molestiae, tempore id modi dolor aspernatur veniam a.</p> */}
                <li onClick={()=>setOpen(!open)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setOpen(!open)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setOpen(!open)} >
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li onClick={()=>setOpen(!open)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={()=>setOpen(!open)}>
                    <a href="#contact">Contact</a>
                </li>
               
            </ul>

        </div>
    )
}

export default Menu