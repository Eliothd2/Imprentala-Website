from django.db import models
from django.db.models.fields import CharField, URLField
from django.db.models.fields.files import ImageField, FileField

# Create your models here.

class Preguntas(models.Model):
    tituloP = models.CharField(max_length=100)
    descripcionP = models.CharField(max_length=100)
    image= models.FileField(upload_to='profiles', blank=True, null=True)
    