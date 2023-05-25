import {
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
  Wifi,
  confirm,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "features",
    title: "FreeBox Pro",
  },
  {
    id: "product",
    title: "Mobile free Pro 5G",
  },
  {
    id: "clients",
    title: "Support",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: Wifi,
    title: "Connectivité",
    content: [
      "FTTH 10G EPON : jusqu’à 7Gbps en réception  et 1Gbps en émission / ​",
      "Wi-Fi interne & Wi-Fi invité / ​",
      "Répéteurs Wi-Fi plug & play en option",
    ],
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Protection de la donnée​",
    content: [
      "Serveur NAS intégré​ avec 1 DD 1To inclus / ​",
      "Synchro automatique  vers le cloud souverain​ 200 Go de stockage inclus ​",
    ],
  },
  {
    id: "feature-3",
    icon: confirm,
    title: "Fiabilité de la connexion​",
    content: [
      "Backup 4G automatique inclus​ / ",
      "Support prédictif /​",
      "Autodiagnostic avec module IA /​ ",
      "Freebox Pro de remplacement​",
    ],
  },

  {
    id: "feature-4",
    icon: star,
    title: "Communication​",
    content: [
      "2 lignes fixe illimitées incluses​ / ",
      "1 ligne mobile 5G/4G+ incluse​",
    ],
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Centre d’expertise client: Experts dédiés aux offres Free Pro basés en France. Disponible 7j7 de 8h à 20h.",
  },
  {
    id: "feedback-2",
    content:
      "Demandes d’assistance pré-qualifiées: grâce à un parcours digital optimisé d’ouverture de tickets.​",
  },
  {
    id: "feedback-3",
    content:
      "#IA – Autodiagnostic: module d’IA intégré dans la box pour un diagnostic plus précis et une résolution accélérée des incidents.",
  },
  {
    id: "feedback-4",
    content:
      "Garanties contractuelles: Garantie de temps de réponse en moins de 8h & Garantie d’intervention sur site le jour même ou le lendemain.",
  },
  {
    id: "feedback-5",
    content:
      "En option: Ligne téléphonique dédiée pour accéder à un expert en quelques minutes + Garantie de temps de réponse de 2h aux demandes en ligne.",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: facebook,
    link: "https://www.facebook.com/Free-Pro-Partenaire-113843011710454",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/company/free-pro-partenaire/",
  },
];
