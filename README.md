# Soccer Performance · Pré-Temporada

Landing page de venda do programa **Soccer Performance: Pré-Temporada**, do preparador físico Mateus Leon (CREF 172018-G/SP).

Feita com **React + Vite + Tailwind CSS**, publicada no **Cloudflare Pages**.

## Rodar no computador

```bash
npm install
npm run dev
```

A página abre em `http://localhost:5173`.

## Editar textos, preços e links

Quase tudo que muda com frequência fica em **`src/config.js`**:

| O quê | Onde |
| --- | --- |
| Link do checkout da Eduzz | `site.checkoutUrl` |
| Preço de venda, valor riscado e parcelas | `preco` |
| Lista "Tudo o que você recebe" | `itensInclusos` |
| Depoimentos | `depoimentos` |
| Dúvidas frequentes | `duvidas` |
| CREF, Instagram e e-mail | `site` |

Tudo que está entre `[colchetes]` ainda precisa ser preenchido.

Os textos fixos de cada seção estão nos componentes em `src/components/`, um arquivo por seção:

| Seção | Arquivo |
| --- | --- |
| Topo (hero) e menu | `Hero.jsx` |
| Faixa laranja inclinada | `Faixa.jsx` |
| Para quem é | `ParaQuem.jsx` |
| O que você vai desenvolver | `Pilares.jsx` |
| Duas fases, seis semanas + semana de jogos | `ComoFunciona.jsx` |
| Tudo o que você recebe + preço | `Oferta.jsx` |
| Quem vai te treinar | `Sobre.jsx` |
| Fotos | `Galeria.jsx` |
| Depoimentos | `Depoimentos.jsx` |
| Garantia, dúvidas, chamada final e rodapé | `Final.jsx` |

## Imagens

Ficam em `public/images/`. Para trocar uma foto, substitua o arquivo mantendo o mesmo nome.

## Cores e fontes

Definidas em `src/index.css`, no bloco `@theme`:

- Laranja da marca: `#DE602A` (`bg-brand`, `text-brand`)
- Âmbar da Fase 1: `#F2A23A` (`text-amber`)
- Fontes: Barlow Condensed (títulos), Barlow (texto) e Michroma (etiquetas), carregadas do Google Fonts em `index.html`.

## Publicar no Cloudflare Pages

1. No painel do Cloudflare: **Workers & Pages › Create › Pages › Connect to Git** e escolha este repositório.
2. Configuração do build:
   - **Framework preset:** Vite (ou React (Vite))
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Salve. A cada `push` na branch principal, o site é publicado de novo automaticamente.
4. Para usar um domínio próprio: **Custom domains** no projeto do Pages.
