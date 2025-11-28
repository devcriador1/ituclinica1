

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
    id: 27, // New ID for Nutricionista to avoid conflict if needed, though list is rebuilt
    icon: <GastroenterologiaIcon />, // Fallback or use specific if available. Using Gastro logic or similar.
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
    icon: <CardiologiaIcon />, // Using cardio/vascular logic
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

// FIX: Added doctorsData export to be used in OurTeam.tsx component.
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
        title: '5 Dicas para uma Vida Mais Saudável',
        excerpt: 'Pequenas mudanças no seu dia a dia podem fazer uma grande diferença na sua saúde e bem-estar. Confira nossas dicas para uma rotina mais equilibrada.',
        imageUrl: 'https://i.postimg.cc/W3crbtkh/Monochrome-and-Blue-Photo-Bold-Yoga-Training-Youtube-Channel-Art.png',
        link: '#',
        fullText: '1. Mantenha-se hidratado: Beber água é fundamental para o funcionamento do corpo.\n\n2. Alimentação balanceada: Inclua frutas, legumes e verduras na sua dieta diária.\n\n3. Exercícios físicos: Pratique pelo menos 30 minutos de atividade física por dia.\n\n4. Sono de qualidade: Durma entre 7 a 8 horas por noite para recuperar as energias.\n\n5. Cuide da mente: Reserve um tempo para relaxar e fazer o que gosta.'
    },
    {
        title: 'A Importância do Check-up Anual',
        excerpt: 'A prevenção é o melhor remédio. Entenda por que realizar exames de rotina anualmente é crucial para detectar problemas precocemente e manter sua saúde em dia.',
        imageUrl: 'https://i.postimg.cc/KYhV8hBS/Blue-and-White-Modern-Best-Medical-Care-Banner-Landscape.png',
        link: '#',
        fullText: 'Realizar um check-up médico anualmente é uma das melhores formas de prevenir doenças e garantir que sua saúde esteja em dia. Exames de rotina podem detectar problemas silenciosos como hipertensão, diabetes e colesterol alto antes que se tornem graves.\n\nAlém disso, o acompanhamento médico regular permite ajustar hábitos de vida e receber orientações personalizadas. Não espere sentir sintomas para procurar um médico. A prevenção é sempre o melhor caminho.'
    },
    {
        title: 'Saúde Mental: Como Cuidar do Seu Bem-Estar Emocional',
        excerpt: 'Em um mundo agitado, cuidar da mente é tão importante quanto cuidar do corpo. Descubra práticas que podem ajudar a melhorar sua saúde mental e qualidade de vida.',
        imageUrl: 'https://i.postimg.cc/TPzjLCZV/Blue-Modern-Mental-Health-Youtube-Thumbnail.png',
        link: '#',
        fullText: 'A saúde mental influencia diretamente nossa qualidade de vida, relacionamentos e saúde física. O estresse, a ansiedade e a depressão são problemas comuns, mas que podem ser gerenciados com as estratégias certas.\n\nPráticas como meditação, terapia, exercícios físicos e manter conexões sociais saudáveis são fundamentais. Lembre-se: pedir ajuda é um sinal de força, não de fraqueza. Cuide da sua mente com o mesmo carinho que cuida do seu corpo.'
    },
    {
        title: 'Benefícios da Caminhada Diária',
        excerpt: 'Caminhar é um dos exercícios mais simples e eficazes. Descubra como 30 minutos por dia podem transformar sua saúde cardiovascular e mental.',
        imageUrl: 'https://i.postimg.cc/0j0C5X0H/walking-exercise.jpg',
        link: '#',
        fullText: 'A caminhada é uma atividade acessível e poderosa. Caminhar 30 minutos por dia ajuda a controlar a pressão arterial, reduz o risco de diabetes, fortalece os ossos e melhora o humor ao liberar endorfinas.\n\nAlém disso, é uma ótima oportunidade para se desconectar das telas e apreciar o ambiente ao redor. Comece devagar e aumente o ritmo gradualmente.'
    },
    {
        title: 'Alimentação para a Imunidade',
        excerpt: 'Sua dieta tem um papel fundamental na defesa do organismo. Conheça os alimentos que ajudam a fortalecer seu sistema imunológico.',
        imageUrl: 'https://i.postimg.cc/Fs5q015z/healthy-food.jpg',
        link: '#',
        fullText: 'Um sistema imunológico forte depende de uma boa nutrição. Alimentos ricos em Vitamina C (laranja, acerola), Zinco (castanhas, feijão) e probióticos (iogurte) são essenciais.\n\nEvite alimentos ultraprocessados e excesso de açúcar, que podem prejudicar a resposta imune. Uma alimentação colorida e variada é a chave para a saúde.'
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
