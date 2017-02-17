produtos = {
  "po": {
     nome: "pó compacto",
     fabricante: "Quem disse Berecine?",
     tipo: "Ele serve tanto para ajudar a disfarçar algumas imperfeições, como espinhas e manchas claras",
     cor: "fps 15 15",
     preço: 25.99,
     depoimento: "Minha prima quem recomendou e eu comprei, adoreeeeei! E super recomendo! esconde todas as manchinhas.",
     foto: "po-facial-quem-disse-berenice_1_812258_720.jpeg"
   },
   "blush": {
     nome: "Blush",
     fabricante: "Quem disse Berenice?",
     tipo: "Deixar a pele com uma cor corada",
     cor: "coral",
     preço: 25.00,
     depoimento: "Ajuda muito a dar um "UP" naquela cara de sono! e melhora a palidez que a base e o pó deixam em sua pele.",
     foto: "blush-quem-disse-berenice_1_803077.jpeg"
   },
   "creme": {
    nome: "Absolut Control Shampoo Multi-Controle",
    fabricante: "loreal",
    tipo: "tratar cabelos volumosos e indisciplinados",
    preço: 65.90,
    depoimento: "O Shampoo perfeito para os cabelos volumosos e indisciplinados. Sua fórmula é enriquecida com manteiga de murumuru e ácido glutâmico que confere recarga absoluta de emoliência e controle de disciplina. ",
    foto: "pasted_image_at_2017_02_03_08_52_am.png"
  },
  "ampola": {
   nome: "AMPOLA DE TRATAMENTO DOVE RECONSTRUÇÃO COMPLETA",
   fabricante: "dove",
   tipo: "creme em ampola",
   preço:19,99
   depoimento: "A Ampola Dove Reconstrução Completa Tratamento de Resgate recupera os fios em apenas 60 segundos e recupera a maciez dos cabelos. Sua fórmula é 3x mais concentrada em ingrediente ativo e possui agente hidratante que penetra no interior da fibra e fortalece os fios. Indicado para cabelos danificados e severamente danificados, o produto age no nível celular do fio para uma reconstrução completa em apenas 7 dias."
   foto:"pasted_image_at_2017_02_03_09_11_am_360.png"
  }
}

// Código que pega o parâmetro da URL. Copie e cole no seu código
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function exibeDetalhes(item) {
  document.getParameterById(nome_mostraitens).src = item.nome;
  document.getParameterById("fabricante_mostraitens").src = item.fabricante;
  document.getParameterById("tipo_mostraitens").src = item.tipo;
  document.getParameterById("cor_mostraitens").src = item.cor;
  document.getParameterById("preço_mostraitens").src = item.preço;
  document.getParameterById("depoimento_mostraitens").src = item.depoimento;
  document.getParameterById("foto_mostraitens").src = item.foto;
}

var codigo = getParameterByname('codigo');
exibeDetalhes(catalogo[codigo]);
