# backend/books/views.py
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class createBook(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class retrieveBook(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer