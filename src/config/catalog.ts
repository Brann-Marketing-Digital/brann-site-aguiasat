import type { ImageMetadata } from 'astro';

import iconAplicativo from '../assets/home/icone-aplicativo.png';
import iconEmbarcacoes from '../assets/home/icone-embarcacoes.png';
import iconMaquinas from '../assets/home/icone-maquinas.png';
import iconMonitoramento from '../assets/home/icone-monitoramento.avif';
import iconProntaResposta from '../assets/home/icone-pronta-resposta.png';
import iconRelatorios from '../assets/home/icone-relatorios.avif';
import iconVeiculos from '../assets/home/icone-veiculos.png';
import prodAntiJammer from '../assets/home/produto-anti-jammer.png';
import prodBloqueador from '../assets/home/produto-bloqueador.png';
import prodCameras from '../assets/home/produto-cameras.png';
import prodIdentificador from '../assets/home/produto-identificador-motoristas.png';
import prodRastreador from '../assets/home/produto-rastreador.avif';
import prodSensor from '../assets/home/produto-sensor-plataforma.png';
import photoAplicativo from '../assets/servicos/aplicativo.jpg';
import photoEmbarcacoes from '../assets/servicos/embarcacoes.jpg';
import photoMaquinas from '../assets/servicos/maquinas.png';
import photoMonitoramento from '../assets/servicos/monitoramento.jpg';
import photoProntaResposta from '../assets/servicos/pronta-resposta.jpg';
import photoRelatorios from '../assets/servicos/relatorios.png';
import photoVeiculos from '../assets/servicos/veiculos.webp';

export interface Service {
  /** Rótulo em duas linhas na home: [linha normal, linha em destaque] ou ao contrário. */
  homeLabel: { regular?: string; strong?: string; order: 'regular-first' | 'strong-first' };
  title: string;
  description: string;
  icon: ImageMetadata;
  /** Ícone quadrado (199px) que deve caber inteiro, sem o recorte 185×106 dos demais. */
  iconContain?: boolean;
  photo: ImageMetadata;
  photoAlt: string;
}

export interface Product {
  name: string;
  /** Rótulo da home quando difere do nome (quebra de linha). */
  homeLabel?: string[];
  description?: string;
  icon: ImageMetadata;
  iconAlt: string;
}

export const services: Service[] = [
  {
    homeLabel: { regular: 'Monitoramento', strong: '24/7', order: 'regular-first' },
    title: 'Monitoramento 24/7',
    description:
      'Na ÁguiaSat, o monitoramento é realizado 24 horas por dia, 7 dias por semana, combinando tecnologia de ponta com a atuação constante de nossa central especializada e agentes dedicados. Acompanhamos cada movimento em tempo real, prontos para agir diante de qualquer situação suspeita. Mais do que vigilância, oferecemos proteção ativa e contínua.',
    icon: iconMonitoramento,
    iconContain: true,
    photo: photoMonitoramento,
    photoAlt: 'Vista aérea de rodovia com veículos monitorados',
  },
  {
    homeLabel: { regular: 'Equipes de', strong: 'Pronta Resposta', order: 'regular-first' },
    title: 'Equipes de Pronta Resposta',
    description:
      'Quando o tempo é essencial, a resposta precisa ser imediata. A ÁguiaSat conta com equipes táticas preparadas para atuar com agilidade em casos de furto, roubo ou emergência. Com suporte da nossa central e integração direta com as autoridades, garantimos uma recuperação rápida e eficiente dos bens monitorados.',
    icon: iconProntaResposta,
    photo: photoProntaResposta,
    photoAlt: 'Agente de segurança com rádio comunicador',
  },
  {
    homeLabel: { regular: 'Rastreamento de', strong: 'Veículos', order: 'regular-first' },
    title: 'Rastreamento de Veículos',
    description:
      'Trabalhamos com sistemas avançados de rastreamento via GPS e GSM, que permitem acompanhar a localização, velocidade, rotas e comportamento dos veículos em tempo real. Ideal tanto para uso pessoal quanto para gestão de frotas, nossas soluções oferecem segurança, economia e controle total sobre cada deslocamento.',
    icon: iconVeiculos,
    photo: photoVeiculos,
    photoAlt: 'Trânsito de carros e motos em avenida',
  },
  {
    homeLabel: { regular: 'Rastreamento de', strong: 'Embarcações', order: 'regular-first' },
    title: 'Rastreamento de Embarcações',
    description:
      'Com a tecnologia ÁguiaSat, é possível rastrear embarcações e jet skis em tempo real, garantindo segurança durante a navegação e ancoragem. Nossos sistemas permitem acompanhar rotas, emitir alertas de movimento e informar o posicionamento geográfico com precisão, proporcionando tranquilidade tanto para uso particular quanto profissional.',
    icon: iconEmbarcacoes,
    photo: photoEmbarcacoes,
    photoAlt: 'Píer de marina com embarcações',
  },
  {
    homeLabel: { regular: 'Rastreamento de', strong: 'Máquinas', order: 'regular-first' },
    title: 'Rastreamento de Máquinas',
    description:
      'A ÁguiaSat oferece soluções completas para o rastreamento de máquinas e equipamentos pesados, permitindo gestão eficiente do uso, localização e desempenho operacional. Com informações em tempo real, sua empresa reduz custos, evita perdas e aumenta a eficiência das operações.',
    icon: iconMaquinas,
    photo: photoMaquinas,
    photoAlt: 'Escavadeira amarela em operação',
  },
  {
    homeLabel: { regular: 'Aplicativo e', strong: 'Sistemas Inteligentes', order: 'regular-first' },
    title: 'Aplicativo e Sistema Inteligentes',
    description:
      'Nosso aplicativo e sistema web foram desenvolvidos para oferecer monitoramento completo e intuitivo, com acompanhamento em tempo real, alertas instantâneos, histórico detalhado e relatórios personalizados. A tecnologia da ÁguiaSat coloca o controle nas suas mãos, de forma simples, moderna e segura.',
    icon: iconAplicativo,
    photo: photoAplicativo,
    photoAlt: 'Pessoa usando celular e notebook',
  },
  {
    homeLabel: { strong: 'Relatórios', regular: 'logísticos', order: 'strong-first' },
    title: 'Relatórios',
    description:
      'A ÁguiaSat disponibiliza relatórios completos e personalizados que transformam os dados coletados pelos sistemas de rastreamento em insights práticos para gestão e tomada de decisão. Com eles, é possível acompanhar trajetos, paradas, consumo de combustível, velocidade, histórico de eventos e desempenho operacional, tudo em formato simples e de fácil análise.',
    icon: iconRelatorios,
    photo: photoRelatorios,
    photoAlt: 'Mapa com trajeto percorrido por um veículo',
  },
];

