import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';

import PrintConfirmationPopup from '../components/PrintConfirmationPopup';
import StudentAccountListTab from '../components/StudentAccountListTab';
import HolderAccountListTab from '../components/AccountManager/HolderAccountListTab';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import vector from '../image/vector.png';

function AccountDecentralise() {
    return (
        <div class="statistics-body activity-statistics">
            <div class ="row">
                <div class ="col">
                    <Link to="/trend-statistics">
                        <button class="btn btn-primary arrow-button-container">
                            <img class="arrow-icon" src={leftArrow} />
                        </button>
                    </Link>
                    <button  class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={rightArrow} />
                    </button>
                </div>

                {/* <div class="col-3 notification-container"> */}
                <button class="btn btn-secondary arrow-button-container account-icon-container">
                    <img class="bell-icon" src={bell} alt="bell-icon"/>
                </button>

                <div class="user-account account-icon-container">
                    <img class="user-icon" src={user} />

                    <div class="user-infor">
                        <div class="user-name">Cinamon</div>
                        <div class="user-role">Sinh viên</div>
                    </div>

                    <button class="btn btn-secondary vector-container">
                        <img  class="vector-icon" src={vector}/>
                    </button>
                </div>
            </div>

            <div class="row statistics-bar" id="decentralise-title-container-1">
                <div class="col decentralise-title">
                    Phân quyền tài khoản
                </div>

                <div class="col search-bar-decentralise-container">
                    <input type="search" placeholder="Search" class="search-bar search-bar-decentralise"/>
                </div>
            </div>

            <TabComponent/>
        </div>
    )
}

const TabComponent = () => {
    const [currentTab, setCurrentTab] = useState('studentList');

    const renderTabContent = (tab) => {
        switch (tab) {
            case 'studentList':
                return <StudentAccountListTab />;
            case 'holderList':
                return <HolderAccountListTab />;
            default:
                return null;
        }
    };

    return (
        <div class="actlayout decentralize-tab-button">
            <div class="row actbutton">
                <button  type="button" class="detailbutton btn btn-outline-primary" onClick={() => setCurrentTab('studentList')}>Tài khoản SV</button>
                <button  type="button" class="detailbutton btn btn-outline-primary" onClick={() => setCurrentTab('holderList')}>Tài khoản BTC</button>
            </div>
            
            {renderTabContent(currentTab)}
            
            
        </div>
    );
}; 

export default AccountDecentralise;
