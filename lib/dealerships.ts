// Sucursales GB Automotriz
// Datos extraídos de las imágenes enviadas por el cliente

export interface Dealership {
  city: string;
  phone: string;
  whatsapp: string;
}

export interface BrandGroup {
  name: string;
  displayName: string;
  dealerships: Dealership[];
}

// Coordenadas aproximadas de las ciudades para geolocalización
export const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  "Culiacán": { lat: 24.8091, lng: -107.3940 },
  "Ciudad Obregón": { lat: 27.4892, lng: -109.9352 },
  "Los Mochis": { lat: 25.7954, lng: -108.9859 },
  "Mazatlán": { lat: 23.2494, lng: -106.4111 },
  "Los Cabos": { lat: 22.8905, lng: -109.9167 },
  "Hermosillo": { lat: 29.0729, lng: -110.9559 },
  "Guadalajara": { lat: 20.6597, lng: -103.3496 },
};

export const brandGroups: BrandGroup[] = [
  {
    name: "ford",
    displayName: "Ford",
    dealerships: [
      { city: "Culiacán", phone: "6675032395", whatsapp: "526675032395" },
      { city: "Ciudad Obregón", phone: "6442222834", whatsapp: "526442222834" },
      { city: "Los Mochis", phone: "6682533839", whatsapp: "526682533839" },
    ],
  },
  {
    name: "mazda",
    displayName: "Mazda",
    dealerships: [
      { city: "Los Cabos", phone: "6241840641", whatsapp: "526241840641" },
      { city: "Culiacán", phone: "6674672828", whatsapp: "526674672828" },
      { city: "Mazatlán", phone: "6699184897", whatsapp: "526699184897" },
    ],
  },
  {
    name: "lincoln",
    displayName: "Lincoln",
    dealerships: [
      { city: "Culiacán", phone: "6673038502", whatsapp: "526673038502" },
    ],
  },
  {
    name: "dongfeng",
    displayName: "Dongfeng",
    dealerships: [
      { city: "Culiacán", phone: "6673038702", whatsapp: "526673038702" },
      { city: "Ciudad Obregón", phone: "6442220969", whatsapp: "526442220969" },
      { city: "Hermosillo", phone: "6621233933", whatsapp: "526621233933" },
      { city: "Guadalajara", phone: "3322567752", whatsapp: "523322567752" },
    ],
  },
  {
    name: "stellantis",
    displayName: "Stellantis",
    dealerships: [
      { city: "Ciudad Obregón", phone: "6442220568", whatsapp: "526442220568" },
    ],
  },
  {
    name: "jetour",
    displayName: "Jetour",
    dealerships: [
      { city: "Culiacán", phone: "6671025850", whatsapp: "526671025850" },
      { city: "Ciudad Obregón", phone: "6442044858", whatsapp: "526442044858" },
    ],
  },
];

// Mapeo de marcas individuales al grupo correspondiente
export const brandToGroup: Record<string, string> = {
  ford: "ford",
  lincoln: "lincoln",
  mazda: "mazda",
  peugeot: "stellantis",
  fiat: "stellantis",
  dodge: "stellantis",
  ram: "stellantis",
  jeep: "stellantis",
  dfac: "dongfeng",
  jetour: "jetour",
};

export const allCities = Array.from(
  new Set(brandGroups.flatMap((b) => b.dealerships.map((d) => d.city)))
).sort();

// Distancia haversine en km
export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function findNearestCity(lat: number, lng: number): string | null {
  let nearest: string | null = null;
  let minDist = Infinity;

  for (const [city, coords] of Object.entries(cityCoordinates)) {
    const dist = haversineDistance(lat, lng, coords.lat, coords.lng);
    if (dist < minDist) {
      minDist = dist;
      nearest = city;
    }
  }

  return nearest;
}

export function getDealershipsByCity(city: string): { brand: BrandGroup; dealership: Dealership }[] {
  return brandGroups
    .map((brand) => {
      const dealership = brand.dealerships.find((d) => d.city === city);
      return dealership ? { brand, dealership } : null;
    })
    .filter(Boolean) as { brand: BrandGroup; dealership: Dealership }[];
}

export function getGroupByBrand(brandSlug: string): BrandGroup | undefined {
  const groupName = brandToGroup[brandSlug.toLowerCase()];
  return brandGroups.find((g) => g.name === groupName);
}

export function getDealershipForBrandAndCity(
  brandSlug: string,
  city: string
): Dealership | null {
  const group = getGroupByBrand(brandSlug);
  if (!group) return null;
  return group.dealerships.find((d) => d.city === city) || null;
}

export function generateWhatsAppLink(
  phone: string,
  brand: string,
  city: string,
  vehicleModel?: string
): string {
  const modelText = vehicleModel ? ` el ${vehicleModel}` : "";
  const message = `Hola, me interesa obtener información${modelText} de ${brand} en ${city}. ¿Podrían ayudarme?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
