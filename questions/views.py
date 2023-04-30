from django.shortcuts import render, get_object_or_404

from .models import Preguntas
from django.db.models import Q

# Create your views here.
def preguntas(request):
    queryset = request.GET.get("buscar")
    preguntas = Preguntas.objects.all()
    if queryset:
        print("hola")
        preguntas = Preguntas.objects.filter(
            Q(tituloP__icontains = queryset) |
            Q(descripcionP__icontains = queryset)
           
        ).distinct()
    return render (request, 'questions.html',{"preguntas":preguntas})

   

def question_detail(request, pregunta_id):
    pregunta = get_object_or_404(Preguntas, pk=pregunta_id)
    return render(request, 'questions_detail.html', {"pregunta": pregunta})

