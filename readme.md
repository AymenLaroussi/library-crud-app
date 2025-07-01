## ✅ Critères remplis

| Composant   | Description |
|-------------|-------------|
| **Backend** | ✅ Création du projet au niveau backend (Django) |
|             | ✅ Création entité Book |
|             | ✅ Création API REST (Créer , Lister , Mise à jour , Supprimer) |

---
## ⚙️ Configuration
### 🛠️ Backend (Django)
**Backend**
```bash
cd backend
python -m venv venv
venv\Scripts\activate 
pip install -r requirements.txt
python manage.py runserver
```

---
### CRUD API
| HTTP | Endpoint | Action |
|------|----------|--------|
| **GET** | /api/books/ | Liste des livres |
| **POST** | /api/books/ | Ajout d'un livre |
| **PUT** | /api/books/{id}/ | Mettre à jour un livre |
| **DELETE** | /api/books/{id}/delete/ | Supprimer un livre |

