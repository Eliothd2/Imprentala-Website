from django.shortcuts import render

# Create your views here.
from .forms import ContactoForm
# Create your views here.

def render_contactanos(request):
    data = {
        'form': ContactoForm()
    }

    if request.method == 'POST':
        formulario = ContactoForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "contacto enviado"
        else:
            data["form"] = formulario
    return render(request , 'contacto.html', data)