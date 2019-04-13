from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import models as auth_models

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework import generics
from rest_framework import mixins
from django_filters.rest_framework import DjangoFilterBackend

from . import models
from . import serializers


@method_decorator(csrf_exempt, name='dispatch')
class IndexView(View):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)


class UserViewSet(viewsets.ModelViewSet):
    queryset = auth_models.User.objects.all().order_by('-date_joined')
    serializer_class = serializers.UserSerializer


class ExpenseViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet):

    queryset = models.Expense.objects.all()
    serializer_class = serializers.ExpenseSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=auth_models.User.objects.get(id=1))

