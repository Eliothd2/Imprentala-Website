from django.urls import path
from .views import render_servicios


app_name = 'servicios'


urlpatterns = [
    path('', render_servicios, name='posts'),
    # path('<int:producto_id>/', producto_detail, name="productos_detail")
]