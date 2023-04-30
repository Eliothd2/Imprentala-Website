from django.urls import path
from .views import question_detail, preguntas
app_name = 'question'
urlpatterns = [
    path('', preguntas,  name='questions'),
    path("<int:pregunta_id>/",question_detail, name="question_detail")


]