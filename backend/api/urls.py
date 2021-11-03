from django.urls import path
from .views import main, BikeListView, BikeDetailView, UserListView, UserDetailView

urlpatterns = [
    path("", main), 
    path("users", UserListView.as_view()),
    path("users/<pk>", UserDetailView.as_view()),
    path("bike", BikeListView.as_view()),
    path("bike/<pk>", BikeDetailView.as_view()),
]
