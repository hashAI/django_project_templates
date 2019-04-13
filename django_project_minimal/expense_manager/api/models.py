from django.db import models
from django.contrib.auth import models as auth_models

# Create your models here.

class Expense(models.Model):
    title = models.CharField(max_length=500, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    amount = models.IntegerField(null=False)
    created_by = models.ForeignKey(
        auth_models.User, related_name='expenses', on_delete='cascade')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

