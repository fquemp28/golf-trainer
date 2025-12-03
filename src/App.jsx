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
  User,
  Pause,
  Headphones,
  Volume2,
  RotateCcw,
  Globe,
  Dumbbell, 
  ArrowUpCircle,
  Hash,
  SkipForward,
  Box
} from 'lucide-react';

// -- ANIMATION ----

const PuttShaft = () => {
  return (
    <div className="putting-drill-wrapper">
      {/* Styles encapsulés et adaptés au design system de l'application. */}
      <style>{`
        .putting-drill-wrapper {
          width: 100%;
          /* La hauteur est maintenant fixe pour correspondre aux autres cartes (h-56 = 14rem) */
          height: 14rem; 
          display: flex;
          justify-content: center;
        }

        .pd-container {
          width: 100%;
          height: 100%;
          /* Fond gris clair et bordure fine pour matcher 'bg-neutral-50' et 'border-neutral-200' */
          background-color: #f9fafb; 
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem; /* rounded-xl */
          /* Ombre interne subtile pour matcher 'shadow-inner' */
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* Suppression de la texture d'herbe pour un look "flat" */
        
        /* --- ÉLÉMENTS DÉCOR --- */
        .pd-stick {
          position: absolute;
          top: 42%; /* Décalé vers le haut pour laisser de la place */
          left: 10%;
          width: 80%;
          height: 4px;
          /* Couleur plate gris foncé pour matcher le style des autres éléments */
          background-color: #374151; 
          border-radius: 2px;
          transform: translateY(-50%);
        }

        .pd-stick-mark {
            position: absolute;
            top: 0; bottom: 0;
            width: 2px;
            background-color: rgba(255,255,255,0.3); /* Marques subtiles */
        }
        .pd-mark-start { left: 15%; }
        .pd-mark-end { right: 5%; }

        /* --- ÉLÉMENTS ANIMÉS --- */
        .pd-ball {
          position: absolute;
          top: 58%; /* Décalé vers le bas (sous le stick) */
          left: 22%;
          width: 16px; /* Légèrement plus grande */
          height: 16px;
          background-color: #fff;
          border-radius: 50%;
          /* Bordure fine et ombre très légère pour le style "flat" */
          border: 1px solid #d1d5db;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transform: translateY(-50%);
          z-index: 10;
          animation: pd-ball-roll 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        .pd-putter {
          position: absolute;
          top: 58%; /* Aligné avec la balle */
          left: 22%;
          width: 10px;
          height: 40px;
          /* Couleur plate gris moyen pour la tête du putter */
          background-color: #6b7280;
          border-radius: 2px;
          transform: translate(-150%, -50%);
          z-index: 20;
          animation: pd-putter-swing 4s ease-in-out infinite;
        }

        /* La tige du putter */
        .pd-putter::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 4px;
          /* Couleur plate gris plus clair pour la tige */
          background-color: #9ca3af;
          transform-origin: left center;
          transform: translateY(-50%) rotate(-15deg);
          z-index: -1;
          border-radius: 2px;
        }

        .pd-path-guide {
          position: absolute;
          top: 58%; /* Aligné avec la balle */
          left: 22%;
          width: 0%;
          height: 2px;
          /* Guide visuel plus subtil en gris clair */
          background-color: #e5e7eb;
          transform: translateY(-50%);
          z-index: 1;
          animation: pd-show-path 4s linear infinite;
        }

        /* --- KEYFRAMES (Mouvement inchangé) --- */
        @keyframes pd-putter-swing {
          0% { left: 22%; transform: translate(-150%, -50%); }
          25% { left: 22%; transform: translate(-400%, -50%); }
          30% { left: 22%; transform: translate(-400%, -50%); }
          35% { left: 22%; transform: translate(-120%, -50%); } /* Impact */
          45% { left: 22%; transform: translate(100%, -50%); opacity: 1; }
          80% { left: 22%; transform: translate(100%, -50%); opacity: 0; }
          100% { left: 22%; transform: translate(-150%, -50%); opacity: 0; }
        }

        @keyframes pd-ball-roll {
          0%, 35% { left: 22%; opacity: 1; transform: translateY(-50%); }
          85% { left: 95%; opacity: 1; transform: translateY(-50%); }
          100% { left: 100%; opacity: 0; transform: translateY(-50%); }
        }

        @keyframes pd-show-path {
          0%, 35% { width: 0; opacity: 0; }
          36% { opacity: 1; }
          80% { width: 70%; opacity: 0; }
          100% { width: 70%; opacity: 0; }
        }
      `}</style>

      <div className="pd-container">
        {/* Stick d'alignement */}
        <div className="pd-stick">
          <div className="pd-stick-mark pd-mark-start" />
          <div className="pd-stick-mark pd-mark-end" />
        </div>

        {/* Guide visuel */}
        <div className="pd-path-guide" />

        {/* Balle */}
        <div className="pd-ball" />

        {/* Putter */}
        <div className="pd-putter" />
      </div>
    </div>
  );
};

