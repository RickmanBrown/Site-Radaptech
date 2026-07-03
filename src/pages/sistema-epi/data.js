import {
  ShieldAlert,
  FileX,
  Database,
  History,
  LayoutDashboard,
  Users,
  Package,
  CheckCircle,
  Bell,
  UserPlus,
  Zap,
  TrendingUp,
  Clock,
  DollarSign,
  GanttChartSquare
} from "lucide-react";

export const problemsData = [
  {
    id: 1,
    title: "Controle manual",
    desc: "Dependência de planilhas e processos manuais lentos.",
    icon: ShieldAlert
  },
  {
    id: 2,
    title: "Uso de papel",
    desc: "Acúmulo de fichas físicas que se perdem no tempo.",
    icon: FileX
  },
  {
    id: 3,
    title: "Sem rastreabilidade",
    desc: "Dificuldade em provar entregas em caso de processos.",
    icon: Database
  },
  {
    id: 4,
    title: "Estoque desorganizado",
    desc: "Falta de precisão sobre o que está saindo e entrando.",
    icon: Package
  },
  {
    id: 5,
    title: "Dificuldade em auditorias",
    desc: "Horas perdidas buscando documentação para fiscais.",
    icon: GanttChartSquare
  },
  {
    id: 6,
    title: "Falta de alertas",
    desc: "EPIs vencidos sendo usados por falta de aviso.",
    icon: Bell
  }
];

export const featuresData = [
  {
    title: "Gestão de colaboradores",
    desc: "Vincule EPIs a funcionários e departamentos de forma ágil.",
    icon: Users
  },
  {
    title: "Gestão de EPIs",
    desc: "Catálogo completo com CA e prazos de validade automáticos.",
    icon: ShieldAlert
  },
  {
    title: "Controle de estoque",
    desc: "Inventário inteligente com baixa automática nas entregas.",
    icon: Package
  },
  {
    title: "Entrega de EPIs",
    desc: "Fluxo otimizado de entrega com apenas alguns cliques.",
    icon: CheckCircle
  },
  {
    title: "Assinatura digital",
    desc: "Validade jurídica total sem precisar de uma folha de papel.",
    icon: Zap
  },
  {
    title: "Histórico completo",
    desc: "Timeline detalhada de todas as movimentações por usuário.",
    icon: History
  },
  {
    title: "Dashboard",
    desc: "Visão macro da segurança da sua empresa em tempo real.",
    icon: LayoutDashboard
  },
  {
    title: "Relatórios",
    desc: "Dados consolidados para tomadas de decisão estratégicas.",
    icon: FileX
  },
  {
    title: "Alertas",
    desc: "Notificações automáticas de reposição e vencimentos.",
    icon: Bell
  },
  {
    title: "Permissões",
    desc: "Controle quem pode visualizar ou editar cada setor.",
    icon: UserPlus
  }
];

export const benefitsData = [
  { title: "Economia de tempo", icon: Clock },
  { title: "Mais produtividade", icon: TrendingUp },
  { title: "Menos papel", icon: FileX },
  { title: "Segurança jurídica", icon: ShieldAlert },
  { title: "Redução de custos", icon: DollarSign },
  { title: "Organização", icon: LayoutDashboard },
  { title: "Indicadores reais", icon: GanttChartSquare },
  { title: "Auditorias fáceis", icon: CheckCircle }
];

export const faqData = [
  {
    question: "O sistema funciona na nuvem?",
    answer: "Sim, o sistema é 100% online. Você pode acessar de qualquer lugar através de um navegador, sem precisar instalar softwares pesados."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Com certeza. O sistema é totalmente responsivo e multiplataforma, adaptando-se com perfeição a qualquer formato de tela. Isso garante uma experiência fluida tanto para gestores usando o computador no escritório, quanto para técnicos operando via tablet ou celular em campo."
  },
  {
    question: "Existe limite de usuários?",
    answer: "Nossos planos são flexíveis e adaptáveis ao tamanho da sua empresa, permitindo a escalabilidade conforme sua necessidade cresce."
  },
  {
    question: "Como funciona a implantação?",
    answer: "A implantação é assistida. Nossa equipe auxilia na configuração inicial e importação de dados para que você comece a usar em tempo recorde."
  },
  {
    question: "O sistema tem assinatura digital para comprovar a entrega?",
    answer: "Sim! E fomos além: para garantir 100% de segurança jurídica, você tem duas opções no momento da entrega. É possível colher a assinatura digital na tela do dispositivo ou utilizar a câmera para tirar uma foto do colaborador com o EPI. O fim definitivo das fichas de papel."
  }
];