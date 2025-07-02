from django.db import models

class Book(models.Model):
    titre = models.CharField(max_length=200)
    auteur = models.CharField(max_length=100)
    annee = models.IntegerField()

    def __str__(self):
        return self.titre