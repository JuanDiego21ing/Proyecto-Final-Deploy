from rest_framework import serializers
from .models import Task, Maltrato, Vacunas, Registrar, Donacion, Visita, Adopcion, Usuario

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        
        
        
class MaltratoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Maltrato
        fields = '__all__'
        
        

class VacunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacunas
        fields = '__all__'
        
        
class RegistrarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registrar
        fields = '__all__' 
        
        
class DonacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donacion
        fields = '__all__'
        
        
class VisitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visita
        fields = '__all__'
        
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        
        
class AdopcionSerializer(serializers.ModelSerializer):
    mascota = serializers.SlugRelatedField(
        slug_field='nombre',
        queryset=Registrar.objects.exclude(adopciones__isnull=False)  
    )
    
    class Meta:
        model = Adopcion
        fields = '__all__'