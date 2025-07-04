from .models import ParentUser
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class ParentUserSerializer(ModelSerializer):

    password = serializers.CharField(write_only=True)
    class Meta:
        model = ParentUser
        fields = ('username', 'password', 'email', )

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = ParentUser(**validated_data)
        user.set_password(password)
        user.save()
        return user