export const products: Product[] = [
  {
    name: 'Rastreador',
    description:
      'Os rastreadores ÁguiaSat utilizam tecnologia de alta precisão para oferecer monitoramento completo e em tempo real. Compactos e eficientes, permitem o acompanhamento da localização, rotas, velocidade e histórico de deslocamento, garantindo segurança e controle total sobre veículos, máquinas, embarcações e outros bens.',
    icon: prodRastreador,
    iconAlt: 'Ícone de chip rastreador',
  },
  {
    name: 'Bloqueador',
    description:
      'Com o sistema de bloqueio remoto, você tem o poder de interromper o funcionamento do veículo em casos de roubo, furto ou uso indevido. A função é acionada de forma rápida e segura pelo aplicativo ou pela central, garantindo uma resposta imediata e eficaz.',
    icon: prodBloqueador,
    iconAlt: 'Ícone de cadeado',
  },
  {
    name: 'Anti Jammer',
    description:
      'O Anti Jammer foi desenvolvido para proteger seus bens contra tentativas de bloqueio de sinal por dispositivos ilícitos. Ao detectar a presença de um jammer, o sistema aciona automaticamente o bloqueio do veículo, impedindo a continuidade da movimentação e evitando o roubo da carga. Uma tecnologia de reação imediata que assegura a proteção mesmo em situações de risco extremo.',
    icon: prodAntiJammer,
    iconAlt: 'Ícone de proteção contra bloqueio de sinal',
  },
  {
    name: 'Sensor de Plataforma',
    description:
      'O sensor de plataforma ÁguiaSat é ideal para veículos de carga e transporte. Ele identifica o acionamento de guinchos, basculantes e caçambas, fornecendo alertas em tempo real e registrando cada evento no sistema. Assim, é possível ter controle total sobre a operação e evitar uso indevido ou acidentes.',
    icon: prodSensor,
    iconAlt: 'Ícone de sensor de sinal',
  },
  {
    name: 'Identificador de motoristas',
    homeLabel: ['Identificador de', 'motoristas'],
    description:
      'Com o identificador de motorista, cada condutor é reconhecido individualmente antes de iniciar a operação do veículo. O sistema registra quem está ao volante, garantindo mais controle, segurança e transparência nas frotas corporativas. É a solução ideal para empresas que valorizam a gestão e a responsabilidade operacional.',
    icon: prodIdentificador,
    iconAlt: 'Ícone de identificação de motorista',
  },
  {
    // Aparece só na home; a página de produtos não a detalha.
    name: 'Câmeras',
    icon: prodCameras,
    iconAlt: 'Ícone de câmera',
  },
];
