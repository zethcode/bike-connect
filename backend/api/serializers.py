from rest_framework import serializers
from .models import Bike
from django.contrib.auth import get_user, get_user_model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = "__all__"
