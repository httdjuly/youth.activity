import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import star from '../../image/magic-star.png';
import '../../style/activitycontent.css'
import userperson from '../../image/profile-2user.png'
import location from '../../image/location.png'
import clock from '../../image/clock.png'
import person from '../../image/person.png'
import gearshop from '../../image/gearshape.png'
import { data } from '../PieChartActivity';


function ActivityContentTab() {
    let { id } = useParams();
    const [activityData, setActivityData] = useState({
        id: '',
        basicInfo: {},
        description: '',
        criteria: [],
        contactInfo: {},
        score: 0,
        host: {},
        currentNumber: 0,
    });

    useEffect(() => {
        fetch(`/api/activities/${id}`, { // Đảm bảo đường dẫn này phù hợp với cấu hình API của bạn
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            // Cập nhật trạng thái với dữ liệu nhận được
            setActivityData(data);
        })
        .catch(error => console.error('Error fetching activity data:', error));
    }, [id]);

    const {
        basicInfo,
        description,
        criteria,
        contactInfo
    } = activityData || {};
    // console.log('basicInfo:', basicInfo);

    return (
        <div class="row actcontent">
            <div class="columcontent col-md-7 col-12">
                <div class="contentleft ">
                    <div class="actdetail-title">Thông tin cơ bản </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={person} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Tạo bởi</h3></div>
                            <div class="subcontent-detail">{activityData.host.name}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={star} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Điểm</h3></div>
                            <div class="subcontent-detail">{activityData.score}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={location} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Địa điểm</h3></div>
                            <div class="subcontent-detail font-size-sm">{activityData.location}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={clock} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Thời gian diễn ra</h3></div>
                            <div class="subcontent-detail">{activityData.time} - {activityData.day}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={userperson} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Số lượng sinh viên</h3></div>
                            <div class="subcontent-detail">{activityData.currentNumber}</div>
                        </div>
                    </div>

                    {/* <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={gearshop} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Chế độ hoạt động</h3></div>
                            <div class="subcontent-detail">{activityData.mode}</div>
                        </div>
                    </div> */}

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={person} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Đối tượng tham gia</h3></div>
                            <div class="subcontent-detail">{activityData.target}</div>
                        </div>
                    </div>



                </div>
            </div>

            <div class ="columcontent col-md-5 col-12">
                <div class="contentright">
                    <div class="actdetail-title">Mô tả hoạt động </div>
                    <p>{activityData.description}</p>
                </div>
                <div class="contentright">
                    <div class="actdetail-title">Tiêu chí hợp lệ: </div>
                    <p>{activityData.criteria}</p>
                </div>
                <div class="contentright">
                    <div class="actdetail-title">Thông tin liên hệ</div>
                    <p>
                    https://www.facebook.com/DoanHoiITUTE <br></br>
                        +84 1234 5678 99 (Admin)<br>
                        </br>Văn phòng Đoàn - Hội khoa CNTT, Lầu 2, Trung tâm Tin học
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ActivityContentTab;