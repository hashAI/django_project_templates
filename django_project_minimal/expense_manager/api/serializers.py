from rest_framework import serializers
from django.contrib.auth import models as auth_models
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = auth_models.User
        fields = ('url', 'username', 'email', 'groups')


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):
    created_by = serializers.CharField(read_only=True)

    class Meta:
        model = models.Expense
        fields = ('url', 'title', 'description', 'amount', 'created_by')

