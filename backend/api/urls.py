from django.urls import path
from .views import main, BikeView

urlpatterns = [path("", main), path("bike", BikeView.as_view())]
