from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

class CustomUserAdmin(UserAdmin):
    def get_readonly_fields(self, request, obj=None):
        if obj and obj.username == 'admin_safira':
            return self.readonly_fields + ('username', 'first_name', 'last_name', 'email', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
        return self.readonly_fields

    def has_delete_permission(self, request, obj=None):
        if obj and obj.username == 'admin_safira':
            return False
        return super().has_delete_permission(request, obj)

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
