# Generated by Django 4.1 on 2023-01-26 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0002_project_precio'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='categoria',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='project',
            name='precioDescuento',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]