import React from 'react'
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom"

const activeSublink = ({ isActive }) => (isActive ? "active" : "link");
const activeLink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = ({ item, isOpen }) => {
    const [expandMenu, setExpandMenu] = useState(false);
    if (item.childrens) {
        return (
            <div className={expandMenu ? "sidebar-item s-parent open" : "sidebar-item s-parent"}>
                <div className="sidebar-title">
                    <span>{item.icon && <div className='icon'>{item.icon}</div>}
                        {isOpen && <div>{item.title}</div>}
                    </span>
                    <MdKeyboardArrowRight size={25} className="arrow-icon" onClick={() => setExpandMenu(!expandMenu)} />
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => {
                        return (
                            <div className="s-child" key={index}>
                                <NavLink to={child.path} className={activeSublink}>
                                    <div className='sidebar-item'>
                                        <div className="sidebar-title">{child.icon && <div className='icon'>{child.iconm}</div>}</div>
                                        {isOpen && <div>{child.title}</div>}
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>);
    }
    else {
        return (
            <NavLink to={item.path} className={activeLink}>
                <div className='sidebar-item s-parent'>
                    <div className="sidebar-title">
                        <span>
                            {item.icon && <div className='icon'>{item.icon}</div>}
                            {isOpen && <div>{item.title}</div>}
                        </span>
                    </div>   
                </div>
            </NavLink>
        );
    }

}

export default SidebarItem