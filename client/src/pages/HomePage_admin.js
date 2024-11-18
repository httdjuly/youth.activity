import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import UserHistoryTab from '../components/UserHistoryTab';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/homepage.css';
import logo from '../image/logoBK.png';
import house from '../image/house.png';
import person from '../image/person.png';
import gear from '../image/gearshape.png';
import clock from '../image/clock.arrow.png';
import star from '../image/magic-star.png';
import location from '../image/location.png';
import time from '../image/clock.png';
import profile from '../image/profile-2user.png';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import checkicon from '../image/let-check.png';
import xtn from '../image/xtn.jpg';
import bk from '../image/bk.jpg';
import jf from '../image/jf.jpg';
import mhx from '../image/mhx.jpg';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import ConfirmationWindow from '../components/ConfirmationWindow';
import NewActivity from './NewActivity';

function AdminHomePage() {
    return (
        <div>
            <div class="row">
                {/* navigation buttons */}
                <div class ="col">
                    <button class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={leftArrow} />
                    </button>
                    <button  class="btn btn-primary arrow-button-container">                            <img class="arrow-icon" src={rightArrow} />
                    </button>
                </div>
                {/* add cai nut notification */}
                <button class="btn btn-secondary arrow-button-container account-icon-container">
                    <img class="bell-icon" src={bell} alt="bell-icon"/>
                </button>
                {/* cai tab ben phai */}
                <Dropdown as={ButtonGroup} variant="user-account account-icon-container">
                    <Button variant="user-account account-icon-container">
                        <div class="user-account account-icon-container">
                            <img class="user-icon" src={user} />
                            <div class="user-infor">                                    
                                <div class="user-name">Thùy Dương</div>
                                <div class="user-role">Admin</div>
                            </div>
                        </div>
                    </Button>

                    <Dropdown.Toggle split variant="user-account account-icon-container" id="drop-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="/user-info">Cài đặt tài khoản</Dropdown.Item>
                        <Dropdown.Item href="#">Chỉnh sửa thông tin</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </div>
            
            <div class="slider">
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
            </div>

            <div class ="row pg-welcome">
                <div>Chào mừng bạn quay lại với YOUTH,</div>
            </div>
            <div class = "row">
                <img class="check-icon" src={checkicon}/>
                <div class = "row let-check">
                    Cùng kiểm tra hoạt động hôm nay nhé!
                </div>                    
            </div>
            

                       
                

                
            
        </div>
    );
}
export default AdminHomePage;
