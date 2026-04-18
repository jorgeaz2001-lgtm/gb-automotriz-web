export interface Vehicle {
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    motor: string;
    potencia: string;
    transmision: string;
    combustible: string;
    traccion: string;
  };
}

export const vehicles: Record<string, Vehicle> = {
  territory: {
    slug: "territory",
    brand: "Ford",
    model: "Ford Territory",
    year: 2026,
    price: "$599,000 - $798,500",
    image: "/images/cars/territory.png",
    description:
      "Disfruta de viajes seguros y placenteros con tu familia gracias al amplio espacio y moderno diseño de Ford Territory 2026, SUV de Gran Tecnología que ofrece todo lo que necesitas para convertir cada viaje en una experiencia inolvidable.",
    features: [
      "Tecnología y Rendimiento en una SUV",
      "Amplio espacio interior",
      "Diseño moderno",
      "Gran tecnología integrada",
      "Seguridad avanzada",
      "Confort para toda la familia",
    ],
    specs: {
      motor: "1.8L EcoBoost",
      potencia: "190 HP",
      transmision: "Automática",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  mazda2: {
    slug: "mazda2",
    brand: "Mazda",
    model: "Mazda 2",
    year: 2025,
    price: "$301,900 - $398,900",
    image: "/images/cars/mazda2.jpg",
    description:
      "El Mazda 2 combina diseño elegante con tecnología avanzada. Faros LED con función de encendido y apagado automático, rines de aleación de aluminio de 16″, sistema de monitoreo de presión de llantas (TPMS) y cámara de visión trasera.",
    features: [
      "Faros LED con encendido automático",
      "Rines de aluminio de 16″",
      "TPMS",
      "Cámara de visión trasera",
      "Diseño elegante",
      "Tecnología avanzada",
    ],
    specs: {
      motor: "1.5L Skyactiv",
      potencia: "110 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  "p-22": {
    slug: "p-22",
    brand: "DFAC",
    model: "DFAC P22",
    year: 2025,
    price: "$467,900 - $517,900",
    image: "/images/cars/p22.jpg",
    description:
      "Una nueva generación de líderes. Robustez y eficiencia para el trabajo diario. Combina potencia y capacidad de carga para enfrentar los retos del día a día.",
    features: [
      "Robustez y eficiencia",
      "Gran capacidad de carga",
      "Potencia confiable",
      "Diseño funcional",
      "Ideal para trabajo",
      "Durabilidad garantizada",
    ],
    specs: {
      motor: "2.0L Turbo Diesel",
      potencia: "140 HP",
      transmision: "Manual 6 vel",
      combustible: "Diésel",
      traccion: "4x2",
    },
  },
  "ram-700": {
    slug: "ram-700",
    brand: "Ram",
    model: "Ram 700",
    year: 2025,
    price: "$339,900 - $517,900",
    image: "/images/cars/ram-700.jpg",
    description:
      "Excelente capacidad para cualquier tipo de trabajo. Exclusivo equipamiento interior y exterior que destaca. La pickup compacta más capaz del mercado.",
    features: [
      "Capacidad de carga superior",
      "Equipamiento exclusivo",
      "Diseño robusto",
      "Versatilidad total",
      "Confort interior",
      "Tecnología conectada",
    ],
    specs: {
      motor: "1.4L Tigershark",
      potencia: "85 HP",
      transmision: "Manual 5 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  "peugeot-2009": {
    slug: "peugeot-2009",
    brand: "Peugeot",
    model: "Peugeot 2008",
    year: 2025,
    price: "$463,900 - $545,900",
    image: "/images/cars/peugeot-2008.jpg",
    description:
      "La nueva SUV PEUGEOT 2008 redefine sin esfuerzo los códigos estéticos del segmento, con un estilo contundente: nuevas luces LED, tanto delanteras como traseras, una nueva y amplia parrilla que enmarca el nuevo escudo de PEUGEOT y nuevos rines de aluminio.",
    features: [
      "Luces LED delanteras y traseras",
      "Parrilla amplia con escudo PEUGEOT",
      "Rines de aluminio de 17″",
      "Motor turbo",
      "SUV compacta moderna",
      "Diseño contundente",
    ],
    specs: {
      motor: "1.2L Turbo",
      potencia: "130 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  "pulse-fiat": {
    slug: "pulse-fiat",
    brand: "Fiat",
    model: "Fiat Pulse",
    year: 2025,
    price: "$355,900 - $432,900",
    image: "/images/cars/pulse-fiat.jpg",
    description:
      "Conoce el nuevo SUV de Fiat® y acelera tu pulso con su auténtico diseño italiano, dinámico y moderno, característico de Fiat® con el que seguro robarás miradas.",
    features: [
      "Diseño italiano auténtico",
      "Dinámico y moderno",
      "Tecnología conectada",
      "Estilo único",
      "Versatilidad urbana",
      "Confort superior",
    ],
    specs: {
      motor: "1.3L Firefly",
      potencia: "101 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  navigator: {
    slug: "navigator",
    brand: "Lincoln",
    model: "Lincoln Navigator",
    year: 2025,
    price: "$2,599,900 - $3,079,900",
    image: "/images/cars/navigator.png",
    description:
      "Conoce la totalmente nueva Lincoln Navigator 2025, la camioneta que redefine el lujo con su diseño audaz y un interior que cautiva. Su tecnología Lincoln Digital Experience, junto a su pantalla panorámica de 48 pulgadas y funciones como Lincoln Rejuvenate transforman cada viaje en una experiencia de spa en movimiento.",
    features: [
      "Pantalla panorámica 48″",
      "Lincoln Digital Experience",
      "Lincoln Rejuvenate",
      "Asientos de piel premium",
      "Sistema Revel Ultima 3D",
      "Lincoln Co-Pilot360",
    ],
    specs: {
      motor: "3.5L V6 Biturbo",
      potencia: "450 HP",
      transmision: "Automática 10 vel",
      combustible: "Gasolina",
      traccion: "4x4",
    },
  },
  "x-70": {
    slug: "x-70",
    brand: "Jetour",
    model: "Jetour X70",
    year: 2025,
    price: "$439,900",
    image: "/images/cars/x70.jpeg",
    description:
      "Conducción segura y disfrute de la vida. Alto Factor de Seguridad EPB+AUTOHOLD. Motor con garantía prolongada. La suspensión independiente multibrazo con barra estabilizadora mejora la estabilidad de conducción.",
    features: [
      "EPB + AUTOHOLD",
      "Motor con garantía prolongada",
      "Suspensión independiente multibrazo",
      "Barra estabilizadora",
      "Alta seguridad",
      "Estabilidad de conducción",
    ],
    specs: {
      motor: "1.5L Turbo",
      potencia: "156 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  attitude: {
    slug: "attitude",
    brand: "Dodge",
    model: "Dodge Attitude",
    year: 2025,
    price: "$398,900",
    image: "/images/cars/attitude.jpg",
    description:
      "El nuevo DODGE ATTITUDE R/T cuenta con un imponente diseño frontal y lateral, con líneas de carácter robustas, que hablan de su atractiva potencia. Diseño deportivo con líneas agresivas y contornos dinámicos.",
    features: [
      "Diseño deportivo R/T",
      "Líneas agresivas",
      "Contornos dinámicos",
      "Imponente diseño frontal",
      "Carácter robusto",
      "Potencia atractiva",
    ],
    specs: {
      motor: "1.2L Turbo",
      potencia: "116 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
};

export function getVehiclesByBrand(brandName: string): Vehicle[] {
  return Object.values(vehicles).filter(
    (v) => v.brand.toLowerCase() === brandName.toLowerCase()
  );
}

export function getAllVehicles(): Vehicle[] {
  return Object.values(vehicles);
}
