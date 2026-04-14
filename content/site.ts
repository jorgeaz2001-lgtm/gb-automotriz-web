export type NavItem = {
  label: string;
  href: string;
};

/** Contact URL for inquiries */
export const CONTACT_URL = "/contact";

export const siteConfig = {
  siteName: "GB Automotriz",
  companyName: "GB Automotriz S.A. de C.V.",
  slogan: "Grupo Líder Automotriz en el Noroeste",
  ctaLabel: "Cotizar Ahora",
  ctaHref: CONTACT_URL,
  languages: ["ESPAÑOL"],
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Unidades", href: "#unidades" },
    { label: "Requisitos", href: "#requisitos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "/contact" }
  ] satisfies NavItem[],
  whatsapp: "+526681030004",
  phone: "+526681030004",
  email: "contacto@gbautomotriz.mx",
  address: "Culiacán, Sinaloa, México",
  footer: {
    address: "Culiacán, Sinaloa, México",
    email: "contacto@gbautomotriz.mx",
    phone: "+52 668 103 0004",
    legalLinks: [
      { label: "Aviso de Privacidad", href: "/privacidad" },
      { label: "Términos y Condiciones", href: "/terminos" }
    ],
    socialLinks: [
      { label: "WhatsApp", href: "https://wa.me/526681030004" },
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" }
    ]
  }
};
