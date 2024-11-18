package controllers

import (
	"net/http"
	"strconv"
	"youth_activity/models"
	"youth_activity/usecases"

	"github.com/gin-gonic/gin"
)

type ActivityController struct {
	service usecases.ActivityUsecase
}

func NewActivityController(service usecases.ActivityUsecase) *ActivityController {
	return &ActivityController{
		service: service,
	}
}

// GetActivityByID handles GET /activities/:id
func (c *ActivityController) GetActivityByID(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid activity ID"})
		return
	}

	activity, err := c.service.GetActivityById(id)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Activity not found"})
		return
	}

	ctx.JSON(http.StatusOK, activity)
}

// GetAllActivities handles GET /activities
func (c *ActivityController) GetAllActivities(ctx *gin.Context) {
	activities, err := c.service.GetAllActivities()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch activities"})
		return
	}

	ctx.JSON(http.StatusOK, activities)
}

// CreateActivity handles POST /activities
func (c *ActivityController) CreateActivity(ctx *gin.Context) {
	var activity models.Activity
	if err := ctx.ShouldBindJSON(&activity); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	user, ok := ctx.Get("user")
	if !ok {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	// Ép kiểu user về *models.User
	authenticatedUser, ok := user.(*models.User)
	if !ok {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "invalid user data"})
		return
	}
	activity.HostID = authenticatedUser.Id
	activity.Host = authenticatedUser

	if err := c.service.CreateActivity(&activity); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create activity"})
		return
	}

	ctx.JSON(http.StatusCreated, activity)
}

// UpdateActivity handles PUT /activities/:id
func (c *ActivityController) UpdateActivity(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid activity ID"})
		return
	}

	var activity models.Activity
	if err := ctx.ShouldBindJSON(&activity); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}
	activity.Id = id

	if err := c.service.UpdateActivity(&activity); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update activity"})
		return
	}

	ctx.JSON(http.StatusOK, activity)
}

// DeleteActivity handles DELETE /activities/:id
func (c *ActivityController) DeleteActivity(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid activity ID"})
		return
	}

	if err := c.service.DeleteActivity(id); err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Activity not found"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Activity deleted successfully"})
}

func (c *ActivityController) AttendActivity(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid activity ID"})
		return
	}

	user, ok := ctx.Get("user")
	if !ok {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	// Ép kiểu user về *models.User
	authenticatedUser, ok := user.(*models.User)
	if !ok {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "invalid user data"})
		return
	}

	if err := c.service.AttendActivity(authenticatedUser, id); err != nil {
		ctx.JSON(http.StatusNotFound, err)
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Activity attend successfully"})
}
