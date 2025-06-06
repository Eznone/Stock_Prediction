from django.urls import path
from accounts import views as UserViews

urlpatterns = [
    # User registration endpoint
    path('register/', UserViews.RegisterView.as_view(), name='register'),
]