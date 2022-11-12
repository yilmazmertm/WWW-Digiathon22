from django.urls import path

from api.views import create_authority

urlpatterns = [
    path('create-authority', create_authority)
]
