from django.db import models

# Create your models here.


class Servicios(models.Model):
    titleS = models.CharField(max_length=100)
    descriptionS = models.CharField(max_length=250)
    detallesS = models.CharField(max_length=100)
    imageS = models.ImageField(upload_to="servicios/images")
