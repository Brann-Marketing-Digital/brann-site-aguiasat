/**
 * Dados do cliente em um só lugar. Nenhum componente deve ter nome, telefone,
 * endereço ou link de rede social escrito direto no HTML: tudo vem daqui.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  /** Nome do ícone no formato astro-icon (coleção:nome). */
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  locale: string;
  description: string;
  contact: {
    phone: string;
    phoneHref: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
    address: string;
    hours: string;
    hoursNote: string;
  };
  stats: { supportPoints: number };
  socials: SocialLink[];
  nav: NavItem[];
  cta: NavItem;
}

const whatsappNumber = '5548991304184';

export const site: SiteConfig = {
  name: 'ÁguiaSat',
  tagline: 'Sistemas de Rastreamento',
  url: 'https://www.aguiasatsistemas.com.br',
  locale: 'pt-BR',
  description:
    'Rastreamento e monitoramento 24h de veículos, embarcações e máquinas, com atuação em todo o Brasil.',
  contact: {
    phone: '0800 550 7979',
    phoneHref: 'tel:08005507979',
    whatsappNumber,
    whatsappDisplay: '(48) 99130-4184',
    email: 'suporte@aguiasatsistemas.com.br',
    address: 'Av. Patrício Lima, 601 - Humaitá, Tubarão - SC, 88704-410',
    hours: 'Seg - Sex, 08:00 – 18:00',
    hoursNote: 'Plantão 24h',
  },
  stats: { supportPoints: 350 },
  socials: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/aguiasatrastreamento',
      icon: 'simple-icons:facebook',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/aguiasat/',
      icon: 'simple-icons:instagram',
    },
  ],
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos/' },
    { label: 'Produtos', href: '/produtos/' },
    { label: 'Contato', href: '/contato/' },
    { label: 'Blog', href: '/blog/' },
  ],
  cta: { label: 'Teste grátis', href: '/contato/' },
};

/** Monta um link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message?: string): string {
  const base = `https://api.whatsapp.com/send/?phone=${site.contact.whatsappNumber}`;
  return message
    ? `${base}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`
    : base;
}
