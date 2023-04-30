from django.db import models

# Create your models here.


class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField()
    asunto = models.CharField(max_length=100)
    mensaje = models.TextField()