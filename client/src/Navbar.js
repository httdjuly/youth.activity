import React, { useState } from "react";
import logo from './image/logoBK.png';
import house from './image/house.png';
import person from './image/person.png';
import gear from './image/gearshape.png';
import clock from './image/clock.arrow.png';
import { Link, NavLink } from "react-router-dom";
import {
	FaAngleRight,
	FaAngleLeft, 
	FaChartBar, 
	FaThLarge, 
	FaShoppingCart, 
	FaCog,
	FaBars,
    FaHome,
    FaUserFriends,
    FaSlidersH,
    FaHistory,
    FaSignOutAlt
} from 'react-icons/fa';


function Navbar() {
    return (
        <div className="col-2 title-column nav">
            <NavLink className="item-line" to="/">
                <img className="logo-BK" src={logo} alt="logoBK" />
                <div className="web-name">HUHU</div>
            </NavLink>

            <div className="links nav-top">
                <NavLink className="nav-link" to="/homepage">
                    <FaHome size={20} />
                    <span>Trang chủ</span>
                </NavLink>

                <NavLink className="nav-link" to="/activities">
                    <FaUserFriends size={20} />
                    <span>Hoạt động</span>
                </NavLink>

                <NavLink className="nav-link" to="/system-page">
                    <FaSlidersH size={20} />
                    <span>Hệ thống</span>
                </NavLink>

                <NavLink className="nav-link" to="/history">
                    <FaHistory size={20} />
                    <span>Lịch sử</span>
                </NavLink>
            </div>

            <div className="links nav-bottom">
                <NavLink className="nav-link" to="/">
                    <FaSignOutAlt size={20} />
                    <span>Đăng xuất</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;
