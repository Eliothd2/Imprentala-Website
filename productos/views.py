from django.shortcuts import render, get_object_or_404
from .models import Project
from django.db.models import Q
# Create your views here.

def render_producto(request):
    print(request.GET)
    queryset = request.GET.get("buscar")
    print(queryset)
    
    productos = Project.objects.all()
    if queryset:
        print("hola")
        productos = Project.objects.filter(
            Q(title__icontains = queryset) |
            Q(description__icontains = queryset)
           
        ).distinct()
    else:
        print("puto")
    return render(request , 'producto.html',{"productos":productos})
def producto_detail(request, producto_id):
    producto = get_object_or_404(Project, pk=producto_id)
    related_products = Project.objects.all()[:4]
    return render(request, 'producto_detail.html', {"productos": producto, 'related_products':related_products})