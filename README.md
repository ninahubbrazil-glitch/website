# Nina — Página de vendas

Página estática responsiva em HTML, CSS e JavaScript, preparada para publicação no GitHub + Cloudflare Pages. Não precisa de Node.js, build ou framework.

## Arquivos
- `index.html`: conteúdo e estrutura das seções.
- `styles.css`: identidade visual, layout responsivo e animações/interações visuais.
- `script.js`: links configuráveis dos botões, política de privacidade e termos.
- `_headers`: cabeçalhos HTTP básicos para Cloudflare Pages.

## Antes de publicar
1. Abra `script.js`.
2. Troque `quizUrl`, `privacyUrl` e `termsUrl` pelos links reais.
3. Troque a imagem demonstrativa do hero em `index.html` pela foto aprovada da marca ou por um asset hospedado por você.
4. Revise o texto, os preços e qualquer alegação de resultado. A página atual não inventa depoimentos, avaliações ou garantias.
5. Se usar fotos de bebês/famílias, confirme que tem autorização de uso.

## Publicar pelo GitHub + Cloudflare Pages
1. Crie um repositório no GitHub e envie todos os arquivos desta pasta para a raiz do repositório.
2. No Cloudflare, abra **Workers & Pages → Create → Pages → Connect to Git**.
3. Selecione o repositório.
4. Como é um site estático sem etapa de build:
   - **Framework preset:** None
   - **Build command:** deixe vazio
   - **Build output directory:** `/` (raiz do projeto; se a interface exigir um diretório, use `.`)
5. Clique em **Save and Deploy**.
6. Depois, em Cloudflare Pages, configure seu domínio personalizado se já tiver um.

## Personalização recomendada
- Substitua o “n” provisório pelo logo oficial da Nina (mordedor).
- Troque a imagem genérica do hero por uma imagem licenciada/aprovada da marca.
- Configure os links reais de início, termos e privacidade.
- Adicione pixels da Meta/TikTok apenas depois de definir consentimento e eventos a serem medidos.

## Observação
O visual é uma primeira versão funcional inspirada em padrões comuns de páginas de produto: hero com CTA, benefícios, demonstração do app, funcionamento, FAQ e CTA final. Não copia código ou assets dos sites de referência.
