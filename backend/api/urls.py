from django.urls import path
from .views import main, BikeListView, BikeDetailView

urlpatterns = [
    path("", main), 
    path("bike", BikeListView.as_view()),
    path("bike/<pk>", BikeDetailView.as_view())
]
