from django.urls import path
from .views import ChildUserView, ChildUserDetailView

urlpatterns = [
    path('', ChildUserView.as_view(), name='child-user-list-create'),         # GET, POST
    path('<int:pk>/', ChildUserDetailView.as_view(), name='child-user-detail') # GET, PUT, DELETE
]