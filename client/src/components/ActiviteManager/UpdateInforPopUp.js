// Trong component NewActivity.js
import React, { useState, useEffect } from 'react';
import '../../style/activitycontent.css'
import '../../style/act_detail.css'
import '../../style/newactive.css'
import '../../style/popup.css'
import userperson from '../../image/profile-2user.png'
import location from '../../image/location.png'
import clock from '../../image/clock.png'
import person from '../../image/person.png'
import gearshop from '../../image/gearshape.png'
import star from '../../image/magic-star.png';
function NewActivity({ onConfirm }) {


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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu hoạt động mới ở đây
    };

    const handleConfirmLeave = () => {
        const isConfirmed = window.confirm(
            'Bạn có muốn lưu thông tin hoạt động mới không trước khi rời khỏi trang?'
        );
    };

    return (
        <div class="overplay">
            <div class=" actcontent newact ">
                <h1 class="newacttitle"> Cập nhật hoạt động</h1>
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
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={star} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Quyền lợi</h3></div>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={location} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Địa điểm</h3></div>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={clock} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Thời gian diễn ra</h3></div>
                                    <div class="timenewact">
                                        <input type="time"  class="form-control"/>
                                        <input type="date" class="form-control" placeholder="2000-11-20"  />
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={userperson} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Số lượng sinh viên</h3></div>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={gearshop} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Chế độ hoạt động</h3></div>
                                    <select >
                                        <option >Tự động duyệt</option>
                                        <option>Phê duyệt</option>
                                    </select>
                                </div>
                            </div>

                            <div class="actdetail-subcontent ">
                                <div class="subcontain-image col-1">
                                    <img class="subcontain-icon" src={person} />
                                </div>
                                <div class="subcontain-infor col-11">
                                    <div class="subcontent-title"><h3>Đối tượng tham gia</h3></div>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>       
                        </div>

                        <div class="contentleft newact">
                            <div class="actdetail-title">Mô tả hoạt động </div>
                            <textarea rows="3" ></textarea>
                        </div>

                        <div class="contentleft newact">
                            <div class="actdetail-title">Tiêu chí hợp lệ </div>
                            <textarea rows="3" ></textarea>
                        </div>

                        <div class="contentleft newact" >
                            <div class="actdetail-title">Thông tin liên hệ</div>
                            <textarea rows="3" ></textarea>
                        </div>
                        
                        <div class="butdiv">
                        <button type="button" class="actresig-sinhvien btn" onClick={onConfirm}>Cập nhật</button>
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
