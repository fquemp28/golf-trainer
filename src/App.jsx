import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Target, 
  Flag, 
  Crosshair, 
  Activity,
  Trophy,
  RefreshCw,
  Zap,
  User,
  Pause,
  Headphones,
  Volume2,
  AlertCircle,
  RotateCcw,
  Globe,
  Dumbbell, 
  ArrowUpCircle,
  Hash // Added for Reps
} from 'lucide-react';

// --- BRANDING CONFIGURATION ---
const THEME = {
  primary: 'emerald',
  neutral: 'slate',
  accent: 'orange',
};

// --- DATA: DRILL METADATA ---
const DRILL_POOL = [
  // PUTTING
  { id: 'putt-shaft', category: 'Putting', duration: 10, icon: Activity, reps: "20 putts" },
  { id: 'putt-alt', category: 'Putting', duration: 10, icon: Activity, reps: "20 putts" },
  { id: 'putt-tiger', category: 'Putting', duration: 10, icon: Activity, audioFile: 'putt-tiger.mp3' },
  { id: 'putt-snail', category: 'Putting', duration: 10, icon: Activity, reps: "10 balles", audioFile: 'putt-snail.mp3' },
  { id: 'putt-10m', category: 'Putting', duration: 5, icon: Activity, reps: "3 balles", audioFile: 'putt-10m.mp3' },
  
  // APPROCHE
  { id: 'chip-edge', category: 'Chip', duration: 10, icon: Flag, reps: "20 coups", audioFile: 'chip-edge.mp3' },
  { id: 'chip-score', category: 'Chip', duration: 20, icon: Flag, reps: "4 tours", audioFile: 'chip-score.mp3' },
  { id: 'chip-wedge', category: 'Chip', duration: 10, icon: Flag, audioFile: 'chip-weedg.mp3' }, // Fixed ID to match translation, mapped to provided file
  { id: 'chip-mat', category: 'Chip', duration: 5, icon: Flag, reps: "10 balles", audioFile: 'chip-mat.mp3' },
  { id: 'chip-target', category: 'Chip', duration: 20, icon: Flag, reps: "3x10 balles", audioFile: 'chip-target.mp3' },
  { id: 'bunker-full', category: 'Chip', duration: 15, icon: Flag, reps: "20 sorties", audioFile: 'bunker-full.mp3' },
  { id: 'bunker-egg', category: 'Chip', duration: 5, icon: Flag, reps: "10 balles", audioFile: 'bunker-egg.mp3' },

  // FERS
  { id: 'iron-tech', category: 'Irons', duration: 20, icon: Crosshair },
  { id: 'iron-target', category: 'Irons', duration: 20, icon: Crosshair, reps: "5 balles/cible" },
  { id: 'iron-grip', category: 'Irons', duration: 5, icon: Crosshair, reps: "10 balles" },
  { id: 'iron-tempo', category: 'Irons', duration: 10, icon: Crosshair, reps: "20 balles" },

  // HYBRIDE / BOIS / DRIVER
  { id: 'hyb-routine', category: 'Woods', duration: 5, icon: Target, reps: "10 balles" }, 
  { id: 'drv-safe-att', category: 'Driver', duration: 10, icon: ArrowUpCircle }, 
  { id: 'wood-speed', category: 'Woods', duration: 3, icon: Target, reps: "5 balles" }, 

  // ECHAUFFEMENT
  { id: 'warm-wrist', category: 'Warmup', duration: 1, icon: User },
  { id: 'warm-lunge-rot', category: 'Warmup', duration: 2, icon: User },
  { id: 'warm-open', category: 'Warmup', duration: 2, icon: User },
  { id: 'warm-heli', category: 'Warmup', duration: 1, icon: User },
  { id: 'warm-band-sh', category: 'Warmup', duration: 3, icon: User, reps: "2x10 reps" },
  { id: 'warm-takeaway', category: 'Warmup', duration: 3, icon: User, reps: "2x15 reps" },
  { id: 'warm-backswing', category: 'Warmup', duration: 3, icon: User, reps: "2x15 reps" },
  { id: 'warm-downswing', category: 'Warmup', duration: 3, icon: User, reps: "2x15 reps" },
  { id: 'warm-impact', category: 'Warmup', duration: 3, icon: User, reps: "3x10 reps" },
  { id: 'warm-head', category: 'Warmup', duration: 2, icon: User, reps: "5 fois" },
  { id: 'warm-shoulder', category: 'Warmup', duration: 2, icon: User, reps: "5 fois" },
  { id: 'warm-side', category: 'Warmup', duration: 2, icon: User, reps: "5/côté" },
  { id: 'warm-torso', category: 'Warmup', duration: 2, icon: User, reps: "5/côté" },
  { id: 'warm-pelvis', category: 'Warmup', duration: 2, icon: User, reps: "5 fois" },
  { id: 'warm-ankle', category: 'Warmup', duration: 2, icon: User, reps: "5 fois" },
  { id: 'warm-jacks', category: 'Warmup', duration: 2, icon: User, reps: "10 reps" },
  { id: 'warm-climber', category: 'Warmup', duration: 2, icon: User, reps: "10 reps" },
  { id: 'warm-lunge-open', category: 'Warmup', duration: 2, icon: User, reps: "5/côté" },

  // MUSCULATION
  { id: 'body-tree', category: 'Body', duration: 3, icon: Dumbbell },
  { id: 'body-sl-dead', category: 'Body', duration: 5, icon: Dumbbell, reps: "3x10/côté" },
  { id: 'body-skater', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x20 reps" },
  { id: 'body-bird-dog', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x10/côté" },
  { id: 'body-balance', category: 'Body', duration: 3, icon: Dumbbell, reps: "3x10 reps" },
  { id: 'body-boat', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x10 reps" },
  { id: 'body-plank', category: 'Body', duration: 4, icon: Dumbbell, reps: "4x5s/pos" },
  { id: 'body-swiss-knee', category: 'Body', duration: 5, icon: Dumbbell },
  { id: 'body-squat-burp', category: 'Body', duration: 8, icon: Dumbbell, reps: "5x8 reps" },
  { id: 'body-kettle', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x15 reps" },
  { id: 'body-push-iso', category: 'Body', duration: 6, icon: Dumbbell, reps: "4x10 reps" },
  { id: 'body-lunge-lat', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x10/côté" },
  { id: 'body-plank-jack', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x20 reps" },
  { id: 'body-superman', category: 'Body', duration: 5, icon: Dumbbell, reps: "4x15 reps" },
  { id: 'body-chair-jump', category: 'Body', duration: 5, icon: Dumbbell, reps: "5x8 jumps" },
  { id: 'body-lunge-stat', category: 'Body', duration: 5, icon: Dumbbell, reps: "5x8/côté" },
  { id: 'body-swing-el', category: 'Body', duration: 5, icon: Dumbbell, reps: "5x8/côté" },
  { id: 'body-push-var', category: 'Body', duration: 6, icon: Dumbbell, reps: "5x8 reps" },
  { id: 'body-swiss-rot', category: 'Body', duration: 5, icon: Dumbbell, reps: "5x8 reps" },
  { id: 'body-push-exp', category: 'Body', duration: 5, icon: Dumbbell, reps: "5x8 reps" },
];

// --- UTILITY: Generate Daily Session ---
const generateDailySession = () => {
  const getDrills = (category, count = 1, minDuration = 0) => {
    const categoryDrills = DRILL_POOL.filter(d => d.category === category);
    const shuffled = [...categoryDrills].sort(() => 0.5 - Math.random());
    let selected = [];
    let currentDuration = 0;
    for (let drill of shuffled) {
      if (selected.length < count || currentDuration < minDuration) {
        // Use specific audio file if mapped, else fallback to standard naming
        const audioSrc = drill.audioFile ? `/audio/${drill.audioFile}` : `/audio/${drill.id}.wav`;
        selected.push({ ...drill, drillId: drill.id, audioSrc });
        currentDuration += drill.duration;
      }
    }
    return selected;
  };

  const session = [
    ...getDrills('Warmup', 2, 5),
    ...getDrills('Putting', 1, 10),
    ...getDrills('Chip', 1, 10),
    ...getDrills('Irons', 1, 15),
    ...getDrills('Driver', 1, 10),
    ...getDrills('Woods', 1, 5),
    ...getDrills('Body', 1, 10),
  ];
  return session.map((s, i) => ({ ...s, id: `session-step-${i}` }));
};

// --- INTERNATIONALIZATION ---
const TRANSLATIONS = {
  fr: {
    meta: { label: "Français", flag: "🇫🇷" },
    ui: {
      recommended: "Entraînement du Jour",
      protocol_title: "SESSION",
      protocol_subtitle: "GÉNÉRÉE",
      start_manual: "MODE MANUEL",
      start_audio: "MODE AUDIO GUIDÉ",
      resume_session: "REPRENDRE LA SESSION",
      step: "Étape",
      steps_plural: "Étapes",
      mins_short: "Min",
      audio_mode_active: "Mode audio actif. Le minuteur a démarré.",
      execution_steps: "Instructions",
      done_next: "TERMINÉ / SUIVANT",
      next_step: "Exercice Suivant",
      session_complete: "Session Terminée !",
      session_complete_sub: "Vous avez complété l'entraînement du jour. Direction la douche.",
      minutes: "Minutes",
      drills: "Exos",
      start_new: "Générer Nouvelle Session",
      duration: "Durée",
      get_ready: "Préparez-vous",
      starting_in: "Départ dans",
      resuming_in: "Reprise dans",
      listen_instruction: "Écoutez les instructions...",
      speaking: "LECTURE",
      audio_on: "AUDIO ACTIF",
      paused: "PAUSE",
      start: "DÉMARRER",
      pause: "PAUSE",
      resume: "REPRENDRE",
      reps: "Répétitions"
    },
    drillData: {
      'putt-shaft': { title: "20 Putts le long du shaft", description: "Travail de la capacité à putter droit le long d'un guide visuel.", steps: ["Placez un club (shaft) au sol pointant vers la cible.", "Placez votre balle juste à côté du shaft.", "Puttez en suivant la ligne du shaft sans le toucher."] },
      'putt-alt': { title: "20 Putts vers une cible alternée", description: "Alternance de putts courts et longs pour travailler le dosage.", steps: ["Choisissez deux cibles (trous) : une proche, une éloignée.", "Exécutez un putt court.", "Exécutez immédiatement un putt long.", "Répétez l'alternance."] },
      'putt-tiger': { title: "Exercice Tiger (Porte de Tees)", description: "Calage de la sortie de balle et contrôle de la face de club à l'impact.", steps: ["Plantez deux tees au sol espacés à peine plus large que la tête de votre putter.", "Placez la balle au milieu.", "Puttez en passant la tête du club entre les tees sans les toucher."] },
      'putt-snail': { title: "L'Escargot", description: "Enchaînement de putts à distances croissantes autour du trou.", steps: ["Disposez 10 balles en spirale autour du trou.", "La première balle est à 1 mètre.", "La dernière balle est à 3 mètres.", "Jouez chaque balle avec une routine complète."] },
      'putt-10m': { title: "Putt de 10 mètres (Zone de sécurité)", description: "Enchaînement de putts longs avec objectif de lag putting (zone d'un mètre).", steps: ["Placez-vous à environ 10 mètres du trou.", "Jouez 3 balles consécutives.", "Recommencez tant que les 3 balles ne finissent pas dans un rayon d'1 mètre autour du trou."] },
      'chip-edge': { title: "20 Coups du bord du green (Mixte)", description: "Alternance putt et approche vers le même drapeau avec le même mouvement.", steps: ["Placez-vous en bordure de green.", "Jouez un putt vers le drapeau.", "Jouez une approche (chipping) vers le même drapeau avec un club différent (fer).", "Conservez la même intention de mouvement pour les deux clubs."] },
      'chip-score': { title: "5 Situations d'Approche-Putt (Scoring)", description: "Simulation de compétition en jouant le trou jusqu'au bout.", steps: ["Définissez 5 points de départ différents autour du green (lie, distance).", "Jouez l'approche.", "Finissez le trou au putting (holl out).", "Faites 4 fois ce circuit et comparez vos scores."] },
      'chip-wedge': { title: "Wedging : Plein Swing & Demi Swing", description: "Variation des distances et des amplitudes avec différents wedges.", steps: ["Utilisez vos différents Sand Wedges et Pitching Wedge.", "Alternez des pleins swings et des demi-swings.", "Vérifiez vos distances (si possible à la jumelle/radar)."] },
      'chip-mat': { title: "Chipping sur tapis (Mécanique)", description: "Révision de la mécanique pure de contact sur tapis.", steps: ["Sur un tapis de practice.", "Tapez 10 balles en chip.", "Focalisez-vous uniquement sur la propreté du contact et la mécanique."] },
      'chip-target': { title: "Chipping autour du green (Cible 1m50)", description: "Approches variées avec exigence de précision (rayon 1m50).", steps: ["Lancez aléatoirement 10 balles autour du green.", "Jouez chaque balle avec une exigence de précision : finir dans un rayon de 1m50.", "Comptez le nombre de réussites.", "Recommencez la série 3 fois."] },
      'bunker-full': { title: "20 Sorties de Bunker (Full Swing)", description: "Enchaînement de sorties de bunker avec engagement total.", steps: ["Placez-vous dans un bunker de green.", "Exécutez 20 sorties en 'Full Swing' (swing complet).", "L'objectif est de générer de la vitesse et de sortir la balle avec assurance."] },
      'bunker-egg': { title: "Bunker : Œuf sur le plat", description: "Entraînement spécifique pour les lies difficiles (balle enfoncée).", steps: ["Dans le bunker, enfoncez volontairement la balle (position œuf sur le plat).", "Tapez 10 balles dans cette configuration.", "Forcez l'angle d'attaque vertical."] },
      'iron-tech': { title: "Fers Moyens (7 & 8) : 5 Techniques / 2 Normales", description: "Alternance travail technique (leçon) et jeu instinctif.", steps: ["Prenez un fer 7 ou 8.", "Tapez 5 balles en appliquant un exercice technique spécifique (drill de votre pro).", "Tapez 2 balles 'normalement' (sans penser à la technique, juste la cible).", "Répétez pendant 20 minutes."] },
      'iron-target': { title: "Passage sur la cible (Simulation parcours)", description: "Simulation de situations de parcours avec changement de club et routine.", steps: ["Changez de club et de cible à chaque coup.", "Alternez : un coup long (Hybride/Bois/Fer long) puis un coup court (Fer court).", "Effectuez une routine complète (visualisation, coups d'essai) avant chaque frappe.", "Faites des groupes de 5 balles."] },
      'iron-grip': { title: "Grip & Posture (Petits Clubs)", description: "Échauffement spécifique focalisé sur les fondamentaux statiques.", steps: ["Prenez un petit club (Sand wedge, PW, Fer 9).", "Vérifiez méticuleusement votre grip et votre posture avant chaque coup.", "Tapez 10 balles tranquillement."] },
      'iron-tempo': { title: "Élan & Lancé (Clubs Moyens)", description: "Travail du rythme et du relâchement.", steps: ["Prenez un club moyen (Fer 6, 7).", "Concentrez-vous sur la sensation d'élan au backswing et de lancé au finish.", "Tapez 20 balles."] },
      'hyb-routine': { title: "Première routine (Hybride)", description: "Intégration de la routine de pré-coup avec un club hybride.", steps: ["Prenez votre Hybride.", "Définissez une cible différente pour chaque balle.", "Appliquez votre routine complète.", "Tapez 10 balles."] },
      'drv-safe-att': { title: "Driving : Drive Safe vs Drive Attack", description: "Alternance entre mise en jeu sécurisée et drive de puissance.", steps: ["Définissez un couloir (fairway virtuel) sur le practice.", "Tapez un 'Drive Safe' (coup de sécurité, en contrôle pour toucher le fairway).", "Tapez un 'Drive Attack' (coup agressif, vitesse maximale).", "Alternez les deux types de coups."] },
      'wood-speed': { title: "Plaisir & Création de Vitesse (Bois)", description: "Recherche de vitesse pure et de sensations agréables en fin de séance.", steps: ["Prenez un Bois de parcours ou Driver.", "Tapez 5 balles avec pour seul objectif la vitesse et le plaisir de la frappe.", "Lâchez les chevaux."] },
      'warm-wrist': { title: "Moulins à vent de poignets", description: "Échauffement articulaire des poignets avec le club.", steps: ["Tenez le club au milieu du manche.", "Bras allongés devant vous.", "Faites des cercles avec la tête de club en utilisant uniquement les poignets.", "Gardez les épaules fixes."] },
      'warm-lunge-rot': { title: "Mobilité & Rotation (Fente)", description: "Combinaison de fente et de rotation du buste.", steps: ["Départ pieds joints, club tenu à deux mains devant vous bras tendus.", "Avancez un pied en fente.", "En position basse, tournez le buste et les bras tendus du côté de la jambe avant (côté fermé).", "Revenez et alternez de jambe."] },
      'warm-open': { title: "Ouverture & Centrage", description: "Étirement dynamique pectoral et rotation thoracique.", steps: ["Prenez votre posture de golf.", "Posez une main sur le haut du club (vertical au sol comme une canne).", "Avec le bras libre, ouvrez la poitrine vers le ciel en levant le bras vers l'arrière et le haut.", "Alternez de main."] },
      'warm-heli': { title: "L'Hélicoptère", description: "Rotation du buste autour de la colonne vertébrale.", steps: ["Pieds joints.", "Penchez-vous en prenant les angles de votre posture.", "Tendez les bras sur les côtés (en croix).", "Faites tourner la ligne des épaules autour de l'axe de la colonne."] },
      'warm-band-sh': { title: "Mobilisation des épaules (Élastique)", description: "Élévation frontale avec résistance élastique.", steps: ["Passez l'élastique sous les pieds, écart largeur épaules.", "Tenez l'élastique dans chaque main.", "Levez les bras tendus de la ceinture jusqu'à la hauteur des yeux (ou au-dessus de la tête pour la variante).", "Seuls les bras bougent."] },
      'warm-takeaway': { title: "Takeaway (Élastique)", description: "Activation des abdos obliques pour le début du swing.", steps: ["Élastique sous le pied gauche.", "Prenez votre grip au milieu de l'élastique.", "Simulez le début du backswing (Takeaway) en tirant l'élastique vers la droite.", "Focalisez-vous sur les abdominaux, ne roulez pas les avant-bras."] },
      'warm-backswing': { title: "La Voile de Force (Backswing Élastique)", description: "Travail de l'extension et de la rotation au backswing.", steps: ["Élastique sous le pied gauche, grip à l'extrémité opposée.", "Faites votre Takeaway.", "Continuez en étendant l'élastique au travers de la poitrine jusqu'au dessus de l'épaule droite."] },
      'warm-downswing': { title: "Moulin avant pour la descente (Élastique)", description: "Simulation de la séquence de descente avec grande amplitude.", steps: ["Élastique tenu entre les pouces, bras écartés.", "Tendez l'élastique devant la poitrine.", "Faites de grandes rotations : Backswing -> Finish.", "Laissez le talon droit se lever au finish."] },
      'warm-impact': { title: "La Traversée (Élastique)", description: "Travail de l'extension des bras après l'impact.", steps: ["Élastique sous le pied droit.", "Grip au milieu.", "Mimez la traversée (après impact) en tirant vers la gauche et le bas.", "Déverrouillez le talon droit."] },
      'warm-head': { title: "Rotation & Flexion de la tête", description: "Échauffement des cervicales.", steps: ["Tournez la tête à droite puis à gauche.", "Inclinez la tête en avant (menton poitrine) puis en arrière.", "Doucement, sans forcer."] },
      'warm-shoulder': { title: "Rotation des épaules (Sans matériel)", description: "Échauffement articulaire des épaules.", steps: ["Mains sur les épaules (coudes pliés).", "Faites des cercles avec les coudes vers l'avant.", "Faites des cercles vers l'arrière."] },
      'warm-side': { title: "Inclinaison latérale du buste", description: "Étirement des flancs.", steps: ["Debout, bras le long du corps.", "Laissez glisser la main droite le long de la jambe droite vers le genou.", "Revenez et faites pareil à gauche."] },
      'warm-torso': { title: "Rotation du buste (Droit puis Penché)", description: "Mobilisation thoracique en posture.", steps: ["Mains croisées sur la poitrine.", "Debout : tournez à droite et à gauche.", "Penché (posture golf) : tournez à droite et à gauche."] },
      'warm-pelvis': { title: "Antéversion & Rétroversion du bassin", description: "Déverrouillage des lombaires et du bassin.", steps: ["Mains sur les hanches.", "Cambrez le dos (antéversion).", "Arrondissez le bas du dos en rentrant les fesses (rétroversion)."] },
      'warm-ankle': { title: "Flexion-Extension des chevilles", description: "Échauffement des chevilles.", steps: ["Montez sur la pointe des pieds.", "Redescendez sur les talons en levant les orteils."] },
      'warm-jacks': { title: "Jumping Jacks avec touche main opposée", description: "Cardio et coordination.", steps: ["Sautez en écartant les pieds.", "En même temps, levez les bras.", "En resserrant, venez toucher le genou ou pied opposé avec la main (croisement)."] },
      'warm-climber': { title: "Mountain Climbers", description: "Cardio et abdos.", steps: ["Position de pompe (planche haute).", "Ramenez alternativement et rapidement les genoux vers la poitrine."] },
      'warm-lunge-open': { title: "Fente avec ouverture bras opposé", description: "Étirement dynamique complet.", steps: ["Faites une fente avant.", "Levez le bras opposé à la jambe avant vers le ciel.", "Inclinez légèrement le buste latéralement pour étirer toute la chaîne."] },
      'body-tree': { title: "L'Arbre les yeux fermés", description: "Test et travail de proprioception statique.", steps: ["Debout sur une jambe.", "Placez la plante de l'autre pied contre l'intérieur de la cuisse ou du genou (position yoga).", "Tendez les bras sur les côtés.", "Fermez les yeux et tenez l'équilibre."] },
      'body-sl-dead': { title: "Équilibre sur une jambe avec poids (Russian Swing Unilatéral)", description: "Travail de stabilité dynamique sur une jambe avec charge.", steps: ["En équilibre sur une jambe.", "Tenez un kettlebell ou un poids à une main.", "Penchez le buste en avant en tendant la jambe libre vers l'arrière.", "Remontez en position droite."] },
      'body-skater': { title: "Roller-Jumps (Sauts de patineur)", description: "Sauts latéraux pour la stabilité dynamique et la puissance latérale.", steps: ["Sautez latéralement d'un pied sur l'autre.", "Amortissez la réception en fléchissant le genou.", "Croisez la jambe libre derrière la jambe d'appui.", "Enchaînez dynamiquement."] },
      'body-bird-dog': { title: "Gainage dynamique (Bird-Dog)", description: "Renforcement de la chaîne croisée et du dos.", steps: ["À quatre pattes.", "Tendez simultanément le bras droit devant et la jambe gauche derrière.", "Maintenez l'horizontalité du dos.", "Revenez et changez de diagonale (bras gauche / jambe droite)."] },
      'body-balance': { title: "Simulation Posture à l'adresse (Pointe/Talons)", description: "Travail de l'ancrage et de l'équilibre antéro-postérieur.", steps: ["Prenez votre posture de golf sans club, bras pendants.", "Basculez le poids du corps vers les pointes de pieds.", "Basculez le poids vers les talons (en levant les pointes).", "Cherchez le point d'équilibre central."] },
      'body-boat': { title: "Rameur Iso (Boat Pose)", description: "Gainage abdominal statique ou dynamique.", steps: ["Assis au sol.", "Relevez les jambes fléchies et penchez le buste en arrière pour trouver l'équilibre sur les fesses.", "Tenez un poids dans les mains.", "Tendez les jambes et le buste (ouverture) puis regroupez-vous (fermeture) sans toucher le sol."] },
      'body-plank': { title: "Planche 5 secondes (Bras/Coudes)", description: "Gainage dynamique alternant position haute et basse.", steps: ["Position de planche sur les coudes. Tenez 5 secondes.", "Montez en position de planche sur les mains (bras tendus). Tenez 5 secondes.", "Redescendez sur les coudes."] },
      'body-swiss-knee': { title: "Équilibre à genoux sur Swissball", description: "Travail ultime de proprioception et gainage profond.", steps: ["Placez un gros ballon suisse (Swissball).", "Montez à genoux dessus.", "Trouvez l'équilibre sans toucher le sol.", "Redressez le buste et écartez les bras."] },
      'body-squat-burp': { title: "4 Squats & 1 Burpee", description: "Combo cardio et force pour le bas du corps.", steps: ["Faites 4 squats dynamiques.", "Enchaînez immédiatement avec 1 Burpee (flexion, planche, pompe, saut).", "Répétez."] },
      'body-kettle': { title: "Russian Swing (Kettlebell)", description: "Développement de la puissance d'extension de hanche.", steps: ["Debout, pieds écartés, poids tenu à deux mains entre les jambes.", "Fléchissez légèrement et envoyez les hanches en arrière.", "Contractez violemment les fessiers pour projeter le poids vers l'avant (hauteur d'épaules) bras tendus."] },
      'body-push-iso': { title: "2 Push-ups & 1 Maintien à 1 bras", description: "Force du haut du corps et anti-rotation.", steps: ["Faites 2 pompes classiques.", "En remontant la 2ème, levez une main pour toucher l'épaule opposée ou le flanc.", "Tenez l'équilibre sur 1 bras brièvement.", "Repartez pour 2 pompes et changez de bras."] },
      'body-lunge-lat': { title: "Fentes latérales avec poids bras tendus", description: "Force latérale et stabilité du Core.", steps: ["Debout, tenez un poids à deux mains, bras tendus devant vous.", "Faites une fente latérale (grand pas sur le côté).", "Gardez les bras tendus devant vous (résistance à l'inertie).", "Poussez fort pour revenir au centre."] },
      'body-plank-jack': { title: "Gainage avec ouverture-fermeture des pieds (Plank Jacks)", description: "Gainage dynamique cardio.", steps: ["Position de planche sur les coudes.", "Sautez pour écarter les pieds.", "Sautez pour resserrer les pieds.", "Gardez le bassin stable."] },
      'body-superman': { title: "Superman Dynamique", description: "Renforcement des lombaires et chaîne postérieure.", steps: ["Allongé sur le ventre.", "Bras tendus devant (ou sur les côtés).", "Relevez simultanément le buste et les jambes.", "Redescendez sans toucher totalement le sol et repartez."] },
      'body-chair-jump': { title: "Chaise (3 sec) + Jump", description: "Explosivité des jambes (pliométrie).", steps: ["Mettez-vous en position de chaise (cuisses parallèles au sol) sans mur.", "Tenez 3 secondes immobile.", "Explosez en saut vertical le plus haut possible.", "Amortissez et revenez en chaise."] },
      'body-lunge-stat': { title: "Fentes statiques (Iso + Dynamique)", description: "Travail de force et stabilité en position fente.", steps: ["En position de fente (un genou proche du sol).", "Tenez un poids contre la poitrine ou bras ballants.", "Effectuez de petits mouvements de rebond ou de montée-descente sur place.", "Changez de jambe."] },
      'body-swing-el': { title: "Montée du swing à vide (Élastique)", description: "Travail de la vitesse de rotation au backswing.", steps: ["Élastique sous le pied avant.", "Tenez l'élastique comme un club.", "Montez au backswing avec explosivité contre la résistance."] },
      'body-push-var': { title: "Demi-pompes et Full-pompes alternées", description: "Variation d'amplitude et de prise pour les pectoraux/triceps.", steps: ["En position pompe.", "Faites une demi-pompe (faible amplitude) prise large.", "Faites une pompe complète (poitrine au sol) prise serrée (ou alternée)."] },
      'body-swiss-rot': { title: "Bas du tronc dynamique avec Swiss Ball", description: "Rotation du bassin avec charge instable.", steps: ["Assis au sol.", "Tenez un Swiss Ball à bout de bras.", "Effectuez des rotations du buste de gauche à droite en touchant la balle au sol de chaque côté."] },
      'body-push-exp': { title: "Haut du tronc dynamique avec mur (Pompes explosives debout)", description: "Travail de la puissance de poussée (explosivité haut du corps).", steps: ["Debout face à un mur, à environ 1m.", "Laissez-vous tomber vers le mur et amortissez avec les mains (comme une pompe).", "Poussez violemment pour vous repousser en position debout initiale."] },
    }
  },
  en: {
    meta: { label: "English", flag: "🇺🇸" },
    ui: {
      recommended: "Daily Training",
      protocol_title: "GENERATED",
      protocol_subtitle: "SESSION",
      start_manual: "START MANUAL",
      start_audio: "START AUDIO PLAYLIST",
      resume_session: "RESUME SESSION",
      step: "Step",
      steps_plural: "Steps",
      mins_short: "Mins",
      audio_mode_active: "Audio mode active. Timer started automatically.",
      execution_steps: "Instructions",
      done_next: "DONE / NEXT",
      next_step: "Next Step",
      session_complete: "Session Complete!",
      session_complete_sub: "You've successfully completed today's training.",
      minutes: "Minutes",
      drills: "Drills",
      start_new: "Generate New Session",
      duration: "Duration",
      get_ready: "Get Ready",
      starting_in: "Starting in",
      resuming_in: "Resuming in",
      listen_instruction: "Listen to instructions...",
      speaking: "SPEAKING",
      audio_on: "AUDIO ON",
      paused: "PAUSED",
      start: "START",
      pause: "PAUSE",
      resume: "RESUME",
      reps: "Reps"
    },
    drillData: {
      'putt-shaft': { title: "20 Putts Along the Shaft", description: "Work on putting straight along a visual guide.", steps: ["Place a club (shaft) on the ground pointing towards the target.", "Place your ball just beside the shaft.", "Putt following the line of the shaft without touching it."] },
      'putt-alt': { title: "20 Putts to Alternating Targets", description: "Alternating short and long putts to work on distance control.", steps: ["Choose two targets (holes): one close, one far.", "Execute a short putt.", "Immediately execute a long putt.", "Repeat the alternation."] },
      'putt-tiger': { title: "Tiger Drill (Gate of Tees)", description: "Calibration of ball exit and face control at impact.", steps: ["Plant two tees on the ground spaced just wider than your putter head.", "Place the ball in the middle.", "Putt passing the clubhead between the tees without touching them."] },
      'putt-snail': { title: "The Snail", description: "Sequence of putts at increasing distances around the hole.", steps: ["Arrange 10 balls in a spiral around the hole.", "The first ball is at 1 meter.", "The last ball is at 3 meters.", "Play each ball with a full routine."] },
      'putt-10m': { title: "10-Meter Putt (Safety Zone)", description: "Sequence of long putts targeting a 1-meter zone.", steps: ["Stand about 10 meters from the hole.", "Play 3 consecutive balls.", "Restart as long as the 3 balls do not end up within a 1-meter radius of the hole."] },
      'chip-edge': { title: "20 Shots from Fringe (Mixed)", description: "Alternate putt and chip to the same flag with the same motion.", steps: ["Stand at the edge of the green.", "Play a putt towards the flag.", "Play a chip towards the same flag with a different club (iron).", "Maintain the same motion intention for both clubs."] },
      'chip-score': { title: "5 Up & Down Situations (Scoring)", description: "Competition simulation by playing the hole out.", steps: ["Define 5 different starting points around the green (lie, distance).", "Play the approach.", "Finish the hole putting (hole out).", "Do this circuit 4 times and compare your scores."] },
      'chip-wedge': { title: "Wedging: Full Swing & Half Swing", description: "Variation of distances and amplitudes with different wedges.", steps: ["Use your different Sand Wedges and Pitching Wedge.", "Alternate full swings and half swings.", "Check your distances (with rangefinder/radar if possible)."] },
      'chip-mat': { title: "Chipping on Mat (Mechanics)", description: "Review of pure contact mechanics on a mat.", steps: ["On a practice mat.", "Hit 10 balls chipping.", "Focus only on clean contact and mechanics."] },
      'chip-target': { title: "Chipping Around Green (1.5m Target)", description: "Varied approaches with precision requirement (1.5m radius).", steps: ["Randomly throw 10 balls around the green.", "Play each ball with a precision requirement: finish within a 1.5m radius.", "Count the number of successes.", "Repeat the series 3 times."] },
      'bunker-full': { title: "20 Bunker Shots (Full Swing)", description: "Sequence of bunker shots with total commitment.", steps: ["Stand in a greenside bunker.", "Execute 20 shots in 'Full Swing'.", "The goal is to generate speed and get the ball out with confidence."] },
      'bunker-egg': { title: "Bunker: Fried Egg", description: "Specific training for difficult lies (buried ball).", steps: ["In the bunker, bury the ball intentionally (fried egg position).", "Hit 10 balls in this configuration.", "Force a vertical angle of attack."] },
      'iron-tech': { title: "Mid Irons (7 & 8): 5 Tech / 2 Normal", description: "Alternating technical work (lesson) and instinctive play.", steps: ["Take a 7 or 8 iron.", "Hit 5 balls applying a specific technical drill.", "Hit 2 balls 'normally' (without thinking technique, just target).", "Repeat for 20 minutes."] },
      'iron-target': { title: "Target Switching (Course Sim)", description: "Course situation simulation with club change and routine.", steps: ["Change club and target for every shot.", "Alternate: one long shot (Hybrid/Wood/Long Iron) then one short shot (Short Iron).", "Perform a full routine (visualization, practice swings) before each shot.", "Do groups of 5 balls."] },
      'iron-grip': { title: "Grip & Posture (Short Clubs)", description: "Specific warmup focused on static fundamentals.", steps: ["Take a short club (Sand wedge, PW, 9 Iron).", "Meticulously check your grip and posture before each shot.", "Hit 10 balls quietly."] },
      'iron-tempo': { title: "Swing & Release (Mid Clubs)", description: "Work on rhythm and release.", steps: ["Take a mid club (6, 7 Iron).", "Focus on the sensation of momentum in backswing and release at finish.", "Hit 20 balls."] },
      'hyb-routine': { title: "First Routine (Hybrid)", description: "Integration of pre-shot routine with a hybrid.", steps: ["Take your Hybrid.", "Define a different target for each ball.", "Apply your full routine.", "Hit 10 balls."] },
      'drv-safe-att': { title: "Driving: Drive Safe vs Drive Attack", description: "Alternating between safe tee shot and power drive.", steps: ["Define a corridor (virtual fairway) on the range.", "Hit a 'Drive Safe' (control shot to hit fairway).", "Hit a 'Drive Attack' (aggressive shot, max speed).", "Alternate the two types of shots."] },
      'wood-speed': { title: "Fun & Speed Creation (Woods)", description: "Pure speed research and pleasant sensations to end session.", steps: ["Take a Fairway Wood or Driver.", "Hit 5 balls with the sole goal of speed and hitting pleasure.", "Let it go."] },
      'warm-wrist': { title: "Wrist Windmills", description: "Joint warmup for wrists with club.", steps: ["Hold club in middle of shaft.", "Arms extended in front of you.", "Make circles with clubhead using only wrists.", "Keep shoulders fixed."] },
      'warm-lunge-rot': { title: "Lunge & Rotation", description: "Combination of lunge and torso rotation.", steps: ["Start feet together, club held with two hands arms extended.", "Step forward into lunge.", "In low position, rotate torso and arms towards the front leg side.", "Return and switch legs."] },
      'warm-open': { title: "Opening & Centering", description: "Dynamic pectoral stretch and thoracic rotation.", steps: ["Take your golf posture.", "Place one hand on top of vertical club.", "With free arm, open chest to sky lifting arm back and up.", "Switch hands."] },
      'warm-heli': { title: "The Helicopter", description: "Torso rotation around spine.", steps: ["Feet together.", "Bend forward taking posture angles.", "Extend arms to sides.", "Rotate shoulder line around spine axis."] },
      'warm-band-sh': { title: "Shoulder Mobilization (Band)", description: "Front raise with elastic resistance.", steps: ["Band under feet, shoulder width.", "Hold band in each hand.", "Raise extended arms from waist to eye level.", "Only arms move."] },
      'warm-takeaway': { title: "Takeaway (Band)", description: "Oblique activation for start of swing.", steps: ["Band under left foot.", "Grip middle of band.", "Simulate start of backswing (Takeaway) pulling band to right.", "Focus on abs, don't roll forearms."] },
      'warm-backswing': { title: "Power Sail (Band Backswing)", description: "Work on extension and rotation in backswing.", steps: ["Band under left foot, grip at opposite end.", "Do your Takeaway.", "Continue extending band across chest to above right shoulder."] },
      'warm-downswing': { title: "Forward Windmill (Band)", description: "Simulation of downswing sequence with large amplitude.", steps: ["Band held between thumbs, arms apart.", "Extend band in front of chest.", "Make large fluid rotations: Backswing -> Finish.", "Let right heel rise at finish."] },
      'warm-impact': { title: "The Through-Swing (Band)", description: "Work on arm extension after impact.", steps: ["Band under right foot.", "Grip in middle.", "Mimic through-swing (post impact) pulling to left and down.", "Release right heel."] },
      'warm-head': { title: "Head Rotation & Flexion", description: "Cervical warmup.", steps: ["Turn head right then left.", "Tilt head forward (chin to chest) then back.", "Gently, don't force."] },
      'warm-shoulder': { title: "Shoulder Rotation", description: "Joint warmup for shoulders.", steps: ["Hands on shoulders (elbows bent).", "Make circles with elbows forward.", "Make circles backward."] },
      'warm-side': { title: "Lateral Torso Tilt", description: "Flank stretch.", steps: ["Standing, arms by sides.", "Slide right hand down right leg towards knee.", "Return and do same on left."] },
      'warm-torso': { title: "Torso Rotation (Upright then Bent)", description: "Thoracic mobilization in posture.", steps: ["Hands crossed on chest.", "Standing: turn right and left.", "Bent (golf posture): turn right and left."] },
      'warm-pelvis': { title: "Pelvic Tilt (Anteversion/Retroversion)", description: "Unlocking lumbar and pelvis.", steps: ["Hands on hips.", "Arch back (anteversion).", "Round lower back tucking glutes (retroversion)."] },
      'warm-ankle': { title: "Ankle Flexion-Extension", description: "Ankle warmup.", steps: ["Go up on toes.", "Rock back on heels lifting toes."] },
      'warm-jacks': { title: "Jumping Jacks with Cross Touch", description: "Cardio and coordination.", steps: ["Jump spreading feet.", "At same time raise arms.", "Closing, touch opposite knee or foot with hand.", "Rhythmic."] },
      'warm-climber': { title: "Mountain Climbers", description: "Cardio and abs.", steps: ["Pushup position (high plank).", "Alternately and quickly bring knees to chest."] },
      'warm-lunge-open': { title: "Lunge with Opposite Arm Opening", description: "Complete dynamic stretch.", steps: ["Do a forward lunge.", "Raise arm opposite to front leg towards sky.", "Tilt torso slightly laterally to stretch entire chain."] },
      'body-tree': { title: "Blind Tree", description: "Static proprioception test and work.", steps: ["Stand on one leg.", "Place sole of other foot against inner thigh or knee.", "Extend arms to sides.", "Close eyes and hold balance."] },
      'body-sl-dead': { title: "Single Leg Balance with Weight", description: "Dynamic stability work on one leg with load.", steps: ["Balance on one leg.", "Hold weight in one hand.", "Hinge torso forward extending free leg back.", "Return to upright."] },
      'body-skater': { title: "Roller-Jumps (Skater Jumps)", description: "Lateral jumps for dynamic stability and lateral power.", steps: ["Jump laterally from one foot to the other.", "Cushion landing bending knee.", "Cross free leg behind standing leg.", "Chain dynamically."] },
      'body-bird-dog': { title: "Dynamic Plank (Bird-Dog)", description: "Cross chain and back strengthening.", steps: ["On all fours.", "Extend right arm forward and left leg back simultaneously.", "Maintain horizontal back.", "Return and switch diagonal."] },
      'body-balance': { title: "Address Posture Simulation (Toe/Heel)", description: "Anchoring and anteroposterior balance work.", steps: ["Take golf posture without club, arms hanging.", "Rock body weight to toes.", "Rock weight to heels (lifting toes).", "Find central balance point."] },
      'body-boat': { title: "Iso Rower (Boat Pose)", description: "Static or dynamic abdominal plank.", steps: ["Sitting on floor.", "Lift bent legs and lean torso back to balance on glutes.", "Hold weight in hands.", "Extend legs and torso (open) then tuck in (close) without touching floor."] },
      'body-plank': { title: "5 Second Plank (Arms/Elbows)", description: "Dynamic plank alternating high and low position.", steps: ["Elbow plank position. Hold 5 seconds.", "Go up to hand plank position (arms extended). Hold 5 seconds.", "Go back down to elbows."] },
      'body-swiss-knee': { title: "Kneeling Balance on Swissball", description: "Ultimate proprioception and deep core work.", steps: ["Place large Swissball.", "Kneel on top.", "Find balance without touching floor.", "Straighten torso and spread arms."] },
      'body-squat-burp': { title: "4 Squats & 1 Burpee", description: "Cardio and strength combo for lower body.", steps: ["Do 4 dynamic squats.", "Immediately follow with 1 Burpee (squat, plank, pushup, jump).", "Repeat."] },
      'body-kettle': { title: "Russian Swing (Kettlebell)", description: "Hip extension power development.", steps: ["Standing, feet apart, weight held two hands between legs.", "Hinge slightly and send hips back.", "Violently contract glutes to project weight forward (shoulder height) arms straight."] },
      'body-push-iso': { title: "2 Push-ups & 1 Single Arm Hold", description: "Upper body strength and anti-rotation.", steps: ["Do 2 classic pushups.", "On coming up from 2nd, lift one hand to touch opposite shoulder or flank.", "Hold 1-arm balance briefly.", "Go again for 2 pushups and switch arms."] },
      'body-lunge-lat': { title: "Lateral Lunges with Weighted Arms Extended", description: "Lateral strength and Core stability.", steps: ["Standing, hold weight two hands, arms extended in front.", "Do a lateral lunge.", "Keep arms extended in front (resist inertia).", "Push hard to return to center."] },
      'body-plank-jack': { title: "Plank with Feet Open-Close (Plank Jacks)", description: "Dynamic cardio plank.", steps: ["Elbow plank position.", "Jump to spread feet.", "Jump to close feet.", "Keep hips stable."] },
      'body-superman': { title: "Dynamic Superman", description: "Strengthening lower back and posterior chain.", steps: ["Lying on stomach.", "Arms extended in front (or sides).", "Lift torso and legs simultaneously.", "Lower without fully touching ground and repeat."] },
      'body-chair-jump': { title: "Wall Sit (3 sec) + Jump", description: "Leg explosiveness (plyometrics).", steps: ["Get into chair position (thighs parallel to floor) without wall.", "Hold 3 seconds immobile.", "Explode into vertical jump as high as possible.", "Land soft and return to chair."] },
      'body-lunge-stat': { title: "Static Lunges (Iso + Dynamic)", description: "Strength and stability work in lunge position.", steps: ["In lunge position (one knee close to ground).", "Hold weight to chest or arms hanging.", "Perform small bounce or up-down movements in place.", "Switch legs."] },
      'body-swing-el': { title: "Empty Swing Rise (Band)", description: "Rotation speed work at backswing.", steps: ["Band under front foot.", "Hold band like a club.", "Go to backswing explosively against resistance."] },
      'body-push-var': { title: "Alt Half & Full Pushups", description: "Amplitude and grip variation for pecs/triceps.", steps: ["In pushup position.", "Do a half-pushup (low amplitude) wide grip.", "Do a full pushup (chest to floor) narrow grip (or alternating)."] },
      'body-swiss-rot': { title: "Dynamic Lower Trunk with Swiss Ball", description: "Pelvic rotation with unstable load.", steps: ["Sitting on floor.", "Hold Swiss Ball at arms length.", "Perform torso rotations left to right touching ball to floor on each side."] },
      'body-push-exp': { title: "Dynamic Upper Trunk with Wall (Explosive Pushups)", description: "Push power work (upper body explosiveness).", steps: ["Standing facing wall, about 1m away.", "Fall towards wall and cushion with hands.", "Push violently to repel yourself back to initial standing position."] },
    }
  }
};

// --- Custom Animations Style Block ---
const AnimationStyles = () => (
  <style>{`
    @keyframes swing-rotate { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(45deg); } }
    @keyframes torso-twist { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-30deg); } 75% { transform: rotate(30deg); } }
    @keyframes putt-stroke { 0% { transform: translateY(0); } 20% { transform: translateY(10px); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
    @keyframes chip-shot-1 { 0% { opacity: 0; transform: translate(0, 0) scale(0.5); } 20% { opacity: 1; } 80% { opacity: 1; transform: translate(20px, -40px) scale(0.8); } 100% { opacity: 0; transform: translate(20px, -40px); } }
    @keyframes chip-shot-2 { 0% { opacity: 0; transform: translate(0, 0) scale(0.5); } 20% { opacity: 1; } 80% { opacity: 1; transform: translate(50px, -60px) scale(0.7); } 100% { opacity: 0; transform: translate(50px, -60px); } }
    @keyframes chip-shot-3 { 0% { opacity: 0; transform: translate(0, 0) scale(0.5); } 20% { opacity: 1; } 80% { opacity: 1; transform: translate(80px, -80px) scale(0.6); } 100% { opacity: 0; transform: translate(80px, -80px); } }
    @keyframes drive-path { 0% { transform: translateY(40px); opacity: 0; } 10% { opacity: 1; } 90% { transform: translateY(-40px); opacity: 1; } 100% { transform: translateY(-40px); opacity: 0; } }
    @keyframes pause-top { 0% { transform: rotate(0deg); } 30% { transform: rotate(-90deg); } 60% { transform: rotate(-90deg); } 80% { transform: rotate(10deg); } 100% { transform: rotate(0deg); } }
    @keyframes pulse-red { 0%, 30%, 60%, 100% { fill: #94a3b8; } 45% { fill: #ef4444; } }
  `}</style>
);

// --- Audio Tone Generator ---
const playTone = (freq = 440, type = 'sine', duration = 0.1) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
};

const playStartSignal = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth'; 
  osc.frequency.setValueAtTime(880, ctx.currentTime); 
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5); 
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
};

const playCountdownBeep = (count) => {
  if (count > 0) {
    playTone(600, 'sine', 0.2); 
  } else {
    playStartSignal(); 
  }
};

const playWarningBeep = () => {
  playTone(500, 'triangle', 0.15); 
};

const playEndBeep = () => {
  playTone(800, 'sine', 0.2);
  setTimeout(() => playTone(600, 'sine', 0.4), 250);
};

// --- Sub-Component: Animated Schematic ---
const DrillVisual = ({ drillId }) => {
  const bgClass = `w-full h-56 bg-${THEME.neutral}-50 rounded-xl border-2 border-${THEME.neutral}-200 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner`;
  
  // Specific Visuals for key types, falling back to category generics
  
  // PUTTING
  if (drillId === 'putt-shaft') return <div className={bgClass}><div className="relative w-full h-full flex flex-col items-center justify-center"><div className={`w-1 h-32 bg-${THEME.neutral}-800 absolute top-1/2 left-1/2 -ml-0.5 -mt-16`}></div><div className={`w-4 h-4 rounded-full bg-white border border-${THEME.neutral}-300 shadow-sm absolute top-1/2 left-1/2 ml-2`} style={{animation: 'putt-stroke 2s ease-in-out infinite'}}></div></div></div>;
  if (drillId === 'putt-tiger') return <div className={bgClass}><div className="relative w-full h-full flex flex-col items-center justify-center"><div className="flex gap-12 mb-4"><div className={`w-2 h-2 rounded-full bg-${THEME.accent}-500`}></div><div className={`w-2 h-2 rounded-full bg-${THEME.accent}-500`}></div></div><div className={`w-4 h-4 rounded-full bg-white border border-${THEME.neutral}-300 shadow-sm`} style={{animation: 'putt-stroke 2s ease-in-out infinite'}}></div></div></div>;
  if (drillId.includes('putt')) return <div className={bgClass}><div className="relative w-full h-full flex flex-col items-center justify-center"><div className="absolute z-20" style={{ animation: 'putt-stroke 2s ease-in-out infinite' }}><div className="flex gap-8"><div className={`w-3 h-3 rounded-full bg-${THEME.neutral}-700 shadow-sm`}></div><div className={`w-3 h-3 rounded-full bg-${THEME.neutral}-700 shadow-sm`}></div></div><div className={`w-1 h-8 bg-${THEME.neutral}-400 mx-auto -mt-4 opacity-50`}></div></div><div className={`w-4 h-4 rounded-full bg-white border border-${THEME.neutral}-300 shadow-sm z-10 mt-12`}></div><div className={`h-40 w-0.5 bg-${THEME.primary}-100 border-l border-dashed border-${THEME.primary}-300 absolute`}></div></div></div>;
  
  // CHIP / BUNKER
  if (drillId.includes('bunker')) return <div className={bgClass}><div className={`absolute bottom-0 w-full h-12 bg-${THEME.accent}-100`}></div><div className={`absolute bottom-8 left-1/2 w-4 h-4 rounded-full bg-white border border-${THEME.neutral}-300 z-10`}></div><div className={`absolute bottom-8 left-1/2 w-16 h-16 border-b-4 border-${THEME.neutral}-600 rounded-full`} style={{transform: 'translateX(-50%) rotate(45deg)', animation: 'chip-shot-1 1s infinite'}}></div></div>;
  if (drillId.includes('chip')) return <div className={bgClass}><div className={`absolute bottom-4 left-8 w-4 h-8 bg-${THEME.neutral}-700 rounded-t-lg`}></div><div className={`absolute bottom-4 left-0 w-full h-1 bg-${THEME.primary}-600`}></div><div className={`absolute bottom-4 left-24 w-1 h-4 bg-${THEME.accent}-400`}></div><div className={`absolute bottom-4 left-44 w-1 h-4 bg-${THEME.accent}-400`}></div><div className={`absolute bottom-5 left-10 w-3 h-3 rounded-full bg-white border border-${THEME.neutral}-400 z-10`} style={{ animation: 'chip-shot-1 4s ease-in-out infinite' }}></div></div>;
  
  // IRON
  if (drillId.includes('iron')) return <div className={bgClass}><div className="relative w-full h-full flex items-center justify-center"><div className="relative" style={{ animation: 'torso-twist 4s ease-in-out infinite' }}><div className={`w-32 h-32 bg-${THEME.neutral}-200 rounded-3xl relative overflow-hidden border border-${THEME.neutral}-300`}><div className={`absolute top-10 left-0 w-4 h-24 bg-${THEME.neutral}-400 rounded-full transform rotate-12 origin-top`}></div><div className={`absolute top-10 right-0 w-4 h-24 bg-${THEME.neutral}-400 rounded-full transform -rotate-12 origin-top`}></div></div></div></div></div>;
  
  // DRIVER / WOOD
  if (drillId.includes('drive') || drillId.includes('wood') || drillId.includes('hyb')) return <div className={bgClass}><div className="relative w-full h-full flex flex-col items-center justify-center transform -rotate-45 scale-75"><div className={`w-48 h-1 bg-${THEME.accent}-400 mb-12 rounded-full shadow-sm`}></div><div className={`w-48 h-1 bg-yellow-400 rounded-full shadow-sm`}></div><div className="absolute" style={{ animation: 'drive-path 2s linear infinite' }}><div className={`w-6 h-8 bg-${THEME.neutral}-800 rounded-t-xl border-b-4 border-${THEME.neutral}-400`}></div></div></div></div>;
  
  // WARMUP / BODY
  if (drillId.includes('warm') || drillId.includes('body')) return <div className={bgClass}><div className="relative flex flex-col items-center"><div className={`w-8 h-8 bg-${THEME.neutral}-300 rounded-full mb-1 z-10`}></div><div className="relative z-10" style={{ animation: 'torso-twist 3s ease-in-out infinite' }}><div className={`w-32 h-1 bg-${THEME.primary}-500 absolute top-2 left-1/2 -translate-x-1/2`}></div><div className={`w-24 h-8 bg-${THEME.neutral}-700 rounded-full`}></div><div className={`w-16 h-20 bg-${THEME.neutral}-600 mx-auto -mt-2 rounded-b-lg`}></div></div><div className={`w-20 h-6 bg-${THEME.neutral}-400 rounded-full mt-1`}></div></div></div>;
  
  return null;
};

// --- Sub-Component: Timer ---
const SessionTimer = ({ seconds, setSeconds, defaultDuration, audioMode, onComplete, triggerCountdown, onCountdownComplete, uiText }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [localCountdown, setLocalCountdown] = useState(null); 
  const onCompleteRef = useRef(onComplete);
  const onCountdownCompleteRef = useRef(onCountdownComplete);

  useEffect(() => { onCompleteRef.current = onComplete; onCountdownCompleteRef.current = onCountdownComplete; }, [onComplete, onCountdownComplete]);

  useEffect(() => { if (triggerCountdown && localCountdown === null && !isRunning) { setLocalCountdown(3); playCountdownBeep(3); } }, [triggerCountdown]);

  useEffect(() => {
    if (seconds === 0 && isRunning) { setIsRunning(false); if (onCompleteRef.current) onCompleteRef.current(); }
    if (audioMode && isRunning && seconds <= 5 && seconds > 0) playWarningBeep();
  }, [seconds, isRunning, audioMode]);

  useEffect(() => {
    let interval = null;
    if (isRunning) interval = setInterval(() => setSeconds(p => p <= 0 ? 0 : p - 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning, setSeconds]);

  useEffect(() => {
    let timeout = null;
    if (localCountdown !== null) {
      timeout = setTimeout(() => {
        if (localCountdown <= 1) {
           setLocalCountdown(null); playCountdownBeep(0); setIsRunning(true); 
           if (triggerCountdown && onCountdownCompleteRef.current) onCountdownCompleteRef.current();
        } else {
           const next = localCountdown - 1; playCountdownBeep(next); setLocalCountdown(next);
        }
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [localCountdown, triggerCountdown]);

  const handleToggle = () => {
    if (isRunning) setIsRunning(false);
    else {
      if (seconds === 0) { setSeconds(defaultDuration * 60); if (audioMode) { playCountdownBeep(3); setLocalCountdown(3); } else setIsRunning(true); return; }
      if (audioMode) { playCountdownBeep(3); setLocalCountdown(3); } else setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false); setSeconds(defaultDuration * 60);
    if (audioMode) { setLocalCountdown(3); playCountdownBeep(3); } else setLocalCountdown(null);
  };

  const formatTime = (total) => `${Math.floor(total / 60)}:${(total % 60) < 10 ? '0' : ''}${total % 60}`;
  const getCountdownText = () => seconds === defaultDuration * 60 ? uiText.starting_in : uiText.resuming_in;

  return (
    <div className="relative">
      {localCountdown !== null && (
        <div className={`absolute inset-0 z-10 bg-${THEME.neutral}-900/90 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm transition-all`}>
           <span className={`text-${THEME.primary}-400 font-bold uppercase text-xs tracking-widest mb-1`}>{getCountdownText()}</span>
           <div className={`text-6xl font-black text-white transition-all transform ${localCountdown === 'GO' ? `scale-125 text-${THEME.primary}-500` : 'scale-100'}`}>{localCountdown}</div>
        </div>
      )}
      <div className={`bg-${THEME.neutral}-800 text-white rounded-xl p-4 flex items-center justify-between shadow-lg mb-6 ring-1 ring-${THEME.neutral}-700`}>
        <div className="flex flex-col">
          <span className={`text-[10px] text-${THEME.primary}-400 font-bold uppercase tracking-wider mb-1`}>{uiText.duration}</span>
          <div className="flex items-center gap-2">
            <Clock className={`w-5 h-5 text-${THEME.neutral}-400`} />
            <span className={`text-3xl font-mono font-bold ${seconds < 60 && isRunning ? 'text-red-400 animate-pulse' : 'text-white'}`}>{formatTime(seconds)}</span>
          </div>
        </div>
        {(!audioMode || (seconds > 0 && !triggerCountdown && localCountdown === null)) && (
          <div className="flex gap-2">
            <button onClick={handleReset} className={`h-12 w-12 rounded-lg bg-${THEME.neutral}-700 hover:bg-${THEME.neutral}-600 flex items-center justify-center text-${THEME.neutral}-300 transition-colors`}><RotateCcw className="w-5 h-5" /></button>
            <button onClick={handleToggle} className={`h-12 px-6 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 ${isRunning ? `bg-${THEME.neutral}-700 hover:bg-${THEME.neutral}-600 text-white border border-${THEME.neutral}-600` : `bg-${THEME.primary}-500 hover:bg-${THEME.primary}-600 text-white`}`}>
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isRunning ? uiText.pause : (seconds === 0 ? uiText.start : (seconds < defaultDuration * 60 ? uiText.resume : uiText.start))}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Extracted View Components ---
const OverviewView = ({ sessionStarted, currentStepIndex, setAppState, startSession, sessionData, uiText, language, setLanguage, generateNewSession }) => {
  const toggleLang = () => setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  const totalSteps = sessionData.length;
  const totalDuration = sessionData.reduce((acc, drill) => acc + drill.duration, 0);

  return (
    <div className={`p-6 h-full flex flex-col bg-${THEME.neutral}-50`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className={`inline-block px-3 py-1 bg-${THEME.primary}-100 text-${THEME.primary}-700 rounded-full text-xs font-bold mb-3`}>{uiText.recommended}</div>
          <h1 className={`text-3xl font-black text-${THEME.neutral}-900 leading-tight`}>{uiText.protocol_title}<br/><span className={`text-${THEME.primary}-600`}>{uiText.protocol_subtitle}</span></h1>
          <p className={`text-${THEME.neutral}-500 font-medium mt-2 text-sm`}>{totalSteps} {uiText.steps_plural} • ~{totalDuration} {uiText.mins_short}</p>
        </div>
        <button onClick={toggleLang} className={`p-2 bg-white rounded-full shadow-sm border border-${THEME.neutral}-200 text-${THEME.neutral}-600 hover:text-${THEME.primary}-600 transition-colors`}><Globe className="w-6 h-6" /></button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 -mr-2 pb-32">
        <div className={`relative pl-4 border-l-2 border-${THEME.neutral}-200 ml-4 space-y-8 py-2`}>
          {sessionData.map((item, index) => {
            const isCurrent = sessionStarted && index === currentStepIndex;
            const isCompleted = sessionStarted && index < currentStepIndex;
            return (
              <div key={item.id} className="relative pl-8">
                <div className={`absolute -left-[25px] top-0 w-8 h-8 rounded-full border-4 flex items-center justify-center shadow-sm transition-colors ${isCurrent ? `border-${THEME.primary}-500 bg-${THEME.primary}-500 text-white` : isCompleted ? `border-${THEME.primary}-200 bg-${THEME.primary}-200 text-${THEME.primary}-700` : `border-${THEME.neutral}-50 bg-white text-${THEME.neutral}-300`}`}>
                  {isCompleted ? <CheckCircle className="w-4 h-4" /> : <item.icon className="w-3 h-3" />}
                </div>
                <div className={`bg-white p-4 rounded-xl border shadow-sm transition-all duration-300 ${isCurrent ? `border-${THEME.primary}-500 ring-2 ring-${THEME.primary}-500/20 shadow-md transform scale-[1.02]` : `border-${THEME.neutral}-200`}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isCurrent ? `text-${THEME.primary}-600` : `text-${THEME.neutral}-400`}`}>{item.category}</span>
                    <div className="flex gap-2">
                       {isCurrent && <span className={`text-[10px] font-bold text-white bg-${THEME.primary}-500 px-2 py-0.5 rounded flex items-center gap-1`}><Pause className="w-3 h-3"/> {uiText.paused}</span>}
                       <span className={`text-[10px] font-bold text-${THEME.neutral}-400 bg-${THEME.neutral}-100 px-2 py-0.5 rounded`}>{item.duration}m</span>
                    </div>
                  </div>
                  <h3 className={`font-bold text-base ${isCurrent ? `text-${THEME.neutral}-800` : `text-${THEME.neutral}-600`}`}>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-${THEME.neutral}-200 space-y-3`}>
        {sessionStarted ? (
          <button onClick={() => setAppState('active')} className={`w-full max-w-md mx-auto bg-${THEME.primary}-600 hover:bg-${THEME.primary}-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-${THEME.primary}-200/50 flex items-center justify-center gap-2 animate-pulse`}><Play className="w-5 h-5 fill-current" /> {uiText.resume_session}</button>
        ) : (
          <>
            <button onClick={() => startSession(false)} className={`w-full max-w-md mx-auto bg-white border-2 border-${THEME.neutral}-200 hover:border-${THEME.primary}-500 hover:text-${THEME.primary}-600 text-${THEME.neutral}-700 font-bold text-lg py-3 rounded-xl flex items-center justify-center gap-2`}><Play className="w-5 h-5 fill-current" /> {uiText.start_manual}</button>
            <button onClick={() => startSession(true)} className={`w-full max-w-md mx-auto bg-${THEME.primary}-600 hover:bg-${THEME.primary}-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-${THEME.primary}-200/50 flex items-center justify-center gap-2`}><Headphones className="w-5 h-5" /> {uiText.start_audio}</button>
            <button onClick={generateNewSession} className={`w-full max-w-md mx-auto text-${THEME.neutral}-400 text-sm hover:text-${THEME.primary}-600 py-2 flex items-center justify-center gap-2`}><RefreshCw className="w-4 h-4" /> {uiText.start_new}</button>
          </>
        )}
      </div>
    </div>
  );
};

const ActiveView = ({ currentStepIndex, handleBackToOverview, currentDrill, audioMode, progressPercentage, timerSeconds, setTimerSeconds, handleTimerComplete, nextStep, exercisePhase, setExercisePhase, uiText, sessionLength }) => {
  return (
    <div className={`h-full flex flex-col bg-${THEME.neutral}-50`}>
      {audioMode && exercisePhase === 'intro' && (
        <div className={`absolute inset-0 z-50 bg-${THEME.neutral}-900/95 flex flex-col items-center justify-center backdrop-blur-md p-8 text-center`}>
          <div className="animate-pulse flex flex-col items-center"><Headphones className={`w-16 h-16 text-${THEME.primary}-400 mb-4`} /><h2 className="text-2xl font-bold text-white mb-2">{currentDrill.title}</h2><p className={`text-${THEME.neutral}-400`}>{uiText.listen_instruction}</p></div>
        </div>
      )}
      <div className="bg-white p-4 pb-4 shadow-sm z-20 sticky top-0">
        <div className="flex justify-between items-end mb-3">
          <div className="flex items-center gap-2">
            <button onClick={handleBackToOverview} className={`p-2 -ml-2 hover:bg-${THEME.neutral}-100 rounded-full text-${THEME.neutral}-500 transition-colors`}><ChevronLeft className="w-6 h-6" /></button>
            <div><span className={`text-[10px] font-bold text-${THEME.neutral}-400 uppercase tracking-widest block`}>{uiText.step} {currentStepIndex + 1}/{sessionLength}</span><h2 className={`text-xl font-black text-${THEME.neutral}-800 leading-none mt-1`}>{currentDrill.category}</h2></div>
          </div>
          <div className="flex items-center gap-2">
             {audioMode && <div className={`flex items-center gap-1 px-2 py-1 bg-${THEME.primary}-50 text-${THEME.primary}-700 rounded text-xs font-bold border border-${THEME.primary}-100 ${exercisePhase === 'intro' ? 'animate-pulse' : ''}`}>{exercisePhase === 'intro' ? <Volume2 className="w-3 h-3" /> : <Headphones className="w-3 h-3" />}{exercisePhase === 'intro' ? uiText.speaking : uiText.audio_on}</div>}
             <span className={`px-2 py-1 bg-${THEME.neutral}-100 text-${THEME.neutral}-500 rounded text-xs font-bold uppercase`}>{currentDrill.type}</span>
          </div>
        </div>
        <div className={`w-full bg-${THEME.neutral}-100 h-1.5 rounded-full overflow-hidden`}><div className={`bg-${THEME.primary}-500 h-full transition-all duration-500 ease-out`} style={{ width: `${progressPercentage}%` }}></div></div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <DrillVisual drillId={currentDrill.drillId} />
        <h3 className={`text-2xl font-bold text-${THEME.neutral}-800 mb-2`}>{currentDrill.title}</h3>
        {/* REPETITION COUNTER - ADDED HERE */}
        {currentDrill.reps && (
          <div className={`flex items-center gap-2 mb-4 px-3 py-2 bg-${THEME.accent}-50 text-${THEME.accent}-700 rounded-lg border border-${THEME.accent}-200 w-fit`}>
            <Hash className="w-4 h-4" />
            <span className="text-sm font-bold">{currentDrill.reps}</span>
          </div>
        )}
        <p className={`text-${THEME.neutral}-600 mb-6 leading-relaxed text-sm`}>{currentDrill.description}</p>
        <SessionTimer key={currentDrill.id} seconds={timerSeconds} setSeconds={setTimerSeconds} defaultDuration={currentDrill.duration} audioMode={audioMode} onComplete={handleTimerComplete} triggerCountdown={exercisePhase === 'countdown'} onCountdownComplete={() => setExercisePhase('working')} uiText={uiText} />
        <div className={`bg-white p-5 rounded-xl border border-${THEME.neutral}-200 shadow-sm`}>
          <h4 className={`text-xs font-bold text-${THEME.neutral}-400 uppercase tracking-wider mb-4 border-b border-${THEME.neutral}-100 pb-2`}>{uiText.execution_steps}</h4>
          <div className="space-y-4">{currentDrill.steps.map((step, idx) => <div key={idx} className="flex gap-4 items-start"><div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${THEME.neutral}-100 text-${THEME.neutral}-600 font-bold flex items-center justify-center text-xs mt-0.5 border border-${THEME.neutral}-200`}>{idx + 1}</div><p className={`text-${THEME.neutral}-700 font-medium leading-snug text-sm`}>{step}</p></div>)}</div>
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-${THEME.neutral}-200`}>
        <button onClick={nextStep} className={`w-full max-w-md mx-auto bg-${THEME.neutral}-900 hover:bg-${THEME.neutral}-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-between px-6 transition-transform active:scale-95`}><span>{uiText.done_next}</span><div className={`flex items-center gap-2 text-${THEME.neutral}-400`}><span className="text-xs font-medium uppercase tracking-wider">{uiText.next_step}</span><ChevronRight className="w-5 h-5 text-white" /></div></button>
      </div>
    </div>
  );
};

const SummaryView = ({ setAudioMode, setAppState, setSessionStarted, uiText, generateNewSession }) => (
  <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-white">
    <div className={`w-24 h-24 bg-${THEME.primary}-100 rounded-full flex items-center justify-center mb-6 animate-bounce`}><Trophy className={`w-12 h-12 text-${THEME.primary}-600`} /></div>
    <h1 className={`text-3xl font-black text-${THEME.neutral}-900 mb-2`}>{uiText.session_complete}</h1>
    <p className={`text-${THEME.neutral}-500 mb-8 max-w-xs mx-auto text-sm`}>{uiText.session_complete_sub}</p>
    <div className="grid grid-cols-2 gap-4 w-full mb-8"><div className={`bg-${THEME.neutral}-50 p-4 rounded-xl border border-${THEME.neutral}-100`}><span className={`block text-3xl font-black text-${THEME.neutral}-800`}>50</span><span className={`text-xs font-bold text-${THEME.neutral}-400 uppercase`}>{uiText.minutes}</span></div><div className={`bg-${THEME.neutral}-50 p-4 rounded-xl border border-${THEME.neutral}-100`}><span className={`block text-3xl font-black text-${THEME.neutral}-800`}>6</span><span className={`text-xs font-bold text-${THEME.neutral}-400 uppercase`}>{uiText.drills}</span></div></div>
    <button onClick={() => { setAudioMode(false); setAppState('overview'); setSessionStarted(false); generateNewSession(); }} className={`flex items-center gap-2 text-${THEME.primary}-600 font-bold px-6 py-3 rounded-full hover:bg-${THEME.primary}-50 transition-colors`}><RefreshCw className="w-5 h-5" /> {uiText.start_new}</button>
  </div>
);

// --- Main App Component ---
export default function GolfSessionApp() {
  const [appState, setAppState] = useState('overview'); 
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [audioMode, setAudioMode] = useState(false);
  const [globalCountdown, setGlobalCountdown] = useState(null); 
  const [sessionStarted, setSessionStarted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [language, setLanguage] = useState('fr'); // Default to French
  const [exercisePhase, setExercisePhase] = useState('idle'); 
  const [currentSession, setCurrentSession] = useState([]);
  const audioPlayerRef = useRef(new Audio());
  const currentUIText = TRANSLATIONS[language].ui;
  
  useEffect(() => { const initialSession = generateDailySession(); setCurrentSession(initialSession); }, []);

  const generateNewSession = () => {
    const newSession = generateDailySession();
    setCurrentSession(newSession);
    setSessionStarted(false);
    setCurrentStepIndex(0);
    setTimerSeconds(newSession[0].duration * 60);
  };

  const getLocalizedSessionData = (lang) => currentSession.map(item => ({ ...item, ...TRANSLATIONS[lang].drillData[item.drillId] }));
  const sessionData = useMemo(() => getLocalizedSessionData(language), [language, currentSession]);
  const currentDrill = sessionData[currentStepIndex];
  const progressPercentage = currentSession.length > 0 ? ((currentStepIndex + 1) / currentSession.length) * 100 : 0;

  useEffect(() => { if (audioMode && 'wakeLock' in navigator) navigator.wakeLock.request('screen').catch(e => console.log('Wake Lock error:', e)); }, [audioMode]);

  const startSession = (withAudio) => {
    if (!sessionData || sessionData.length === 0) return;
    setAudioMode(withAudio); setCurrentStepIndex(0); setSessionStarted(true); setTimerSeconds(sessionData[0].duration * 60); 
    if (withAudio) { setAppState('countdown'); startGlobalCountdown(); } else { setAppState('active'); setExercisePhase('working'); }
  };

  const nextStep = () => {
    stopAudio();
    if (currentStepIndex < sessionData.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setTimerSeconds(sessionData[nextIndex].duration * 60); 
      window.scrollTo(0, 0);
    } else { setAppState('summary'); }
  };

  const handleBackToOverview = () => { stopAudio(); setAppState('overview'); };
  const stopAudio = () => { if (audioPlayerRef.current) { audioPlayerRef.current.pause(); audioPlayerRef.current.currentTime = 0; } };

  const playDrillAudio = (src, onEndCallback) => {
    if (!src) { if (onEndCallback) onEndCallback(); return; }
    const audio = audioPlayerRef.current; audio.src = src; audio.load();
    const handleEnd = () => { audio.removeEventListener('ended', handleEnd); audio.removeEventListener('error', handleError); if (onEndCallback) onEndCallback(); };
    const handleError = () => { audio.removeEventListener('ended', handleEnd); audio.removeEventListener('error', handleError); if (onEndCallback) onEndCallback(); };
    audio.addEventListener('ended', handleEnd); audio.addEventListener('error', handleError); audio.play().catch(e => handleError());
  };

  const startGlobalCountdown = () => {
    let count = 3; setGlobalCountdown(count); playCountdownBeep(count);
    const interval = setInterval(() => {
      count--; setGlobalCountdown(count > 0 ? count : 'GO'); playCountdownBeep(count);
      if (count <= 0) { clearInterval(interval); setTimeout(() => { setGlobalCountdown(null); setAppState('active'); }, 1000); }
    }, 1000);
  };

  useEffect(() => {
    stopAudio();
    if (appState === 'active' && currentDrill) {
      const isFreshTimer = timerSeconds === currentDrill.duration * 60;
      if (audioMode && isFreshTimer) { setExercisePhase('intro'); playDrillAudio(currentDrill.audioSrc, () => { setExercisePhase('countdown'); }); } else { setExercisePhase('working'); }
    }
    return () => stopAudio();
  }, [currentStepIndex, appState, audioMode, language, currentDrill]); 

  const handleTimerComplete = () => { playEndBeep(); if (audioMode) setTimeout(() => nextStep(), 2000); };

  if (!currentDrill) return <div className="flex h-screen items-center justify-center">Loading Session...</div>;

  return (
    <>
      <AnimationStyles />
      <div className={`bg-${THEME.neutral}-100 min-h-screen flex justify-center font-sans`}>
        <div className="w-full max-w-md bg-white h-screen shadow-2xl relative overflow-hidden flex flex-col">
          {appState === 'countdown' && (
            <div className={`absolute inset-0 z-50 bg-${THEME.neutral}-900/90 flex flex-col items-center justify-center backdrop-blur-sm`}>
              <p className={`text-${THEME.primary}-400 font-bold uppercase tracking-[0.5em] mb-4 animate-pulse`}>{currentUIText.get_ready}</p>
              <div className={`text-9xl font-black text-white transition-all transform ${globalCountdown === 'GO' ? `scale-125 text-${THEME.primary}-500` : 'scale-100'}`}>{globalCountdown}</div>
            </div>
          )}
          {appState === 'overview' && <OverviewView sessionStarted={sessionStarted} currentStepIndex={currentStepIndex} setAppState={setAppState} startSession={startSession} sessionData={sessionData} uiText={currentUIText} language={language} setLanguage={setLanguage} generateNewSession={generateNewSession} />}
          {(appState === 'active' || appState === 'countdown') && <ActiveView currentStepIndex={currentStepIndex} handleBackToOverview={handleBackToOverview} currentDrill={currentDrill} audioMode={audioMode} progressPercentage={progressPercentage} timerSeconds={timerSeconds} setTimerSeconds={setTimerSeconds} handleTimerComplete={handleTimerComplete} nextStep={nextStep} exercisePhase={exercisePhase} setExercisePhase={setExercisePhase} uiText={currentUIText} sessionLength={sessionData.length} />}
          {appState === 'summary' && <SummaryView setAudioMode={setAudioMode} setAppState={setAppState} setSessionStarted={setSessionStarted} uiText={currentUIText} generateNewSession={generateNewSession} />}
        </div>
      </div>
    </>
  );
}