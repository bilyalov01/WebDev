from django.contrib import admin
from api.models import Vacancy, Company
# Register your models here.
admin.site.register(Company)
admin.site.register(Vacancy)