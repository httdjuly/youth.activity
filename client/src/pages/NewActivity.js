// Trong component NewActivity.js
import React, { useState, useEffect } from 'react';
import '../style/activitycontent.css'
import '../style/act_detail.css'
import '../style/newactive.css'
import '../style/popup.css'
import userperson from '../image/profile-2user.png'
import location from '../image/location.png'
import clock from '../image/clock.png'
import person from '../image/person.png'
import gearshop from '../image/gearshape.png'
import star from '../image/magic-star.png';
function NewActivity({ onConfirm }) {
    const [activityData, setActivityData] = useState({
        name: '',
        score: 0,
        location: '',
        time: '',
        day: '',
        numberMembers: 0,
        mode: 'auto',
        target: '',
        description: '',
        criteria: '',
        contact: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setActivityData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedActivityData = {
            ...activityData,
            numberMembers: parseInt(activityData.numberMembers) || 0, // Sử dụng 0 làm giá trị mặc định nếu không thể chuyển đổi
            score: parseInt(activityData.score) || 0,
        };
        try {
            console.log('Dữ liệu gửi lên:', JSON.stringify(updatedActivityData, null, 2));

            const response = await fetch('/api/activities/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedActivityData),
            });

            if (response.ok) {
                // Xử lý khi đăng ký hoạt động thành công
                console.log('Hoạt động đã được đăng ký thành công');
                onConfirm(); // Đóng cửa sổ hoặc thực hiện hành động cần thiết
            } else {
                console.error('Đăng ký hoạt động thất bại');
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu đăng ký hoạt động:', error);
        }
    };

    useEffect(() => {
        const unloadListener = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', unloadListener);
        return () => {
            window.removeEventListener('beforeunload', unloadListener);
        };
    }, []);

    const handleConfirmLeave = () => {
        const isConfirmed = window.confirm(
            'Bạn có muốn lưu thông tin hoạt động mới không trước khi rời khỏi trang?'
        );
    };

    return (
        <div class="overplay">
            <div class=" actcontent newact ">
                <h1 class="newacttitle"> Tạo hoạt động</h1>
                <div class="newactscroll">
                    <form onSubmit={handleSubmit}>     
                        <div class="contentleft newact">
                            <div class="actdetail-title">Thông tin cơ bản </div>
                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={person} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Tên Hoạt động</h3></div>
                                    <input type="text" name="name"
                                        value={activityData.name}
                                        onChange={handleChange} class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={star} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Điểm</h3></div>
                                    <input type="text" name="score"
                                        value={activityData.score}
                                        onChange={handleChange} class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={location} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Địa điểm</h3></div>
                                    <input type="text" name="location"
                                        value={activityData.location}
                                        onChange={handleChange} class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={clock} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Thời gian diễn ra</h3></div>
                                    <div class="timenewact">
                                        <input type="time" name="time"
                                        value={activityData.time}
                                        onChange={handleChange} class="form-control"/>
                                        <input type="date" name="day"
                                        value={activityData.day}
                                        onChange={handleChange} class="form-control" placeholder="2000-11-20"  />
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={userperson} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Số lượng sinh viên</h3></div>
                                    <input type="text" name="numberMembers"
                                        value={activityData.numberMembers}
                                        onChange={handleChange}
                                        class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={gearshop} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Chế độ hoạt động</h3></div>
                                    <select name="mode"
                                        value={activityData.mode}
                                        onChange={handleChange}>
                                        <option value="Tự động duyệt">Tự động duyệt</option>
                                        <option value="Phê duyệt">Phê duyệt</option>
                                    </select>
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={person} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Đối tượng tham gia</h3></div>
                                    <input type="text" name="target"
                                        value={activityData.target}
                                        onChange={handleChange} class="form-control" />
                                </div>
                            </div>       
                        </div>
                                
                        <div class="contentleft newact">
                            <div class="actdetail-title">Mô tả hoạt động </div>
                            <textarea rows="3" name="description"
                                        value={activityData.description}
                                        onChange={handleChange}></textarea>
                        </div>
                        <div class="contentleft newact">
                            <div class="actdetail-title">Tiêu chí hợp lệ </div>
                            <textarea rows="3" name="criteria"
                                        value={activityData.criteria}
                                        onChange={handleChange}></textarea>
                        </div>
                        <div class="contentleft newact" >
                            <div class="actdetail-title" name="contact"
                                        value={activityData.contact}
                                        onChange={handleChange}>Thông tin liên hệ</div>
                            <textarea rows="3" ></textarea>
                        </div>
                        
                        <div class="butdiv">
                        <button type="submit" class="actresig-sinhvien btn">Tạo</button>
                        <button type="button" class="actresig-tvp btn" onClick={onConfirm}>Hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // <div>
        //     <h2>Tạo hoạt động mới</h2>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             Tên hoạt động:
        //             <input
        //                 type="text"
        //                 value={activityName}
        //                 onChange={(e) => setActivityName(e.target.value)}
        //             />
        //         </label>
        //         <br />
        //         <label>
        //             Giá trị:
        //             <input
        //                 type="text"
        //                 value={activityValue}
        //                 onChange={(e) => setActivityValue(e.target.value)}
        //             />
        //         </label>
        //         <br />
        //         <label>
        //             Thời gian:
        //             <input
        //                 type="text"
        //                 value={activityTime}
        //                 onChange={(e) => setActivityTime(e.target.value)}
        //             />
        //         </label>
        //         <br />
        //         <label>
        //             Địa điểm:
        //             <input
        //                 type="text"
        //                 value={activityPlace}
        //                 onChange={(e) => setActivityPlace(e.target.value)}
        //             />
        //         </label>
        //         <br />
        //         <label>
        //             Chi tiết hoạt động:
        //             <input
        //                 type="text"
        //                 value={activityDetail}
        //                 onChange={(e) => setActivityDetail(e.target.value)}
        //             />
        //         </label>
        //         <br />
        //         <input type="submit" value="Tạo hoạt động" />
        //     </form>
        // </div>
    );
}

export default NewActivity;
