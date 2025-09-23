// Define the structure of our translations
interface Translations {
  [key: string]: string;
}

// Define the structure of our translations object
interface TranslationsObject {
  [key: string]: Translations;
}

export const translations: TranslationsObject = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.vpns": "VPNs",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Find the Best VPN for Your Needs",
    "hero.subtitle": "Compare 100+ VPN services with detailed reviews, speed tests, and pricing. Expert recommendations and affiliate deals.",
    "hero.cta": "Compare VPNs Now",
    
    // VPN Page Hero
    "compareVpns": "Discover Premium VPN Solutions",
    "findPerfectVpn": "Expert-tested VPN services with unbeatable security, lightning-fast speeds, and global server coverage for ultimate online privacy.",
    "exclusiveDeals": "Get exclusive deals and save up to 70% on top-rated VPN services",
    
    // VPN Cards
    "vpn.rating": "Rating",
    "vpn.price": "Price",
    "vpn.features": "Key Features",
    "vpn.getdeal": "Get Deal",
    "vpn.review": "Read Review",
    "vpn.servers": "servers",
    "vpn.countries": "countries",
    "vpn.devices": "devices",
    "vpn.moneyback": "money-back guarantee",
    "vpn.freeTrial": "free trial",
    "vpn.noLogs": "no-logs policy",
    "vpn.killSwitch": "kill switch",
    "vpn.p2p": "P2P support",
    "vpn.streaming": "streaming optimized",
    "vpn.support": "24/7 support",
    
    // Footer
    "footer.description": "Your trusted source for VPN reviews and comparisons. We help you find the perfect VPN service for privacy, security, and streaming.",
    "footer.quickLinks": "Quick Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.disclaimer": "Disclaimer",
    "footer.copyright": "© 2025 BestVPN Reviews. All rights reserved.",
    
    // FAQ Page
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about VPNs, privacy, and our services.",
    "faq.search": "Search FAQs...",
    "faq.categories.all": "All Categories",
    "faq.categories.general": "General",
    "faq.categories.security": "Security",
    "faq.categories.streaming": "Streaming",
    "faq.categories.performance": "Performance",
    "faq.categories.pricing": "Pricing",
    "faq.categories.technical": "Technical",
    "showingResults": "Showing {count} of {total} results",
    "stillHaveQuestions": "Still Have Questions?",
    "cantFindAnswer": "Can't find the answer you're looking for? Our VPN experts are here to help you choose the perfect solution.",
    "noFaqsFound": "No FAQs found",
    "adjustSearch": "Try adjusting your search terms or browse all categories",
    "contactExperts": "Contact Our Experts",
    
    // Blog Page
    "blog.title": "VPN News & Guides",
    "blog.subtitle": "Stay updated with the latest VPN news, security tips, and comprehensive guides.",
    "blog.readMore": "Read More",
    "blog.publishedOn": "Published on",
    "blog.category": "Category",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? We're here to help you find the perfect VPN solution.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.response": "We typically respond within 24 hours",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.tryAgain": "Try Again",
    "common.close": "Close",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.yes": "Yes",
    "common.no": "No",
    "common.month": "month",
    "common.year": "year",
    "common.free": "Free",
    "common.premium": "Premium",
    "common.popular": "Popular",
    "common.recommended": "Recommended",
    "common.bestValue": "Best Value"
  },
  
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.vpns": "VPNs",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    
    // Hero Section
    "hero.title": "Encuentra la Mejor VPN para tus Necesidades",
    "hero.subtitle": "Compara más de 100 servicios VPN con reseñas detalladas, pruebas de velocidad y precios. Recomendaciones de expertos y ofertas de afiliados.",
    "hero.cta": "Comparar VPNs Ahora",
    
    // VPN Cards
    "vpn.rating": "Calificación",
    "vpn.price": "Precio",
    "vpn.features": "Características Clave",
    "vpn.getdeal": "Obtener Oferta",
    "vpn.review": "Leer Reseña",
    "vpn.servers": "servidores",
    "vpn.countries": "países",
    "vpn.devices": "dispositivos",
    "vpn.moneyback": "garantía de devolución",
    "vpn.freeTrial": "prueba gratuita",
    "vpn.noLogs": "política sin registros",
    "vpn.killSwitch": "interruptor de emergencia",
    "vpn.p2p": "soporte P2P",
    "vpn.streaming": "optimizado para streaming",
    "vpn.support": "soporte 24/7",
    
    // Footer
    "footer.description": "Tu fuente confiable para reseñas y comparaciones de VPN. Te ayudamos a encontrar el servicio VPN perfecto para privacidad, seguridad y streaming.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.disclaimer": "Descargo de Responsabilidad",
    "footer.copyright": "© 2025 BestVPN Reviews. Todos los derechos reservados.",
    
    // FAQ Page
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Encuentra respuestas a preguntas comunes sobre VPNs, privacidad y nuestros servicios.",
    "faq.search": "Buscar FAQs...",
    "faq.categories.all": "Todas las Categorías",
    "faq.categories.general": "General",
    "faq.categories.security": "Seguridad",
    "faq.categories.streaming": "Streaming",
    "faq.categories.performance": "Rendimiento",
    "faq.categories.pricing": "Precios",
    "faq.categories.technical": "Técnico",
    
    // Blog Page
    "blog.title": "Noticias y Guías VPN",
    "blog.subtitle": "Mantente actualizado con las últimas noticias VPN, consejos de seguridad y guías completas.",
    "blog.readMore": "Leer Más",
    "blog.publishedOn": "Publicado el",
    "blog.category": "Categoría",
    
    // Contact Page
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Tienes preguntas? Estamos aquí para ayudarte a encontrar la solución VPN perfecta.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.info": "Información de Contacto",
    "contact.response": "Típicamente respondemos dentro de 24 horas",
    
    // Common
    "common.loading": "Cargando...",
    "common.error": "Ocurrió un error",
    "common.tryAgain": "Intentar de Nuevo",
    "common.close": "Cerrar",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.yes": "Sí",
    "common.no": "No",
    "common.month": "mes",
    "common.year": "año",
    "common.free": "Gratis",
    "common.premium": "Premium",
    "common.popular": "Popular",
    "common.recommended": "Recomendado",
    "common.bestValue": "Mejor Valor"
  },
  
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.vpns": "VPNs",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
    
    // Hero Section
    "hero.title": "Finden Sie das beste VPN für Ihre Bedürfnisse",
    "hero.subtitle": "Vergleichen Sie über 100 VPN-Dienste mit detaillierten Bewertungen, Geschwindigkeitstests und Preisen. Expertenempfehlungen und Affiliate-Angebote.",
    "hero.cta": "VPNs jetzt vergleichen",
    
    // VPN Cards
    "vpn.rating": "Bewertung",
    "vpn.price": "Preis",
    "vpn.features": "Hauptmerkmale",
    "vpn.getdeal": "Angebot holen",
    "vpn.review": "Bewertung lesen",
    "vpn.servers": "Server",
    "vpn.countries": "Länder",
    "vpn.devices": "Geräte",
    "vpn.moneyback": "Geld-zurück-Garantie",
    "vpn.freeTrial": "kostenlose Testversion",
    "vpn.noLogs": "No-Logs-Richtlinie",
    "vpn.killSwitch": "Kill Switch",
    "vpn.p2p": "P2P-Unterstützung",
    "vpn.streaming": "Streaming-optimiert",
    "vpn.support": "24/7 Support",
    
    // Footer
    "footer.description": "Ihre vertrauenswürdige Quelle für VPN-Bewertungen und -Vergleiche. Wir helfen Ihnen, den perfekten VPN-Service für Privatsphäre, Sicherheit und Streaming zu finden.",
    "footer.quickLinks": "Schnelle Links",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "footer.disclaimer": "Haftungsausschluss",
    "footer.copyright": "© 2025 BestVPN Reviews. Alle Rechte vorbehalten.",
    
    // FAQ Page
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle": "Finden Sie Antworten auf häufige Fragen zu VPNs, Datenschutz und unseren Diensten.",
    "faq.search": "FAQs durchsuchen...",
    "faq.categories.all": "Alle Kategorien",
    "faq.categories.general": "Allgemein",
    "faq.categories.security": "Sicherheit",
    "faq.categories.streaming": "Streaming",
    "faq.categories.performance": "Leistung",
    "faq.categories.pricing": "Preise",
    "faq.categories.technical": "Technisch",
    
    // Blog Page
    "blog.title": "VPN-Nachrichten & Anleitungen",
    "blog.subtitle": "Bleiben Sie auf dem Laufenden mit den neuesten VPN-Nachrichten, Sicherheitstipps und umfassenden Anleitungen.",
    "blog.readMore": "Mehr lesen",
    "blog.publishedOn": "Veröffentlicht am",
    "blog.category": "Kategorie",
    
    // Contact Page
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Haben Sie Fragen? Wir sind hier, um Ihnen bei der Suche nach der perfekten VPN-Lösung zu helfen.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.info": "Kontaktinformationen",
    "contact.response": "Wir antworten normalerweise innerhalb von 24 Stunden",
    
    // Common
    "common.loading": "Laden...",
    "common.error": "Ein Fehler ist aufgetreten",
    "common.tryAgain": "Erneut versuchen",
    "common.close": "Schließen",
    "common.save": "Speichern",
    "common.cancel": "Abbrechen",
    "common.yes": "Ja",
    "common.no": "Nein",
    "common.month": "Monat",
    "common.year": "Jahr",
    "common.free": "Kostenlos",
    "common.premium": "Premium",
    "common.popular": "Beliebt",
    "common.recommended": "Empfohlen",
    "common.bestValue": "Bester Wert"
  }
};

export type { Translations, TranslationsObject };