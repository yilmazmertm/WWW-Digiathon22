from django.db import models


class Authority(models.Model):
    wallet_address = models.CharField(max_length=42, blank=False, null=False)
    name = models.CharField(max_length=255, blank=False, null=False)
    authority_logo = models.ImageField(upload_to='authorities')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
