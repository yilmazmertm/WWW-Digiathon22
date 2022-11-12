from django.urls import path

from api.views import create_authority, get_authorities, get_authority, get_text_to_sign, verify_signature

urlpatterns = [
    path('create-authority', create_authority, name="create-authority"),
    path('get-authorities', get_authorities, name="get-authorities"),
    path('get-authority/<wallet_address>', get_authority, name="get-authority"),
    path('get-text-to-sign/<wallet_address>', get_text_to_sign, name="get-text-to-sign"),
    path("verify-signature/<wallet_address>/<signature>", verify_signature, name="verify-signature")
]
