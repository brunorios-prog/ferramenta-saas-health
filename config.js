// ============================================================
//  SAAS HEALTH — PAINEL DE CONTROLE
//  Edite este arquivo para ajustar cores, textos e benchmarks.
//  Não é necessário mexer no index.html para a maioria dos ajustes.
// ============================================================


// ── 1. IDENTIDADE ────────────────────────────────────────────
export const identidade = {
  nomeProduto:  "SaaS Health",
  tagline:      "Seu crescimento está saudável?",
  subtitulo:    "Responda algumas perguntas e veja onde sua startup está em relação ao mercado — sem planilha, sem consultoria.",
  rodape:       "Benchmarks baseados em dados de mercado 2025. SaaS Capital · Lighter Capital · Benchmarkit",
};


// ── 2. CORES — Identidade visual Beatstrap ───────────────────
// Fundo claro, roxo como acento principal.
export const cores = {
  fundo:         "#F6F5EF",   // off-white do portal Beatstrap
  superficie:    "#FFFFFF",   // cards e sidebar
  superficie2:   "#F0EFE9",   // inputs, hover, faixas alternadas
  borda:         "#E2E0D8",   // linhas divisórias

  texto:         "#070F1A",   // texto principal (quase-preto Beatstrap)
  textoMuted:    "#6B7280",   // texto secundário / labels
  textoSuave:    "#9CA3AF",   // placeholders e hints

  roxo:          "#5B4FE8",   // acento principal Beatstrap — botões, step ativo
  roxoDim:       "#EEE9FF",   // fundo de destaque roxo (claro)
  roxoEscuro:    "#3D35B0",   // hover de botões roxos

  verde:         "#16A34A",   // métrica saudável
  verdeDim:      "#DCFCE7",   // fundo verde claro

  vermelho:      "#DC2626",   // alerta / crítico
  vermelhoDim:   "#FEE2E2",   // fundo vermelho claro

  amarelo:       "#D97706",   // atenção / warning
  amareloDim:    "#FEF3C7",   // fundo amarelo claro
};


