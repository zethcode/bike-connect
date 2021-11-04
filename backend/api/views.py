from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import BikeSerializer, UserSerializer
from .models import Bike
from django.contrib.auth import get_user_model, get_user

# Create your views here.
def main(request):
    return HttpResponse("<h1>Hello, World!</h1>")

class UserListView(generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class BikeListView(generics.ListAPIView):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer

class BikeDetailView(generics.RetrieveAPIView):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer
