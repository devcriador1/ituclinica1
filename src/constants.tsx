

import React from 'react';
import { AlergologiaIcon } from './components/icons/AlergologiaIcon';
import { CardiologiaIcon } from './components/icons/CardiologiaIcon';
import { CirurgiaIcon } from './components/icons/CirurgiaIcon';
import { CirurgiaPlasticaIcon } from './components/icons/CirurgiaPlasticaIcon';
import { ClinicoGeralIcon } from './components/icons/ClinicoGeralIcon';
import { DermatologiaIcon } from './components/icons/DermatologiaIcon';
import { EndocrinologiaIcon } from './components/icons/EndocrinologiaIcon';
import { EsteticaIcon } from './components/icons/EsteticaIcon';
import { FonoaudiologiaIcon } from './components/icons/FonoaudiologiaIcon';
import { GastroenterologiaIcon } from './components/icons/GastroenterologiaIcon';
import { GeriatriaIcon } from './components/icons/GeriatriaIcon';
import { GinecologiaIcon } from './components/icons/GinecologiaIcon';
import { HomeopatiaIcon } from './components/icons/HomeopatiaIcon';
import { NeurologiaIcon } from './components/icons/NeurologiaIcon';
import { NeuropsicopedagogiaIcon } from './components/icons/NeuropsicopedagogiaIcon';
import { OftalmologiaIcon } from './components/icons/OftalmologiaIcon';
import { OrtopediaIcon } from './components/icons/OrtopediaIcon';
import { OtorrinolaringologiaIcon } from './components/icons/OtorrinolaringologiaIcon';
import { PediatriaIcon } from './components/icons/PediatriaIcon';
import { PneumologiaIcon } from './components/icons/PneumologiaIcon';
import { PsicanaliseIcon } from './components/icons/PsicanaliseIcon';
import { PsicologiaIcon } from './components/icons/PsicologiaIcon';
import { PsicopedagogiaIcon } from './components/icons/PsicopedagogiaIcon';
import { PsiquiatriaIcon } from './components/icons/PsiquiatriaIcon';
import { UrologiaIcon } from './components/icons/UrologiaIcon';
import { VentosaterapiaIcon } from './components/icons/VentosaterapiaIcon';

export const WHATSAPP_NUMBER = '5511914578992';
export const WHATSAPP_APPOINTMENT_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta.`;
export const WHATSAPP_OCCUPATIONAL_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20Medicina%20do%20Trabalho.`;
const WHATSAPP_BASE_URL_WITH_TEXT = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Ola%20gostaria%20de%20saber%20mais%20sobre%20`;

// Lista simplificada conforme solicitado anteriormente
export const specialtiesData = [
  {
    id: 5,
    icon: <ClinicoGeralIcon />,
    title: 'CLÍNICO GERAL',
    description: 'Possuí conhecimento aprofundado do corpo humano, faz diagnósticos, pede exames, prescreve medicamentos.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}clinico%20geral`
  },
  {
    id: 22,
    icon: <PsicologiaIcon />,
    title: 'PSICÓLOGA',
    description: 'Ciência que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}psicologia`
  },
  {
    id: 19,
    icon: <PediatriaIcon />,
    title: 'PEDIATRA / CLÍNICO',
    description: 'Cuida de recém-nascidos, crianças e adolescentes nos seus diversos aspectos, sejam eles preventivos ou curativos.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}pediatria`
  },
  {
    id: 16,
    icon: <OftalmologiaIcon />,
    title: 'OFTALMOLOGISTA',
    description: 'Diagnostica e trata doenças do sistema visual, analisa hábitos, e condições de vida do paciente.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}oftalmologia`
  },
  {
    id: 27, 
    icon: <GastroenterologiaIcon />, 
    title: 'NUTRICIONISTA',
    description: 'Profissional de saúde que avalia o estado nutricional e planeja a alimentação.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}nutricionista`
  },
  {
    id: 7,
    icon: <EndocrinologiaIcon />,
    title: 'ENDOCRINOLOGISTA',
    description: 'Cuida do tratamento de pacientes diabéticos e outras doenças relacionadas aos hormônios.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}endocrinologia`
  },
  {
    id: 17,
    icon: <OrtopediaIcon />,
    title: 'ORTOPEDISTA',
    description: 'Procura corrigir ou evitar as deformações do corpo humano através de exercícios corporais ou diversos aparelhos.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}ortopedia`
  },
  {
    id: 6,
    icon: <DermatologiaIcon />,
    title: 'DERMATOLOGISTA',
    description: 'Cuida do diagnóstico e tratamento clínico-cirúrgico das doenças relacionados à pele e aos anexos cutâneos.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}dermatologia`
  },
  {
    id: 28,
    icon: <CardiologiaIcon />,
    title: 'VASCULAR',
    description: 'Especialidade médica que trata das veias e artérias, prevenindo e tratando doenças vasculares.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}vascular`
  },
  {
    id: 12,
    icon: <GinecologiaIcon />,
    title: 'GINECOLOGISTA',
    description: 'Realiza os exames preventivos e tratamento das patologias ligadas ao aparelho reprodutivo feminino.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}ginecologia`
  },
  {
    id: 8,
    icon: <EsteticaIcon />,
    title: 'ESTÉTICA',
    description: 'Realiza procedimentos como massagem, drenagem linfática, aplicação de vasinhos e limpeza de pele.',
    whatsappLink: `${WHATSAPP_BASE_URL_WITH_TEXT}estetica`
  },
];

export const doctorsData = [
    {
        name: 'Dr. Carlos Alberto',
        specialty: 'Cardiologia',
        crm: 'CRM/SP 123456',
        imageUrl: 'https://i.postimg.cc/Y0QdYq2B/portrait-of-a-mature-male-doctor.jpg',
    },
    {
        name: 'Dra. Ana Paula',
        specialty: 'Dermatologia',
        crm: 'CRM/SP 234567',
        imageUrl: 'https://i.postimg.cc/j2yR1B1c/portrait-of-a-beautiful-female-doctor.jpg',
    },
    {
        name: 'Dr. João Victor',
        specialty: 'Ortopedia',
        crm: 'CRM/SP 345678',
        imageUrl: 'https://i.postimg.cc/q73xA2Yg/portrait-of-a-handsome-young-male-doctor-with-a-stethoscope-around-his-neck.jpg',
    },
    {
        name: 'Dra. Fernanda Lima',
        specialty: 'Pediatria',
        crm: 'CRM/SP 456789',
        imageUrl: 'https://i.postimg.cc/1X9MhT9x/portrait-of-a-smiling-female-doctor.jpg',
    },
];

export const blogPosts = [
    {
        title: 'Tudo sobre o Exame Toxicológico',
        excerpt: 'Saiba tudo sobre a obrigatoriedade para CNH (categorias C, D e E), concursos públicos e renovação. Entenda o processo e a janela de detecção.',
        imageUrl: 'https://i.postimg.cc/6pL41BRt/Medical-(Banner-(Landscape)).png', // Using the lab banner for context
        link: '#',
        fullText: 'O Exame Toxicológico de larga janela de detecção é obrigatório para motoristas das categorias C, D e E (para obtenção e renovação da CNH), além de ser exigido em diversos concursos públicos (como para carreiras policiais) e no processo admissional/demissional de motoristas profissionais (CLT).\n\nComo funciona?\nO exame é realizado através da coleta de uma pequena amostra de cabelo ou pelos do corpo. É um procedimento indolor e não invasivo. A análise consegue detectar o uso de substâncias psicoativas em um período retroativo de no mínimo 90 dias.\n\nPrincipais substâncias detectadas:\n- Maconha e derivados;\n- Cocaína e derivados;\n- Opiáceos;\n- Anfetaminas e Metanfetaminas;\n\nNa Clínica Saúde Cidade Nova, realizamos a coleta com total segurança e agilidade, garantindo resultados confiáveis para que você regularize sua situação sem complicações.'
    },
    {
        title: '5 Dicas para uma Vida Mais Saudável',
        excerpt: 'Pequenas mudanças no seu dia a dia podem fazer uma grande diferença. Confira nossas dicas práticas.',
        imageUrl: 'https://i.postimg.cc/W3crbtkh/Monochrome-and-Blue-Photo-Bold-Yoga-Training-Youtube-Channel-Art.png',
        link: '#',
        fullText: 'Transformar sua saúde não exige mudanças radicais imediatas. Comece com pequenos passos:\n\n1. Hidratação Constante: Beba pelo menos 2 litros de água por dia. A água regula a temperatura corporal e auxilia no funcionamento dos rins.\n2. Alimentação Colorida: Quanto mais cores no prato, maior a variedade de nutrientes. Evite ultraprocessados.\n3. Movimente-se: Troque o elevador pela escada. 30 minutos de atividade moderada diária já trazem benefícios enormes.\n4. Qualidade do Sono: Tente dormir e acordar nos mesmos horários. O sono repara o corpo e a mente.\n5. Gerenciamento do Estresse: Reserve 10 minutos do dia para respirar fundo e desconectar das telas.'
    },
    {
        title: 'A Importância do Check-up Anual',
        excerpt: 'A prevenção é o melhor remédio. Entenda por que realizar exames de rotina é crucial.',
        imageUrl: 'https://i.postimg.cc/KYhV8hBS/Blue-and-White-Modern-Best-Medical-Care-Banner-Landscape.png',
        link: '#',
        fullText: 'Muitas doenças, como hipertensão, diabetes e colesterol alto, são "silenciosas" e não apresentam sintomas em estágios iniciais. O check-up anual é a ferramenta mais eficaz para detectá-las precocemente.\n\nUm check-up básico geralmente inclui:\n- Hemograma completo;\n- Glicemia e Colesterol;\n- Aferição de pressão arterial;\n- Avaliação cardiológica básica.\n\nNão espere sentir dor para procurar um médico. A medicina preventiva garante mais longevidade e qualidade de vida para você e sua família.'
    },
    {
        title: 'Saúde Mental: Bem-Estar Emocional',
        excerpt: 'Cuidar da mente é tão importante quanto cuidar do corpo. Descubra práticas essenciais.',
        imageUrl: 'https://i.postimg.cc/TPzjLCZV/Blue-Modern-Mental-Health-Youtube-Thumbnail.png',
        link: '#',
        fullText: 'A saúde mental impacta diretamente nossa imunidade e saúde física. Ansiedade e estresse crônico podem levar a problemas cardíacos e gástricos.\n\nPara cuidar da mente:\n- Pratique o autocuidado: faça algo que você ama todos os dias.\n- Estabeleça limites: saiba dizer não para não se sobrecarregar.\n- Busque ajuda profissional: Terapia não é apenas para momentos de crise, mas para autoconhecimento.\n- Mantenha conexões sociais: Converse com amigos e família.\n\nSeu bem-estar emocional é prioridade na Clínica Saúde Cidade Nova.'
    },
    {
        title: 'Benefícios da Caminhada Diária',
        excerpt: 'Descubra como 30 minutos por dia podem transformar sua saúde cardiovascular.',
        imageUrl: 'https://i.postimg.cc/0j0C5X0H/walking-exercise.jpg',
        link: '#',
        fullText: 'A caminhada é um dos exercícios mais democráticos e eficientes que existem. Não requer equipamentos caros e pode ser feita em qualquer lugar.\n\nBenefícios comprovados:\n- Melhora a circulação sanguínea e reduz a pressão arterial;\n- Fortalece os ossos, prevenindo a osteoporose;\n- Libera endorfinas, melhorando o humor e combatendo a depressão;\n- Auxilia no controle do peso.\n\nComece com 15 minutos e aumente gradualmente. Seu coração agradece!'
    },
    {
        title: 'Alimentação para a Imunidade',
        excerpt: 'Conheça os alimentos que ajudam a fortalecer seu sistema de defesa.',
        imageUrl: 'https://i.postimg.cc/Fs5q015z/healthy-food.jpg',
        link: '#',
        fullText: 'Nosso sistema imunológico depende de vitaminas e minerais para funcionar bem. Uma dieta pobre em nutrientes nos deixa vulneráveis a infecções.\n\nAlimentos campeões da imunidade:\n- Frutas Cítricas (Laranja, Limão, Acerola): Ricas em Vitamina C.\n- Alho e Cebola: Possuem propriedades anti-inflamatórias e antivirais.\n- Gengibre: Excelente antioxidante.\n- Iogurte Natural: Rico em probióticos que cuidam da saúde intestinal (onde grande parte da imunidade reside).\n- Vegetais Verde-Escuros: Fontes de ferro e ácido fólico.\n\nDescasque mais, desembale menos!'
    },
];

