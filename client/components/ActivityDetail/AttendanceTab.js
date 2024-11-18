import React from 'react';
import '../../style/actdetail_attendence.css'
import '../../style/activitycontent.css'

const AttendanceTab = () => {
    // Your attendance tab content
    return(
        <div class="row actcontent attendencelayout">
            <div class="searchbar">
                <input class="search-bar" type="search" placeholder="Nhập mã số sinh viên" />
                <button type="button" class="checkinbut btn">Check-in</button>
                <button type="button" class="checkoutbut btn">Check-out</button>
            </div>
            <div class="rowcontet">
                <div class="columcontent col-4">
                    <div class="contentleft1 ">
                        <div class="actdetail-title titlecolum">Thông tin sinh viên</div>
                        <div class="subcontain-infor">
                            <div class="subcontent-title"><h3>Mã số sinh viên</h3></div>
                            <div class="subcontent-detail attend">000001</div>
                        </div>
                        <div class="subcontain-infor">
                            <div class="subcontent-title"><h3>Họ và tên</h3></div>
                            <div class="subcontent-detail attend">Nguyễn Văn A</div>
                        </div>  
                        <div class="subcontain-infor">
                            <div class="subcontent-title"><h3>Khoa</h3></div>
                            <div class="subcontent-detail attend">Khoa học và Kỹ thuật Máy tính</div>
                        </div>    
                    </div>
                </div>

                <div class ="columcontent col-8">
                    <div class="contentleft1 ">
                        <div class="actdetail-title titlecolum">Sinh viên điểm danh thành công</div>  
                        <div class="tablecheck"> 
                            <table class="table studentattendence">
                                <thead>
                                    <tr class="headerrow">
                                        <th scope="col-2" className="sticky-header">MSSV</th>
                                        <th scope="col-4" className="sticky-header">Họ và tên</th>
                                        <th scope="col-3" className="sticky-header">Check-in</th>
                                        <th scope="col-3" className="sticky-header">Check-out</th>
                                    </tr>
                                </thead>  

                                <tbody>
                                    <tr>
                                        <td>000001</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>08:00 AM</td>
                                        <td>11:00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>000001</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>08:00 AM</td>
                                        <td>11:00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>000001</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>08:00 AM</td>
                                        <td>11:00 AM</td>
                                    </tr>
                                </tbody> 
                            
                            </table>  
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    ) 
};

export default AttendanceTab;