// ── 3. TEXTOS DOS CAMPOS ─────────────────────────────────────
// label       → nome visível do campo
// hint        → texto pequeno abaixo do input
// tooltip     → explicação ao passar o mouse no "?"
// placeholder → valor de exemplo (usa médias de mercado)
// padrao      → valor pré-preenchido no slider
// sliderMin / sliderMax / sliderStep → controle do slider
export const campos = {

  // ── PASSO 1 — Campos opcionais de contexto ──
  ticketMedio: {
    label:       "Ticket médio (ACV)",
    hint:        "Valor médio anual por contrato",
    tooltip:     "Annual Contract Value — quanto cada cliente paga por ano em média. Com isso calculamos o CAC por cliente e validamos seu NMRR.",
    placeholder: "24.000",
    padrao:      24000,
    sliderMin:   1000,
    sliderMax:   500000,
    sliderStep:  1000,
    opcional:    true,
  },
  novosNegociosMes: {
    label:       "Novos negócios / mês",
    hint:        "Média de novos clientes fechados por mês",
    tooltip:     "Quantos novos contratos você fecha por mês em média. Cruzado com o ticket médio, valida o NMRR informado no passo seguinte.",
    placeholder: "8",
    padrao:      8,
    sliderMin:   1,
    sliderMax:   200,
    sliderStep:  1,
    opcional:    true,
  },
  tempoExistencia: {
    label:       "Tempo de existência",
    hint:        "Quantos meses de operação",
    tooltip:     "A idade da empresa contextualiza o crescimento esperado. Uma startup de 18 meses com 30% de crescimento é muito diferente de uma de 5 anos.",
    placeholder: "36",
    padrao:      36,
    sliderMin:   1,
    sliderMax:   120,
    sliderStep:  1,
    sufixo:      "meses",
    opcional:    true,
  },

  // ── PASSO 1 — Receita ──
  arrAtual: {
    label:       "Receita recorrente atual",
    hint:        "ARR ou MRR — escolha a periodicidade acima",
    tooltip:     "ARR (Annual Recurring Revenue) é a receita recorrente anual. Se preferir informar o MRR (mensal), selecione a aba Mensal e multiplicamos por 12.",
    placeholder: "1.000.000",
    padrao:      1000000,
    sliderMin:   10000,
    sliderMax:   50000000,
    sliderStep:  10000,
  },
  arrAnterior: {
    label:       "Receita recorrente há 12 meses",
    hint:        "Mesmo período do ano anterior",
    tooltip:     "O ARR (ou MRR×12) do mesmo mês do ano passado. Usamos para calcular sua taxa de crescimento anual (YoY).",
    placeholder: "600.000",
    padrao:      600000,
    sliderMin:   0,
    sliderMax:   50000000,
    sliderStep:  10000,
  },

  // ── PASSO 2 — Aquisição ──
  cacTotal: {
    label:       "Investimento em Vendas & Marketing",
    hint:        "Total do período — escolha a periodicidade acima",
    tooltip:     "Tudo gasto em Vendas e Marketing no período: salários, ferramentas, mídia paga, agências. Se informar por mês, multiplicamos por 12.",
    placeholder: "183.000",
    padrao:      183000,
    sliderMin:   1000,
    sliderMax:   10000000,
    sliderStep:  1000,
  },
  nmrr: {
    label:       "Receita nova gerada (NMRR)",
    hint:        "Net New MRR — novos clientes + expansão − churn",
    tooltip:     "A receita recorrente mensal nova gerada no mesmo período do investimento acima. Inclui novos clientes, upsell e desconta cancelamentos.",
    placeholder: "21.000",
    padrao:      21000,
    sliderMin:   100,
    sliderMax:   2000000,
    sliderStep:  100,
  },
  lifetime: {
    label:       "Tempo médio de vida do cliente",
    hint:        "Se não souber: 1 ÷ churn mensal",
    tooltip:     "Quantos meses um cliente fica com você em média. Exemplo: churn de 2%/mês → lifetime de 50 meses.",
    placeholder: "24",
    padrao:      24,
    sliderMin:   3,
    sliderMax:   96,
    sliderStep:  1,
    sufixo:      "meses",
  },
  taxaRetorno: {
    label:       "Retorno mínimo exigido",
    hint:        "Custo de oportunidade do capital investido",
    tooltip:     "O retorno mínimo que você exige do dinheiro investido em aquisição. Representa o custo de oportunidade — o capital poderia estar aplicado a essa taxa.",
    placeholder: "12",
    padrao:      12,
    sliderMin:   6,
    sliderMax:   30,
    sliderStep:  1,
    sufixo:      "% a.a.",
  },

  // ── PASSO 3 — Eficiência ──
  margemBruta: {
    label:       "Margem bruta",
    hint:        "Referência SaaS: 70–80%",
    tooltip:     "Quanto sobra da receita após custos diretos de entrega: infraestrutura, suporte técnico, licenças de terceiros. SaaS maduro tipicamente opera entre 70% e 80%.",
    placeholder: "75",
    padrao:      75,
    sliderMin:   30,
    sliderMax:   95,
    sliderStep:  1,
    sufixo:      "%",
  },
  ebitda: {
    label:       "Margem operacional (EBITDA)",
    hint:        "Negativo é normal no early stage",
    tooltip:     "Lucro operacional como % da receita. Startups em crescimento costumam operar com margem negativa — o importante é a tendência de melhora.",
    placeholder: "-20",
    padrao:      -20,
    sliderMin:   -80,
    sliderMax:   40,
    sliderStep:  1,
    sufixo:      "%",
  },
  nrr: {
    label:       "Retenção líquida de receita (NRR)",
    hint:        "Mediana do mercado: ~101%",
    tooltip:     "Net Revenue Retention — quanto da receita de clientes existentes você mantém mais expansão. Acima de 100% significa que a base cresce mesmo sem novos clientes.",
    placeholder: "101",
    padrao:      101,
    sliderMin:   60,
    sliderMax:   150,
    sliderStep:  1,
    sufixo:      "%",
  },
  churn: {
    label:       "Churn mensal de receita",
    hint:        "Referência saudável: abaixo de 2%",
    tooltip:     "Percentual da receita perdida por mês com cancelamentos ou downgrades. Abaixo de 2% ao mês é considerado saudável para B2B SaaS.",
    placeholder: "2",
    padrao:      2,
    sliderMin:   0,
    sliderMax:   15,
    sliderStep:  0.1,
    sufixo:      "% /mês",
  },
};


// ── 4. OPÇÕES DE SELEÇÃO ─────────────────────────────────────
export const opcoes = {
  estagio: [
    { val: "anjo",     label: "Investimento Anjo" },
    { val: "seed",     label: "Seed / Pré-Série A" },
    { val: "serieA",   label: "Série A"            },
    { val: "serieB",   label: "Série B+"            },
    { val: "bootstrap",label: "Bootstrapped"        },
  ],
  gtm: [
    { val: "salesled",  label: "Sales-led"          },
    { val: "selfserve", label: "Self-serve"         },
    { val: "plg",       label: "Product-led (PLG)"  },
    { val: "hibrido",   label: "Híbrido"            },
  ],
};


// ── 5. BENCHMARKS DE MERCADO ─────────────────────────────────
// Fonte: SaaS Capital, Lighter Capital, Benchmarkit 2025
export const benchmarks = {
  crescimento: {
    label:      "Taxa de crescimento YoY",
    unidade:    "%",
    min:        0,
    max:        100,
    mediana:    25,
    topQuartil: 65,
    limites:    { ok: 65, warn: 25 },
  },
  rule40: {
    label:          "Rule of 40",
    unidade:        "",
    medianaPrivado: 12,
    limites:        { ok: 40, warn: 20 },
  },
  payback: {
    label:    "CAC Payback",
    unidade:  " meses",
    mediana:  24,
    limites:  { ok: 18, warn: 30 },
  },
  ltvcac: {
    label:   "LTV/CAC",
    unidade: "×",
    limites: { ok: 3, warn: 1 },
  },
  smRatio: {
    label:      "S&M como % do ARR",
    unidade:    "%",
    eficiente:  33,
    vcBacked:   47,
    limites:    { ok: 33, warn: 47 },
  },
  nrr: {
    label:   "Retenção líquida (NRR)",
    unidade: "%",
    min:     80,
    max:     140,
    mediana: 101,
    limites: { ok: 110, warn: 100 },
  },
  churn: {
    label:         "Churn mensal",
    unidade:       "%",
    min:           0,
    max:           10,
    mediana:       2,
    lowerIsBetter: true,
    limites:       { ok: 2, warn: 5 },
  },
};


