// Données des témoignages - Facile à modifier
// Pour ajouter un témoignage, ajoutez simplement un nouvel objet dans la liste correspondante

export interface Testimonial {
  id: number;
  img: string;
  name: string;
  title: string;
  company: string;
  info: string;
  rating: number;
}

// Témoignages organisés en 3 rangées pour l'effet de défilement
export const testimonials = {
  // Première rangée - défilement vers la gauche
  top: [
    {
      id: 1,
      img: "/temoin1.jpg",
      name: "Marie Dubois",
      title: "Directrice Générale",
      company: "TechStart",
      info: "OptimaCall a transformé notre service client. La qualité de l'accueil est exceptionnelle et nos clients sont ravis. Un vrai partenaire de confiance !",
      rating: 5,
    },
    {
      id: 2,
      img: "/temoin2.jpg",
      name: "Pierre Martin",
      title: "Gérant",
      company: "Cabinet Médical Plus",
      info: "La gestion de nos rendez-vous n'a jamais été aussi fluide. L'équipe d'OptimaCall est professionnelle et toujours disponible.",
      rating: 5,
    },
    {
      id: 3,
      img: "/temoin3.jpg",
      name: "Sophie Laurent",
      title: "Responsable Commercial",
      company: "E-Commerce Pro",
      info: "Le service 24/7 est un vrai plus pour notre activité. Nous ne perdons plus aucun appel client, même en dehors des heures de bureau.",
      rating: 5,
    },
    {
      id: 4,
      img: "/temoin1.jpg",
      name: "Jean Dupont",
      title: "CEO",
      company: "Industrie Solutions",
      info: "Un service impeccable avec un excellent rapport qualité-prix. L'intégration avec notre CRM s'est faite sans problème.",
      rating: 5,
    },
    {
      id: 5,
      img: "/temoin2.jpg",
      name: "Claire Fontaine",
      title: "Directrice Marketing",
      company: "Digital Agency",
      info: "Depuis que nous travaillons avec OptimaCall, notre taux de satisfaction client a augmenté de 40%. Résultat impressionnant !",
      rating: 5,
    },
  ],
  
  // Deuxième rangée - défilement vers la droite (reverse)
  middle: [
    {
      id: 1,
      img: "/temoin3.jpg",
      name: "Thomas Bernard",
      title: "Fondateur",
      company: "Startup Innovation",
      info: "En tant que startup, nous avions besoin d'une solution flexible. OptimaCall nous a permis de nous concentrer sur notre cœur de métier.",
      rating: 5,
    },
    {
      id: 2,
      img: "/temoin1.jpg",
      name: "Isabelle Moreau",
      title: "Responsable RH",
      company: "Groupe Industrie",
      info: "La qualité du service et la réactivité de l'équipe sont remarquables. Je recommande vivement OptimaCall à toutes les entreprises.",
      rating: 5,
    },
    {
      id: 3,
      img: "/temoin2.jpg",
      name: "Laurent Petit",
      title: "Directeur Commercial",
      company: "Agence Immobilière",
      info: "Nos clients apprécient particulièrement l'accueil chaleureux et professionnel. OptimaCall représente parfaitement notre image de marque.",
      rating: 5,
    },
    {
      id: 4,
      img: "/temoin3.jpg",
      name: "Nathalie Girard",
      title: "Gérante",
      company: "Cabinet Conseil",
      info: "Le gain de temps est considérable. Plus besoin de gérer les appels nous-mêmes, OptimaCall s'occupe de tout avec professionnalisme.",
      rating: 5,
    },
    {
      id: 5,
      img: "/temoin1.jpg",
      name: "François Leroy",
      title: "Directeur Technique",
      company: "Tech Solutions",
      info: "L'intégration technique a été parfaite. L'équipe OptimaCall a su s'adapter à nos processus existants sans difficulté.",
      rating: 5,
    },
  ],
  
  // Troisième rangée - défilement vers la gauche
  bottom: [
    {
      id: 1,
      img: "/temoin2.jpg",
      name: "Émilie Rousseau",
      title: "Fondatrice",
      company: "Boutique Mode",
      info: "Mes clientes sont enchantées ! L'accueil téléphonique est toujours impeccable et reflète parfaitement l'image de ma marque.",
      rating: 5,
    },
    {
      id: 2,
      img: "/temoin3.jpg",
      name: "David Cohen",
      title: "Associé",
      company: "Cabinet Avocats",
      info: "Dans notre profession, la confidentialité est primordiale. OptimaCall respecte parfaitement nos exigences de discrétion.",
      rating: 5,
    },
    {
      id: 3,
      img: "/temoin1.jpg",
      name: "Caroline Michel",
      title: "Responsable Service Client",
      company: "E-commerce Fashion",
      info: "Notre volume d'appels a triplé sans que la qualité ne baisse. OptimaCall gère admirablement les pics d'activité.",
      rating: 5,
    },
    {
      id: 4,
      img: "/temoin2.jpg",
      name: "Marc Lefebvre",
      title: "Président",
      company: "Association Sportive",
      info: "Même pour une association, OptimaCall propose des solutions adaptées à notre budget. Service excellent et équipe à l'écoute.",
      rating: 5,
    },
    {
      id: 5,
      img: "/temoin3.jpg",
      name: "Aurélie Blanc",
      title: "Directrice",
      company: "Centre de Formation",
      info: "La gestion des inscriptions par téléphone est devenue un jeu d'enfant. Merci OptimaCall pour votre efficacité !",
      rating: 5,
    },
  ],
};

// Fonction utilitaire pour obtenir tous les témoignages en une liste plate
export const getAllTestimonials = (): Testimonial[] => {
  return [...testimonials.top, ...testimonials.middle, ...testimonials.bottom];
};

// Nombre total de témoignages
export const totalTestimonials = getAllTestimonials().length;

