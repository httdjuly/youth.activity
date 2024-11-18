import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import "../style/style.css";
import "../style/userInfo.css";

import leftArrow from "../image/left-arrow.png";
import rightArrow from "../image/right-arrow.png";
import avatar from "../image/avatar.jpeg";

function UserInfo() {
  return (
    <div className="info--page d-flex flex-column">
      <div class="col">
        <Link to="/activities">
          <button class="btn btn-primary arrow-button-container">
            <img class="arrow-icon" src={leftArrow} />
          </button>
        </Link>
        <button class="btn btn-primary arrow-button-container">
          <img class="arrow-icon" src={rightArrow} />
        </button>
      </div>

      <div className="img-container d-flex flex flex-column justify-content-center align-content-center m-1 flex-wrap">
        <img
          src={avatar}
          alt="Avatar"
          className="rounded-circle align-content-center"
          width="180"
        />
      </div>

      <div className="info-title d-flex flex flex-column justify-content-center align-content-center m-1 flex-wrap">
        <h2 className="info-title">Thông tin tài khoản</h2>
      </div>

      <div className="card m-3">
        <div className="card-body">
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Họ và tên</h6>
            </div>
            <div className="col-sm-8 text-secondary">Hoàng Thị Thùy Dương</div>
          </div>
          <hr />
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Mã số sinh viên</h6>
            </div>
            <div className="col-sm-8 text-secondary">22110303</div>
          </div>
          <hr />
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Đơn vị trực thuộc</h6>
            </div>
            <div className="col-sm-8 text-secondary">
              Khoa Công nghệ Thông tin
            </div>
          </div>
          <hr />
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Giới tính</h6>
            </div>
            <div className="col-sm-8 text-secondary">Nữ</div>
          </div>
          <hr />
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Ngày sinh</h6>
            </div>
            <div className="col-sm-8 text-secondary">14/07/2004</div>
          </div>
          <hr />
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Email</h6>
            </div>
            <div className="col-sm-8 text-secondary">
              22110303@student.hcmute.edu.vn
            </div>
          </div>
          <hr />
          <div className="row flex-row">
            <div className="col-sm-4">
              <h6 className="mb-0 text-primary">Số điện thoại</h6>
            </div>
            <div className="col-sm-8 text-secondary">0123.456.789</div>
          </div>
        </div>
      </div>

      <div className="d-flex flex flex-column justify-content-center align-content-center m-1 flex-wrap">
        <button class="btn btn-outline-primary align-content-center modify-info">
          Chỉnh sửa thông tin
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
