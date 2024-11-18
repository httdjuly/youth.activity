package repositories

import (
	"youth_activity/models"

	"gorm.io/gorm"
)

type ActivityRepository interface {
	FindById(id int) (*models.Activity, error)
	FindAll() ([]*models.Activity, error)
	Create(activity *models.Activity) error
	Update(activity *models.Activity) error
	Delete(id int) error
}

type activityRepositoryImpl struct {
	db *gorm.DB
}

// NewActivityRepository khởi tạo repository
func NewActivityRepository(db *gorm.DB) ActivityRepository {
	return &activityRepositoryImpl{
		db: db,
	}
}

// FindById tìm activity theo ID
func (r *activityRepositoryImpl) FindById(id int) (*models.Activity, error) {
	var activity models.Activity
	err := r.db.Preload("Host").Preload("Attendance").Where("id = ?", id).First(&activity).Error
	if err != nil {
		return nil, err
	}
	return &activity, nil
}

// FindAll trả về danh sách tất cả activity
func (r *activityRepositoryImpl) FindAll() ([]*models.Activity, error) {
	var activities []*models.Activity
	err := r.db.Preload("Host").Preload("Attendance").Find(&activities).Error
	if err != nil {
		return nil, err
	}
	return activities, nil
}

// Create thêm mới một activity
func (r *activityRepositoryImpl) Create(activity *models.Activity) error {
	return r.db.Create(activity).Error
}

// Update cập nhật thông tin activity
func (r *activityRepositoryImpl) Update(activity *models.Activity) error {
	return r.db.Save(activity).Error
}

// Delete xóa activity theo ID
func (r *activityRepositoryImpl) Delete(id int) error {
	return r.db.Delete(&models.Activity{}, id).Error
}
