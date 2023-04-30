from django.urls import path
from .views import render_inicio


app_name = 'inicio'


urlpatterns = [
    path('', render_inicio, name='posts'),
]