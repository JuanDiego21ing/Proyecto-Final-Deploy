from django.contrib import admin
from .models import Task, Maltrato, Vacunas, Registrar, Donacion, Visita, Adopcion, Usuario

# Register your models here.

admin.site.register(Task)
admin.site.register(Maltrato)
admin.site.register(Vacunas)
admin.site.register(Registrar)
admin.site.register(Donacion)
admin.site.register(Visita)
admin.site.register(Adopcion)
admin.site.register(Usuario)
