from django.urls import path
from api.views import transact

urlpatterns = [
    path('transact', transact, name="transact")
]
