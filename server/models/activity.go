package models

type Activity struct {
	Id             int     `gorm:"primaryKey;autoIncrement" json:"id"`
	Day            string  `json:"day"`
	Time           string  `json:"time"`
	Location       string  `json:"location"`
	Target         string  `json:"target"`
	Description    string  `json:"description"`
	Criteria       string  `json:"criteria"`
	CurrentNumber  int     `json:"currentNumber"`
	Name           string  `gorm:"size:100;not null" json:"name"`
	Score          int     `json:"score"`
	NumberMembers  int     `json:"number_members"`
	Host           *User   `gorm:"foreignKey:HostID;constraint:OnDelete:SET NULL" json:"host,omitempty"`
	HostID         int     `gorm:"index" json:"host_id"`
	Attendance     []*User `gorm:"many2many:user_activities;constraint:OnDelete:CASCADE" json:"attendance,omitempty"`
}
