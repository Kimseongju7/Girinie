from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import ParentUser

# Register your models here.
@admin.register(ParentUser)
class ParentUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('username', 'email', )
    ordering = ('username',)
