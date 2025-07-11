from django.db import models
from common.models import CommonModel
from parent_users.models import ParentUser  # ParentUser가 정의된 앱 이름에 따라 조정

class ChildUser(CommonModel):
    name = models.CharField(max_length=100)

    age = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=30)

    avatarUrl = models.ImageField(upload_to='avatars/', blank=True, null=True)

    parent = models.ForeignKey(
        ParentUser,
        on_delete=models.CASCADE,
        related_name='children'
    )

    order_level = models.PositiveSmallIntegerField(default=0)       # 질서
    manners_level = models.PositiveSmallIntegerField(default=0)     # 예절
    selfcare_level = models.PositiveSmallIntegerField(default=0)    # 자조
    clean_level = models.PositiveSmallIntegerField(default=0)       # 청결
    calm_level = models.PositiveSmallIntegerField(default=0)        # 감정 조절
    kindness_level = models.PositiveSmallIntegerField(default=0)    # 존중
    saving_level = models.PositiveSmallIntegerField(default=0)      # 절약
    eating_level = models.PositiveSmallIntegerField(default=0)      # 식습관

    average_level = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.name}"