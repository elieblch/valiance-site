# Valiance — Site vitrine

Site vitrine pour le cabinet **Valiance** (coaching, conseil, formation) fondé par Nicolas Blecher.
Stack : **Next.js 16** App Router · **Tailwind CSS v4** · **Framer Motion**.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Build de production

```bash
npm run build
npm start
```

## Structure des contenus

- `src/content/images.ts` — catalogue des URLs d'images (toutes vérifiées HTTP 200)
- `src/app/*/page.tsx` — copy de chaque page (aucune base de données ni CMS)
- `src/components/` — composants réutilisables

## Citation Anatole France

Dans `src/app/page.tsx`, cherche le placeholder `/* CITATION ANATOLE FRANCE */`
et remplace le texte `« … »` par la vraie citation du site actuel (30 sec).

## Formulaire de contact

Le formulaire utilise `mailto:` pour la démo (zéro config serveur).
Pour le brancher à un vrai service, voir `src/components/ContactForm.tsx` :
- [Web3Forms](https://web3forms.com) — gratuit, aucun backend
- [Resend](https://resend.com) — API email developer-friendly
