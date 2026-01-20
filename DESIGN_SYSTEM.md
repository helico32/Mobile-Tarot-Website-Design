# Design System - Tarot Guidance App

## Architecture CSS

Le design system suit une architecture en 3 couches selon les principes KISS, SOLID et MVC:

1. **Design Tokens** - Variables CSS réutilisables
2. **Composants** - Classes de composants UI
3. **Utilitaires** - Classes helper pour layouts et états

## 1. Design Tokens

### Typographie

```css
--font-display: 'Cinzel', serif
--font-body: 'Cormorant Garamond', serif
```

**Classes disponibles:**
- `.text-display-lg` - Titres principaux (2.5rem)
- `.text-display-md` - Titres secondaires (2rem)
- `.text-display-sm` - Titres tertiaires (1.75rem)
- `.text-heading` - Sous-titres (1.25rem)
- `.text-body-lg` - Corps large (1.125rem)
- `.text-body` - Corps standard (1rem)
- `.text-body-sm` - Corps petit (0.875rem)
- `.text-caption` - Légende (0.75rem)

### Couleurs

**Classes de texte:**
- `.text-gold` - Or standard (#d4b896)
- `.text-gold-light` - Or clair (#e8c896)
- `.text-gold-dark` - Or foncé (#c9a870)
- `.text-purple` - Violet (#7c5fb8)
- `.text-mauve` - Mauve (#9b7db8)

**Classes de fond:**
- `.bg-navy` - Dégradé bleu marine
- `.bg-purple` - Dégradé violet

## 2. Composants

### Boutons

#### Bouton primaire
```tsx
<PrimaryButton onClick={handleClick}>
  Texte du bouton
</PrimaryButton>
```

#### Bouton secondaire
```tsx
<SecondaryButton onClick={handleClick}>
  Texte du bouton
</SecondaryButton>
```

#### Bouton tertiaire
```tsx
<TertiaryButton active={isActive} onClick={handleClick}>
  Option
</TertiaryButton>
```

### Cartes

```html
<article class="card">
  <div class="card-content">
    <!-- Contenu -->
  </div>
</article>
```

### Layouts

```html
<div class="page-container">
  <header class="page-header">...</header>
  <main class="content-center">...</main>
</div>
```

## 3. Utilitaires

```css
.flex-center    /* Centrage complet */
.stack          /* Colonne avec gap */
.interactive    /* États hover/active */
.disabled       /* État désactivé */
```

## 4. Exemple complet

```tsx
import { PageBackground } from './ui/PageBackground';
import { PrimaryButton } from './ui/PrimaryButton';

function MyPage() {
  return (
    <PageBackground variant="navy">
      <div className="page-container">
        <div className="content-center">
          <h1 className="text-display-md text-gold">
            Mon Titre
          </h1>
          <PrimaryButton onClick={handleClick}>
            Action
          </PrimaryButton>
        </div>
      </div>
    </PageBackground>
  );
}
```

## 5. Migration

### Avant:
```tsx
<button style={{ background: '#e8b5a8', padding: '2rem' }}>
  Bouton
</button>
```

### Après:
```tsx
<PrimaryButton onClick={handleClick}>
  Bouton
</PrimaryButton>
```

Voir le fichier complet pour plus de détails.
