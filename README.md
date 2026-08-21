# Meu Portfólio Pessoal — Rikelmy Zuza

Site pessoal (one-page) desenvolvido em **HTML, CSS e JavaScript puros**, sem frameworks ou build tools, para apresentar projetos, habilidades e formas de contato.

## Estrutura do projeto
```
Portfolio-main/
├── index.html   # Estrutura e conteúdo da página
├── style.css    # Estilos, tema claro/escuro e responsividade
├── script.js    # Interatividade: idioma, tema, scroll e animações
└── README.md    # Este arquivo
```

## Funcionalidades
- Alternância de idioma **PT-BR / EN** com preferência salva em `localStorage`.
- Alternância de tema **claro / escuro** com preferência salva em `localStorage`.
- Menu com destaque automático da seção ativa durante o scroll.
- Animações de entrada (reveal) e barras de habilidades animadas via `IntersectionObserver`.
- Layout 100% responsivo (breakpoint em 680px).

## Como executar localmente
Não há dependências ou processo de build. Basta abrir o arquivo `index.html` diretamente no navegador, ou servir a pasta com um servidor estático simples, por exemplo:
```bash
npx serve .
```

## Manutenção (UC8)
As correções, melhorias e testes realizados durante a manutenção deste portfólio estão documentados no relatório `Relatorio_Manutencao_Portfolio.docx`, entregue junto com esta versão do código.
