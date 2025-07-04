from django.urls import path
from .views import createBook,retrieveBook,updateDeleteBook

urlpatterns = [
    path('books', createBook.as_view(), name='book-list-create'),
    path('books', retrieveBook.as_view(), name='book-list'),
    path('books/<int:pk>', updateDeleteBook.as_view(), name='book-update-delete'),
]