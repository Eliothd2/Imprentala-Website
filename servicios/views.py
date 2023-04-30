from django.shortcuts import render
from .models import Servicios
# Create your views here.


def render_servicios(request):
    servicio = Servicios.objects.all()
    return render(request , 'servicios.html',{"servicios":servicio})
