from rest_framework import serializers

from api.models import Authority
from be import settings


class AuthorityDisplaySerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    origin_code = serializers.SerializerMethodField()

    class Meta:
        model = Authority
        fields = ['name', 'wallet_address', 'logo_url', 'origin_code']

    @staticmethod
    def get_logo_url(instance):
        return f"{settings.BASE_URL_BE}{instance.authority_logo.url}"

    @staticmethod
    def get_origin_code(instance):
        return f"{instance.nation_code}-date-{instance.sector_code}-{instance.institution_code}-documentId"
