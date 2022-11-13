from django.urls import path
from api.views import transact, create_pdf

urlpatterns = [
    path('transact', transact, name="transact"),
    path('create-pdf/<name>/<surname>', create_pdf, name="create-pdf")
]