const PuttAlt = () => {
  return (
    <div className="ap-drill-wrapper">
      <style>{`
        .ap-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .ap-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- ÉLÉMENTS DÉCOR (Cibles) --- */
        .ap-hole {
          position: absolute;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .ap-hole-1 { top: 45%; left: 35%; }
        .ap-hole-2 { top: 20%; left: 65%; }

        /* --- ÉLÉMENTS ANIMÉS --- */
        .ap-ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ap-ball-sequence 8s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        .ap-putter {
          position: absolute;
          width: 40px;
          height: 10px;
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          transform-origin: center center;
          top: 80%;
          left: 50%;
          /* Le putter commence un peu plus bas pour être derrière la balle */
          margin-top: 15px; 
          margin-left: -20px;
          animation: ap-putter-sequence 8s ease-in-out infinite;
        }

        /* Tige du putter (Shaft) - CORRIGÉ : Pointe vers le bas (le joueur) */
        .ap-putter::after {
          content: '';
          position: absolute;
          top: 50%; /* Commence au milieu de la tête */
          left: 50%;
          width: 4px;
          height: 60px; /* Longueur du shaft visible */
          background-color: #9ca3af;
          transform-origin: top center;
          transform: translateX(-50%); /* Pas de rotation interne, suit le parent */
          z-index: -1;
          border-radius: 2px;
        }

        /* --- ANIMATIONS --- */
        
        @keyframes ap-ball-sequence {
          /* PUTT 1 (Gauche) */
          0% { opacity: 1; top: 80%; left: 50%; }
          15% { top: 80%; left: 50%; }
          30% { top: 45%; left: 35%; opacity: 1;}
          35% { opacity: 0; }
          36% { opacity: 0; top: 80%; left: 50%; }
          
          /* PUTT 2 (Droite) */
          50% { opacity: 1; top: 80%; left: 50%; }
          65% { top: 80%; left: 50%; }
          85% { top: 20%; left: 65%; opacity: 1; }
          90% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes ap-putter-sequence {
          /* --- PUTT 1 : Cible à -113°, Putter rotaté à -23° --- */
          0% { opacity: 1; transform: rotate(-23deg) translate(0, 0); }
          5% { transform: rotate(-23deg) translate(0, 0); }
          10% { transform: rotate(-23deg) translate(0, 15px); } /* Backswing (Recule dans l'axe Y local) */
          15% { transform: rotate(-23deg) translate(0, -5px); } /* Impact */
          20% { opacity: 1; transform: rotate(-23deg) translate(0, -25px); } /* Follow through vers la cible */
          25% { opacity: 0; }

          /* Reset invisible */
          49% { opacity: 0; transform: rotate(14deg) translate(0, 0); }

          /* --- PUTT 2 : Cible à -76°, Putter rotaté à +14° --- */
          50% { opacity: 1; transform: rotate(14deg) translate(0, 0); }
          55% { transform: rotate(14deg) translate(0, 0); }
          60% { transform: rotate(14deg) translate(0, 15px); } /* Backswing */
          65% { transform: rotate(14deg) translate(0, -5px); } /* Impact */
          70% { opacity: 1; transform: rotate(14deg) translate(0, -25px); } /* Follow through */
          75% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="ap-container">
        <div className="ap-hole ap-hole-1"></div>
        <div className="ap-hole ap-hole-2"></div>
        <div className="ap-ball"></div>
        <div className="ap-putter"></div>
      </div>
    </div>
  );
};

const PuttTiger = () => {
  return (
    <div className="pg-drill-wrapper">
      <style>{`
        .pg-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .pg-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- ÉLÉMENTS DÉCOR --- */
        
        /* Trou (Cible) - Positionné à droite */
        .pg-hole {
          position: absolute;
          top: 50%;
          left: 85%;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Les Tees (Porte) - Positionnés à gauche (Zone d'impact) */
        .pg-tee {
          position: absolute;
          left: 20%; /* Alignés avec la position de départ de la balle */
          width: 6px;
          height: 6px;
          background-color: #fb923c; /* Orange */
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          z-index: 5;
        }
        
        /* Écartement vertical pour laisser passer le putter */
        .pg-tee-top { top: calc(50% - 28px); }
        .pg-tee-bottom { top: calc(50% + 28px); }

        /* --- ÉLÉMENTS ANIMÉS --- */
        
        /* Balle */
        .pg-ball {
          position: absolute;
          top: 50%;
          left: 20%;
          width: 14px;
          height: 14px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          transform: translate(-50%, -50%); /* Centrage parfait */
          animation: pg-ball-roll 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        /* Putter - Tête verticale pour mouvement horizontal */
        .pg-putter {
          position: absolute;
          top: 50%;
          left: 20%;
          width: 10px; /* Épaisseur */
          height: 40px; /* Largeur (verticale ici) */
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          transform: translate(-150%, -50%); /* Position initiale derrière la balle */
          animation: pg-putter-swing 4s ease-in-out infinite;
        }

        /* Tige du putter (Shaft) - Oriente vers le joueur (en bas) */
        .pg-putter::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 60px;
          background-color: #9ca3af;
          transform-origin: top center;
          /* Rotation légère pour la perspective */
          transform: translateX(-50%) rotate(-5deg); 
          z-index: -1;
          border-radius: 2px;
        }

        /* --- ANIMATIONS (Horizontales) --- */

        @keyframes pg-putter-swing {
          0% { 
            left: 20%;
            transform: translate(-150%, -50%); /* Adresse */
          }
          20% { 
            left: 20%;
            transform: translate(-400%, -50%); /* Backswing (Recule vers la gauche) */
          }
          30% { 
            left: 20%;
            transform: translate(-400%, -50%); /* Pause */
          }
          35% { 
            left: 20%;
            transform: translate(-110%, -50%); /* Impact (entre les tees) */
          }
          45% { 
            left: 20%;
            transform: translate(100%, -50%); /* Follow through (vers la droite) */
            opacity: 1;
          }
          70% {
             left: 20%;
             transform: translate(100%, -50%);
             opacity: 0;
          }
          100% { 
            left: 20%;
            transform: translate(-150%, -50%);
            opacity: 0; 
          }
        }

        @keyframes pg-ball-roll {
          0%, 35% { 
            left: 20%; 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1);
          }
          75% { 
            left: 85%; /* Arrive au trou */
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          80% { 
            left: 85%; 
            transform: translate(-50%, -50%) scale(0.8); /* Tombe visuellement */
            opacity: 0;
          }
          100% { 
            left: 85%; 
            opacity: 0; 
          }
        }

      `}</style>

      <div className="pg-container">
        {/* Cible */}
        <div className="pg-hole"></div>

        {/* Outils pédagogiques (Tees formant la porte) */}
        <div className="pg-tee pg-tee-top"></div>
        <div className="pg-tee pg-tee-bottom"></div>

        {/* Balle */}
        <div className="pg-ball"></div>

        {/* Putter */}
        <div className="pg-putter"></div>
      </div>
    </div>
  );
};

const PuttSnail = () => {
  return (
    <div className="sd-drill-wrapper">
      <style>{`
        .sd-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .sd-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR --- */
        
        .sd-hole {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          z-index: 5;
        }

        /* Ligne guide Fibonacci (Optionnel : aide visuelle subtile) */
        .sd-fib-guide {
            position: absolute;
            top: 50%; left: 50%;
            width: 1px; height: 1px;
            /* Pas de bordure visible pour garder le style flat, 
               mais les balles suivent cette courbe invisible */
        }

        /* --- BALLES (8 Positions - Spirale Fibonacci) --- */
        .sd-ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        /* CALCUL FIBONACCI (Distances approximatives du centre) :
           Angle step: 45deg (Clockwise)
           Ratios dist: 8%, 10%, 13%, 17%, 22%, 28%, 35%, 44%
        */

        /* Balle 1 (Très proche - Bas) */
        .sd-ball-1 { top: 58%; left: 50%; animation: sd-ball-anim-1 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        
        /* Balle 2 (Proche - Bas Gauche) */
        .sd-ball-2 { top: 57%; left: 43%; animation: sd-ball-anim-2 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        
        /* Balle 3 (Moyenne - Gauche) */
        .sd-ball-3 { top: 50%; left: 37%; animation: sd-ball-anim-3 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        
        /* Balle 4 (Moyenne - Haut Gauche) */
        .sd-ball-4 { top: 38%; left: 38%; animation: sd-ball-anim-4 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 5 (Loin - Haut) */
        .sd-ball-5 { top: 28%; left: 50%; animation: sd-ball-anim-5 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 6 (Loin - Haut Droite) */
        .sd-ball-6 { top: 30%; left: 70%; animation: sd-ball-anim-6 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 7 (Très Loin - Droite) */
        .sd-ball-7 { top: 50%; left: 85%; animation: sd-ball-anim-7 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 8 (Max - Bas Droite) */
        .sd-ball-8 { top: 81%; left: 81%; animation: sd-ball-anim-8 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }


        /* --- PUTTER --- */
        .sd-putter {
          position: absolute;
          width: 10px; height: 40px;
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          transform-origin: center center;
          opacity: 0;
          animation: sd-putter-sequence 16s ease-in-out infinite;
        }

        .sd-putter::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 60px;
          background-color: #9ca3af;
          transform-origin: top center;
          transform: translateX(-50%); 
          z-index: -1;
          border-radius: 2px;
        }


        /* --- KEYFRAMES --- */

        @keyframes sd-putter-sequence {
          /* --- BALLE 1 (90deg) --- */
          0%   { opacity: 1; top: 60%; left: 50%; transform: translate(-50%, -50%) rotate(90deg); }
          2%   { top: 58%; left: 50%; transform: translate(-50%, -50%) rotate(90deg); } /* Impact */
          6%   { opacity: 1; top: 55%; left: 50%; }
          7%   { opacity: 0; }

          /* --- BALLE 2 (135deg) --- */
          12.5% { opacity: 1; top: 59%; left: 41%; transform: translate(-50%, -50%) rotate(135deg); }
          14.5% { top: 57%; left: 43%; transform: translate(-50%, -50%) rotate(135deg); } /* Impact */
          18.5% { opacity: 1; top: 54%; left: 46%; }
          19.5% { opacity: 0; }

          /* --- BALLE 3 (180deg) --- */
          25%   { opacity: 1; top: 50%; left: 35%; transform: translate(-50%, -50%) rotate(180deg); }
          27%   { top: 50%; left: 37%; transform: translate(-50%, -50%) rotate(180deg); } /* Impact */
          31%   { opacity: 1; top: 50%; left: 41%; }
          32%   { opacity: 0; }

          /* --- BALLE 4 (225deg) --- */
          37.5% { opacity: 1; top: 36%; left: 36%; transform: translate(-50%, -50%) rotate(225deg); }
          39.5% { top: 38%; left: 38%; transform: translate(-50%, -50%) rotate(225deg); } /* Impact */
          43.5% { opacity: 1; top: 41%; left: 41%; }
          44.5% { opacity: 0; }

          /* --- BALLE 5 (270deg) --- */
          50%   { opacity: 1; top: 26%; left: 50%; transform: translate(-50%, -50%) rotate(270deg); }
          52%   { top: 28%; left: 50%; transform: translate(-50%, -50%) rotate(270deg); } /* Impact */
          56%   { opacity: 1; top: 33%; left: 50%; }
          57%   { opacity: 0; }

          /* --- BALLE 6 (315deg) --- */
          62.5% { opacity: 1; top: 28%; left: 72%; transform: translate(-50%, -50%) rotate(315deg); }
          64.5% { top: 30%; left: 70%; transform: translate(-50%, -50%) rotate(315deg); } /* Impact */
          68.5% { opacity: 1; top: 34%; left: 66%; }
          69.5% { opacity: 0; }

          /* --- BALLE 7 (0deg) --- */
          75%   { opacity: 1; top: 50%; left: 87%; transform: translate(-50%, -50%) rotate(0deg); }
          77%   { top: 50%; left: 85%; transform: translate(-50%, -50%) rotate(0deg); } /* Impact */
          81%   { opacity: 1; top: 50%; left: 80%; }
          82%   { opacity: 0; }

          /* --- BALLE 8 (45deg) --- */
          87.5% { opacity: 1; top: 83%; left: 83%; transform: translate(-50%, -50%) rotate(45deg); }
          89.5% { top: 81%; left: 81%; transform: translate(-50%, -50%) rotate(45deg); } /* Impact */
          93.5% { opacity: 1; top: 76%; left: 76%; }
          94.5% { opacity: 0; }
          100%  { opacity: 0; }
        }

        /* --- ANIMATIONS BALLES --- */

        @keyframes sd-ball-anim-1 {
          0%, 2% { top: 58%; left: 50%; opacity: 1; }
          4% { top: 50%; left: 50%; opacity: 1; }
          5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 58%; left: 50%; }
        }
        @keyframes sd-ball-anim-2 {
          0%, 14.5% { top: 57%; left: 43%; opacity: 1; }
          16.5% { top: 50%; left: 50%; opacity: 1; }
          17.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 57%; left: 43%; }
        }
        @keyframes sd-ball-anim-3 {
          0%, 27% { top: 50%; left: 37%; opacity: 1; }
          29% { top: 50%; left: 50%; opacity: 1; }
          30% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 50%; left: 37%; }
        }
        @keyframes sd-ball-anim-4 {
          0%, 39.5% { top: 38%; left: 38%; opacity: 1; }
          41.5% { top: 50%; left: 50%; opacity: 1; }
          42.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 38%; left: 38%; }
        }
        @keyframes sd-ball-anim-5 {
          0%, 52% { top: 28%; left: 50%; opacity: 1; }
          54% { top: 50%; left: 50%; opacity: 1; }
          55% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 28%; left: 50%; }
        }
        @keyframes sd-ball-anim-6 {
          0%, 64.5% { top: 30%; left: 70%; opacity: 1; }
          66.5% { top: 50%; left: 50%; opacity: 1; }
          67.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 30%; left: 70%; }
        }
        @keyframes sd-ball-anim-7 {
          0%, 77% { top: 50%; left: 85%; opacity: 1; }
          79% { top: 50%; left: 50%; opacity: 1; }
          80% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 50%; left: 85%; }
        }
        @keyframes sd-ball-anim-8 {
          0%, 89.5% { top: 81%; left: 81%; opacity: 1; }
          91.5% { top: 50%; left: 50%; opacity: 1; }
          92.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 81%; left: 81%; }
        }

      `}</style>

      <div className="sd-container">
        <div className="sd-hole"></div>
        {/* Ligne guide invisible pour la structure */}
        <div className="sd-fib-guide"></div>

        <div className="sd-ball sd-ball-1"></div>
        <div className="sd-ball sd-ball-2"></div>
        <div className="sd-ball sd-ball-3"></div>
        <div className="sd-ball sd-ball-4"></div>
        <div className="sd-ball sd-ball-5"></div>
        <div className="sd-ball sd-ball-6"></div>
        <div className="sd-ball sd-ball-7"></div>
        <div className="sd-ball sd-ball-8"></div>

        <div className="sd-putter"></div>
      </div>
    </div>
  );
};

const Putt10M = () => {
 return (
    <div className="lp-drill-wrapper">
      <style>{`
        .lp-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .lp-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR (Zone Cible) --- */
        
        .lp-zone {
          position: absolute;
          top: 50%;
          left: 80%;
          width: 100px;
          height: 100px;
          background-color: rgba(229, 231, 235, 0.4);
          border: 1px dashed #d1d5db;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          /* Feedback visuel : Rouge (Échec) puis Vert (Réussite) */
          animation: lp-zone-feedback 24s ease-in-out infinite;
        }

        .lp-hole {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
          z-index: 2;
        }

        /* --- INDICATEURS --- */
        .lp-marker-dist {
          position: absolute;
          bottom: 15%;
          left: 15%; right: 20%;
          height: 1px;
          background-color: #d1d5db;
        }
        .lp-marker-dist::before, .lp-marker-dist::after {
          content: ''; position: absolute; top: -3px; width: 1px; height: 7px; background-color: #d1d5db;
        }
        .lp-marker-dist::before { left: 0; }
        .lp-marker-dist::after { right: 0; }
        
        .lp-text-dist {
          position: absolute;
          bottom: 17%; left: 50%; transform: translateX(-50%);
          font-size: 0.7rem; color: #9ca3af; font-weight: 500;
          background-color: #f9fafb; padding: 0 4px;
        }

        .lp-marker-radius {
          position: absolute; top: 50%; left: 50%; width: 50px; height: 1px;
          background-color: #9ca3af; transform-origin: left center; transform: rotate(-45deg);
        }
        .lp-text-radius {
          position: absolute; top: -12px; left: 20px;
          font-size: 0.6rem; color: #6b7280; white-space: nowrap; transform: rotate(0deg);
        }

        /* --- BALLES --- */
        .lp-ball {
          position: absolute;
          width: 12px; height: 12px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        /* Positions initiales plus espacées (30%, 50%, 70%) */
        .lp-ball-1 { top: 30%; left: 15%; animation: lp-ball-1-seq 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
        .lp-ball-2 { top: 50%; left: 15%; animation: lp-ball-2-seq 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
        .lp-ball-3 { top: 70%; left: 15%; animation: lp-ball-3-seq 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }

        /* --- PUTTER --- */
        .lp-putter {
          position: absolute;
          width: 10px; height: 36px;
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          /* CORRECTION MAJEURE : Centrage du putter pour frappe au 'Sweet Spot' */
          transform: translate(-50%, -50%); 
          top: 50%; left: 15%; 
          opacity: 0;
          animation: lp-putter-sequence 24s ease-in-out infinite;
        }

        .lp-putter::after {
          content: ''; position: absolute; top: 50%; left: 50%; width: 4px; height: 50px;
          background-color: #9ca3af; transform-origin: top center; 
          /* Centrage de la tige par rapport au centre de la tête */
          transform: translateX(-50%) rotate(-5deg);
          z-index: -1; border-radius: 2px;
        }

        /* --- KEYFRAMES --- */

        /* Animation Feedback Zone : Rouge (Fail) -> Neutre -> Vert (Success) */
        @keyframes lp-zone-feedback {
          /* Phase Échec (0-50%) */
          0% { background-color: rgba(229, 231, 235, 0.4); border-color: #d1d5db; }
          15%, 45% { background-color: rgba(254, 202, 202, 0.3); border-color: #fca5a5; } /* Rouge léger */
          50% { background-color: rgba(229, 231, 235, 0.4); border-color: #d1d5db; }
          
          /* Phase Réussite (50-100%) */
          65%, 95% { background-color: rgba(167, 243, 208, 0.3); border-color: #6ee7b7; } /* Vert léger */
          100% { background-color: rgba(229, 231, 235, 0.4); border-color: #d1d5db; }
        }

        /* PUTTER SEQUENCE
           Utilisation de 'margin-left' pour le mouvement relatif, 
           en gardant 'left: 15%' comme base.
           Base margin-left: -12px (Position adresse, juste derrière la balle)
        */
        @keyframes lp-putter-sequence {
          /* --- Séquence 1 (Essai) --- */
          /* Coup 1 (Haut - 30%) */ 
          0% { opacity: 1; top: 30%; margin-left: -12px; } 
          1.5% { margin-left: -32px; } /* Backswing */
          2.5% { margin-left: -2px; } /* Impact (Face touche balle) */
          5% { opacity: 1; margin-left: 18px; } /* Follow through */
          6% { opacity: 0; }

          /* Coup 2 (Milieu - 50%) */ 
          16.6% { opacity: 1; top: 50%; margin-left: -12px; } 
          18% { margin-left: -32px; } 
          19% { margin-left: -2px; } 
          21.6% { opacity: 1; margin-left: 18px; } 
          22.6% { opacity: 0; }

          /* Coup 3 (Bas - 70%) */ 
          33.3% { opacity: 1; top: 70%; margin-left: -12px; } 
          35% { margin-left: -32px; } 
          36% { margin-left: -2px; } 
          38.3% { opacity: 1; margin-left: 18px; } 
          39.3% { opacity: 0; }

          /* --- Séquence 2 (Réussite) --- */
          /* Coup 4 (Haut) */ 
          50% { opacity: 1; top: 30%; margin-left: -12px; } 
          51.5% { margin-left: -32px; } 
          52.5% { margin-left: -2px; } 
          55% { opacity: 1; margin-left: 18px; } 
          56% { opacity: 0; }

          /* Coup 5 (Milieu) */ 
          66.6% { opacity: 1; top: 50%; margin-left: -12px; } 
          68% { margin-left: -32px; } 
          69% { margin-left: -2px; } 
          71.6% { opacity: 1; margin-left: 18px; } 
          72.6% { opacity: 0; }

          /* Coup 6 (Bas) */ 
          83.3% { opacity: 1; top: 70%; margin-left: -12px; } 
          85% { margin-left: -32px; } 
          86% { margin-left: -2px; } 
          88.3% { opacity: 1; margin-left: 18px; } 
          89.3% { opacity: 0; }
          
          100% { opacity: 0; }
        }

        /* BALLE 1 : Échec (Court) -> Réussite (Dans zone) */
        @keyframes lp-ball-1-seq {
          /* Seq 1 : Court (60%) */
          0%, 2.5% { top: 30%; left: 15%; opacity: 1; }
          15% { left: 60%; opacity: 1; } 
          48% { left: 60%; opacity: 1; } 
          49% { opacity: 0; }
          
          /* Seq 2 : Parfait (80%) */
          50%, 52.5% { top: 30%; left: 15%; opacity: 1; }
          65% { top: 33%; left: 78%; opacity: 1; } /* Dans la zone */
          98% { top: 33%; left: 78%; opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* BALLE 2 : Échec (Long) -> Réussite (Dans zone) */
        @keyframes lp-ball-2-seq {
          /* Seq 1 : Long (90%) */
          0%, 19% { top: 50%; left: 15%; opacity: 1; }
          32% { left: 90%; opacity: 1; }
          48% { left: 90%; opacity: 1; }
          49% { opacity: 0; }

          /* Seq 2 : Parfait (85%) */
          50%, 69% { top: 50%; left: 15%; opacity: 1; }
          81% { top: 50%; left: 82%; opacity: 1; } /* Dans la zone, derrière trou */
          98% { top: 50%; left: 82%; opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* BALLE 3 : Ok (Zone) -> Réussite (Dans zone) */
        @keyframes lp-ball-3-seq {
          /* Seq 1 : Ok (76%) */
          0%, 36% { top: 70%; left: 15%; opacity: 1; }
          48% { left: 76%; opacity: 1; }
          49% { opacity: 0; }

          /* Seq 2 : Parfait (83%) */
          50%, 86% { top: 70%; left: 15%; opacity: 1; }
          95% { top: 67%; left: 80%; opacity: 1; } /* Dans la zone, proche trou */
          98% { top: 67%; left: 80%; opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

      `}</style>

      <div className="lp-container">
        {/* Zone cible (Lag Zone) */}
        <div className="lp-zone">
          <div className="lp-hole"></div>
          <div className="lp-marker-radius">
             <span className="lp-text-radius">1m</span>
          </div>
        </div>

        <div className="lp-marker-dist"></div>
        <div className="lp-text-dist">10m</div>

        {/* 3 Balles */}
        <div className="lp-ball lp-ball-1"></div>
        <div className="lp-ball lp-ball-2"></div>
        <div className="lp-ball lp-ball-3"></div>

        {/* Putter */}
        <div className="lp-putter"></div>
      </div>
    </div>
  );
};

const ChipEdge = () => {
  return (
    <div className="pc-drill-wrapper">
      <style>{`
        .pc-drill-wrapper {
          width: 100%;
          height: 14rem;
          display: flex;
          justify-content: center;
        }

        .pc-container {
          width: 100%;
          height: 100%;
          /* Fond Fringe (Avant-green) : Vert un peu jaune/terreux */
          background-color: #ecfccb; 
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR ORGANIQUE --- */
        
        /* Forme SVG pour la délimitation Green / Fringe */
        .pc-green-shape {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .pc-green-path {
          /* Green : Vert tendre et propre */
          fill: #d1fae5; 
        }

        /* Trou & Drapeau */
        .pc-hole {
          position: absolute;
          top: 50%;
          right: 15%;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          z-index: 2;
        }
        
        .pc-pin {
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 4px;
          background-color: #ef4444; /* Rouge pour le drapeau vu de haut */
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 2px #fff; /* Petit contour blanc pour le contraste */
        }

        /* --- LÉGENDES TEXTUELLES --- */
        .pc-label {
          position: absolute;
          bottom: 12px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 5;
          pointer-events: none;
        }
        
        .pc-label-fringe {
          left: 14px;
          color: #65a30d; /* Vert olive foncé pour le contraste sur le fringe */
          opacity: 0.8;
        }

        .pc-label-green {
          right: 14px;
          color: #059669; /* Vert émeraude pour le contraste sur le green */
          opacity: 0.8;
        }


        /* --- BALLES & OMBRES --- */
        
        .pc-ball-wrapper {
          position: absolute;
          top: 50%;
          left: 15%;
          width: 14px;
          height: 14px;
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        .pc-ball {
          width: 100%; height: 100%;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .pc-shadow {
          position: absolute;
          top: 50%; left: 50%;
          width: 12px; height: 12px;
          background-color: rgba(0,0,0,0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        /* Putt Wrapper */
        .pc-wrapper-1 {
          animation: pc-ball-putt 10s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        /* Chip Wrapper */
        .pc-wrapper-2 {
          animation: pc-ball-chip-move 10s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .pc-ball-2 {
          animation: pc-ball-chip-height 10s ease-in-out infinite;
        }
        .pc-shadow-2 {
          animation: pc-shadow-chip 10s ease-in-out infinite;
        }


        /* --- CLUBS (Redesign) --- */
        
        .pc-club {
          position: absolute;
          top: 50%;
          left: 15%;
          z-index: 20;
          transform-origin: center center;
          transform: translate(-150%, -50%);
          opacity: 0;
        }

        /* PUTTER : Rectangulaire, sombre (Maillet ou lame) */
        .pc-putter {
          width: 10px; height: 40px;
          background-color: #374151;
          border-radius: 2px;
          animation: pc-swing-putt 10s ease-in-out infinite;
        }
        /* Tige Putter */
        .pc-putter::after {
          content: ''; position: absolute; top: 50%; left: 50%;
          width: 4px; height: 60px; background-color: #9ca3af;
          transform-origin: top center; transform: translateX(-50%) rotate(-5deg);
          z-index: -1; border-radius: 2px;
        }


        /* WEDGE : Forme de fer réaliste (Chrome) */
        .pc-wedge {
          width: 18px; /* Un peu plus large pour le texte */
          height: 44px;
          background-color: #e5e7eb; /* Chrome/Silver */
          border: 1px solid #d1d5db;
          
          /* Forme trapézoïdale typique d'un fer vu de dessus */
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%);
          border-radius: 2px 8px 2px 2px;
          
          animation: pc-swing-chip 10s ease-in-out infinite;
          
          /* Centrage du texte SW */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Inscription "SW" sur la tête de club */
        .pc-wedge-text {
          font-size: 8px;
          font-weight: 800;
          color: #9ca3af; /* Gris foncé effet gravure */
          transform: rotate(90deg); /* Texte vertical le long de la tête */
          user-select: none;
          white-space: nowrap;
        }
        
        /* Hosel (Jonction tête-manche) pour le wedge */
        .pc-wedge::before {
          content: ''; position: absolute; bottom: -5px; left: 2px;
          width: 6px; height: 10px; background-color: #d1d5db;
          transform: rotate(-10deg); border-radius: 2px;
        }
        
        /* Tige Wedge */
        .pc-wedge::after {
          content: ''; position: absolute; top: 50%; left: 30%; /* Tige décalée vers le talon */
          width: 4px; height: 60px; background-color: #9ca3af;
          transform-origin: top center; transform: translateX(-50%) rotate(-5deg);
          z-index: -1; border-radius: 2px;
        }


        /* --- KEYFRAMES --- */
        
        /* 1. PUTT SWING */
        @keyframes pc-swing-putt {
          0% { opacity: 1; transform: translate(-150%, -50%); } 
          5% { transform: translate(-350%, -50%); } 
          10% { transform: translate(-50%, -50%); } 
          15% { opacity: 1; transform: translate(100%, -50%); } 
          20% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* 1. PUTT BALL */
        @keyframes pc-ball-putt {
          0%, 10% { left: 15%; opacity: 1; }
          40% { left: 83%; opacity: 1; }
          45% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* 2. CHIP SWING */
        @keyframes pc-swing-chip {
          0%, 50% { opacity: 0; transform: translate(-150%, -50%); }
          50% { opacity: 1; transform: translate(-150%, -50%); } 
          55% { transform: translate(-350%, -50%) rotate(-10deg); } 
          60% { transform: translate(-50%, -50%) rotate(0deg); } 
          65% { opacity: 1; transform: translate(100%, -50%); } 
          70% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* 2. CHIP BALL MOVEMENT */
        @keyframes pc-ball-chip-move {
          0%, 60% { left: 15%; opacity: 1; }
          85% { left: 83%; opacity: 1; } 
          90% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* 2. CHIP HEIGHT */
        @keyframes pc-ball-chip-height {
          0%, 60% { transform: scale(1); }
          70% { transform: scale(1.5); } /* Monte plus haut */
          80% { transform: scale(1); } 
          100% { transform: scale(1); }
        }

        /* 2. CHIP SHADOW */
        @keyframes pc-shadow-chip {
          0%, 60% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          70% { opacity: 0.2; transform: translate(-60%, 25px) scale(0.5); }
          80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%); }
        }

      `}</style>

      <div className="pc-container">
        
        {/* Fond Organique : Fringe & Green */}
        <svg className="pc-green-shape" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.1"/>
            </filter>
          </defs>
          {/* Forme ondulée du green */}
          <path 
            className="pc-green-path" 
            d="M 30,0 C 40,20 20,40 35,60 C 45,80 30,100 30,100 L 100,100 L 100,0 Z" 
            filter="url(#shadow)"
          />
        </svg>

        {/* LÉGENDES */}
        <div className="pc-label pc-label-fringe">Bord du green</div>
        <div className="pc-label pc-label-green">Green</div>

        <div className="pc-hole">
            <div className="pc-pin"></div>
        </div>

        {/* SEQUENCE 1 : PUTTER */}
        <div className="pc-ball-wrapper pc-wrapper-1">
            <div className="pc-shadow pc-shadow-1"></div>
            <div className="pc-ball"></div>
        </div>
        <div className="pc-club pc-putter"></div>


        {/* SEQUENCE 2 : CHIP */}
        <div className="pc-ball-wrapper pc-wrapper-2">
            <div className="pc-shadow pc-shadow-2"></div>
            <div className="pc-ball pc-ball-2"></div>
        </div>
        <div className="pc-club pc-wedge">
            <span className="pc-wedge-text">SW</span>
        </div>

      </div>
    </div>
  );
};

const ChipScore = () => {
  return (
    <div className="pc-drill-wrapper">
      <style>{`
        .pc-drill-wrapper {
          width: 100%;
          height: 14rem;
          display: flex;
          justify-content: center;
        }

        .pc-container {
          width: 100%;
          height: 100%;
          background-color: #ecfccb; 
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR ORGANIQUE --- */
        .pc-green-shape {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .pc-green-path { fill: #d1fae5; }

        .pc-hole {
          position: absolute;
          top: 50%; right: 15%;
          width: 24px; height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          z-index: 2;
        }
        .pc-pin {
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 4px;
          background-color: #ef4444;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 2px #fff;
        }

        /* --- SCORE FEEDBACK (Corrigé) --- */
        .pc-score-card {
          position: absolute;
          top: 20%; left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          padding: 4px 8px;
          display: flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 30;
          opacity: 0;
          /* Cycle 28s : Score apparaît après chaque putt */
          animation: pc-score-anim 28s ease-in-out infinite;
        }
        .pc-score-text { font-size: 0.7rem; font-weight: 700; color: #374151; text-transform: uppercase; }
        .pc-score-check { width: 12px; height: 12px; border: 1px solid #d1d5db; border-radius: 2px; position: relative; }
        .pc-score-check::after {
          content: '✓'; position: absolute; top: -2px; left: 1px; font-size: 10px; color: #16a34a; opacity: 0;
          animation: pc-check-anim 28s ease-in-out infinite;
        }

        /* --- LÉGENDES --- */
        .pc-label {
          position: absolute; bottom: 12px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
          z-index: 5; pointer-events: none;
        }
        .pc-label-fringe { left: 14px; color: #65a30d; opacity: 0.8; }
        .pc-label-green { right: 14px; color: #059669; opacity: 0.8; }

        /* --- ELEMENTS COMMUNS --- */
        .pc-ball-wrapper { position: absolute; width: 14px; height: 14px; z-index: 10; transform: translate(-50%, -50%); }
        .pc-ball { width: 100%; height: 100%; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 50%; position: relative; z-index: 2; }
        .pc-shadow { position: absolute; top: 50%; left: 50%; width: 12px; height: 12px; background-color: rgba(0,0,0,0.2); border-radius: 50%; transform: translate(-50%, -50%); z-index: 1; }
        
        .pc-club { position: absolute; z-index: 20; transform-origin: center center; transform: translate(-150%, -50%); opacity: 0; }
        
        /* Styles Têtes de Club */
        .head-wedge {
          width: 18px; height: 44px; background-color: #e5e7eb; border: 1px solid #d1d5db;
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%); border-radius: 2px 8px 2px 2px;
          display: flex; align-items: center; justify-content: center;
        }
        .head-wedge::before { content: ''; position: absolute; bottom: -5px; left: 2px; width: 6px; height: 10px; background-color: #d1d5db; transform: rotate(-10deg); border-radius: 2px; }
        .head-putter { width: 10px; height: 40px; background-color: #374151; border-radius: 2px; }
        
        /* Tiges */
        .stem { content: ''; position: absolute; top: 50%; width: 4px; height: 60px; background-color: #9ca3af; transform-origin: top center; z-index: -1; border-radius: 2px; }
        .stem-wedge { left: 30%; transform: translateX(-50%) rotate(-5deg); }
        .stem-putter { left: 50%; transform: translateX(-50%) rotate(-5deg); }
        .pc-wedge-text { font-size: 8px; font-weight: 800; color: #9ca3af; transform: rotate(90deg); user-select: none; white-space: nowrap; }


        /* ============================ */
        /* === SEQUENCE 1 (0% - 50%) === */
        /* ============================ */
        
        /* CHIP 1 (Gauche -> Centre) */
        .pc-chip-1 { top: 50%; left: 15%; animation: pc-chip-move-1 28s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .pc-chip-ball-1 { animation: pc-chip-height-1 28s ease-in-out infinite; }
        .pc-chip-shadow-1 { animation: pc-chip-shadow-1 28s ease-in-out infinite; }
        
        .pc-club-chip-1 { top: 50%; left: 15%; animation: pc-swing-chip-1 28s ease-in-out infinite; }

        /* PUTT 1 (Centre -> Trou) */
        .pc-putt-1 { top: 50%; left: 65%; opacity: 0; animation: pc-putt-move-1 28s ease-out infinite; }
        .pc-club-putt-1 { top: 50%; left: 65%; animation: pc-swing-putt-1 28s ease-in-out infinite; }


        /* ============================ */
        /* === SEQUENCE 2 (50% - 100%) === */
        /* ============================ */
        
        /* CHIP 2 (Bas Gauche -> Centre) */
        .pc-chip-2 { top: 80%; left: 20%; animation: pc-chip-move-2 28s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .pc-chip-ball-2 { animation: pc-chip-height-2 28s ease-in-out infinite; }
        .pc-chip-shadow-2 { animation: pc-chip-shadow-2 28s ease-in-out infinite; }
        
        /* Club orienté différemment pour le chip diagonal */
        .pc-club-chip-2 { top: 80%; left: 20%; transform: translate(-150%, -50%) rotate(-20deg); animation: pc-swing-chip-2 28s ease-in-out infinite; }

        /* PUTT 2 (Centre -> Trou) */
        .pc-putt-2 { top: 50%; left: 60%; opacity: 0; animation: pc-putt-move-2 28s ease-out infinite; }
        .pc-club-putt-2 { top: 50%; left: 60%; animation: pc-swing-putt-2 28s ease-in-out infinite; }


        /* ============================ */
        /* === KEYFRAMES ANIMATION === */
        /* ============================ */

        /* --- SCORE CARD FIX --- */
        @keyframes pc-score-anim {
            0% { opacity: 0; transform: translate(-50%, -30%) scale(0.8); } /* Début invisible */

            /* Score 1 (Après Putt 1 vers 41%) */
            42% { opacity: 0; transform: translate(-50%, -30%) scale(0.8); }
            44% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            52% { opacity: 0; transform: translate(-50%, -60%) scale(1); }
            
            /* Score 2 (Après Putt 2 vers 91%) */
            92% { opacity: 0; transform: translate(-50%, -30%) scale(0.8); }
            94% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            98% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            99.9% { opacity: 0; transform: translate(-50%, -60%) scale(1); } /* Fin invisible */
            100% { opacity: 0; }
        }
        @keyframes pc-check-anim {
            44% { opacity: 0; } 45% { opacity: 1; transform: scale(1.2); } 46% { transform: scale(1); } 52% { opacity: 1; }
            94% { opacity: 0; } 95% { opacity: 1; transform: scale(1.2); } 96% { transform: scale(1); } 99% { opacity: 1; }
        }

        /* --- SEQUENCE 1 (0-50%) --- */
        
        /* Chip 1 */
        @keyframes pc-swing-chip-1 {
          0% { opacity: 0; transform: translate(-150%, -50%); }
          2% { opacity: 1; transform: translate(-150%, -50%); }
          4% { transform: translate(-350%, -50%) rotate(-10deg); }
          6% { transform: translate(-50%, -50%) rotate(0deg); } /* Impact */
          8% { opacity: 1; transform: translate(100%, -50%); }
          10% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-chip-move-1 {
          0%, 6% { left: 15%; opacity: 1; }
          15% { left: 65%; opacity: 1; } /* Atterri */
          25% { left: 65%; opacity: 1; } /* Pause */
          /* Fix liaison Putt : Reste visible jusqu'au dernier moment */
          27.9% { opacity: 1; left: 65%; } 
          28% { opacity: 0; left: 65%; } /* Disparait à l'impact putt */
          100% { opacity: 0; left: 15%; }
        }
        @keyframes pc-chip-height-1 {
          0%, 6% { transform: scale(1); } 10% { transform: scale(1.5); } 15% { transform: scale(1); } 100% { transform: scale(1); }
        }
        @keyframes pc-chip-shadow-1 {
          0%, 6% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 10% { opacity: 0.3; transform: translate(-60%, 25px) scale(0.6); } 15% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%); }
        }

        /* Putt 1 (25% à 40%) */
        @keyframes pc-swing-putt-1 {
          0%, 23% { opacity: 0; transform: translate(-150%, -50%); }
          25% { opacity: 1; transform: translate(-150%, -50%); } /* Adresse */
          26.5% { transform: translate(-350%, -50%); }
          28% { transform: translate(-50%, -50%); } /* Impact à 28% */
          29.5% { opacity: 1; transform: translate(100%, -50%); }
          32% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-putt-move-1 {
          0% { opacity: 0; left: 65%; }
          27.9% { opacity: 0; left: 65%; }
          28% { opacity: 1; left: 65%; } /* Apparition synchronisée */
          40% { left: 85%; opacity: 1; }
          41% { opacity: 0; left: 85%; }
          100% { opacity: 0; left: 65%; }
        }


        /* --- SEQUENCE 2 (50-100%) --- */
        
        /* Chip 2 */
        @keyframes pc-swing-chip-2 {
          0%, 50% { opacity: 0; transform: translate(-150%, -50%) rotate(-20deg); }
          52% { opacity: 1; transform: translate(-150%, -50%) rotate(-20deg); }
          54% { transform: translate(-350%, -50%) rotate(-30deg); }
          56% { transform: translate(-50%, -50%) rotate(-20deg); } /* Impact */
          58% { opacity: 1; transform: translate(100%, -50%) rotate(-10deg); }
          60% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-chip-move-2 {
          0%, 56% { top: 80%; left: 20%; opacity: 1; }
          65% { top: 50%; left: 60%; opacity: 1; } /* Atterri au centre */
          75% { top: 50%; left: 60%; opacity: 1; }
          /* Fix liaison Putt 2 : Reste visible jusqu'au dernier moment */
          77.9% { opacity: 1; top: 50%; left: 60%; }
          78% { opacity: 0; top: 50%; left: 60%; } /* Disparait à l'impact putt */
          100% { opacity: 0; top: 80%; left: 20%; }
        }
        @keyframes pc-chip-height-2 {
          0%, 56% { transform: scale(1); } 60% { transform: scale(1.5); } 65% { transform: scale(1); } 100% { transform: scale(1); }
        }
        @keyframes pc-chip-shadow-2 {
          0%, 56% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 60% { opacity: 0.3; transform: translate(-60%, 25px) scale(0.6); } 65% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%); }
        }

        /* Putt 2 (75% à 90%) */
        @keyframes pc-swing-putt-2 {
          0%, 73% { opacity: 0; transform: translate(-150%, -50%); }
          75% { opacity: 1; transform: translate(-150%, -50%); }
          76.5% { transform: translate(-350%, -50%); }
          78% { transform: translate(-50%, -50%); } /* Impact à 78% */
          79.5% { opacity: 1; transform: translate(100%, -50%); }
          82% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-putt-move-2 {
          0% { opacity: 0; left: 60%; }
          77.9% { opacity: 0; left: 60%; }
          78% { opacity: 1; left: 60%; } /* Apparition synchronisée */
          90% { left: 85%; opacity: 1; }
          91% { opacity: 0; left: 85%; }
          100% { opacity: 0; left: 60%; }
        }

      `}</style>

      <div className="pc-container">
        {/* Fond Organique */}
        <svg className="pc-green-shape" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.1"/>
            </filter>
          </defs>
          <path 
            className="pc-green-path" 
            d="M 30,0 C 40,20 20,40 35,60 C 45,80 30,100 30,100 L 100,100 L 100,0 Z" 
            filter="url(#shadow)"
          />
        </svg>

        <div className="pc-label pc-label-fringe">Bord du green</div>
        <div className="pc-label pc-label-green">Green</div>

        <div className="pc-score-card">
            <span className="pc-score-text">Score</span>
            <div className="pc-score-check"></div>
        </div>

        <div className="pc-hole">
            <div className="pc-pin"></div>
        </div>

        {/* SEQUENCE 1 */}
        <div className="pc-ball-wrapper pc-chip-1">
            <div className="pc-shadow pc-chip-shadow-1"></div>
            <div className="pc-ball pc-chip-ball-1"></div>
        </div>
        <div className="pc-club head-wedge pc-club-chip-1">
            <span className="pc-wedge-text">SW</span>
            <div className="stem stem-wedge"></div>
        </div>

        <div className="pc-ball-wrapper pc-putt-1">
            <div className="pc-shadow"></div>
            <div className="pc-ball"></div>
        </div>
        <div className="pc-club head-putter pc-club-putt-1">
            <div className="stem stem-putter"></div>
        </div>

        {/* SEQUENCE 2 */}
        <div className="pc-ball-wrapper pc-chip-2">
            <div className="pc-shadow pc-chip-shadow-2"></div>
            <div className="pc-ball pc-chip-ball-2"></div>
        </div>
        <div className="pc-club head-wedge pc-club-chip-2">
            <span className="pc-wedge-text">SW</span>
            <div className="stem stem-wedge"></div>
        </div>

        <div className="pc-ball-wrapper pc-putt-2">
            <div className="pc-shadow"></div>
            <div className="pc-ball"></div>
        </div>
        <div className="pc-club head-putter pc-club-putt-2">
            <div className="stem stem-putter"></div>
        </div>

      </div>
    </div>
  );
};


// --- BRANDING CONFIGURATION ---
const THEME = {
  primary: 'emerald',
  neutral: 'slate',
  accent: 'orange',
};

// --- DATA: DRILL METADATA ---
const DRILL_POOL = [
  // PUTTING
  { id: 'putt-shaft', category: 'Putting', duration: 10, icon: Activity, reps: "20", audioFile: 'putt-shaft.mp3', place: 'green' },
  { id: 'putt-alt', category: 'Putting', duration: 10, icon: Activity, reps: "20", audioFile: 'putt-alt.mp3', place: 'green' },
  { id: 'putt-tiger', category: 'Putting', duration: 10, icon: Activity, audioFile: 'putt-tiger.mp3', place: 'green' },
  { id: 'putt-snail', category: 'Putting', duration: 10, icon: Activity, balls: "10", audioFile: 'putt-snail.mp3', place: 'green' },
  { id: 'putt-10m', category: 'Putting', duration: 5, icon: Activity, balls: "3", audioFile: 'putt-10m.mp3', place: 'green' },
  
  // APPROCHE
  { id: 'chip-edge', category: 'Chip', duration: 10, icon: Flag, reps: "20", audioFile: 'chip-edge.mp3', place: 'green' },
  { id: 'chip-score', category: 'Chip', duration: 20, icon: Flag, sets: "4", audioFile: 'chip-score.mp3', place: 'green' },
  { id: 'chip-wedge', category: 'Chip', duration: 10, icon: Flag, audioFile: 'chip-weedg.mp3', place: 'range' },
  { id: 'chip-mat', category: 'Chip', duration: 5, icon: Flag, balls: "10", audioFile: 'chip-mat.mp3', place: 'range' },
  { id: 'chip-target', category: 'Chip', duration: 20, icon: Flag, reps:"10", sets: "3", audioFile: 'chip-target.mp3', place: 'green' },
  { id: 'bunker-full', category: 'Bunker', duration: 15, icon: Flag, reps: "20", audioFile: 'bunker-full.mp3', place: 'bunker' },
  { id: 'bunker-egg', category: 'Bunker', duration: 5, icon: Flag, balls: "10", audioFile: 'bunker-egg.mp3', place: 'bunker' },

  // FERS
  { id: 'iron-tech', category: 'Irons', duration: 20, icon: Crosshair, audioFile: 'iron-tech.mp3', place: 'range' },
  { id: 'iron-target', category: 'Irons', duration: 20, icon: Crosshair, reps: "5 balles/cible", audioFile: 'iron-target.mp3', place: 'range' },
  { id: 'iron-grip', category: 'Irons', duration: 5, icon: Crosshair, balls: "10", audioFile: 'iron-grip.mp3', place: 'range' },
  { id: 'iron-tempo', category: 'Irons', duration: 10, icon: Crosshair, balls: "20", audioFile: 'iron-tempo.mp3', place: 'range' },

  // HYBRIDE / BOIS / DRIVER
  { id: 'hyb-routine', category: 'Woods', duration: 5, icon: Target, balls: "10", audioFile: 'hyb-routine.mp3', place: 'range' }, 
  { id: 'drv-safe-att', category: 'Driver', duration: 10, icon: ArrowUpCircle, balls: "10", audioFile: 'drv-safe-att.mp3', place: 'range' }, 
  { id: 'wood-speed', category: 'Woods', duration: 3, icon: Target, balls: "5", audioFile: 'wood-speed.mp3', place: 'range' }, 

  // ECHAUFFEMENT
  { id: 'warm-wrist', category: 'Warmup', duration: 1, icon: User, audioFile: 'warm-wrist.mp3', place:'everywhere' },
  { id: 'warm-lunge-rot', category: 'Warmup', duration: 2, icon: User, audioFile: 'warm-lunge-rot.mp3', place:'everywhere' },
  { id: 'warm-open', category: 'Warmup', duration: 2, icon: User, audioFile: 'warm-open.mp3', place:'everywhere' },
  { id: 'warm-heli', category: 'Warmup', duration: 1, icon: User, audioFile: 'warm-heli.mp3', place:'everywhere' },
  { id: 'warm-band-sh', category: 'Warmup', duration: 3, icon: User, reps: "10", sets:"2", audioFile: 'warm-band-sh.mp3', place:'everywhere' },
  { id: 'warm-takeaway', category: 'Warmup', duration: 3, icon: User, reps: "15", sets:"2", audioFile: 'warm-takeaway.mp3', place:'everywhere' },
  { id: 'warm-backswing', category: 'Warmup', duration: 3, icon: User, reps: "15", sets:"2", audioFile: 'warm-backswing.mp3', place:'everywhere' },
  { id: 'warm-downswing', category: 'Warmup', duration: 3, icon: User, reps: "15", sets:"2", audioFile: 'warm-downswing.mp3', place:'everywhere' },
  { id: 'warm-impact', category: 'Warmup', duration: 3, icon: User, reps: "10", sets:"3", audioFile: 'warm-impact.mp3', place:'everywhere' },
  { id: 'warm-head', category: 'Warmup', duration: 2, icon: User, reps: "5", audioFile: 'warm-head.mp3', place:'everywhere' },
  { id: 'warm-shoulder', category: 'Warmup', duration: 2, icon: User, reps: "5", audioFile: 'warm-shoulder.mp3', place:'everywhere' },
  { id: 'warm-side', category: 'Warmup', duration: 2, icon: User, reps: "5", isSidesExercise:true, audioFile: 'warm-side.mp3', place:'everywhere' },
  { id: 'warm-torso', category: 'Warmup', duration: 2, icon: User, reps: "5", isSidesExercise:true, audioFile: 'warm-torso.mp3', place:'everywhere' },
  { id: 'warm-pelvis', category: 'Warmup', duration: 2, icon: User, reps: "5", audioFile: 'warm-pelvis.mp3', place:'everywhere' },
  { id: 'warm-ankle', category: 'Warmup', duration: 2, icon: User, reps: "5", audioFile: 'warm-ankle.mp3', place:'everywhere' },
  { id: 'warm-jacks', category: 'Warmup', duration: 2, icon: User, reps: "10", audioFile: 'warm-jacks.mp3', place:'everywhere' },
  { id: 'warm-climber', category: 'Warmup', duration: 2, icon: User, reps: "10", audioFile: 'warm-climber.mp3', place:'everywhere' },
  { id: 'warm-lunge-open', category: 'Warmup', duration: 2, icon: User, reps: "5", isSidesExercise:true, audioFile: 'warm-lunge-open.mp3', place:'everywhere' },

  // MUSCULATION
  { id: 'body-tree', category: 'Body', intended: 'balance', duration: 3, icon: Dumbbell, audioFile: 'body-tree.mp3', place:'everywhere' },
  { id: 'body-sl-dead', category: 'Body',intended: 'balance', duration: 5, icon: Dumbbell, reps: "10", sets:"3",isSidesExercise:true, audioFile: 'body-sl-dead.mp3', place:'everywhere' },
  { id: 'body-skater', category: 'Body',intended: 'balance', duration: 5, icon: Dumbbell, reps: "20", sets:"4", audioFile: 'body-skater.mp3', place:'everywhere' },
  { id: 'body-bird-dog', category: 'Body',intended: 'balance', duration: 5, icon: Dumbbell, reps: "10", sets:"4",isSidesExercise:true, audioFile: 'body-bird-dog.mp3', place:'everywhere' },
  { id: 'body-balance', category: 'Body', intended: 'balance',duration: 3, icon: Dumbbell, reps: "10", sets:"3", audioFile: 'body-balance.mp3', place:'everywhere' },
  { id: 'body-boat', category: 'Body',intended: 'balance', duration: 5, icon: Dumbbell, reps: "10", sets:"4", audioFile: 'body-boat.mp3', place:'everywhere' },
  { id: 'body-plank', category: 'Body',intended: 'balance', duration: 4, icon: Dumbbell, reps: "5", sets:"4", audioFile: 'body-plank.mp3', place:'everywhere' },
  { id: 'body-swiss-knee', category: 'Body',intended: 'balance', duration: 5, icon: Dumbbell, audioFile: 'body-swiss-knee.mp3', place:'everywhere' },
  { id: 'body-squat-burp', category: 'Body', intended: 'power',duration: 8, icon: Dumbbell, reps: "8", sets:"5", audioFile: 'body-squat-burp.mp3', place:'everywhere' },
  { id: 'body-kettle', category: 'Body',intended: 'power', duration: 5, icon: Dumbbell, reps: "15", sets:"4", audioFile: 'body-kettle.mp3', place:'everywhere' },
  { id: 'body-push-iso', category: 'Body', intended: 'power',duration: 6, icon: Dumbbell, reps: "10", sets:"4", audioFile: 'body-push-iso.mp3', place:'everywhere' },
  { id: 'body-lunge-lat', category: 'Body',intended: 'power', duration: 5, icon: Dumbbell, reps: "10", sets:"4",isSidesExercise:true, audioFile: 'body-lunge-lat.mp3', place:'everywhere' },
  { id: 'body-plank-jack', category: 'Body',intended: 'power', duration: 5, icon: Dumbbell, reps: "20", sets:"4", audioFile: 'body-plank-jack.mp3', place:'everywhere' },
  { id: 'body-superman', category: 'Body',intended: 'power', duration: 5, icon: Dumbbell, reps: "15", sets:"4", audioFile: 'body-superman.mp3', place:'everywhere' },
  { id: 'body-chair-jump', category: 'Body', intended: 'explosiveness',duration: 5, icon: Dumbbell, reps: "8", sets:"5", audioFile: 'body-chair-jump.mp3', place:'everywhere' },
  { id: 'body-lunge-stat', category: 'Body', intended: 'explosiveness',duration: 5, icon: Dumbbell, reps: "8", sets:"5",isSidesExercise:true, audioFile: 'body-lunge-stat.mp3', place:'everywhere' },
  { id: 'body-swing-el', category: 'Body', intended: 'explosiveness',duration: 5, icon: Dumbbell, reps: "8", sets:"5", isSidesExercise:true, audioFile: 'body-swing-el.mp3', place:'everywhere' },
  { id: 'body-push-var', category: 'Body', intended: 'explosiveness',duration: 6, icon: Dumbbell, reps: "8", sets:"5", audioFile: 'body-push-var.mp3', place:'everywhere' },
  { id: 'body-swiss-rot', category: 'Body',intended: 'explosiveness', duration: 5, icon: Dumbbell, reps: "8", sets:"5", audioFile: 'body-swiss-rot.mp3', place:'everywhere' },
  { id: 'body-push-exp', category: 'Body',intended: 'explosiveness', duration: 5, icon: Dumbbell, reps: "8", sets:"5", audioFile: 'body-push-exp.mp3', place:'everywhere' },
];

// --- UTILITY: Generate Daily Session ---
const generateDailySession = () => {
  const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());
  
  // Helper: Calculate "Volume" (balls or shots) for a drill
  const getDrillVolume = (drill) => {
    const base = parseInt(drill.balls || drill.reps || 0, 10);
    const sets = parseInt(drill.sets || 1, 10);
    const vol = base * sets;
    if (vol === 0) {
      if (drill.id === 'iron-tech') return 15; 
      if (drill.id === 'drv-safe-att') return 10;
      return drill.duration * 2; 
    }
    return vol;
  };

  const session = [];
  let currentDuration = 0;

  // PHASE 1: WARMUP
  const warmupPool = shuffle(DRILL_POOL.filter(d => d.category === 'Warmup'));
  let warmDuration = 0;
  for (const drill of warmupPool) {
    if (warmDuration < 10) {
      session.push(drill);
      warmDuration += drill.duration;
      currentDuration += drill.duration;
    }
  }

  // PHASE 2: SHORT GAME (Green/Bunker) - Target >= 100 shots
  // We prioritize Green/Bunker drills here. Range chipping is excluded to keep location consistent.
  const shortGameEligible = DRILL_POOL.filter(d => d.place === 'bunker' || d.place === 'green');
  
  const bunkers = shuffle(shortGameEligible.filter(d => d.place === 'bunker'));
  const puttings = shuffle(shortGameEligible.filter(d => d.category === 'Putting'));
  const chippings = shuffle(shortGameEligible.filter(d => d.category === 'Chip' && d.place !== 'bunker'));

  let finalBunker = [];
  let finalChipping = [];
  let finalPutting = [];
  let shortGameShots = 0;

  // 2.1 Mandatory: At least one of each
  if (bunkers.length > 0) { finalBunker.push(bunkers[0]); shortGameShots += getDrillVolume(bunkers[0]); currentDuration += bunkers[0].duration; }
  if (chippings.length > 0) { finalChipping.push(chippings[0]); shortGameShots += getDrillVolume(chippings[0]); currentDuration += chippings[0].duration; }
  if (puttings.length > 0) { finalPutting.push(puttings[0]); shortGameShots += getDrillVolume(puttings[0]); currentDuration += puttings[0].duration; }

  // 2.2 Fill Volume to ~100 shots
  const remainingShortGame = shuffle(shortGameEligible.filter(d => 
    d.id !== (bunkers[0]?.id) && 
    d.id !== (chippings[0]?.id) && 
    d.id !== (puttings[0]?.id)
  ));

  for (const drill of remainingShortGame) {
    if (shortGameShots < 100) {
       if (drill.place === 'bunker') finalBunker.push(drill);
       else if (drill.category === 'Putting') finalPutting.push(drill);
       else finalChipping.push(drill);
       
       shortGameShots += getDrillVolume(drill);
       currentDuration += drill.duration;
    }
  }

  // Push ordered Short Game block (Putting -> Chip -> Bunker or vice versa? User said Putting > Chip > Irons)
  // Order based on prompt: Putting -> Chip (includes Bunker/Green)
  session.push(...finalPutting, ...finalChipping, ...finalBunker);

  // PHASE 3: RANGE BUCKET (Irons + Driver + Woods) - Target ~34 Balls
  const ironDrills = shuffle(DRILL_POOL.filter(d => d.category === 'Irons' && d.place === 'range'));
  const driverDrills = shuffle(DRILL_POOL.filter(d => d.category === 'Driver' && d.place === 'range'));
  const woodDrills = shuffle(DRILL_POOL.filter(d => d.category === 'Woods' && d.place === 'range'));
  
  let selectedIrons = [];
  let selectedDriver = [];
  let selectedWoods = [];
  let rangeBalls = 0;
  const MAX_RANGE_BALLS = 45; 

  // 3.1 Mandatory: Driver & Wood
  if (driverDrills.length > 0) { selectedDriver.push(driverDrills[0]); rangeBalls += getDrillVolume(driverDrills[0]); currentDuration += driverDrills[0].duration; }
  if (woodDrills.length > 0) { selectedWoods.push(woodDrills[0]); rangeBalls += getDrillVolume(woodDrills[0]); currentDuration += woodDrills[0].duration; }

  // 3.2 Fill bucket with Irons
  for (const drill of ironDrills) {
    const vol = getDrillVolume(drill);
    if (rangeBalls < 34 || (rangeBalls + vol <= MAX_RANGE_BALLS)) {
      selectedIrons.push(drill);
      rangeBalls += vol;
      currentDuration += drill.duration;
    }
  }

  // Push ordered Range block: Irons -> Driver -> Woods
  session.push(...selectedIrons, ...selectedDriver, ...selectedWoods);

  // PHASE 4: BODY/FITNESS
  const bodyDrills = DRILL_POOL.filter(d => d.category === 'Body');
  const balanceDrills = shuffle(bodyDrills.filter(d => d.intended === 'balance'));
  const powerDrills = shuffle(bodyDrills.filter(d => d.intended === 'power'));
  const explosiveDrills = shuffle(bodyDrills.filter(d => d.intended === 'explosiveness'));

  let selectedBody = [];
  
  if (balanceDrills.length > 0) selectedBody.push(balanceDrills[0]);
  if (powerDrills.length > 0) selectedBody.push(powerDrills[0]);
  if (explosiveDrills.length > 0) selectedBody.push(explosiveDrills[0]);

  selectedBody.forEach(d => currentDuration += d.duration);

  const selectedIds = new Set(selectedBody.map(d => d.id));
  const remainingBodyPool = shuffle(bodyDrills.filter(d => !selectedIds.has(d.id)));

  for (const drill of remainingBodyPool) {
    if (currentDuration < 60) {
      selectedBody.push(drill);
      currentDuration += drill.duration;
    } else {
      break;
    }
  }
  
  session.push(...selectedBody);

  return session.map((s, i) => ({ 
    ...s, 
    id: `session-step-${i}`,
    drillId: s.id,
    audioSrc: s.audioFile ? (s.audioFile.startsWith('http') ? s.audioFile : `/audio/${s.audioFile}`) : `/audio/${s.id}.mp3`
  }));
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
      reps: "Répétitions",
      skip_intro: "PASSER L'INTRO",
      balls_unit: "balles",
      rounds_unit: "tours",
      reps_unit: "répétitions",
      shots_unit: "coups",
      per_side: "/ côté"
    },
    categories: {
      'Putting': {category: 'Putting'},
      'Chip': {category: 'Approche'},
      'Irons': {category: 'Fers'},
      'Woods': {category: 'Bois & Hybrides'},
      'Driver': {category: 'Driver'},
      'Warmup': {category: 'Échauffement'},
      'Body': {category: 'Physique'},
      'Bunker': {category: 'Bunker'}
    },
    drillData: {
      'putt-shaft': { title: "20 Putts le long du shaft", description: "Travail de la capacité à putter droit le long d'un guide visuel.", steps: ["Placez un club (shaft) au sol pointant vers la cible.", "Placez votre balle juste à côté du shaft.", "Puttez en suivant la ligne du shaft sans le toucher."], needs:["Putter", "1 Club (comme guide)"] },
      'putt-alt': { title: "20 Putts vers une cible alternée", description: "Alternance de putts courts et longs pour travailler le dosage.", steps: ["Choisissez deux cibles (trous) : une proche, une éloignée.", "Exécutez un putt court.", "Exécutez immédiatement un putt long.", "Répétez l'alternance."], needs:["Putter"] },
      'putt-tiger': { title: "Exercice Tiger", description: "Calage de la sortie de balle et contrôle de la face de club à l'impact.", steps: ["Plantez deux tees au sol espacés à peine plus large que la tête de votre putter.", "Placez la balle au milieu.", "Puttez en passant la tête du club entre les tees sans les toucher."], needs:["Putter", "2 Tees"] },
      'putt-snail': { title: "L'Escargot", description: "Enchaînement de putts à distances croissantes autour du trou.", steps: ["Disposez 10 balles en spirale autour du trou.", "La première balle est à 1 mètre.", "La dernière balle est à 3 mètres.", "Jouez chaque balle avec une routine complète."], needs:["Putter"] },
      'putt-10m': { title: "Putt à 10 mètres", description: "Enchaînement de putts longs avec objectif de lag putting (zone d'un mètre).", steps: ["Placez-vous à environ 10 mètres du trou.", "Jouez 3 balles consécutives.", "Recommencez tant que les 3 balles ne finissent pas dans un rayon d'1 mètre autour du trou."], needs:["Putter"] },
      'chip-edge': { title: "20 Coups du bord du green", description: "Alternance putt et approche vers le même drapeau avec le même mouvement.", steps: ["Placez-vous en bordure de green.", "Jouez un putt vers le drapeau.", "Jouez une approche vers le même drapeau avec un club différent.", "Conservez la même intention de mouvement pour les deux clubs."], needs:["Sand Wedge","Pitching Wedge","Fer 9", "Putter"] },
      'chip-score': { title: "5 Situations d'Approche-Putt", description: "Simulation de compétition en jouant le trou jusqu'au bout.", steps: ["Définissez 5 points de départ différents autour du green.", "Jouez l'approche.", "Finissez le trou au putting (hole out).", "Faites 4 fois ce circuit et comparez vos scores."], needs:["Sand Wedge","Pitching Wedge", "Fer 9", "Putter"] },
      'chip-wedge': { title: "Wedging : Plein Swing & Demi Swing", description: "Variation des distances et des amplitudes avec différents wedges.", steps: ["Utilisez vos différents Sand Wedges et Pitching Wedge.", "Alternez des pleins swings et des demi-swings.", "Vérifiez vos distances (si possible à la jumelle/radar)."], needs:["Sand Wedge","Pitching Wedge"] },
      'chip-mat': { title: "Chipping sur tapis", description: "Révision de la mécanique pure de contact sur tapis.", steps: ["Sur un tapis de practice.", "Tapez 10 balles en chip.", "Focalisez-vous uniquement sur la propreté du contact et la mécanique."], needs:["Sand Wedge","Pitching Wedge", "Fer 9"] },
      'chip-target': { title: "Chipping autour du green", description: "Approches variées avec exigence de précision.", steps: ["Lancez aléatoirement 10 balles autour du green.", "Jouez chaque balle avec une exigence de précision : finir dans un rayon de 1m50.", "Comptez le nombre de réussites.", "Recommencez la série 3 fois."], needs:["Sand Wedge", "Pitching Wedge", "Fer 9"] },
      'bunker-full': { title: "20 Sorties de Bunker", description: "Enchaînement de sorties de bunker avec engagement total.", steps: ["Placez-vous dans un bunker de green.", "Exécutez 20 sorties en 'Full Swing' (swing complet).", "L'objectif est de générer de la vitesse et de sortir la balle avec assurance."], needs:["Wedge préféré"] },
      'bunker-egg': { title: "Bunker : Œuf sur le plat", description: "Entraînement spécifique pour les lies difficiles (balle enfoncée).", steps: ["Dans le bunker, enfoncez volontairement la balle.", "Tapez 10 balles dans cette configuration.", "Forcez l'angle d'attaque vertical."], needs:["Wedge préféré"] },
      'iron-tech': { title: "Fers Moyens : 5 Techniques / 2 Normales", description: "Alternance travail technique et jeu instinctif.", steps: ["Prenez un fer 7 ou 8.", "Tapez 5 balles en appliquant un exercice technique spécifique vue avec votre pro.", "Tapez 2 balles 'normalement', sans penser à la technique, juste la cible.", "Répétez pendant 20 minutes."], needs:["Fer 7", "Fer 8"] },
      'iron-target': { title: "Passage sur la cible", description: "Simulation de situations de parcours avec changement de club et routine.", steps: ["Par groupe de 5 balles, changez de club et de cible à chaque coup.", "Alternez : un coup long (Hybride/Bois/Fer long) puis un coup court (Fer court).", "Effectuez une routine complète (visualisation, coups d'essai) avant chaque frappe."], needs:["Hybride", "Bois", "Fer long", "Fer court"] },
      'iron-grip': { title: "Grip & Posture", description: "Échauffement spécifique focalisé sur les fondamentaux statiques.", steps: ["Prenez un petit club (Sand wedge, PW, Fer 9).", "Vérifiez méticuleusement votre grip et votre posture avant chaque coup.", "Tapez 10 balles tranquillement."], needs:["Sand wedge", "Pitching Wedge", "Fer 9"] },
      'iron-tempo': { title: "Élan & Lancé", description: "Travail du rythme et du relâchement.", steps: ["Prenez un club moyen (Fer 6, 7).", "Concentrez-vous sur la sensation d'élan au backswing et de lancé au finish.", "Tapez 20 balles."], needs:["Fer 6", "Fer 7"] },
      'hyb-routine': { title: "Première routine à l'Hybride", description: "Intégration de la routine de pré-coup avec un club hybride.", steps: ["Prenez votre Hybride.", "Définissez une cible différente pour chaque balle.", "Appliquez votre routine complète.", "Tapez 10 balles."], needs:["Hybride"] },
      'drv-safe-att': { title: "Driving : Drive Safe vs Drive Attack", description: "Alternance entre mise en jeu sécurisée et drive de puissance.", steps: ["Définissez un couloir (fairway virtuel) sur le practice.", "Tapez un 'Drive Safe' (coup de sécurité, en contrôle pour toucher le fairway).", "Tapez un 'Drive Attack' (coup agressif, vitesse maximale).", "Alternez les deux types de coups."], needs:["Driver"] },
      'wood-speed': { title: "Plaisir & Création de Vitesse", description: "Recherche de vitesse pure et de sensations agréables en fin de séance.", steps: ["Prenez un Bois de parcours ou Driver.", "Tapez 5 balles avec pour seul objectif la vitesse et le plaisir de la frappe.", "Lâchez les chevaux."], needs:["Bois", "Driver"] },
      'warm-wrist': { title: "Moulins à vent de poignets", description: "Échauffement articulaire des poignets avec le club.", steps: ["Tenez le club au milieu du manche.", "Bras allongés devant vous.", "Faites des cercles avec la tête de club en utilisant uniquement les poignets.", "Gardez les épaules fixes."], needs:["1 Club"] },
      'warm-lunge-rot': { title: "Mobilité & Rotation", description: "Combinaison de fente et de rotation du buste.", steps: ["Départ pieds joints, club tenu à deux mains devant vous bras tendus.", "Avancez un pied en fente.", "En position basse, tournez le buste et les bras tendus du côté de la jambe avant (côté fermé).", "Revenez et alternez de jambe."], needs:["1 Club"] },
      'warm-open': { title: "Ouverture & Centrage", description: "Étirement dynamique pectoral et rotation thoracique.", steps: ["Prenez votre posture de golf.", "Posez une main sur le haut du club (vertical au sol comme une canne).", "Avec le bras libre, ouvrez la poitrine vers le ciel en levant le bras vers l'arrière et le haut.", "Alternez de main."], needs:["1 Club"] },
      'warm-heli': { title: "L'Hélicoptère", description: "Rotation du buste autour de la colonne vertébrale.", steps: ["Pieds joints.", "Penchez-vous en prenant les angles de votre posture.", "Tendez les bras sur les côtés (en croix).", "Faites tourner la ligne des épaules autour de l'axe de la colonne."], needs:["Sans matériel"] },
      'warm-band-sh': { title: "Mobilisation des épaules", description: "Élévation frontale avec résistance élastique.", steps: ["Passez l'élastique sous les pieds, écart largeur épaules.", "Tenez l'élastique dans chaque main.", "Levez les bras tendus de la ceinture jusqu'à la hauteur des yeux (ou au-dessus de la tête pour la variante).", "Seuls les bras bougent."], needs:["Elastique de sport"] },
      'warm-takeaway': { title: "Takeaway", description: "Activation des abdos obliques pour le début du swing.", steps: ["Élastique sous le pied gauche.", "Prenez votre grip au milieu de l'élastique.", "Simulez le début du backswing (Takeaway) en tirant l'élastique vers la droite.", "Focalisez-vous sur les abdominaux, ne roulez pas les avant-bras."], needs:["Elastique de sport"] },
      'warm-backswing': { title: "La Voile de Force", description: "Travail de l'extension et de la rotation au backswing.", steps: ["Élastique sous le pied gauche, grip à l'extrémité opposée.", "Faites votre Takeaway.", "Continuez en étendant l'élastique au travers de la poitrine jusqu'au dessus de l'épaule droite."], needs:["Elastique de sport"] },
      'warm-downswing': { title: "Moulin avant pour la descente", description: "Simulation de la séquence de descente avec grande amplitude.", steps: ["Élastique tenu entre les pouces, bras écartés.", "Tendez l'élastique devant la poitrine.", "Faites de grandes rotations : Backswing -> Finish.", "Laissez le talon droit se lever au finish."], needs:["Elastique de sport"] },
      'warm-impact': { title: "La Traversée", description: "Travail de l'extension des bras après l'impact.", steps: ["Élastique sous le pied droit.", "Grip au milieu.", "Mimez la traversée (après impact) en tirant vers la gauche et le bas.", "Déverrouillez le talon droit."], needs:["Elastique de sport"] },
      'warm-head': { title: "Rotation & Flexion de la tête", description: "Échauffement des cervicales.", steps: ["Tournez la tête à droite puis à gauche.", "Inclinez la tête en avant (menton poitrine) puis en arrière.", "Doucement, sans forcer."], needs:["Sans matériel"] },
      'warm-shoulder': { title: "Rotation des épaules", description: "Échauffement articulaire des épaules.", steps: ["Mains sur les épaules (coudes pliés).", "Faites des cercles avec les coudes vers l'avant.", "Faites des cercles vers l'arrière."], needs:["Sans matériel"] },
      'warm-side': { title: "Inclinaison latérale du buste", description: "Étirement des flancs.", steps: ["Debout, bras le long du corps.", "Laissez glisser la main droite le long de la jambe droite vers le genou.", "Revenez et faites pareil à gauche."], needs:["Sans matériel"] },
      'warm-torso': { title: "Rotation du buste", description: "Mobilisation thoracique en posture.", steps: ["Mains croisées sur la poitrine.", "Debout : tournez à droite et à gauche.", "Penché (posture golf) : tournez à droite et à gauche."], needs:["Sans matériel"] },
      'warm-pelvis': { title: "Antéversion & Rétroversion du bassin", description: "Déverrouillage des lombaires et du bassin.", steps: ["Mains sur les hanches.", "Cambrez le dos (antéversion).", "Arrondissez le bas du dos en rentrant les fesses (rétroversion)."], needs:["Sans matériel"] },
      'warm-ankle': { title: "Flexion-Extension des chevilles", description: "Échauffement des chevilles.", steps: ["Montez sur la pointe des pieds.", "Redescendez sur les talons en levant les orteils."], needs:["Sans matériel"] },
      'warm-jacks': { title: "Jumping Jacks avec touche main opposée", description: "Cardio et coordination.", steps: ["Sautez en écartant les pieds.", "En même temps, levez les bras.", "En resserrant, venez toucher le genou ou pied opposé avec la main (croisement)."], needs:["Sans matériel"] },
      'warm-climber': { title: "Mountain Climbers", description: "Cardio et abdos.", steps: ["Position de pompe (planche haute).", "Ramenez alternativement et rapidement les genoux vers la poitrine."], needs:["Sans matériel"] },
      'warm-lunge-open': { title: "Fente avec ouverture bras opposé", description: "Étirement dynamique complet.", steps: ["Faites une fente avant.", "Levez le bras opposé à la jambe avant vers le ciel.", "Inclinez légèrement le buste latéralement pour étirer toute la chaîne."], needs:["Sans matériel"] },
      'body-tree': { title: "L'Arbre les yeux fermés", description: "Test et travail de proprioception statique.", steps: ["Debout sur une jambe.", "Placez la plante de l'autre pied contre l'intérieur de la cuisse ou du genou (position yoga).", "Tendez les bras sur les côtés.", "Fermez les yeux et tenez l'équilibre."], needs:["Sans matériel"] },
      'body-sl-dead': { title: "Équilibre sur une jambe avec poids", description: "Travail de stabilité dynamique sur une jambe avec charge.", steps: ["En équilibre sur une jambe.", "Tenez un kettlebell ou un poids à une main.", "Penchez le buste en avant en tendant la jambe libre vers l'arrière.", "Remontez en position droite."], needs:["Kettlebell ou Poids"] },
      'body-skater': { title: "Roller-Jumps", description: "Sauts latéraux pour la stabilité dynamique et la puissance latérale.", steps: ["Sautez latéralement d'un pied sur l'autre.", "Amortissez la réception en fléchissant le genou.", "Croisez la jambe libre derrière la jambe d'appui.", "Enchaînez dynamiquement."], needs:["Sans matériel"] },
      'body-bird-dog': { title: "Gainage dynamique", description: "Renforcement de la chaîne croisée et du dos.", steps: ["À quatre pattes.", "Tendez simultanément le bras droit devant et la jambe gauche derrière.", "Maintenez l'horizontalité du dos.", "Revenez et changez de diagonale (bras gauche / jambe droite)."], needs:["Sans matériel"] },
      'body-balance': { title: "Simulation Posture à l'adresse", description: "Travail de l'ancrage et de l'équilibre antéro-postérieur.", steps: ["Prenez votre posture de golf sans club, bras pendants.", "Basculez le poids du corps vers les pointes de pieds.", "Basculez le poids vers les talons (en levant les pointes).", "Cherchez le point d'équilibre central."], needs:["Sans matériel"] },
      'body-boat': { title: "Rameur Iso", description: "Gainage abdominal statique ou dynamique.", steps: ["Assis au sol.", "Relevez les jambes fléchies et penchez le buste en arrière pour trouver l'équilibre sur les fesses.", "Tenez un poids dans les mains.", "Tendez les jambes et le buste (ouverture) puis regroupez-vous (fermeture) sans toucher le sol."], needs:["Poids"] },
      'body-plank': { title: "Planche 5 secondes", description: "Gainage dynamique alternant position haute et basse.", steps: ["Position de planche sur les coudes. Tenez 5 secondes.", "Montez en position de planche sur les mains (bras tendus). Tenez 5 secondes.", "Redescendez sur les coudes."], needs:["Sans matériel"] },
      'body-swiss-knee': { title: "Équilibre à genoux", description: "Travail ultime de proprioception et gainage profond.", steps: ["Placez une Swissball.", "Montez à genoux dessus.", "Trouvez l'équilibre sans toucher le sol.", "Redressez le buste et écartez les bras."], needs:["Swiss Ball"] },
      'body-squat-burp': { title: "4 Squats & 1 Burpee", description: "Combo cardio et force pour le bas du corps.", steps: ["Faites 4 squats dynamiques.", "Enchaînez immédiatement avec 1 Burpee (flexion, planche, pompe, saut).", "Répétez."], needs:["Sans matériel"] },
      'body-kettle': { title: "Russian Swing", description: "Développement de la puissance d'extension de hanche.", steps: ["Debout, pieds écartés, poids tenu à deux mains entre les jambes.", "Fléchissez légèrement et envoyez les hanches en arrière.", "Contractez violemment les fessiers pour projeter le poids vers l'avant (hauteur d'épaules) bras tendus."], needs:["Poids"] },
      'body-push-iso': { title: "2 Push-ups & 1 Maintien à 1 bras", description: "Force du haut du corps et anti-rotation.", steps: ["Faites 2 pompes classiques.", "En remontant la 2ème, levez une main pour toucher l'épaule opposée ou le flanc.", "Tenez l'équilibre sur 1 bras brièvement.", "Repartez pour 2 pompes et changez de bras."], needs:["Sans matériel"] },
      'body-lunge-lat': { title: "Fentes latérales avec poids bras tendus", description: "Force latérale et stabilité du Core.", steps: ["Debout, tenez un poids à deux mains, bras tendus devant vous.", "Faites une fente latérale (grand pas sur le côté).", "Gardez les bras tendus devant vous (résistance à l'inertie).", "Poussez fort pour revenir au centre."], needs:["Poids"] },
      'body-plank-jack': { title: "Gainage avec ouverture-fermeture des pieds", description: "Gainage dynamique cardio.", steps: ["Position de planche sur les coudes.", "Sautez pour écarter les pieds.", "Sautez pour resserrer les pieds.", "Gardez le bassin stable."], needs:["Sans matériel"] },
      'body-superman': { title: "Superman Dynamique", description: "Renforcement des lombaires et chaîne postérieure.", steps: ["Allongé sur le ventre.", "Bras tendus devant (ou sur les côtés).", "Relevez simultanément le buste et les jambes.", "Redescendez sans toucher totalement le sol et repartez."], needs:["Sans matériel"] },
      'body-chair-jump': { title: "Chaise + Jump", description: "Explosivité des jambes (pliométrie).", steps: ["Mettez-vous en position de chaise (cuisses parallèles au sol) sans mur.", "Tenez 3 secondes immobile.", "Explosez en saut vertical le plus haut possible.", "Amortissez et revenez en chaise."], needs:["Sans matériel"] },
      'body-lunge-stat': { title: "Fentes statiques", description: "Travail de force et stabilité en position fente.", steps: ["En position de fente (un genou proche du sol).", "Tenez un poids contre la poitrine ou bras ballants.", "Effectuez de petits mouvements de rebond ou de montée-descente sur place.", "Changez de jambe."], needs:["Sans matériel"] },
      'body-swing-el': { title: "Montée du swing à vide", description: "Travail de la vitesse de rotation au backswing.", steps: ["Élastique sous le pied avant.", "Tenez l'élastique comme un club.", "Montez au backswing avec explosivité contre la résistance."], needs:["Elastique de sport"] },
      'body-push-var': { title: "Demi-pompes et Full-pompes alternées", description: "Variation d'amplitude et de prise pour les pectoraux/triceps.", steps: ["En position pompe.", "Faites une demi-pompe (faible amplitude) prise large.", "Faites une pompe complète (poitrine au sol) prise serrée (ou alternée)."], needs:["Sans matériel"] },
      'body-swiss-rot': { title: "Bas du tronc dynamique", description: "Rotation du bassin avec charge instable.", steps: ["Assis au sol.", "Tenez un Swiss Ball à bout de bras.", "Effectuez des rotations du buste de gauche à droite en touchant la balle au sol de chaque côté."], needs:["Swiss Ball"] },
      'body-push-exp': { title: "Haut du tronc dynamique", description: "Travail de la puissance de poussée (explosivité haut du corps).", steps: ["Debout face à un mur, à environ 1m.", "Laissez-vous tomber vers le mur et amortissez avec les mains (comme une pompe).", "Poussez violemment pour vous repousser en position debout initiale."], needs:["Sans matériel"] },
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
      reps: "Reps",
      skip_intro: "SKIP INTRO"
    },
    categories: {
      'Putting': {category: 'Putting'},
      'Chip': {category:'Short Game'},
      'Irons': {category:'Irons'},
      'Woods': {category:'Woods & Hybrids'},
      'Driver': {category:'Driver'},
      'Warmup': {category:'Warmup'},
      'Body': {category:'Fitness'},
      'Bunker': {category:'Bunker'}
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

// New distinct start signal sound
const playStartSignal = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  // Resume context if suspended (browser policy fix)
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  // Sawtooth wave for a sharper, more "buzzer/horn" like quality
  osc.type = 'sawtooth'; 
  osc.frequency.setValueAtTime(880, ctx.currentTime); // A5, high pitch
  
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5); // Longer duration (0.5s)

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.5);
};

const playCountdownBeep = (count) => {
  if (count > 0) {
    playTone(600, 'sine', 0.2); 
  } else {
    // Play distinct start signal at 0
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
  if (drillId === 'putt-shaft') {
    // On retourne directement le composant Pro, il gère son propre style/container
    return (
      <div className="w-full flex justify-center mb-6">
        <PuttShaft />
      </div>
    );
  } else if (drillId === 'putt-alt') {
    return (
      <div className="w-full flex justify-center mb-6">
        <PuttAlt />
      </div>
    );
  } else if (drillId === 'putt-tiger') {
    return (
      <div className="w-full flex justify-center mb-6">
        <PuttTiger />
      </div>
    );
  } else if (drillId === 'putt-snail') {
    return (
      <div className="w-full flex justify-center mb-6">
        <PuttSnail />
      </div>
    );
  } else if (drillId === 'putt-10m') {
    return (
      <div className="w-full flex justify-center mb-6">
        <Putt10M />
      </div>
    );
  } else if (drillId === 'chip-edge') {
    return (
      <div className="w-full flex justify-center mb-6">
        <ChipEdge />
      </div>
    );
  } else if (drillId === 'chip-score') {
    return (
      <div className="w-full flex justify-center mb-6">
        <ChipScore />
      </div>
    );
  } else if (drillId === 'chip-wedge') {
    return (
      <div className="w-full flex justify-center mb-6">
        <ChipWedge />
      </div>
    );
  }
  return null;
};

// --- Component: DrillMetrics ---
const DrillMetrics = ({ drill, uiText }) => {
  // Logic to build the badges array based on precedence rules
  const badges = [];

  // 1. Balles (only)
  if (drill.balls && !drill.sets && !drill.reps) {
    badges.push(`${drill.balls} ${uiText.balls_unit}`);
  }
  // 2. Balles + Sets
  else if (drill.balls && drill.sets) {
    badges.push(`${drill.balls} ${uiText.balls_unit} x ${drill.sets} ${uiText.rounds_unit}`);
  }
  // 3. Sets (only)
  else if (drill.sets && !drill.balls && !drill.reps) {
    badges.push(`${drill.sets} ${uiText.rounds_unit}`);
  }
  // 4. Reps + Sets (Sides or Standard)
  else if (drill.reps && drill.sets) {
    if (drill.isSidesExercise) {
      badges.push(`${drill.sets}x${drill.reps} ${uiText.per_side}`);
    } else {
      badges.push(`${drill.sets}x${drill.reps} ${uiText.reps_unit}`);
    }
  }
  // 5. Reps (only)
  else if (drill.reps && !drill.sets) {
    if (drill.isSidesExercise) {
      badges.push(`${drill.reps} ${uiText.per_side}`);
    } else {
      badges.push(`${drill.reps} ${uiText.shots_unit}`); // Using 'shots'/'coups' as requested for pure reps
    }
  }

  // 6. Needs (Accessories)
  // The translation data contains 'needs', which is language specific.
  // The drill object merged in sessionData contains this translated 'needs' array.
  if (drill.needs && drill.needs.length > 0) {
    drill.needs.forEach(need => badges.push(need));
  }

  if (badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {badges.map((text, index) => (
        <div key={index} className={`flex items-center gap-1.5 px-3 py-1.5 bg-${THEME.accent}-50 text-${THEME.accent}-700 rounded-md border border-${THEME.accent}-200 shadow-sm`}>
          {/* Logic to choose icon could be refined, using generic Box or Hash for now */}
          {index === 0 ? <Hash className="w-3.5 h-3.5" /> : <Box className="w-3.5 h-3.5" />}
          <span className="text-xs font-bold uppercase tracking-wide">{text}</span>
        </div>
      ))}
    </div>
  );
};

// --- Sub-Component: Timer ---
const SessionTimer = ({ 
  seconds, 
  setSeconds, 
  defaultDuration, 
  audioMode, 
  onComplete, 
  triggerCountdown, 
  onCountdownComplete,
  uiText
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [localCountdown, setLocalCountdown] = useState(null); 
  
  const onCompleteRef = useRef(onComplete);
  const onCountdownCompleteRef = useRef(onCountdownComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onCountdownCompleteRef.current = onCountdownComplete;
  }, [onComplete, onCountdownComplete]);

  // Logic 2: Trigger countdown from Parent (Audio Sequence)
  useEffect(() => {
    if (triggerCountdown && localCountdown === null && !isRunning) {
      setLocalCountdown(3);
      playCountdownBeep(3);
    }
  }, [triggerCountdown]);

  // Side Effects (Beeps & Completion)
  useEffect(() => {
    if (seconds === 0 && isRunning) {
       setIsRunning(false);
       if (onCompleteRef.current) onCompleteRef.current();
    }
    if (audioMode && isRunning && seconds <= 5 && seconds > 0) {
        playWarningBeep();
    }
  }, [seconds, isRunning, audioMode]);

  // Main Timer Interval
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => {
           if (prev <= 0) return 0; 
           return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, setSeconds]);

  // Resume/Intro Logic with Countdown (Safe Implementation)
  useEffect(() => {
    let timeout = null;
    if (localCountdown !== null) {
      timeout = setTimeout(() => {
        if (localCountdown <= 1) {
           // END OF COUNTDOWN
           setLocalCountdown(null);
           playCountdownBeep(0); // Uses the new Start Signal
           setIsRunning(true); 
           
           // Safe parent update
           if (triggerCountdown && onCountdownCompleteRef.current) {
             onCountdownCompleteRef.current();
           }
        } else {
           // NEXT TICK
           const nextVal = localCountdown - 1;
           playCountdownBeep(nextVal); 
           setLocalCountdown(nextVal);
        }
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [localCountdown, triggerCountdown]);

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      if (seconds === 0) {
        // Manual restart logic
        setSeconds(defaultDuration * 60);
        if (audioMode) {
          playCountdownBeep(3);
          setLocalCountdown(3);
        } else {
          setIsRunning(true);
        }
        return;
      }
      if (audioMode) {
        playCountdownBeep(3);
        setLocalCountdown(3);
      } else {
        setIsRunning(true);
      }
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(defaultDuration * 60);
    
    // Logic 1: Audio Mode Restart -> Trigger Countdown immediately
    if (audioMode) {
      setLocalCountdown(3);
      playCountdownBeep(3);
    } else {
      setLocalCountdown(null);
    }
  };

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Determine text for overlay
  const getCountdownText = () => {
    if (seconds === defaultDuration * 60) return uiText.starting_in;
    return uiText.resuming_in;
  };

  return (
    <div className="relative">
      {localCountdown !== null && (
        <div className={`absolute inset-0 z-10 bg-${THEME.neutral}-900/90 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm transition-all`}>
           <span className={`text-${THEME.primary}-400 font-bold uppercase text-xs tracking-widest mb-1`}>{getCountdownText()}</span>
           <div className={`text-6xl font-black text-white transition-all transform ${localCountdown === 'GO' ? `scale-125 text-${THEME.primary}-500` : 'scale-100'}`}>
             {localCountdown}
           </div>
        </div>
      )}

      <div className={`bg-${THEME.neutral}-800 text-white rounded-xl p-4 flex items-center justify-between shadow-lg mb-6 ring-1 ring-${THEME.neutral}-700`}>
        <div className="flex flex-col">
          <span className={`text-[10px] text-${THEME.primary}-400 font-bold uppercase tracking-wider mb-1`}>{uiText.duration}</span>
          <div className="flex items-center gap-2">
            <Clock className={`w-5 h-5 text-${THEME.neutral}-400`} />
            <span className={`text-3xl font-mono font-bold ${seconds < 60 && isRunning ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {formatTime(seconds)}
            </span>
          </div>
        </div>
        
        {/* Controls. Hidden if audio mode intro is happening (localCountdown active or triggerCountdown active) */}
        {(!audioMode || (seconds > 0 && !triggerCountdown && localCountdown === null)) && (
          <div className="flex gap-2">
            <button onClick={handleReset} className={`h-12 w-12 rounded-lg bg-${THEME.neutral}-700 hover:bg-${THEME.neutral}-600 flex items-center justify-center text-${THEME.neutral}-300 transition-colors`} title="Reset Timer">
              <RotateCcw className="w-5 h-5" />
            </button>
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
  const toggleLang = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  }

  // Calculate dynamic session info
  const totalSteps = sessionData.length;
  const totalDuration = sessionData.reduce((acc, drill) => acc + drill.duration, 0);

  return (
    <div className={`p-6 h-full flex flex-col bg-${THEME.neutral}-50`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className={`inline-block px-3 py-1 bg-${THEME.primary}-100 text-${THEME.primary}-700 rounded-full text-xs font-bold mb-3`}>{uiText.recommended}</div>
          <h1 className={`text-3xl font-black text-${THEME.neutral}-900 leading-tight`}>{uiText.protocol_title}<br/><span className={`text-${THEME.primary}-600`}>{uiText.protocol_subtitle}</span></h1>
          <p className={`text-${THEME.neutral}-500 font-medium mt-2 text-sm`}>
            {totalSteps} {uiText.steps_plural} • ~{totalDuration} {uiText.mins_short}
          </p>
        </div>
        <button 
          onClick={toggleLang}
          className={`p-2 bg-white rounded-full shadow-sm border border-${THEME.neutral}-200 text-${THEME.neutral}-600 hover:text-${THEME.primary}-600 transition-colors`}
          title="Switch Language"
        >
          <Globe className="w-6 h-6" />
          <span className="sr-only">Switch Language</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 -mr-2 pb-64">
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

const ActiveView = ({ 
  currentStepIndex, 
  handleBackToOverview, 
  currentDrill, 
  audioMode, 
  progressPercentage, 
  timerSeconds, 
  setTimerSeconds, 
  handleTimerComplete, 
  nextStep,
  exercisePhase,
  setExercisePhase,
  uiText,
  sessionLength,
  handleSkipIntro
}) => {
  return (
    <div className={`h-full flex flex-col bg-${THEME.neutral}-50`}>
      {/* Exercise Intro Overlay - ONLY for Audio Intro */}
       {audioMode && exercisePhase === 'intro' && (
        <div className={`absolute inset-0 z-50 bg-${THEME.neutral}-900/95 flex flex-col items-center justify-center backdrop-blur-md p-8 text-center`}>
          <div className="animate-pulse flex flex-col items-center mb-8">
            <Headphones className={`w-16 h-16 text-${THEME.primary}-400 mb-4`} />
            <h2 className="text-2xl font-bold text-white mb-2">{currentDrill.title}</h2>
            <p className={`text-${THEME.neutral}-400`}>{uiText.listen_instruction}</p>
          </div>
          
          {/* SKIP BUTTON */}
          <button 
            onClick={handleSkipIntro}
            className={`flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-bold transition-all active:scale-95 backdrop-blur-sm`}
          >
            <SkipForward className="w-5 h-5" />
            {uiText.skip_intro}
          </button>
        </div>
      )}

      <div className="bg-white p-4 pb-4 shadow-sm z-20 sticky top-0">
        <div className="flex justify-between items-end mb-3">
          <div className="flex items-center gap-2">
            <button onClick={handleBackToOverview} className={`p-2 -ml-2 hover:bg-${THEME.neutral}-100 rounded-full text-${THEME.neutral}-500 transition-colors`}><ChevronLeft className="w-6 h-6" /></button>
            <div>
              <span className={`text-[10px] font-bold text-${THEME.neutral}-400 uppercase tracking-widest block`}>{uiText.step} {currentStepIndex + 1}/{sessionLength}</span>
              <h2 className={`text-xl font-black text-${THEME.neutral}-800 leading-none mt-1`}>{currentDrill.category}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
             {audioMode && (
               <div className={`flex items-center gap-1 px-2 py-1 bg-${THEME.primary}-50 text-${THEME.primary}-700 rounded text-xs font-bold border border-${THEME.primary}-100 ${exercisePhase === 'intro' ? 'animate-pulse' : ''}`}>
                 {exercisePhase === 'intro' ? <Volume2 className="w-3 h-3" /> : <Headphones className="w-3 h-3" />}
                 {exercisePhase === 'intro' ? uiText.speaking : uiText.audio_on}
               </div>
             )}
             <span className={`px-2 py-1 bg-${THEME.neutral}-100 text-${THEME.neutral}-500 rounded text-xs font-bold uppercase`}>{currentDrill.type}</span>
          </div>
        </div>
        <div className={`w-full bg-${THEME.neutral}-100 h-1.5 rounded-full overflow-hidden`}>
          <div className={`bg-${THEME.primary}-500 h-full transition-all duration-500 ease-out`} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <DrillVisual drillId={currentDrill.drillId} />
        <h3 className={`text-2xl font-bold text-${THEME.neutral}-800 mb-2`}>{currentDrill.title}</h3>
        <DrillMetrics drill={currentDrill} uiText={uiText} />

        <p className={`text-${THEME.neutral}-600 mb-6 leading-relaxed text-sm`}>{currentDrill.description}</p>
        
        <SessionTimer 
          key={currentDrill.id} 
          seconds={timerSeconds}
          setSeconds={setTimerSeconds}
          defaultDuration={currentDrill.duration} 
          audioMode={audioMode}
          onComplete={handleTimerComplete}
          triggerCountdown={exercisePhase === 'countdown'}
          onCountdownComplete={() => setExercisePhase('working')}
          uiText={uiText}
        />
        
        <div className={`bg-white p-5 rounded-xl border border-${THEME.neutral}-200 shadow-sm`}>
          <h4 className={`text-xs font-bold text-${THEME.neutral}-400 uppercase tracking-wider mb-4 border-b border-${THEME.neutral}-100 pb-2`}>{uiText.execution_steps}</h4>
          <div className="space-y-4">
            {currentDrill.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${THEME.neutral}-100 text-${THEME.neutral}-600 font-bold flex items-center justify-center text-xs mt-0.5 border border-${THEME.neutral}-200`}>{idx + 1}</div>
                <p className={`text-${THEME.neutral}-700 font-medium leading-snug text-sm`}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-${THEME.neutral}-200`}>
        <button onClick={nextStep} className={`w-full max-w-md mx-auto bg-${THEME.neutral}-900 hover:bg-${THEME.neutral}-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-between px-6 transition-transform active:scale-95`}>
          <span>{uiText.done_next}</span>
          <div className={`flex items-center gap-2 text-${THEME.neutral}-400`}><span className="text-xs font-medium uppercase tracking-wider">{uiText.next_step}</span><ChevronRight className="w-5 h-5 text-white" /></div>
        </button>
      </div>
    </div>
  );
};

const SummaryView = ({ setAudioMode, setAppState, setSessionStarted, uiText, generateNewSession }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-white">
      <div className={`w-24 h-24 bg-${THEME.primary}-100 rounded-full flex items-center justify-center mb-6 animate-bounce`}><Trophy className={`w-12 h-12 text-${THEME.primary}-600`} /></div>
      <h1 className={`text-3xl font-black text-${THEME.neutral}-900 mb-2`}>{uiText.session_complete}</h1>
      <p className={`text-${THEME.neutral}-500 mb-8 max-w-xs mx-auto text-sm`}>{uiText.session_complete_sub}</p>
      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        <div className={`bg-${THEME.neutral}-50 p-4 rounded-xl border border-${THEME.neutral}-100`}><span className={`block text-3xl font-black text-${THEME.neutral}-800`}>50</span><span className={`text-xs font-bold text-${THEME.neutral}-400 uppercase`}>{uiText.minutes}</span></div>
        <div className={`bg-${THEME.neutral}-50 p-4 rounded-xl border border-${THEME.neutral}-100`}><span className={`block text-3xl font-black text-${THEME.neutral}-800`}>6</span><span className={`text-xs font-bold text-${THEME.neutral}-400 uppercase`}>{uiText.drills}</span></div>
      </div>
      <button onClick={() => { setAudioMode(false); setAppState('overview'); setSessionStarted(false); generateNewSession(); }} className={`flex items-center gap-2 text-${THEME.primary}-600 font-bold px-6 py-3 rounded-full hover:bg-${THEME.primary}-50 transition-colors`}><RefreshCw className="w-5 h-5" /> {uiText.start_new}</button>
    </div>
  );
};

// --- Main App Component ---
export default function GolfSessionApp() {
  const [appState, setAppState] = useState('overview'); 
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [audioMode, setAudioMode] = useState(false);
  const [globalCountdown, setGlobalCountdown] = useState(null); 
  const [sessionStarted, setSessionStarted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  
  // i18n State
  const [language, setLanguage] = useState('fr');
  const [exercisePhase, setExercisePhase] = useState('idle'); 

  // Session Data State
  const [currentSession, setCurrentSession] = useState([]);

  const audioPlayerRef = useRef(new Audio());

  // Derived data based on language
  const currentUIText = TRANSLATIONS[language].ui;
  
  // Initialize or Regenerate Session
  useEffect(() => {
    // Generate initial session on load
    const initialSession = generateDailySession();
    setCurrentSession(initialSession);
  }, []);

  const generateNewSession = () => {
    const newSession = generateDailySession();
    setCurrentSession(newSession);
    setSessionStarted(false);
    setCurrentStepIndex(0);
    setTimerSeconds(newSession[0].duration * 60);
    setExercisePhase('idle'); // Reset phase for new session
  };

  const getLocalizedSessionData = (lang) => {
    return currentSession.map(item => ({
      ...item,
      ...TRANSLATIONS[lang].drillData[item.drillId],
      ...TRANSLATIONS[lang].categories[item.category]
    }));
  };

  const sessionData = useMemo(() => getLocalizedSessionData(language), [language, currentSession]);
  const currentDrill = sessionData[currentStepIndex];
  const progressPercentage = currentSession.length > 0 ? ((currentStepIndex + 1) / currentSession.length) * 100 : 0;

  useEffect(() => {
    if (audioMode && 'wakeLock' in navigator) {
      navigator.wakeLock.request('screen').catch(e => console.log('Wake Lock error:', e));
    }
  }, [audioMode]);

  const startSession = (withAudio) => {
    if (!sessionData || sessionData.length === 0) return;
    
    setAudioMode(withAudio);
    setCurrentStepIndex(0);
    setSessionStarted(true);
    setTimerSeconds(sessionData[0].duration * 60); 
    setExercisePhase('idle'); // Ensure clean state for new start
    
    if (withAudio) {
      setAppState('countdown');
      startGlobalCountdown();
    } else {
      setAppState('active');
      setExercisePhase('working'); 
    }
  };

  const nextStep = () => {
    stopAudio();
    if (currentStepIndex < sessionData.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setTimerSeconds(sessionData[nextIndex].duration * 60);
      setExercisePhase('idle')
      window.scrollTo(0, 0);
    } else {
      setAppState('summary');
    }
  };

  const handleBackToOverview = () => {
    stopAudio();
    setAppState('overview');
  };

  const stopAudio = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
    }
  };

  const playDrillAudio = (src, onEndCallback) => {
    if (!src) {
      if (onEndCallback) onEndCallback();
      return;
    }
    const audio = audioPlayerRef.current;
    audio.src = src;
    audio.load();
    
    const handleEnd = () => { 
      audio.removeEventListener('ended', handleEnd);
      audio.removeEventListener('error', handleError);
      if (onEndCallback) onEndCallback();
    };
    
    const handleError = () => { 
      audio.removeEventListener('ended', handleEnd);
      audio.removeEventListener('error', handleError);
      if (onEndCallback) onEndCallback();
    };

    audio.addEventListener('ended', handleEnd);
    audio.addEventListener('error', handleError);
    audio.play().catch(e => handleError());
  };

  const handleSkipIntro = () => {
    stopAudio();
    // Immediately move to countdown phase
    setExercisePhase('countdown');
  };

  const startGlobalCountdown = () => {
    let count = 3;
    setGlobalCountdown(count);
    playCountdownBeep(count);

    const interval = setInterval(() => {
      count--;
      setGlobalCountdown(count > 0 ? count : 'GO');
      playCountdownBeep(count);

      if (count <= 0) {
        clearInterval(interval);
        setTimeout(() => {
           setGlobalCountdown(null);
           setAppState('active'); 
        }, 1000);
      }
    }, 1000);
  };

  useEffect(() => {
    stopAudio();
    
    if (appState === 'active' && currentDrill) {
      const isFreshTimer = timerSeconds === currentDrill.duration * 60;
      
      if (audioMode && isFreshTimer) {
        setExercisePhase('intro');
        
        playDrillAudio(currentDrill.audioSrc, () => {
          setExercisePhase('countdown'); 
        });
      } else {
        setExercisePhase('working');
      }
    }
    
    return () => stopAudio();
  }, [currentStepIndex, appState, audioMode, language, currentDrill]); 

  const handleTimerComplete = () => {
    playEndBeep();
    if (audioMode) {
      setTimeout(() => nextStep(), 2000);
    } 
  };

  // Wait for session data to be ready
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
          
          {appState === 'overview' && (
            <OverviewView 
              sessionStarted={sessionStarted}
              currentStepIndex={currentStepIndex}
              setAppState={setAppState}
              startSession={startSession}
              sessionData={sessionData}
              uiText={currentUIText}
              language={language}
              setLanguage={setLanguage}
              generateNewSession={generateNewSession}
            />
          )}

          {(appState === 'active' || appState === 'countdown') && (
            <ActiveView 
              currentStepIndex={currentStepIndex}
              handleBackToOverview={handleBackToOverview}
              currentDrill={currentDrill}
              audioMode={audioMode}
              progressPercentage={progressPercentage}
              timerSeconds={timerSeconds}
              setTimerSeconds={setTimerSeconds}
              handleTimerComplete={handleTimerComplete}
              nextStep={nextStep}
              exercisePhase={exercisePhase}
              setExercisePhase={setExercisePhase}
              uiText={currentUIText}
              sessionLength={sessionData.length}
              handleSkipIntro={handleSkipIntro}
            />
          )}

          {appState === 'summary' && (
            <SummaryView 
              setAudioMode={setAudioMode}
              setAppState={setAppState}
              setSessionStarted={setSessionStarted}
              uiText={currentUIText}
              generateNewSession={generateNewSession}
            />
          )}
        </div>
      </div>
    </>
  );
}