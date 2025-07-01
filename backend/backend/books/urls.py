# backend/books/urls.py
from django.urls import path
from .views import createBook,retrieveBook

urlpatterns = [
    path('books/', createBook.as_view(), name='book-list-create'),
    path('books/', retrieveBook.as_view(), name='book-list'),
]