// ── 6. CENÁRIOS DE PROJEÇÃO ──────────────────────────────────
export const cenarios = [
  { id: "conservador", label: "Conservador", taxa: 0.25, referencia: "Mediana B2B SaaS 2025" },
  { id: "moderado",    label: "Moderado",    taxa: 0.65, referencia: "Top quartil SaaS"       },
  { id: "agressivo",   label: "Agressivo",   taxa: 0.90, referencia: "AI-native SaaS"         },
];


// ── 7. MÚLTIPLOS DE VALUATION ────────────────────────────────
export const multiplos = [
  { label: "4× ARR", multiplo: 4, condicao: "Floor — múltiplo mínimo"        },
  { label: "5× ARR", multiplo: 5, condicao: "Mediana privado 2025"            },
  { label: "7× ARR", multiplo: 7, condicao: "Rule of 40 > 40"                },
  { label: "9× ARR", multiplo: 9, condicao: "NRR > 120% + crescimento forte" },
];


// ── 8. TEXTOS DO DIAGNÓSTICO ─────────────────────────────────
// Variáveis dinâmicas: {growthRate} {rule40} {payback} {ltvcac}
export const diagnosticos = {
  healthy: {
    badgeLabel: "Operação saudável",
    titulo:     "Sua operação está bem posicionada",
    texto:      "Com crescimento de {growthRate}% ao ano e Rule of 40 de {rule40}, você está acima da mediana do mercado SaaS para empresas no seu estágio. Mantenha o foco em retenção (NRR) — é o principal acelerador de valuation nesta fase.",
  },
  warning: {
    badgeLabel: "Atenção recomendada",
    titulo:     "Crescimento presente, eficiência a melhorar",
    texto:      "Você está crescendo, mas a eficiência de aquisição precisa de atenção. Com payback de {payback} meses e LTV/CAC de {ltvcac}×, há espaço para otimização — seja reduzindo o CAC, aumentando o NMRR por cliente ou melhorando a retenção.",
  },
  critical: {
    badgeLabel: "Requer ação imediata",
    titulo:     "Reveja o motor de aquisição",
    texto:      "Os indicadores de eficiência estão abaixo dos mínimos saudáveis. Com crescimento de {growthRate}% e payback estimado em {payback} meses, o capital investido em aquisição não está gerando retorno adequado. Antes de aumentar o investimento em S&M, entenda por que o NMRR está baixo e se o churn está erodindo a base.",
  },
};


// ── 9. ALAVANCAS / AÇÕES RECOMENDADAS ───────────────────────
// Não altere o campo "condicao" — ele controla quando cada ação aparece.
export const alavancas = [
  {
    condicao:  "payback > 18",
    icone:     "📉",
    cor:       "vermelho",
    titulo:    "Reduza o CAC payback para menos de 18 meses",
    descricao: "Mapeie os canais de aquisição por eficiência e concentre o budget nos que trazem maior NMRR com menor custo. Elimine canais com payback acima de 24 meses.",
  },
  {
    condicao:  "ltvcac < 3",
    icone:     "🔄",
    cor:       "amarelo",
    titulo:    "Melhore a retenção para ampliar o LTV",
    descricao: "Cada ponto percentual a menos de churn mensal aumenta o LTV em ~12–15%. Onboarding estruturado e programas de sucesso do cliente são os caminhos mais diretos.",
  },
  {
    condicao:  "crescimento < 25",
    icone:     "🚀",
    cor:       "roxo",
    titulo:    "Investigue o que está travando o crescimento",
    descricao: "Analise se o gargalo está no topo de funil (geração de demanda), no meio (conversão) ou na expansão da base existente. Cada um exige uma resposta diferente.",
  },
  {
    condicao:  "rule40 < 40",
    icone:     "⚖️",
    cor:       "amarelo",
    titulo:    "Evolua o Rule of 40 em direção a 40+",
    descricao: "Cada 10 pontos de melhoria vale ~1,1× de valuation. Pode vir de aceleração de receita, redução de burn, ou ambos — ajuste conforme a prioridade do seu estágio.",
  },
  {
    condicao:  "saudavel",
    icone:     "✅",
    cor:       "verde",
    titulo:    "Mantenha o ritmo e invista em Expansion Revenue",
    descricao: "Sua operação está saudável. O próximo nível vem de expansão dentro da base (upsell/cross-sell) — empresas com +R$15M ARR geram até 40% do novo ARR dessa forma, com CAC muito menor.",
  },
];
