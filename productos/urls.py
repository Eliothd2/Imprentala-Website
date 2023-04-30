from django.urls import path
from .views import render_producto, producto_detail


app_name = 'productos'


urlpatterns = [
    path('', render_producto, name='posts'),
    path('<int:producto_id>/', producto_detail, name="productos_detail")
]