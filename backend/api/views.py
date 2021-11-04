from django.shortcuts import render
from django.http import HttpResponse
from .serializers import BikeSerializer, UserSerializer
from .models import Bike
from django.contrib.auth import get_user_model, get_user
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response

# Create your views here.
def main(request):
    return HttpResponse("<h1>Hello, World!</h1>")

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# class UserListView(ListAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

# class UserDetailView(RetrieveAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

# class UserCreateView(CreateAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

# class UserUpdateView(UpdateAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

# class UserDeleteView(DestroyAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

# class BikeListView(ListAPIView):
#     queryset = Bike.objects.all()
#     serializer_class = BikeSerializer

# class BikeDetailView(RetrieveAPIView):
#     queryset = Bike.objects.all()
#     serializer_class = BikeSerializer
