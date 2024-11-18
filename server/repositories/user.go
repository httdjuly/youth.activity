package repositories

import (
	"youth_activity/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindById(id int) (*models.User, error)
	FindAll() ([]*models.User, error)
	FindByEmail(email string) (*models.User, error)
	Create(user *models.User) error
	Update(user *models.User) error
	Delete(id int) error
}

type userRepositoryImpl struct {
	db *gorm.DB
}

// NewUserRepository khởi tạo repository
func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepositoryImpl{
		db: db,
	}
}

// FindById tìm user theo ID
func (r *userRepositoryImpl) FindById(id int) (*models.User, error) {
	var user models.User
	err := r.db.Preload("Activities").Where("id = ?", id).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// FindAll trả về danh sách tất cả users
func (r *userRepositoryImpl) FindAll() ([]*models.User, error) {
	var users []*models.User
	err := r.db.Preload("Activities").Find(&users).Error
	if err != nil {
		return nil, err
	}
	return users, nil
}

// FindByEmail tìm user theo email
func (r *userRepositoryImpl) FindByEmail(email string) (*models.User, error) {
	var user models.User
	err := r.db.Preload("Activities").Where("email = ?", email).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// Create thêm mới một user
func (r *userRepositoryImpl) Create(user *models.User) error {
	return r.db.Create(user).Error
}

// Update cập nhật thông tin user
func (r *userRepositoryImpl) Update(user *models.User) error {
	return r.db.Save(user).Error
}

// Delete xóa user theo ID
func (r *userRepositoryImpl) Delete(id int) error {
	return r.db.Delete(&models.User{}, id).Error
}