export const testimonialsData = [
  {
    quote: "Atendimento excepcional e profissionais muito atenciosos. Recomendo a Clínica Saúde Cidade Nova a todos que buscam qualidade e cuidado.",
    author: "Maria S.",
  },
  {
    quote: "Encontrei na clínica a solução para o meu problema de saúde que me acompanhava há anos. Equipe nota 10, desde a recepção até o médico.",
    author: "João P.",
  },
  {
    quote: "Estrutura excelente e médicos de altíssima qualidade. Me senti muito segura e bem cuidada durante todo o meu tratamento. Muito obrigada!",
    author: "Fernanda R.",
  },
];

export const faqData = [
    {
        question: 'Quais convênios a clínica aceita?',
        answer: 'Atendemos uma vasta gama de convênios. Para garantir que seu plano seja aceito e para obter informações detalhadas sobre a cobertura, por favor, entre em contato conosco diretamente pelo WhatsApp.',
    },
    {
        question: 'Como faço para agendar uma consulta?',
        answer: 'É muito simples! Você pode agendar sua consulta de duas maneiras: clicando em qualquer um dos botões "Atendimento WhatsApp" espalhados pelo site ou preenchendo o formulário na seção "Entre em Contato". Nossa equipe responderá o mais breve possível.',
    },
    {
        question: 'Qual o horário de funcionamento da clínica?',
        answer: 'Nosso horário de funcionamento é de segunda a sexta-feira, das 7h às 18h, e aos sábados, das 7h às 12h. Não fechamos para almoço.',
    },
    {
        question: 'A clínica oferece atendimento de emergência?',
        answer: 'Não possuímos um setor de emergência 24 horas. Nossos atendimentos são realizados com hora marcada. Em casos de urgência ou emergência médica, recomendamos que você se dirija ao pronto-socorro mais próximo.',
    },
];
