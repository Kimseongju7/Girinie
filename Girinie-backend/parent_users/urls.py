from django.urls import path
from .views import LoginView, LogoutView, UserCreateView, UserDeleteView
urlpatterns = [
    path("login/", LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('', UserCreateView.as_view(), name='signup'),
    path('me/', UserDeleteView.as_view(), name='delete-account'),
]