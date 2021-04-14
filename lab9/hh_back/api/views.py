from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
import json


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'], description=data['description'],
                                             city=data['city'], address=data['address'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(company.to_json(), safe=False)


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())


def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    vacancies_json = vacancies_json[:10]
    return JsonResponse(vacancies_json, safe=False)