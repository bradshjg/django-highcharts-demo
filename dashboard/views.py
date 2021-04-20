from django.http import JsonResponse
from django.shortcuts import render

def homepage(request):
    return render(request, 'dashboard/homepage.html')  


def barchart(request):
    return JsonResponse({'barchart': 'data'})


def piechart(request):
    return JsonResponse({'piechart': 'data'})
