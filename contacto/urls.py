from django.urls import path
from .views import render_contactanos


app_name = 'contacto'


urlpatterns = [
    path('', render_contactanos, name='contacto'),

]