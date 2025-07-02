## ✅ Critères remplis

| Composant   | Description |
|-------------|-------------|
| **Backend** | ✅ Création du projet (Django) |
|             | ✅ Création de entité **Book** |
|             | ✅ Création API REST (Créer , Lister ,  Mettre à jour , Supprimer) |
|-------------|-------------|
| **frontend** | ✅ Création du projet (Angular) |
|             | ✅ Création de entité **Book** |
|             | ✅ Recevoir les APIs (Lister , Créer , Mettre à jour , Supprimer) |
|             | ✅ Implmenter les interfaces (Liste , Formulaire (Reactive Forms)) |
|             | ✅ Test et validation |
|             | ✅ Application du style (UI/UX) |


---
## ⚙️ Configuration

## 💡 Prérequis

- Python 3.12.1
- Node.js 16+ et npm
- Angular CLI (`npm install -g @angular/cli`)
- SQLite
- Git

### 🛠️ Backend (Django)
**Backend**
```bash
cd backend/backend
python -m venv venv
venv\Scripts\activate 
pip install -r requirements.txt
python manage.py makemigrations books
python manage.py migrate 
python manage.py runserver
```
🔗 Accès à l’API : [http://127.0.0.1:8000/books](http://127.0.0.1:8000/books)

**payload**
```bash
{
    "titre": "string",
    "auteur": "string",
    "annee": number
}
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
### 🛠️ Frontend (Angular 16)
**frontend**
```bash
cd frontend/frontend
npm install
ng serve
```
🔗 Accès à l’application : [http://127.0.0.1:4200](http://127.0.0.1:4200)
