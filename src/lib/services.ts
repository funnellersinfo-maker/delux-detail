export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  currency: string;
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
    shortDescription: 'Lavado express con acabado premium. Perfecto para el día a día.',
    fullDescription: 'Nuestro Rapid Detail está diseñado para quienes necesitan un resultado impecable sin esperar. En menos de una hora, tu vehículo lucirá como recién salido del concesionario. Usamos jabón pH neutro, toallas de microfibra grado automotriz y spray encerado de alta gloss. Ideal para mantenimiento semanal o antes de una reunión.',
    price: 899,
    currency: 'MXN',
    duration: '45–60 min',
    mainBenefit: 'Resultado premium en menos de 1 hora',
    benefits: [
      'Lavado de mano con jabón pH neutro CarPro',
      'Secado con toallas microfibra 600 GSM',
      'Spray encerado High Gloss SiO2',
      'Limpieza de rines con desengrasante profesional',
      'Cristales interior y exterior sin marcas',
      'Aromatización con difusor premium',
    ],
    process: [
      { step: 1, title: 'Pre-lavado con espuma activa', description: 'Rociado con foam lance para ablandar suciedad sin tocar la pintura' },
      { step: 2, title: 'Lavado de mano (dos cubos)', description: 'Técnica de dos cubos con guante de microfibra para cero swirls' },
      { step: 3, title: 'Secado con aire y microfibra', description: 'Secado sin contacto para evitar marcas de agua' },
      { step: 4, title: 'Acabado gloss + protección', description: 'Spray SiO2 para brillo instantáneo y protección temporal' },
    ],
    image: '/images/rapid-detail.jpg',
  },
  {
    id: 'premium-detail',
    name: 'Premium Detail',
    slug: 'premium-detail',
    shortDescription: 'Detallado completo interior y exterior. Nuestro servicio más solicitado.',
    fullDescription: 'El Premium Detail es nuestro servicio insignia y el más reservado. Una transformación completa que devuelve a tu vehículo el estado de showroom. Incluye detallado interior profundo con extractor, lavado de mano con técnica de dos cubos, descontaminación de pintura con clay bar, aplicación de cera carnaúba de alta durabilidad y acabado de cristales perfectos. El servicio que nos dio los 127 reviews de 5 estrellas en Google.',
    price: 2499,
    currency: 'MXN',
    duration: '3–4 horas',
    mainBenefit: 'Transformación completa interior y exterior',
    benefits: [
      'Lavado de mano técnica dos cubos + clay bar',
      'Descontaminación de pintura con Nanoskin',
      'Cera carnaúba Collinite 845 (6 meses protección)',
      'Aspirado con extractor Bissell profesional',
      'Acondicionamiento de cuero con Chemical Guys',
      'Limpieza de cristales interior/exterior sin vetas',
      'Aromatización premium con difusor personalizado',
      'Protección de plásticos exteriores con dressing UV',
    ],
    process: [
      { step: 1, title: 'Lavado premium + descontaminación', description: 'Lavado dos cubos con clay bar para eliminar contaminación industrial' },
      { step: 2, title: 'Corrección menor de pintura', description: 'Eliminación de swirl marks y marcas leves con pulidora DA' },
      { step: 3, title: 'Protección con cera carnaúba', description: 'Cera Collinite 845 para protección y brillo de hasta 6 meses' },
      { step: 4, title: 'Interior: extracción y acondicionamiento', description: 'Shampoo con extractor, acondicionamiento de cuero y plásticos' },
      { step: 5, title: 'Acabado final y control de calidad', description: 'Cristales, llantas, plásticos, aromatización y revisión por supervisor' },
    ],
    image: '/images/premium-detail.jpg',
  },
  {
    id: 'interior-deep-cleaning',
    name: 'Interior Deep Clean',
    slug: 'interior-deep-cleaning',
    shortDescription: 'Restauración total del interior. Elimina olores, manchas y bacterias.',
    fullDescription: 'Nuestro Interior Deep Clean va más allá de una limpieza. Es una restauración completa que elimina bacterias, olores, manchas y suciedad acumulada. Utilizamos vapor de alta temperatura a 180°C, extractores profesionales Bissell y productos hipoalergénicos. Es el servicio que más recomiendan nuestros clientes con mascotas o niños pequeños.',
    price: 1899,
    currency: 'MXN',
    duration: '2–3 horas',
    mainBenefit: 'Interior higienizado y libre de olores',
    benefits: [
      'Aspirado profundo con extractor Bissell SpotClean',
      'Shampoo de tapicería con extractor de succión',
      'Limpieza a vapor 180°C (elimina 99.9% bacterias)',
      'Acondicionamiento de cuero con Leather Honey',
      'Limpieza de ductos de A/C con desinfectante',
      'Desinfección completa del habitáculo',
      'Tratamiento anti-olores con ozono',
      'Aromatización premium incluida',
    ],
    process: [
      { step: 1, title: 'Aspirado y remoción de partículas', description: 'Extractor profesional en tapicería, alfombras y ductos' },
      { step: 2, title: 'Shampoo con extracción', description: 'Limpieza profunda de tapicería con shampoo y extractor de succión' },
      { step: 3, title: 'Vapor y desinfección', description: 'Limpieza a 180°C para eliminar ácaros, bacterias y hongos' },
      { step: 4, title: 'Acondicionamiento de superficies', description: 'Hidratación de cuero, protección de plásticos y tablero' },
      { step: 5, title: 'Tratamiento anti-olores + aromatización', description: 'Generador de ozono y difusor premium personalizado' },
    ],
    image: '/images/interior-cleaning.jpg',
  },
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    slug: 'paint-correction',
    shortDescription: 'Eliminación profesional de swirl marks, rayones e imperfecciones de pintura.',
    fullDescription: 'La Paint Correction es un proceso artesanal de múltiples etapas que elimina swirl marks, rayones superficiales, marcas de buffer y otras imperfecciones de la pintura. Utilizamos pulidoras de doble acción (Rupes BigFoot), pads de diferentes cortes y compuestos profesionales. El resultado es una pintura con profundidad de color y claridad que no se logra con un lavado normal. Recomendado antes de aplicar Ceramic Coating.',
    price: 3999,
    currency: 'MXN',
    duration: '4–6 horas',
    mainBenefit: 'Pintura de espejo sin imperfecciones',
    benefits: [
      'Evaluación con lámpara de inspección Brinkmann',
      'Pulido compuesto con Rupes BigFoot 21',
      'Pulido de refinado con pad de corte fino',
      'Eliminación de 90%+ de swirl marks',
      'Restauración de profundidad y claridad de color',
      'Preparación para protección (cera o ceramic)',
      'Sello sintético de 3 meses incluido',
    ],
    process: [
      { step: 1, title: 'Inspección con lámpara Brinkmann', description: 'Mapeo de defectos y determination del nivel de corrección necesario' },
      { step: 2, title: 'Lavado + descontaminación', description: 'Lavado con clay bar para superficie completamente limpia' },
      { step: 3, title: 'Pulido compuesto (corte pesado)', description: 'Rupes BigFoot con compound para eliminar defectos profundos' },
      { step: 4, title: 'Pulido de refinado (corte fino)', description: 'Pad de microfibra para acabado de espejo sin holio' },
      { step: 5, title: 'Protección con sello sintético', description: 'Aplicación de sealant para proteger el trabajo realizado' },
    ],
    image: '/images/paint-correction.jpg',
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    slug: 'ceramic-coating',
    shortDescription: 'Protección cerámica profesional SiO2. Brillo y defensa por años.',
    fullDescription: 'El Ceramic Coating es la máxima protección para tu vehículo. Aplicamos IGL Coatings Ecocoat (certificación profesional), una capa de SiO2 que se fusiona con la pintura creando una barrera hidrofóbica impenetrable. Protege contra UV, rayones leves, contaminantes ambientales y mantiene un brillo que dura años. Incluye Paint Correction completa antes de la aplicación. Garantía escrita de 3 años.',
    price: 7999,
    currency: 'MXN',
    duration: '6–8 horas',
    mainBenefit: 'Protección y brillo que duran años',
    benefits: [
      'Paint Correction completa incluida',
      'Aplicación de IGL Ecocoat (certificado profesional)',
      'Efecto hidrofóbico permanente',
      'Protección contra UV y oxidación',
      'Resistencia a rayones leves',
      'Brillo de concesionario duradero',
      'Garantía escrita de 3 años',
      'Mantenimiento gratuito a los 6 meses',
    ],
    process: [
      { step: 1, title: 'Preparación completa', description: 'Lavado, descontaminación y corrección de pintura incluida' },
      { step: 2, title: 'Desengrase con panel prep', description: 'Eliminación de aceites residuales para máxima adherencia' },
      { step: 3, title: 'Aplicación de IGL Ecocoat', description: 'Aplicación capa por capa con técnica de cross-hatch' },
      { step: 4, title: 'Curado controlado entre capas', description: 'Tiempo de curado monitoreado entre cada aplicación' },
      { step: 5, title: 'Inspección y entrega', description: 'Verificación con lámpara, firma de garantía y entrega del kit de mantenimiento' },
    ],
    image: '/images/ceramic-coating.jpg',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    vehicle: 'Mercedes-Benz GLE 350 2023',
    service: 'Premium Detail',
    rating: 5,
    review: 'Increíble la transformación. Mi GLE parecía otro auto al salir. El nivel de detalle en los rines y la tapicería fue excepcional. Ya reservé el Ceramic para el siguiente mes.',
    location: 'Valle Oriente',
  },
  {
    id: 2,
    name: 'Andrea Ruiz Velasco',
    vehicle: 'BMW X5 xDrive 2022',
    service: 'Ceramic Coating',
    rating: 5,
    review: 'El ceramic coating ha sido la mejor inversión. Después de 6 meses, el agua sigue resbalando como el primer día. El equipo de DeluxDetail es muy profesional y puntual.',
    location: 'Cumbres',
  },
  {
    id: 3,
    name: 'Roberto Herrera Salinas',
    vehicle: 'Porsche Cayenne 2024',
    service: 'Paint Correction',
    rating: 5,
    review: 'Llevé mi Cayenne con swirl marks que dejó el taller de la agencia y lo devolvieron con una pintura de espejo. Usan equipo Rupes profesional. Lo notás desde que llegás al taller.',
    location: 'San Pedro Garza García',
  },
  {
    id: 4,
    name: 'Laura Castellanos de Delgado',
    vehicle: 'Audi Q7 Prestige 2023',
    service: 'Interior Deep Clean',
    rating: 5,
    review: 'Tenía manchas en la tapicería de cuero crema que pensé eran permanentes. El interior quedó impecable y el aroma es increíble. Mis hijos y el perro ya no dejan huella gracias al ceramic interior.',
    location: 'Contry',
  },
  {
    id: 5,
    name: 'Diego Vargas Jiménez',
    vehicle: 'Tesla Model Y Long Range 2024',
    service: 'Rapid Detail',
    rating: 5,
    review: 'Perfecto para entre semana. En menos de una hora mi Tesla estaba reluciente. Lo reservo cada viernes antes del fin de semana. Rapidez sin sacrificar calidad.',
    location: 'Centro',
  },
  {
    id: 6,
    name: 'María Fernanda López',
    vehicle: 'Range Rover Sport 2023',
    service: 'Premium Detail',
    rating: 5,
    review: 'Tercera vez que vengo y siempre el mismo nivel de excelencia. El proceso de reserva por WhatsApp es rapidísimo y siempre me confirman en menos de 10 minutos.',
    location: 'Punta Sierra',
  },
];

