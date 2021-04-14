from django.urls import path

from api.views import company_list, company_detail, vacancy_list, vacancy_detail, company_vacancies, top_ten

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>', vacancy_detail),
    path('vacancies/top_ten/', top_ten)
]