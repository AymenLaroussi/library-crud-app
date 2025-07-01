from rest_framework import generics
from .models import Book
from .serializers import BookSerializer
from rest_framework.response import Response
from rest_framework import status


class createBook(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class retrieveBook(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class updateBook(generics.UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = 'pk'

class deleteBook(generics.DestroyAPIView):
    queryset = Book.objects.all()
    lookup_field = 'pk'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"message": "Book was deleted successfully"},
            status=status.HTTP_204_NO_CONTENT
        )