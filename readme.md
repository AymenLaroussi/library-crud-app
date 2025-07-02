## ✅ Critères remplis

| Composant   | Description |
|-------------|-------------|
| **Backend** | ✅ Création du projet au niveau backend (Django) |
|             | ✅ Création entité Book |
|             | ✅ Création API REST (Créer , Lister , Mise à jour , Supprimer) |
|-------------|-------------|
| **frontend** | ✅ Création du projet au niveau frontend (Angular) |

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
| **GET** | /books | Liste des livres |
| **POST** | /books | Ajout d'un livre |
| **PUT** | /books/{id} | Mettre à jour un livre |
| **DELETE** | /books/{id} | Supprimer un livre |

---
### 🛠️ Frontend (Angular)
**frontend**
