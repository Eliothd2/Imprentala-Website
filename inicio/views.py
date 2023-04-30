from django.shortcuts import render

# Create your views here.
def render_inicio(request):
    return render(request , 'inicio.html',)