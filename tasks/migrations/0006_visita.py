# Generated by Django 5.0.6 on 2024-06-08 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_donacion'),
    ]

    operations = [
        migrations.CreateModel(
            name='Visita',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('fecha', models.CharField(max_length=200)),
                ('motivo', models.CharField(max_length=200)),
                ('hora', models.CharField(max_length=100)),
            ],
        ),
    ]
