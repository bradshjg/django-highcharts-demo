from django.urls import path

from . import views

urlpatterns = [
  path('', views.homepage),
  path('barchart-data/', views.barchart),
  path('piechart-data/', views.piechart),
]