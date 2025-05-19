from django.apps import AppConfig


class ParentUserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'parent_users'
    verbose_name = "Parent Users"
