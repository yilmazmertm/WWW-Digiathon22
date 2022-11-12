from rest_framework import serializers

from api.models import Authority
from be import settings


class AuthorityDisplaySerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()

    class Meta:
        model = Authority
        fields = ['name', 'wallet_address', 'logo_url']

    @staticmethod
    def get_logo_url(instance):
        return f"{settings.BASE_URL_BE}{instance.authority_logo.url}"
