# Hub de Aulas — Flexbox e Grid

Páginas de estudo de CSS feitas para o hub da disciplina de IHC, seguindo a estrutura do hub de exemplo do professor (hub com cards → página de cada tema → "Voltar ao Hub").

🔗 **Site no ar (GitHub Pages):** https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
📦 **Repositório:** https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO

> Substitua os dois links acima pelos endereços reais depois de publicar.

## Páginas

| Arquivo | Conteúdo |
|---------|----------|
| `index.html` | Hub com os cards dos módulos |
| `flexbox.html` | Flexbox: eixos, propriedades do container e dos itens, aplicações reais |
| `grid.html` | Grid: linhas e colunas, `fr`, posicionamento, áreas nomeadas, grid responsivo |
| `hub.css` | Estilos compartilhados |
| `flexbox.css` / `grid.css` | Estilos das demonstrações de cada página |
| `aprenda.js` | Playgrounds e área de teste (JavaScript opcional) |

## Como cada página está organizada
1. **Conceito:** o que é e vocabulário.
2. **Propriedades:** tabela com o que cada uma faz.
3. **Exemplos visuais:** demonstração ao vivo + código ao lado.
4. **Playground:** selects que alteram o container e mostram o CSS gerado.
5. **Atividade prática:** exercícios para o aluno.
6. **Área de teste:** campo de texto onde o aluno edita o CSS e vê o resultado.

## Conteúdo
**Flexbox:** `display: flex`, eixo principal/transversal, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`, `flex-grow/shrink/basis`, atalho `flex`, `align-self`, `order`, `margin: auto`; aplicações (menu, centralização, cards, rodapé no fim).

**Grid:** `display: grid`, trilhas, linhas de grade, `grid-template-columns/rows`, `fr`, `repeat()`, `minmax()`, `gap`, `justify-items/align-items`, `grid-column/row` e `span`, `grid-template-areas`, `auto-fit`, comparação Grid x Flexbox.

## Acessibilidade e responsividade
HTML semântico, link "Pular para o conteúdo", foco visível, contraste AA, tabelas com `caption`/`scope`, `aria-live` ao adicionar itens, respeito a `prefers-reduced-motion`, layout fluido com Grid/Flexbox e tabelas com rolagem horizontal no celular.

## Tarefas por integrante

| Integrante | Tarefas |
|------------|---------|
| **[Nome]** | Estrutura do hub, página Flexbox, página Grid, estilos, JavaScript dos playgrounds, README, publicação no GitHub Pages |

> Se houver mais integrantes, adicione uma linha para cada um. Todos precisam ter commits no repositório.

## Publicar no GitHub Pages (obrigatório)
1. Crie o repositório no GitHub e envie os arquivos para a **raiz** (`index.html` na raiz).
2. Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e clique em **Save**.
3. Aguarde 1–3 minutos, abra o link gerado, teste todos os links e cole o endereço no topo deste README.

## Usar dentro do repositório do professor
O `index.html` do professor já aponta para `flexbox.html` e `grid.html`. Para encaixar, copie para o seu repositório apenas: `flexbox.html`, `grid.html`, `hub.css`, `flexbox.css`, `grid.css` e `aprenda.js` (sem sobrescrever o `index.html` e o `style.css` dele).
