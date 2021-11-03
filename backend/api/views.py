from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import BikeSerializer
from .models import Bike

# Create your views here.
def main(request):
    return HttpResponse("<h1>Hello, World!</h1>")


class BikeView(generics.ListAPIView):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer
