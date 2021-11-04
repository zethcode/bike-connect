from django.urls import path
from rest_framework.routers import DefaultRouter
from api.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
urlpatterns = router.urls

# from .views import (
#     main, 
#     BikeListView, 
#     BikeDetailView,
#     UserListView, 
#     UserDetailView, 
#     UserCreateView,
#     UserUpdateView,
#     UserDeleteView
# )

# urlpatterns = [
#     path("", main), 
#     path("users", UserListView.as_view()),
#     path("users/create", UserCreateView.as_view()),
#     path("users/update/<pk>", UserUpdateView.as_view()),
#     path("users/delete/<pk>", UserDeleteView.as_view()),
#     path("users/<pk>", UserDetailView.as_view()),
#     path("bike", BikeListView.as_view()),
#     path("bike/<pk>", BikeDetailView.as_view()),
# ]
