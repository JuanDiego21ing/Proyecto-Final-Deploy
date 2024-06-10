from rest_framework import viewsets, status
from rest_framework.decorators import action
from requests import Response
from .serializer import TaskSerializer, MaltratoSerializer, VacunaSerializer, RegistrarSerializer,DonacionSerializer, VisitaSerializer, AdopcionSerializer, UsuarioSerializer
from .models import Task, Maltrato, Vacunas, Registrar, Donacion, Visita, Adopcion, Usuario

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    
    

class MaltratoView(viewsets.ModelViewSet):
    serializer_class = MaltratoSerializer
    queryset = Maltrato.objects.all()
    
    
class VacunaView(viewsets.ModelViewSet):
    serializer_class = VacunaSerializer
    queryset = Vacunas.objects.all()
    
    
class RegistrarView(viewsets.ModelViewSet):
    serializer_class = RegistrarSerializer
    queryset = Registrar.objects.filter(adoptado=False)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        disponible = self.request.query_params.get('disponible')
        if disponible:
            queryset = queryset.exclude(adopciones__isnull=False)
        return queryset
    
    
class DonacionView(viewsets.ModelViewSet):
    serializer_class = DonacionSerializer
    queryset = Donacion.objects.all()
    
    
class VisitaView(viewsets.ModelViewSet):
    serializer_class = VisitaSerializer
    queryset = Visita.objects.all()
    
    
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    
    
class AdopcionView(viewsets.ModelViewSet):
    serializer_class = AdopcionSerializer
    queryset = Adopcion.objects.all()
    
    
    @action(detail=False, methods=['post'])
    def adoptar(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)