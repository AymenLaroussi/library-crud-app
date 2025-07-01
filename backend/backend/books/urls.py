from django.urls import path
from .views import createBook,retrieveBook,updateBook,deleteBook

urlpatterns = [
    path('books/', createBook.as_view(), name='book-list-create'),
    path('books/', retrieveBook.as_view(), name='book-list'),
    path('books/<int:pk>/', updateBook.as_view(), name='book-update'),
    path('books/<int:pk>/delete/', deleteBook.as_view(), name='book-delete'),
]