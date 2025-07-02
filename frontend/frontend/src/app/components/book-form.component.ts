import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.component.html',
})
export class BookFormPageComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  bookId?: number;

  constructor(
    private fb: FormBuilder,
    private api: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.bookId = +params['id'];
        this.loadBook(this.bookId);
      }
    });
  }

  loadBook(id: number): void {
    this.api.getBook(id).subscribe({
      next: (book: Book) => {
        this.form.patchValue({
          titre: book.titre,
          auteur: book.auteur,
          annee: book.annee
        });
      },
      error: () => {
        alert('Failed to load book data');
        this.router.navigate(['/']);
      }
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      annee: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const bookData: Book = {
      titre: this.form.value.titre,
      auteur: this.form.value.auteur,
      annee: Number(this.form.value.annee)
    };

    const request = this.isEditMode && this.bookId
      ? this.api.updateBook(this.bookId, bookData)
      : this.api.createBook(bookData);

    request.subscribe({
      next: () => this.router.navigate(['/']),
      error: () => alert('Operation failed')
    });
  }
}
