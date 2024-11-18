package usecases

import (
	"youth_activity/models"
	"youth_activity/repositories"
)

type ActivityUsecase interface {
	GetActivityById(id int) (*models.Activity, error)
	GetAllActivities() ([]*models.Activity, error)
	CreateActivity(a *models.Activity) (error)
	UpdateActivity(a *models.Activity) error
	DeleteActivity(id int) error
}

type activityUsecaseImpl struct {
	activityRepository repositories.ActivityRepository
}

func NewActivityUsecase(activityRepository repositories.ActivityRepository) ActivityUsecase {
	return &activityUsecaseImpl{
		activityRepository: activityRepository,
	}
}

func (u *activityUsecaseImpl) GetActivityById(id int) (*models.Activity, error) {
	activity, err := u.activityRepository.FindById(id)
	if err != nil {
		return nil, err
	}

	return activity, nil
}

func (u *activityUsecaseImpl) DeleteActivity(id int) error {
	err:= u.activityRepository.Delete(id)
	if err!= nil{
		return err
	}
	return nil
}
func (u *activityUsecaseImpl) GetAllActivities() ([]*models.Activity, error) {
	activity, err:= u.activityRepository.FindAll()
	if err!= nil {
		return nil, err
	}
	return activity, nil

}
func (u *activityUsecaseImpl) CreateActivity(acitivity *models.Activity) (error) {
	err:=u.activityRepository.Create(acitivity)
	if err!= nil {
		return err;
	}
	return nil
}
func (u *activityUsecaseImpl) UpdateActivity(a *models.Activity) error{
	err:=u.activityRepository.Update(a)
	if err!=nil {
		return err;		
	}
	return nil
}