export const faqs = [
  {
    question: '¿Cuánto tiempo tarda cada servicio?',
    answer: 'El Rapid Detail tarda 45-60 minutos. El Premium Detail entre 3 y 4 horas. El Interior Deep Clean 2-3 horas. La Paint Correction 4-6 horas y el Ceramic Coating 6-8 horas. Te avisamos por WhatsApp cuando tu auto está listo.',
  },
  {
    question: '¿Puedo esperar mientras detallan mi auto?',
    answer: 'Sí, contamos con sala de espera con WiFi, café y agua. Para servicios de más de 3 horas, te ofrecemos servicio de shuttle dentro de la zona de Valle Oriente y San Pedro o puedes dejarnos tu auto y te avisamos por WhatsApp cuando esté listo.',
  },
  {
    question: '¿Qué productos utilizan?',
    answer: 'Trabajamos exclusivamente con marcas profesionales: CarPro, IGL Coatings, Rupes, Chemical Guys, Collinite y Leather Honey. Todos nuestros productos son importados y certificados para uso automotriz profesional.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'Sí. El Ceramic Coating incluye garantía escrita de 3 años. La Paint Correction y el Premium Detail incluyen garantía de satisfacción de 7 días — si no estás conforme, lo volvemos a hacer sin costo.',
  },
  {
    question: '¿Cómo funciona el proceso de reserva?',
    answer: 'Reservas por esta página o por WhatsApp. Eliges el servicio, fecha y hora. Te confirmamos en menos de 15 minutos por WhatsApp. El día de tu cita, llegas al taller en Monterrey y nos encargamos del resto.',
  },
  {
    question: '¿Hacen servicio a domicilio?',
    answer: 'Sí, para vehículos en la zona de Valle Oriente, Cumbres, San Pedro Garza García y Contry. El servicio a domicilio tiene un cargo adicional de $399 MXN. Contamos con van equipada con agua y electricidad propia.',
  },
  {
    question: '¿Aceptan tarjetas de crédito?',
    answer: 'Sí, aceptamos todas las tarjetas (Visa, Mastercard, AMEX), transferencia SPEI, efectivo y pago con QR. También ofrecemos meses sin intereses con tarjetas participantes.',
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
