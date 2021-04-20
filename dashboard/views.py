import random

from django.http import JsonResponse
from django.shortcuts import render

def homepage(request):
    return render(request, 'dashboard/homepage.html')  


def barchart(request):
    series = [
        {
            'name': 'Year 1800',
            'data': [random.randint(100,500) for i in range(4)]
        },
        {
            'name': 'Year 1900',
            'data': [random.randint(100,500) for i in range(4)]
        },
        {
            'name': 'Year 2000',
            'data': [random.randint(100,500) for i in range(4)]
        },
        {
            'name': 'Year 2016',
            'data': [random.randint(100,500) for i in range(4)]
        }
    ]

    return JsonResponse({'series': series})


def piechart(request):
    series = {
        'name': 'Brands',
        'colorByPoint': True,
        'data': [
            {
                'name': 'Chrome',
                'y': random.randint(1,10)
            },
            {
                'name': 'Internet Explorer',
                'y': random.randint(1,10)
            },
            {
                'name': 'Firefox',
                'y': random.randint(1,10)
            },
            {
                'name': 'Edge',
                'y': random.randint(1,10)
            },
            {
                'name': 'Safari',
                'y': random.randint(1,10)
            },
            {
                'name': 'Other',
                'y': random.randint(1,10)
            }
        ]
    }

    return JsonResponse({'series': series})
