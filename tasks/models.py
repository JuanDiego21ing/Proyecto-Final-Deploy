from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    
    
class Maltrato(models.Model):
    nombre = models.CharField(max_length=200)
    fecha = models.CharField(max_length=200)
    estado = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    
    def __str__(self):
        return self.nombre
    
    
    
class Vacunas(models.Model):
    nombre = models.CharField(max_length=200)
    fechaVacuna = models.CharField(max_length=200)
    tipoVacuna = models.CharField(max_length=200)
    proximaVacuna = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre
    
    
class Registrar(models.Model):
    nombre = models.CharField(max_length=200)
    raza = models.CharField(max_length=200)
    edad = models.CharField(max_length=200)
    genero = models.CharField(max_length=200)
    descripcion = models.TextField(blank=False)
    adoptado = models.BooleanField(default=False)
    
    def __str__(self):
        return self.nombre
    
    

class Donacion(models.Model):
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    fecha = models.CharField(max_length=200)
    monto = models.CharField(max_length=200)
    descripcion = models.TextField(blank=False)
    
    
    def __str__(self):
        return self.nombre
    
    
    
class Visita(models.Model):
    nombre = models.CharField(max_length=200)
    fecha = models.CharField(max_length=200)
    motivo = models.CharField(max_length=200)
    hora = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre
    
    
class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    apellidos = models.CharField(max_length=200)
    correo = models.CharField(max_length=200)
    telefono = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre
    
    
    
class Adopcion(models.Model):
    adoptante = models.CharField(max_length=200)
    fecha = models.CharField(max_length=200)
    mascota = models.ForeignKey(Registrar, on_delete=models.CASCADE, related_name='adopciones')
    
    def save(self, *args, **kwargs):
        self.mascota.adoptado = True
        self.mascota.save()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.adoptante} adoptó a {self.mascota.nombre}"
    
