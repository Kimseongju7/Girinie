from .models import ParentUser
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class ParentUserSerializer(ModelSerializer):

    password = serializers.CharField(write_only=True)
    class Meta:
        model = ParentUser
        fields = ('id', 'username', 'password', 'email')
        read_only_fields = ('id',)  # 응답에 id 포함하고 싶을 경우

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = ParentUser(**validated_data)
        user.set_password(password)
        user.save()
        return user