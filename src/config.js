// =====================================================================
//  TEXTOS E DADOS DA PÁGINA
//  Edite aqui preços, link de pagamento, contatos, depoimentos e dúvidas.
//  Tudo o que estiver entre [colchetes] ainda precisa ser preenchido.
// =====================================================================

export const site = {
  // Link do checkout da Eduzz. Enquanto estiver vazio, os botões levam até a seção de preço.
  checkoutUrl: '',

  cref: 'CREF 172018-G/SP',
  instagram: 'mateusleon_',
  email: 'mateusleon@icloud.com',
}

export const preco = {
  separado: 'R$ [0.000]', // valor riscado ("se fosse vendido separado")
  hoje: 'R$ [000]', // preço de venda
  parcelado: 'ou [0]x de R$ [00,00]',
}

// "Tudo o que você recebe": o valor de cada item aparece à direita.
export const itensInclusos = [
  {
    titulo: 'Programa Soccer Performance',
    descricao: '6 semanas, 12 treinos e 2 fases, em PDF para abrir no celular',
    valor: 'R$ [000]',
  },
  {
    titulo: 'Vídeo de cada exercício',
    descricao: 'Toque no nome do exercício e veja como fazer',
    valor: 'R$ [000]',
  },
  {
    titulo: 'Programação semanal',
    descricao: 'Para semanas sem jogo, com 1 ou com 2 jogos',
    valor: 'R$ [000]',
  },
  {
    titulo: 'Guia antes de começar',
    descricao: 'Técnica, progressão de carga e como ler cada treino',
    valor: 'R$ [000]',
  },
  {
    titulo: 'Acesso imediato',
    descricao: 'Você recebe tudo no e-mail assim que o pagamento é aprovado',
    valor: 'Incluso',
  },
]

export const depoimentos = [
  {
    texto:
      'Os resultados estão cada vez mais nítidos na minha performance. Depois da última mudança me senti ainda mais disposto, porque diminuiu a fadiga na musculatura, algo que eu sentia nos jogos.',
    nome: '[Nome do atleta]',
    detalhe: 'Atleta acompanhado pelo Mateus',
  },
  {
    texto:
      'Trabalhamos juntos nas pré-temporadas antes de eu ir para os EUA. Foi muito importante na minha trajetória: evitei lesões e cheguei sempre voando lá. Fora o acompanhamento a distância, que ajudava bastante.',
    nome: '[Nome do atleta]',
    detalhe: 'Atleta acompanhado nas pré-temporadas',
  },
  {
    texto: '[Depoimento do terceiro atleta]',
    nome: '[Nome do atleta]',
    detalhe: '[Clube · posição]',
  },
]

export const duvidas = [
  {
    pergunta: 'Preciso de academia?',
    resposta:
      'Sim. Os treinos foram pensados para a academia, com barra, halteres, anilhas, caixa e esteira ou bike.',
  },
  {
    pergunta: 'Como recebo o programa?',
    resposta:
      'Assim que o pagamento é aprovado, você recebe o acesso no seu e-mail e já pode abrir o material no celular.',
  },
  {
    pergunta: 'E se eu tiver jogo durante a semana?',
    resposta:
      'O programa traz a organização da semana para semanas sem jogo, com 1 jogo ou com 2 jogos. É só seguir a que combina com a sua.',
  },
  {
    pergunta: 'Serve para qualquer nível?',
    resposta: '[Resposta do Mateus sobre o nível indicado]',
  },
]
