from rest_framework import serializers
from .models import ChildUser

class ChildUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildUser
        fields = [
            'id', 'name', 'age', 'color', 'avatarUrl', 'parent',
            'order_level', 'manners_level', 'selfcare_level', 'clean_level',
            'calm_level', 'kindness_level', 'saving_level', 'eating_level', 'average_level',
            'created_at', 'updated_at',
        ]
        read_only_fields = [
            'id', 'parent', 'average_level', 'created_at', 'updated_at',
            'order_level', 'manners_level', 'selfcare_level', 'clean_level',
            'calm_level', 'kindness_level', 'saving_level', 'eating_level',
        ]

    def validate(self, data):
        instance = getattr(self, 'instance', None)

        if instance:
            # 기존 instance 값으로 average_level 재계산
            levels = [
                instance.order_level,
                instance.manners_level,
                instance.selfcare_level,
                instance.clean_level,
                instance.calm_level,
                instance.kindness_level,
                instance.saving_level,
                instance.eating_level,
            ]
            data['average_level'] = round(sum(levels) / len(levels), 2)
        else:
            # 새 객체 생성 시 (POST), 기본값은 모두 0으로 간주
            data['average_level'] = 0.0

        return data