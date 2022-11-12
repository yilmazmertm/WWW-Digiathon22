from django.db import models
from django.utils.crypto import get_random_string
import datetime


def generate_sign_text():
    return get_random_string(length=32,
                             allowed_chars="123456789abcddfghklytremn") + str(int(datetime.datetime.now().timestamp()))


class Authority(models.Model):
    wallet_address = models.CharField(max_length=42, blank=False, null=False)
    name = models.CharField(max_length=255, blank=False, null=False)
    nation_code = models.CharField(default="TR01", max_length=255)
    sector_code = models.CharField(default="0016", max_length=255)
    institution_code = models.CharField(default="343634457", max_length=255)
    authority_logo = models.ImageField(upload_to='authorities')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Sign(models.Model):
    wallet_address = models.CharField(max_length=42, blank=False, null=False)
    text = models.CharField(max_length=255, default=generate_sign_text)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.wallet_address)
