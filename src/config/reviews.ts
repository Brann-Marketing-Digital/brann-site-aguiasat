/**
 * Avaliações do Google exibidas na home.
 * Atualize manualmente quando houver novas.
 */

export interface Review {
  /** Só o primeiro nome e a inicial do sobrenome (LGPD). */
  name: string;
  rating: number;
  text: string;
  publishedAt: string;
  url: string;
}

export const googleReviews = {
  rating: 4.3,
  count: 44,
  /** Avaliação de 5 estrelas com texto, da mais recente para a mais antiga. */
  items: [
    {
      name: 'Joyce F.',
      rating: 5,
      text: 'Excelente serviço prestado, respondem rápido, pós venda muito bem feito, sempre que preciso eles estão a disposição.',
      publishedAt: '2026-06-25T14:29:23Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNPX2VEWHVRRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgICO_eDXuQE%7C%7C',
    },
    {
      name: 'Silvio P.',
      rating: 5,
      text: 'Empresa de Rastreadores com muita Qualidade e Profissionalismo',
      publishedAt: '2026-03-20T21:23:58Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kxWmExQjZjbkJCTm1JeWNqSmxTMDloZDFOSExVRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CAIQACodChtycF9oOi1Za1B6cnBBNmIycjJlS09hd1NHLUE%7C%7C',
    },
    {
      name: 'João S.',
      rating: 5,
      text: 'Superou minhas expectativas.',
      publishedAt: '2026-03-20T18:51:30Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pCc2VuSllkM1pEV0MwMlNEY3lhakJNUTNaSVJsRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CAIQACodChtycF9oOjBsenJYd3ZDWC02SDcyajBMQ3ZIRlE%7C%7C',
    },
    {
      name: 'AS Distribuidora de bebidas',
      rating: 5,
      text: 'Uso o serviço a anos, são muito eficientes no que fazem, a melhor do Sul do mundo',
      publishedAt: '2026-03-20T17:49:52Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xWMFZGUkpkMFF4V1hsUGMwWnFORGhRTVhCa04wRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CAIQACodChtycF9oOlV0VFRJd0QxWXlPc0ZqNDhQMXBkN0E%7C%7C',
    },
    {
      name: 'Jaison P.',
      rating: 5,
      text: 'Uso os serviços da Águiasat a anos, e a qualidade, agilidade e ótimo atendimento nunca deixaram a desejar.',
      publishedAt: '2025-09-18T12:49:00Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25sdGJVZDVRMmxxYjNKallURnZTeTFLZW1wQ1VFRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CAIQACodChtycF9oOnltbUd5Q2lqb3JjYTFvSy1KempCUEE%7C%7C',
    },
    {
      name: 'Rosana M.',
      rating: 5,
      text: 'Instalei meu rastreador em Porto Alegre. Muito bom o atendimento, o Técnico veio no domingo aqui casa. •Muito bom atendimento',
      publishedAt: '2022-10-27T14:57:13Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMtcEwtOTRnRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-pL-94gE%7C%7C',
    },
    {
      name: 'Calibra S.',
      rating: 5,
      text: 'Excelente',
      publishedAt: '2022-10-25T20:38:24Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMteVBxQTJnRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-yPqA2gE%7C%7C',
    },
    {
      name: 'Jessica A.',
      rating: 5,
      text: 'Ótima empresa que presta um serviço excelente, melhor empresa de rastreamento de SC!!!!',
      publishedAt: '2022-10-25T19:49:28Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMteUl6b1lBEAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-yIzoYA%7C%7C',
    },
    {
      name: 'Maicon F.',
      rating: 5,
      text: 'Atendimento de primeira,pessoal excelente. Colaboradores muito educados e prestativos.',
      publishedAt: '2022-10-25T19:34:22Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMteUlUUFRnEAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-yITPTg%7C%7C',
    },
    {
      name: 'Mauricio H.',
      rating: 5,
      text: 'Muito bom. Rápido e valor acessível. Na minha empresa todos carro são águia sat. Para controle da frota. Top nota 10',
      publishedAt: '2022-10-25T19:11:42Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMteUxDWUZREAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-yLCYFQ%7C%7C',
    },
    {
      name: 'Luan J.',
      rating: 5,
      text: 'Atendimento top e técnicos profissionais recomendo 👍',
      publishedAt: '2022-10-25T19:00:56Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMteUlETFlBEAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-yIDLYA%7C%7C',
    },
    {
      name: 'Vinicius K.',
      rating: 5,
      text: 'Ótimo serviço, atendimento muito bom, me atenderam antes do previsto e foram super educados👏🏼',
      publishedAt: '2022-10-25T18:10:58Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMtaVBQazJnRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-iPPk2gE%7C%7C',
    },
    {
      name: 'Bianca',
      rating: 5,
      text: 'Empresa de qualidade, atendimento incrível, super atenciosos e eficientes!!👏🏻',
      publishedAt: '2022-10-25T18:05:36Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtaUoza2F3EAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-iJ3kaw%7C%7C',
    },
    {
      name: 'Maria E.',
      rating: 5,
      text: 'Experiência incrível, atendimento da melhor qualidade, super eficientes 😁😁',
      publishedAt: '2022-10-25T18:04:06Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtaUozRU93EAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-iJ3EOw%7C%7C',
    },
    {
      name: 'Lohanna B.',
      rating: 5,
      text: 'Ótima empresa, atendimento diferenciado e super rápido. Muito eficientes. 👏🏻👏🏻',
      publishedAt: '2022-10-25T18:02:43Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMtaU8yenNRRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-iO2zsQE%7C%7C',
    },
    {
      name: 'Francine V.',
      rating: 5,
      text: 'Ótimo atendimento, muito ágil, prestativo e eficiente!',
      publishedAt: '2022-10-25T17:59:03Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtaUlQbllnEAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIC-iIPnYg%7C%7C',
    },
    {
      name: 'Gustavo F.',
      rating: 5,
      text: 'Empresa muito prestativa e com ótimo atendimento.',
      publishedAt: '2021-03-31T11:31:16Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN5M2M2aUZnEAE!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgICy3c6iFg%7C%7C',
    },
    {
      name: 'Thiago F.',
      rating: 5,
      text: 'Melhor sistema de rastreamento por um preço excelente',
      publishedAt: '2020-12-18T20:03:23Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURTd3RQS3ZBRRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgIDSwtPKvAE%7C%7C',
    },
    {
      name: 'Vilmar B.',
      rating: 5,
      text: 'Top. Pessoal comprometido. Sistema muito confiável.',
      publishedAt: '2018-07-09T10:57:42Z',
      url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNnb3U3R2p3RRAB!2m1!1s0x0:0x9973f1d466a7391d!3m1!1s2@1:CIHM0ogKEICAgICgou7GjwE%7C%7C',
    },
  ] satisfies Review[],
};
