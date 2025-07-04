from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class ParentUser(AbstractUser):

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100, editable=True, blank=True, )
    last_name = models.CharField(max_length=100, editable=True, blank=True,)
    

    def __str__(self):
        return self.username

