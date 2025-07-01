# backend/books/urls.py
from django.urls import path
from .views import createBook

urlpatterns = [
    path('books/', createBook.as_view(), name='book-list-create'),
]