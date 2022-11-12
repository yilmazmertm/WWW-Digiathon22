from django.contrib import admin

from api.models import Authority


@admin.register(Authority)
class AuthorityAdmin(admin.ModelAdmin):
    list_display = ('name', 'wallet_address', 'authority_logo', 'created_at')
