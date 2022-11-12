from django.urls import path

from api.views import create_authority, get_authorities

urlpatterns = [
    path('create-authority', create_authority, name="create-authority"),
    path('get-authorities', get_authorities, name="get-authorities")
]
