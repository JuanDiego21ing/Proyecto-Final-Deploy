# Generated by Django 5.0.6 on 2024-06-01 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Maltrato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('fecha', models.CharField(max_length=200)),
                ('estado', models.CharField(max_length=200)),
                ('descripcion', models.TextField(blank=True)),
            ],
        ),
    ]
