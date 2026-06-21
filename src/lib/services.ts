export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  priceFrom: number;
  duration: string;
  mainBenefit: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'rapid-detail',
    name: 'Rapid Detail',
    slug: 'rapid-detail',
    shortDescription: 'Lavado express con acabado premium en tiempo récord.',
    fullDescription: 'Nuestro Rapid Detail está diseñado para quienes necesitan un resultado impecable sin esperar. En menos de 90 minutos, tu vehículo lucirá como recién salido del concesionario. Incluye lavado de mano con productos premium, secado con microfibra, y acabado con spray encerado de alta gloss.',
    priceFrom: 45,
    duration: '45-60 min',
    mainBenefit: 'Resultado premium en menos de 1 hora',
    benefits: [
      'Lavado de mano con jabón pH neutro',
      'Secado con toallas microfibra premium',
      'Spray encerado High Gloss',
      'Limpieza de rines y llantas',
      'Limpieza de cristales interior/exterior',
      'Aromatización premium',
    ],
    process: [
      { step: 1, title: 'Pre-lavado', description: 'Rociado con espuma activa para ablandar suciedad superficial' },
      { step: 2, title: 'Lavado de mano', description: 'Lavado con guante de microfibra y jabón pH neutro' },
      { step: 3, title: 'Secado premium', description: 'Secado con toallas de microfibra para evitar rayones' },
      { step: 4, title: 'Acabado gloss', description: 'Aplicación de spray encerado para brillo instantáneo' },
    ],
    image: '/images/rapid-detail.jpg',
  },
  {
    id: 'premium-detail',
    name: 'Premium Detail',
    slug: 'premium-detail',
    shortDescription: 'Detallado completo interior y exterior. La experiencia definitiva.',
    fullDescription: 'El Premium Detail es nuestro servicio insignia. Una transformación completa que devuelve a tu vehículo el estado de showroom. Incluye detallado interior profundo, lavado de mano con técnica de dos cubos, descontaminación de pintura, aplicación de cera carnaúba, y acabado de cristales perfectos.',
    priceFrom: 120,
    duration: '3-4 horas',
    mainBenefit: 'Transformación completa interior y exterior',
    benefits: [
      'Lavado de mano técnica dos cubos',
      'Descontaminación de pintura (clay bar)',
      'Cera carnaúba premium',
      'Aspirado y limpieza interior profunda',
      'Acondicionamiento de cuero/plástico',
      'Cristales perfectos interior/exterior',
      'Aromatización premium',
      'Protección de llantas y plásticos',
    ],
    process: [
      { step: 1, title: 'Lavado premium', description: 'Lavado de mano con técnica dos cubos y descontaminación' },
      { step: 2, title: 'Corrección menor', description: 'Eliminación de marcas leves y swirls superficiales' },
      { step: 3, title: 'Protección', description: 'Aplicación de cera carnaúba para protección y brillo' },
      { step: 4, title: 'Interior', description: 'Limpieza profunda y acondicionamiento de todas las superficies' },
      { step: 5, title: 'Acabado final', description: 'Cristales, llantas, plásticos y aromatización' },
    ],
    image: '/images/premium-detail.jpg',
  },
  {
    id: 'interior-deep-cleaning',
    name: 'Interior Deep Cleaning',
    slug: 'interior-deep-cleaning',
    shortDescription: 'Restauración total del interior. Como nuevo, o mejor.',
    fullDescription: 'Nuestro Interior Deep Cleaning va más allá de una limpieza. Es una restauración completa que elimina bacterias, olores, manchas y suciedad acumulada. Utilizamos vapor de alta temperatura, extractores profesionales y productos hipoalergénicos para devolver a tu interior la frescura del primer día.',
    priceFrom: 95,
    duration: '2-3 horas',
    mainBenefit: 'Interior higienizado y como nuevo',
    benefits: [
      'Aspirado profundo con extractor',
      'Limpieza a vapor de alta temperatura',
      'Shampoo de tapicería y alfombras',
      'Acondicionamiento de cuero premium',
      'Limpieza y protección de tablero',
      'Desinfección completa del habitáculo',
      'Eliminación de olores',
      'Aromatización premium',
    ],
    process: [
      { step: 1, title: 'Aspirado completo', description: 'Remoción de partículas sueltas con extractor profesional' },
      { step: 2, title: 'Shampoo profundo', description: 'Limpieza de tapicería con shampoo y extractor' },
      { step: 3, title: 'Vapor y desinfección', description: 'Limpieza a vapor para eliminar bacterias y ácaros' },
      { step: 4, title: 'Acondicionamiento', description: 'Hidratación y protección de cuero y plásticos' },
      { step: 5, title: 'Finalización', description: 'Cristales, aromatización y control de calidad' },
    ],
    image: '/images/interior-cleaning.jpg',
  },
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    slug: 'paint-correction',
    shortDescription: 'Eliminación profesional de swirls, rayones e imperfecciones.',
    fullDescription: 'La Paint Correction es un proceso artesanal de múltiples etapas que elimina swirl marks, rayones superficiales, marcas de buffer y otras imperfecciones de la pintura. Utilizamos técnicas de pulido compuesto y refinado para restaurar la claridad y profundidad del color original de tu vehículo.',
    priceFrom: 180,
    duration: '4-6 horas',
    mainBenefit: 'Pintura perfecta sin imperfecciones',
    benefits: [
      'Evaluación con luz de inspección',
      'Pulido compuesto (corte pesado)',
      'Pulido de refinado (corte fino)',
      'Eliminación de 90%+ de swirl marks',
      'Restauración de profundidad de color',
      'Preparación para protección',
      'Protección con sello sintético',
    ],
    process: [
      { step: 1, title: 'Inspección', description: 'Evaluación con luz LED de inspección para mapear defectos' },
      { step: 2, title: 'Lavado y descontaminación', description: 'Lavado con clay bar para superficie limpia' },
      { step: 3, title: 'Pulido compuesto', description: 'Corte pesado para eliminar defectos profundos' },
      { step: 4, title: 'Pulido de refinado', description: 'Corte fino para acabado de espejo' },
      { step: 5, title: 'Protección', description: 'Aplicación de sello sintético de larga duración' },
    ],
    image: '/images/paint-correction.jpg',
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    slug: 'ceramic-coating',
    shortDescription: 'Protección cerámica profesional. Brillo y defensa por años.',
    fullDescription: 'El Ceramic Coating es la máxima protección para tu vehículo. Una capa de SiO2 (dióxido de silicio) que se fusiona con la pintura creando una barrera hidrofóbica e impenetrable. Protege contra UV, rayones leves, contaminantes ambientales y mantiene un brillo que dura años, no meses.',
    priceFrom: 350,
    duration: '6-8 horas',
    mainBenefit: 'Protección y brillo que duran años',
    benefits: [
      'Preparación completa de pintura',
      'Corrección de pintura incluida',
      'Aplicación de coating SiO2 profesional',
      'Efecto hidrofóbico permanente',
      'Protección contra UV y oxidación',
      'Resistencia a rayones leves',
      'Brillo de concesionario duradero',
      'Garantía de hasta 3 años',
    ],
    process: [
      { step: 1, title: 'Preparación', description: 'Lavado, descontaminación y corrección de pintura' },
      { step: 2, title: 'Desengrase', description: 'Eliminación de aceites residuales con panel prep' },
      { step: 3, title: 'Aplicación', description: 'Aplicación de ceramic coating capa por capa' },
      { step: 4, title: 'Curado', description: 'Tiempo de curado controlado entre capas' },
      { step: 5, title: 'Inspección final', description: 'Verificación de cobertura y acabado perfecto' },
    ],
    image: '/images/ceramic-coating.jpg',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    vehicle: 'Mercedes-Benz GLE 2023',
    service: 'Premium Detail',
    rating: 5,
    review: 'Increíble la transformación. Mi GLE parece recién salido del concesionario. El nivel de detalle es excepcional.',
  },
  {
    id: 2,
    name: 'Andrea Ruiz',
    vehicle: 'BMW X5 2022',
    service: 'Ceramic Coating',
    rating: 5,
    review: 'El ceramic coating ha sido la mejor inversión. Después de 6 meses, el agua sigue resbalando como el primer día. Totalmente recomendado.',
  },
  {
    id: 3,
    name: 'Roberto Herrera',
    vehicle: 'Porsche Cayenne 2024',
    service: 'Paint Correction',
    rating: 5,
    review: 'Llevé mi Cayenne con swirl marks del taller y lo devolvieron con una pintura de espejo. Profesionalismo de primer nivel.',
  },
  {
    id: 4,
    name: 'Laura Castellanos',
    vehicle: 'Audi Q7 2023',
    service: 'Interior Deep Cleaning',
    rating: 5,
    review: 'Tenía manchas en la tapicería de cuero que pensé eran permanentes. El interior quedó impecable. Olor a nuevo otra vez.',
  },
  {
    id: 5,
    name: 'Diego Vargas',
    vehicle: 'Tesla Model Y 2024',
    service: 'Rapid Detail',
    rating: 5,
    review: 'Perfecto para entre semana. En menos de una hora mi Tesla estaba reluciente. Rapidez sin sacrificar calidad.',
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
