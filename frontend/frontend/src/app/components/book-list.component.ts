import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  currentYear = new Date().getFullYear();
  books: any[] = [];
  isLoading = true;
  showForm = false;
  editBook: any = null;
  successMessage = '';
  form = this.fb.group({
    titre: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
    auteur: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
    annee: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
  });

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('CORS error:', err);
        alert('Erreur de connexion à l\'API. Vérifiez la console pour plus de détails.');
        this.isLoading = false;
      }
    });
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => this.loadBooks(),
        error: (err) => console.error('Error deleting book:', err)
      });
    }
  }

  openForm(book: any = null) {
    this.editBook = book;
    this.showForm = true;
    if (book) {
      this.form.patchValue({
        titre: book.titre || '',
        auteur: book.auteur || '',
        annee: book.annee ? book.annee.toString() : ''
      });
    } else {
      this.form.reset();
    }
  }

  closeForm() {
    this.showForm = false;
    this.editBook = null;
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const bookData = {
        titre: formValue.titre ? String(formValue.titre) : '',
        auteur: formValue.auteur ? String(formValue.auteur) : '',
        annee: formValue.annee ? Number(formValue.annee) : 1900
      };
      if (this.editBook) {
        this.bookService.updateBook(this.editBook.id, bookData).subscribe({
          next: () => {
            this.successMessage = 'Book updated!';
            this.loadBooks();
            this.closeForm();
            setTimeout(() => this.successMessage = '', 2000);
          },
          error: () => alert('Update failed')
        });
      } else {
        this.bookService.createBook(bookData).subscribe({
          next: () => {
            this.successMessage = 'Book added!';
            this.loadBooks();
            this.closeForm();
            setTimeout(() => this.successMessage = '', 2000);
          },
          error: () => alert('Insert failed')
        });
      }
    }
  }
}