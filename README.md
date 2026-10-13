# Nina — landing page responsiva

Site estático em HTML, CSS e JavaScript, pronto para GitHub + Cloudflare Pages. Inclui landing page desktop/mobile, animações leves, menu mobile, FAQ expansível, página legal única com Termos de Uso e Política de Privacidade e telas reais do aplicativo otimizadas em WebP.

## Estrutura

- `index.html` — landing page
- `legal.html` — Termos de Uso e Política de Privacidade na mesma página (`#termos` e `#privacidade`)
- `styles.css` / `legal.css` — visual responsivo e estilos da página legal
- `script.js` — menu, animações de entrada, links configuráveis
- `assets/` — logo e imagens das telas do app
- `_headers` — cabeçalhos e cache para Cloudflare Pages

## Antes de publicar

1. Abra `script.js`.
2. Preencha `NINA_CONFIG.appStoreUrl` com o link público oficial da Nina na App Store. Até esse link ser configurado, os botões de download mostram um aviso de configuração e não simulam um download real.
3. O Instagram está configurado como `https://www.instagram.com/ninahub_/`.
4. O link informado para TikTok era igual ao Instagram. Por isso, o TikTok não aparece até que o endereço correto seja preenchido em `NINA_CONFIG.tiktokUrl`.
5. Revise `legal.html` com assessoria jurídica antes de publicar. O conteúdo é uma minuta inicial baseada nas informações fornecidas e não substitui orientação jurídica.

## Ver localmente

Basta abrir `index.html` no navegador. Para uma experiência de desenvolvimento melhor, abra a pasta no VS Code e execute um servidor local, como a extensão Live Server.

## Publicar com GitHub + Cloudflare Pages

1. Extraia todos os arquivos do ZIP.
2. Envie o conteúdo da pasta para a raiz do repositório GitHub (não envie a pasta ZIP).
3. No Cloudflare, acesse **Workers & Pages → Create → Pages → Connect to Git** e selecione o repositório.
4. Para HTML/CSS/JS puro, use a raiz `/` como diretório do projeto e deixe o comando de build vazio. O diretório de saída será `/` (raiz).
5. Publique. O endereço `*.pages.dev` permite revisar o site mesmo antes de o domínio personalizado propagar.
6. Quando estiver aprovado, conecte o domínio personalizado nas configurações do projeto Cloudflare Pages.

## Animações e acessibilidade

O site usa CSS para flutuação do mordedor, oscilação dos mockups e brilho das estrelas; `IntersectionObserver` para revelar seções durante a rolagem; e HTML nativo para o FAQ. O movimento é reduzido quando o sistema do visitante ativa `prefers-reduced-motion`.

## Notas

- A página utiliza fontes do Google Fonts; sem conexão, cairá para fontes de sistema.
- As imagens das telas do aplicativo são as enviadas pelo usuário e foram convertidas para WebP para reduzir o peso.
- A imagem de maternidade da seção emocional é um gradiente visual de reserva. Substitua por uma fotografia autorizada da marca se quiser uma foto real.
