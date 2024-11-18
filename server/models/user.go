package models

type User struct {
	Id       int    `gorm:"primaryKey;autoIncrement" json:"id"`
	Email    string `gorm:"size:100;unique;not null" json:"email"`
	Username string `gorm:"size:50;unique;not null" json:"username"`
	Password string `gorm:"size:255;not null" json:"-"`
	Role     string `gorm:"size:20;not null" json:"role"`

	Name        string `gorm:"size:100" json:"name"`
	Major       string `gorm:"size:100" json:"major,omitempty"`
	Department  string `gorm:"size:100" json:"department,omitempty"`
	Class       string `gorm:"size:100" json:"class,omitempty"`
	PhoneNumber string `gorm:"size:20" json:"phone_number,omitempty"`
	StudentID   string `gorm:"size:20;unique" json:"student_id,omitempty"`
	Mail        string `gorm:"size:100" json:"mail,omitempty"`
	Sex         bool   `json:"sex"`
	BirthDay    string `gorm:"size:50" json:"birth_day,omitempty"`

	Activities []*Activity `gorm:"many2many:user_activities;constraint:OnDelete:CASCADE" json:"activities,omitempty"`
}
