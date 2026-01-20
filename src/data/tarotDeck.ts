import { TarotCard } from '../App';

// Tarot Rider-Waite deck with interpretations inspired by Emmanuelle Iger's approach
export const tarotDeck: TarotCard[] = [
  {
    id: 0,
    name: 'Le Mat',
    upright: Math.random() > 0.5,
    interpretation: 'Un nouveau départ s\'offre à vous. C\'est le moment de faire confiance à votre spontanéité et d\'embrasser l\'inconnu avec légèreté.',
    deeperMeaning: 'Le Mat vous invite à lâcher prise sur vos peurs et vos certitudes. Cette carte symbolise la liberté pure, l\'innocence retrouvée. Vous êtes à l\'aube d\'une aventure qui nécessite foi et ouverture. Emmanuelle Iger y voit l\'archétype du voyageur intérieur, celui qui accepte de ne pas tout contrôler.'
  },
  {
    id: 1,
    name: 'Le Bateleur',
    upright: Math.random() > 0.5,
    interpretation: 'Vous possédez tous les outils nécessaires. C\'est le moment d\'agir et de manifester vos intentions dans le monde matériel.',
    deeperMeaning: 'Le Bateleur représente le pouvoir créateur en action. Devant lui, tous les éléments sont disposés. C\'est votre capacité à transformer l\'intention en réalité. Iger souligne ici l\'importance de la conscience et de la maîtrise de ses talents pour créer sa propre destinée.'
  },
  {
    id: 2,
    name: 'La Papesse',
    upright: Math.random() > 0.5,
    interpretation: 'Écoutez votre voix intérieure. Un savoir profond est en train d\'émerger. Le silence et la contemplation sont vos alliés.',
    deeperMeaning: 'La Papesse garde les secrets de l\'âme. Elle vous invite à plonger dans votre inconscient, à honorer votre sagesse intuitive. Selon Iger, cette carte appelle à une gestation intérieure, un temps de maturation avant toute action extérieure.'
  },
  {
    id: 3,
    name: 'L\'Impératrice',
    upright: Math.random() > 0.5,
    interpretation: 'L\'abondance et la créativité sont à leur apogée. Nourrissez vos projets comme vous le feriez d\'un jardin.',
    deeperMeaning: 'L\'Impératrice incarne la fertilité sous toutes ses formes : créative, émotionnelle, matérielle. Elle vous rappelle que vous êtes un canal de vie et de beauté. Iger y voit l\'archétype de la Mère Créatrice qui donne forme à ce qui demande à naître.'
  },
  {
    id: 4,
    name: 'L\'Empereur',
    upright: Math.random() > 0.5,
    interpretation: 'Structure et discipline sont nécessaires maintenant. Prenez vos responsabilités et affirmez votre autorité avec bienveillance.',
    deeperMeaning: 'L\'Empereur représente le pouvoir organisé et la maîtrise du monde matériel. Il vous demande d\'établir des fondations solides. Pour Iger, cette carte symbolise la capacité à incarner sa souveraineté personnelle tout en respectant un ordre juste.'
  },
  {
    id: 5,
    name: 'Le Pape',
    upright: Math.random() > 0.5,
    interpretation: 'Cherchez la guidance auprès de mentors ou de traditions qui résonnent avec votre cœur. L\'enseignement et le partage sont au centre.',
    deeperMeaning: 'Le Pape est le pont entre le visible et l\'invisible, le professeur spirituel. Il vous invite à trouver un sens plus profond à votre existence. Iger le voit comme l\'initiateur qui transmet une sagesse ancienne adaptée à votre chemin unique.'
  },
  {
    id: 6,
    name: 'L\'Amoureux',
    upright: Math.random() > 0.5,
    interpretation: 'Un choix important se présente. Écoutez votre cœur mais aussi votre raison pour trouver l\'harmonie entre désir et valeurs.',
    deeperMeaning: 'L\'Amoureux parle de l\'union des contraires et des décisions qui engagent l\'être tout entier. C\'est une carte d\'alignement entre tête et cœur. Iger y voit l\'appel à choisir ce qui nourrit vraiment votre âme plutôt que ce qui semble facile.'
  },
  {
    id: 7,
    name: 'Le Chariot',
    upright: Math.random() > 0.5,
    interpretation: 'Victoire et mouvement. Vous avancez avec détermination en harmonisant vos forces intérieures. Gardez le cap.',
    deeperMeaning: 'Le Chariot symbolise la maîtrise et le contrôle dirigé. Vous êtes le conducteur de votre vie. Cette carte demande équilibre entre volonté et lâcher-prise. Pour Iger, c\'est l\'art de diriger ses énergies opposées vers un but unifié.'
  },
  {
    id: 8,
    name: 'La Justice',
    upright: Math.random() > 0.5,
    interpretation: 'L\'équilibre et la vérité sont essentiels. Pesez vos actions avec discernement. Les conséquences reflètent vos choix passés.',
    deeperMeaning: 'La Justice représente la loi de cause à effet et l\'équité cosmique. Elle vous demande d\'assumer la responsabilité de vos actes. Iger y voit une invitation à l\'honnêteté radicale envers soi-même et à l\'ajustement nécessaire pour retrouver l\'équilibre.'
  },
  {
    id: 9,
    name: 'L\'Hermite',
    upright: Math.random() > 0.5,
    interpretation: 'Le retrait et l\'introspection sont nécessaires. Cherchez la lumière intérieure qui guidera vos pas futurs.',
    deeperMeaning: 'L\'Hermite est le sage solitaire qui cherche la vérité dans le silence. Cette période de solitude n\'est pas un abandon mais une quête. Iger souligne que cette carte invite à devenir son propre maître en se tournant vers sa lumière intérieure.'
  },
  {
    id: 10,
    name: 'La Roue de Fortune',
    upright: Math.random() > 0.5,
    interpretation: 'Les cycles changent. Acceptez les transformations avec confiance. Ce qui monte redescend, et ce qui descend remonte.',
    deeperMeaning: 'La Roue de Fortune nous rappelle l\'impermanence et les cycles de la vie. Rien n\'est figé. Cette carte vous invite à danser avec le changement plutôt que de le craindre. Pour Iger, c\'est l\'opportunité de comprendre que vous êtes le centre stable dans le mouvement.'
  },
  {
    id: 11,
    name: 'La Force',
    upright: Math.random() > 0.5,
    interpretation: 'La vraie force est dans la douceur et la compassion. Domptez vos instincts par l\'amour et non par la violence.',
    deeperMeaning: 'La Force représente le courage du cœur et la maîtrise tranquille. Il ne s\'agit pas de dominer mais d\'apprivoiser avec patience. Iger y voit l\'alchimie entre la puissance animale et la conscience spirituelle, créant une force douce et irrésistible.'
  },
  {
    id: 12,
    name: 'Le Pendu',
    upright: Math.random() > 0.5,
    interpretation: 'Changez de perspective. Ce qui semble être un sacrifice est en fait une libération. Acceptez ce temps suspendu.',
    deeperMeaning: 'Le Pendu incarne le lâcher-prise volontaire et la vision renouvelée. En acceptant de voir le monde à l\'envers, de nouvelles révélations apparaissent. Iger parle ici d\'un sacrifice conscient qui mène à une compréhension plus profonde de la vie.'
  },
  {
    id: 13,
    name: 'La Mort',
    upright: Math.random() > 0.5,
    interpretation: 'Une transformation majeure est en cours. Laissez mourir ce qui doit partir pour faire place à la renaissance.',
    deeperMeaning: 'La Mort n\'est pas une fin mais une métamorphose. C\'est l\'alchimie de la transformation où l\'ancien doit être composté pour nourrir le nouveau. Iger souligne que cette carte demande le courage de laisser aller pour permettre une renaissance authentique.'
  },
  {
    id: 14,
    name: 'Tempérance',
    upright: Math.random() > 0.5,
    interpretation: 'L\'équilibre et la patience portent leurs fruits. Mélangez harmonieusement les différents aspects de votre vie.',
    deeperMeaning: 'Tempérance est l\'art de l\'alchimie et de la modération. Elle vous apprend à fusionner les opposés pour créer quelque chose de nouveau et d\'harmonieux. Pour Iger, c\'est la patience du processus créatif et la sagesse du juste milieu.'
  },
  {
    id: 15,
    name: 'Le Diable',
    upright: Math.random() > 0.5,
    interpretation: 'Regardez vos attachements et vos peurs. Qu\'est-ce qui vous enchaîne? La prise de conscience est le premier pas vers la liberté.',
    deeperMeaning: 'Le Diable représente les illusions et les dépendances qui nous retiennent prisonniers. Mais les chaînes sont lâches. Cette carte vous confronte à votre ombre pour vous permettre de la transcender. Iger y voit l\'opportunité de reconnaître et d\'intégrer les aspects refoulés.'
  },
  {
    id: 16,
    name: 'La Maison Dieu',
    upright: Math.random() > 0.5,
    interpretation: 'Un bouleversement soudain ébranle vos certitudes. C\'est une libération déguisée qui détruit les fausses structures.',
    deeperMeaning: 'La Maison Dieu est l\'éclair de vérité qui pulvérise les illusions. Bien que douloureuse, cette destruction est nécessaire. Ce qui s\'effondre était construit sur de fausses fondations. Iger parle d\'une révélation brutale mais libératrice qui ouvre la voie à l\'authenticité.'
  },
  {
    id: 17,
    name: 'L\'Étoile',
    upright: Math.random() > 0.5,
    interpretation: 'L\'espoir renaît. Vous êtes guidé par une lumière intérieure. Faites confiance au processus de guérison en cours.',
    deeperMeaning: 'L\'Étoile brille après la tempête. C\'est la carte de l\'espoir, de l\'inspiration et de la connexion spirituelle. Elle vous baigne dans une grâce réparatrice. Pour Iger, c\'est l\'alignement retrouvé avec votre essence et votre mission d\'âme.'
  },
  {
    id: 18,
    name: 'La Lune',
    upright: Math.random() > 0.5,
    interpretation: 'Naviguez dans l\'incertitude avec votre intuition. Les illusions et les peurs remontent, mais c\'est pour être guéries.',
    deeperMeaning: 'La Lune éclaire le monde des rêves et de l\'inconscient. Elle vous demande d\'explorer vos zones d\'ombre et d\'accepter l\'ambiguïté. Iger y voit une invitation à faire confiance à votre ressenti même quand la clarté mentale fait défaut.'
  },
  {
    id: 19,
    name: 'Le Soleil',
    upright: Math.random() > 0.5,
    interpretation: 'Joie pure et clarté totale. C\'est le temps de la célébration, de la simplicité et de l\'épanouissement authentique.',
    deeperMeaning: 'Le Soleil illumine tout sans ombre. C\'est la carte de la vitalité, de l\'innocence retrouvée et du bonheur simple. Elle vous invite à rayonner votre lumière naturelle. Pour Iger, c\'est l\'accomplissement de l\'être qui a traversé la nuit et peut enfin briller pleinement.'
  },
  {
    id: 20,
    name: 'Le Jugement',
    upright: Math.random() > 0.5,
    interpretation: 'Un appel intérieur vous réveille. C\'est le moment de répondre à votre véritable vocation et de renaître à vous-même.',
    deeperMeaning: 'Le Jugement est l\'appel cosmique à l\'éveil et à la résurrection. Il vous demande d\'évaluer votre vie avec honnêteté et de répondre à ce qui vous appelle vraiment. Iger parle d\'une renaissance spirituelle où l\'âme se souvient de sa mission.'
  },
  {
    id: 21,
    name: 'Le Monde',
    upright: Math.random() > 0.5,
    interpretation: 'Accomplissement et intégration. Vous avez complété un cycle majeur. Célébrez et préparez-vous à un nouveau commencement.',
    deeperMeaning: 'Le Monde est la danse de l\'accomplissement total. Vous avez intégré toutes les leçons du voyage. C\'est l\'unité retrouvée, la complétude. Pour Iger, cette carte représente la réalisation du Soi et l\'harmonie entre tous les aspects de l\'être.'
  },
];
