# SaaS Health — Guia do Projeto

Ferramenta de diagnóstico financeiro para startups SaaS.
Wizard em 3 etapas → painel com benchmarks, projeções e alavancas prioritárias.

---

## Estrutura de arquivos

```
saas-health/
├── index.html   → estrutura, layout e lógica de cálculo (raramente editado)
├── config.js    → painel de controle: cores, textos, benchmarks (edite aqui)
└── README.md    → este arquivo
```

---

## Como rodar localmente

Por usar ES Modules (`import/export`), o projeto precisa de um servidor HTTP local.

**Opção 1 — VS Code:**
Instale a extensão *Live Server* e clique em "Go Live" no canto inferior direito.

**Opção 2 — Terminal:**
```bash
# Python (qualquer sistema)
python3 -m http.server 3000

# Node.js
npx serve .
```
Acesse: `http://localhost:3000`

---

## O que editar no config.js

### 1. Identidade
Nome do produto, tagline e rodapé.
```js
export const identidade = {
  nomeProduto: "SaaS Health",
  tagline:     "Seu crescimento está saudável?",
  ...
}
```

### 2. Cores
Troque qualquer hex para mudar a aparência — as cores são aplicadas em toda a interface automaticamente via CSS variables.
```js
export const cores = {
  azul:     "#4B7BEC",   // acento principal
  verde:    "#26C281",   // métricas saudáveis
  vermelho: "#E74C3C",   // alertas
  ...
}
```

### 3. Campos do formulário
Edite `label`, `hint`, `tooltip` e `placeholder` de qualquer campo sem tocar no HTML.
```js
export const campos = {
  arrAtual: {
    label:       "ARR atual",
    hint:        "Receita recorrente anual de hoje",
    tooltip:     "Se você pensa em MRR, multiplique por 12.",
    placeholder: "12.000.000",
  },
  ...
}
```

### 4. Benchmarks de mercado
Atualize os valores de referência conforme relatórios mais recentes.
```js
export const benchmarks = {
  crescimento: {
    mediana:    25,    // % — mediana do mercado
    topQuartil: 65,
    limites: { ok: 65, warn: 25 },
  },
  ...
}
```

### 5. Cenários de projeção
Ajuste os percentuais e rótulos dos 3 cenários exibidos no diagnóstico.
```js
export const cenarios = [
  { id: "conservador", label: "Conservador", taxa: 0.25, referencia: "Mediana B2B SaaS 2025" },
  { id: "moderado",    label: "Moderado",    taxa: 0.65, referencia: "Top quartil SaaS" },
  { id: "agressivo",   label: "Agressivo",   taxa: 0.90, referencia: "AI-native SaaS" },
];
```

### 6. Textos do diagnóstico
Edite os textos que aparecem no painel de resultado.
Variáveis dinâmicas disponíveis: `{growthRate}`, `{rule40}`, `{payback}`, `{ltvcac}`
```js
export const diagnosticos = {
  healthy: {
    titulo: "✓ Sua operação está bem posicionada",
    texto:  "Com crescimento de {growthRate}% ao ano...",
  },
  ...
}
```

### 7. Alavancas / Ações recomendadas
Edite os textos das recomendações. Não altere o campo `condicao` (ele controla quando cada ação aparece).
```js
export const alavancas = [
  {
    condicao:  "payback > 18",   // ← não editar
    titulo:    "Reduza o CAC payback para menos de 18 meses",
    descricao: "Mapeie os canais de aquisição...",
  },
  ...
]
```

---

## Dicas para editar com Claude Code

- **Ajuste de cor:** "muda o azul principal para #3B5BDB"
- **Texto de campo:** "renomeia o label do campo nmrr para 'Receita nova mensal'"
- **Novo benchmark:** "adiciona um benchmark de Magic Number com mediana 0.75"
- **Novo cenário:** "adiciona um quarto cenário chamado Hipercrescimento com 150%"
