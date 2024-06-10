from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views

router = routers.DefaultRouter()
router.register(r"tasks", views.TaskView, "tasks")
router.register(r"maltrato", views.MaltratoView, "maltrato")
router.register(r"vacuna", views.VacunaView, "vacuna")
router.register(r"registrar", views.RegistrarView, "registrar")
router.register(r"donacion", views.DonacionView, "donacion")
router.register(r"visita", views.VisitaView, "visita")
router.register(r"adopcion", views.AdopcionView, "adopcion")
router.register(r"usuario", views.UsuarioView, "usuario")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Tasks API')),
]