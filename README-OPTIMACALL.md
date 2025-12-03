# Site Vitrine OptimaCall

Site vitrine moderne pour OptimaCall, société de centre d'appels externalisé disponible 24/7.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 16+ installé
- npm ou yarn

### Installation
```bash
npm install
```

### Lancement du serveur de développement
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
optimacall/
├── app/                      # Pages de l'application
│   ├── page.tsx             # Page d'accueil
│   ├── services/            # Page des services
│   ├── a-propos/           # Page À propos
│   ├── tarifs/             # Page des tarifs
│   └── contact/            # Page de contact
├── components/              # Composants réutilisables
│   ├── layout/             # Navigation et Footer
│   ├── sections/           # Sections des pages
│   └── ui/                 # Composants UI de base
└── public/                 # Assets statiques
    └── logo-optimacall-transparent.png
```

## 🎨 Design et fonctionnalités

### Couleurs principales
- **Bleu primary** : #0077B6 (bleu foncé)
- **Bleu secondary** : #00B4D8 (cyan)
- **Bleu clair** : #48CAE4
- **Accent** : #90E0EF

### Pages disponibles
1. **Accueil** : Hero section animée, présentation des services, témoignages
2. **Services** : Détails des 4 services principaux avec tarification
3. **À propos** : Histoire, valeurs, équipe et mission
4. **Tarifs** : 3 formules (Starter, Business, Enterprise) avec options
5. **Contact** : Formulaire de contact, FAQ, coordonnées

### Animations et interactions
- Animations au scroll (fade-in, slide-in)
- Effets de hover sur les cartes et boutons
- Navigation sticky qui change au scroll
- Typewriter effect dans le hero
- Carrousel de témoignages automatique
- Formulaire de contact interactif

## 🛠️ Technologies utilisées

- **Next.js 14** : Framework React
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styling utilitaire
- **React Hooks** : Gestion d'état et effets

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🔧 Personnalisation

### Modifier les contenus
- Textes : Directement dans les fichiers de pages
- Images : Remplacer dans le dossier `/public`
- Couleurs : Modifier dans `tailwind.config.ts`

### Ajouter des sections
1. Créer un nouveau composant dans `/components/sections`
2. L'importer dans la page souhaitée
3. Appliquer les animations Tailwind

## 📦 Build pour production

```bash
npm run build
npm start
```

## 📞 Contact et support

Pour toute question sur le code ou le déploiement :
- Email : dev@optimacall.fr
- Tel : 01 XX XX XX XX

---

Développé avec ❤️ pour OptimaCall
