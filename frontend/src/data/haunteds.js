const haunteds = [
  {
    id: 1,
    Country: "France",
    City: "Campénéac",
    title: "Le château de Trécesson",
    image:
      "https://www.grazia.fr/wp-content/uploads/grazia/2020/10/le-chateau-trecesson-campeneac-618x410.jpeg",
    description:
      "Au cœur de la Bretagne, proche de la forêt de Brocéliande, le château de Trécesson se présente comme un site exceptionnel. Ce lieu serait l'un des plus beaux châteaux de Bretagne, mais aussi une véritable maison hantée. La légende raconte qu'une jeune femme en habit de noces aurait été enterrée vivante, dans les jardins, vers 1750. Du nom de Mariée de Trécesson, elle ferait régulièrement des apparitions, pour effrayer les visiteurs.",
    note: 4,
    price: 100,
    dispo: false,
  },
  {
    id: 2,
    Country: "France",
    City: "Clermont-Ferrand,",
    title: "le château de Veauce",
    image:
      "https://www.grazia.fr/wp-content/uploads/grazia/2020/10/le-chateau-veauce-veauce-493x410.jpeg",
    description:
      "Au nord de Clermont-Ferrand, le château de Veauce était habité par le baron Tagori de la Tour entre 1973 et 1998. Depuis le XVIe siècle, le fantôme de Lucie, une domestique décédée, hanterait ses couloirs. En 1984, une équipe de France Inter est venue dans cette maison hantée accompagnée d'un médium. Tous auraient aperçu la servante morte, il y a près d'un demi-millénaire.",
    note: 3,
    price: 150,
    dispo: false,
  },
  {
    id: 3,
    Country: "France",
    City: "Melun",
    title: "le château de Blandy-les-Tours ",
    image:
      "https://www.grazia.fr/wp-content/uploads/grazia/2020/10/le-chateau-blandy-les-tours-blandy-410x410.jpeg",
    description:
      "Près de Melun, le château de Blandy-les-Tours aurait une forte concentration de fantômes. Effectivement, une dizaine de spectres auraient été vus dans cet édifice. Le manoir hanté, abriterait le fantôme d'Érard de Montargis, un seigneur auteur de meurtres sanglants, et celui de Marie d'Harcourt, une jeune femme qui se serait jetée du haut du donjon pour lui échapper.",
    note: 4.5,
    price: 250,
    dispo: false,
  },
  {
    id: 4,
    Country: "France",
    City: "Périgueux",
    title: "le chateau de Puymartin",
    image:
      "https://www.grazia.fr/wp-content/uploads/grazia/2020/10/le-chateau-puymartin-marquay-615x410.jpeg",
    description:
      "En Dordogne, le château de Puymartin abriterait une présence effrayante. Effectivement, les propriétaires et les visiteurs auraient aperçu la dame blanche, le fantôme de Thérèse de Saint-Clar, châtelaine du XVIe siècle. Son mari l'aurait contrainte de passer les 16 dernières années de sa vie dans l'une des pièces d'une tourelle, après qu'il l'ait surprise avec son amant. Depuis, elle errerait par moments, entre les pièces de ce lieu effrayant. Il se visite toute l'année, pour étancher sa soif de frayeur.",
    note: 3.5,
    price: 210,
    dispo: false,
  },
  {
    id: 5,
    Country: "France",
    City: "Paris",
    title: "Catacombes de Paris",
    image:
      "https://www.grazia.fr/wp-content/uploads/grazia/2020/10/les-catacombes-paris-615x410.jpeg",
    description:
      "Parmi les lieux hantés que l'on retrouve en France, les Catacombes se visitent pour une faire le plein de frissons. Au milieu des millions de restes humains, il ne faut pas passer à côté de la légende de l'Homme Vert. Ce spectre se promènerait sans lumière en laissant des traces par terre, tout en frôlant les visiteurs.",
    note: 5,
    price: 305,
    dispo: false,
  },
  {
    id: 6,
    Country: "France",
    City: "Queaux",
    title: "Le château de Fougeret",
    image:
      "https://www.grazia.fr/wp-content/uploads/grazia/2020/10/le-chateau-fougeret-queaux-387x410.jpeg",
    description:
      "Construit entre les XIV et XVI sicles, ce château situé dans le département de la Vienne a de quoi faire froid dans le dos. Effectivement, réputé pour être le château le plus hanté de France, de nombreux phénomènes y ont été constaté, comme des apparitions fantomatiques ou des présences anormales. D'avril à novembre, les propriétaires louent le château à la nuit, pour vivre une expérience complètement paranormale.",
    note: 2,
    price: 150,
    dispo: false,
  },
  {
    id: 7,
    Country: "France",
    City: "Bresle",
    title: "La maison de Bresle",
    image:
      "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/borley_rectory2_0.jpg",
    description:
      "Le récit de ces habitants de la maison située au 13 rue du 11 novembre à Bresle (Oise) a de quoi hérisser le poil. Bruits étranges, coups, verrous rouverts «tout seuls», et même une froide sensation de frôlement nocturne. ",
    note: 2.8,
    price: 35,
    dispo: false,
  },
  {
    id: 8,
    Country: "Espagne",
    City: "Madrid",
    title: "La maison des sept cheminées",
    image:
      "https://st3.idealista.com/cms/archivos/styles/idcms_large_desktop/public/2019-10/media/image/casa_de_las_7_chimeneas_madrid_06.jpg?fv=n60zPoHm&itok=lXlDZuC1",
    description:
      "Ce bâtiment situé au numéro 1 de la Plaza del Rey était le nid d'amour du capitaine Zapata et de son épouse Elena. Mais le bonheur de leur mariage fut de courte durée : le soldat mourut à la guerre en Flandre. Sa femme a été retrouvée morte dans sa chambre. Les causes de sa mort n'ont jamais été élucidées. Le fait que le corps ait disparu sans laisser de traces n'a pas aidé non plus. Depuis lors, le fantôme d'une femme errerait entre les sept cheminées qui couronnent le toit du palais.",
    note: 5,
    price: 350,
    dispo: false,
  },
  {
    id: 9,
    Country: "France",
    City: "Incarville",
    title: "L'église d'Incarville",
    image:
      "https://static.cnews.fr/sites/default/files/2020_redaction/capture_decran_2020-06-10_a_17.13.22_5ee0f8b6c2c67.png",
    description:
      "L'église d'Incarville, également dans l'Eure, serait habitée par un esprit récalcitrant. En l'occurrence celui de l'abbé Delamarre, curé des lieux jusqu'en 1949.L'homme, qui a été enterré dans le choeur de cette église bâtie au XIe siècle, reviendrait régulièrement sur place et il serait possible à certaines occasions d'entendre son souffle dans les allées de l'édifice.Il s'agirait d'un fantôme bienveillant : c'est par affection pour les lieux que l'ecclésiastique le visiterait occasionnellement. L'Eglise, bien que traditionnellement réticente aux phénomènes paranormaux, évoque elle-même cette histoire",
    note: 3.9,
    price: 65,
    dispo: false,
  },
  {
    id: 10,
    Country: "Espagne",
    City: "Madrid",
    title: "Le sanatorium de Santo Angel de la Guarda",
    image:
      "https://st3.idealista.com/cms/archivos/styles/idcms_large_desktop/public/2019-10/media/image/sanatorio_del_santo_angel_de_la_guarda_en_navacerrada.jpg?fv=N9sFYOue&itok=rrH-nNK3",
    description:
      "Ce sanatorium a été construit en 1941 pour traiter certaines des maladies graves qui sévissaient à l'époque parmi la population civile, telles que la tuberculose, la lèpre, la polio, la fibrose et le cancer du poumon. Il a finalement été transformé en hôpital psychiatrique jusqu'en 1995, date à laquelle il a définitivement fermé ses portes. Il n'y a pas si longtemps, il était possible d'entrer à l'intérieur et de retrouver les dossiers et les objets personnels d'anciens patients. Ceux qui y sont allés parlent de mystérieuses présences dans les couloirs, d'appareils électriques qui cessaient de fonctionner sans raison et de portes qui se fermaient violemment. De nombreuses personnes affirment également avoir vu des lumières dans l’immensité dea étages, comme si des lanternes se promenaient.",
    note: 5,
    price: 200,
    dispo: false,
  },
];
export default haunteds;
