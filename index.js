// Perguntas do quiz (faça as suas perguntas aqui!)
// Cada pergunta: { pergunta, alternativas: [], resposta: <indice da correta> }
const perguntas = {
  facil: [
    {
      pergunta: "Qual é o maior animal marinho?",
      alternativas: ["Tubarão-branco", "Baleia-azul", "Polvo-gigante", "Orca"],
      resposta: 1
    },
    {
      pergunta: "O que é um coral?",
      alternativas: ["Planta", "Animal", "Mineral", "Alga"],
      resposta: 1
    },
    {
      pergunta: "Qual desses NÃO é um peixe?",
      alternativas: ["Golfinho", "Cavalo-marinho", "Atum", "Salmão"],
      resposta: 0
    },
    {
      pergunta: "Onde fica a Grande Barreira de Corais?",
      alternativas: ["Brasil", "Austrália", "África do Sul", "Índia"],
      resposta: 1
    },
    {
      pergunta: "O que o polvo faz para se defender?",
      alternativas: ["Morde", "Solta tinta", "Canta", "Acende luz"],
      resposta: 1
    },
    {
      pergunta: "Qual é a cor típica do Nemo (peixe-palhaço)?",
      alternativas: ["Azul", "Verde", "Laranja", "Rosa"],
      resposta: 2
    },
    {
      pergunta: "Qual animal é conhecido por ter muitos dentes afiados?",
      alternativas: ["Tubarão", "Baleia", "Golfinho", "Camarão"],
      resposta: 0
    },
    {
      pergunta: "Qual animal marinho tem oito braços?",
      alternativas: ["Estrela-do-mar", "Tubarão", "Polvo", "Lula"],
      resposta: 2
    },
    {
      pergunta: "O que é uma anêmona?",
      alternativas: ["Flor", "Animal", "Alga", "Rochas"],
      resposta: 1
    },
    {
      pergunta: "Qual destes vive em conchas?",
      alternativas: ["Caranguejo-eremita", "Peixe-leão", "Baleia", "Tubarão"],
      resposta: 0
    }
  ],
  dificil: [
    {
      pergunta: "Qual a profundidade média dos oceanos?",
      alternativas: ["1.000 metros", "3.800 metros", "10.000 metros", "200 metros"],
      resposta: 1
    },
    {
      pergunta: "Qual animal marinho pode mudar de sexo ao longo da vida?",
      alternativas: ["Polvo", "Peixe-palhaço", "Baleia", "Tubarão"],
      resposta: 1
    },
    {
      pergunta: "Qual desses é um predador do tubarão?",
      alternativas: ["Golfinho", "Orca", "Lula-gigante", "Peixe-espada"],
      resposta: 1
    },
    {
      pergunta: "Qual o nome do menor golfinho do mundo?",
      alternativas: ["Boto-cor-de-rosa", "Toninha", "Orca", "Narval"],
      resposta: 1
    },
    {
      pergunta: "O que é bioluminescência?",
      alternativas: [
        "Capacidade de respirar debaixo d'água",
        "Capacidade de emitir luz",
        "Capacidade de mudar de cor",
        "Capacidade de nadar rápido"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual animal marinho possui o maior cérebro proporcional ao corpo?",
      alternativas: [
        "Tubarão-martelo", "Polvo", "Golfinho", "Cachalote"
      ],
      resposta: 2
    },
    {
      pergunta: "Qual desses é um molusco?",
      alternativas: [
        "Camarão", "Polvo", "Tubarão", "Baleia"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual o nome da maior espécie de tartaruga marinha?",
      alternativas: [
        "Tartaruga-cabeçuda", "Tartaruga-verde", "Tartaruga-de-couro", "Tartaruga-oliva"
      ],
      resposta: 2
    },
    {
      pergunta: "O que é o plâncton?",
      alternativas: [
        "Pequenos organismos que flutuam na água",
        "Tipo de coral",
        "Alga gigante",
        "Peixe minúsculo"
      ],
      resposta: 0
    },
    {
      pergunta: "Qual mar é famoso pelo seu alto grau de salinidade?",
      alternativas: [
        "Mar Morto", "Mar Báltico", "Mar Mediterrâneo", "Mar do Japão"
      ],
      resposta: 0
    },
    {
      pergunta: "O que é uma fossa oceânica?",
      alternativas: [
        "Montanha submarina", "Vale profundo no fundo do mar", "Recife de coral", "Banco de areia"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual desses animais pode viver mais de 100 anos?",
      alternativas: [
        "Tubarão-da-Groenlândia", "Polvo", "Cavalo-marinho", "Lula-vampira"
      ],
      resposta: 0
    },
    {
      pergunta: "O que são hidrotermais?",
      alternativas: [
        "Fontes de água quente no fundo do mar", "Recifes de corais", "Lagos de água salgada", "Ondas gigantes"
      ],
      resposta: 0
    },
    {
      pergunta: "Qual destes é um peixe abissal?",
      alternativas: [
        "Peixe-lanterna", "Cavalo-marinho", "Baiacu", "Atum"
      ],
      resposta: 0
    },
    {
      pergunta: "O que é a zona fótica do oceano?",
      alternativas: [
        "Onde não há luz", "Onde há bastante luz", "Região mais profunda", "Zona de recifes"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual animal marinho tem o maior tempo de gestação?",
      alternativas: [
        "Orca", "Tubarão", "Golfinho", "Baleia-azul"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual animal é conhecido como 'unicórnio do mar'?",
      alternativas: [
        "Narval", "Toninha", "Cavalo-marinho", "Peixe-agulha"
      ],
      resposta: 0
    },
    {
      pergunta: "O que é um ouriço-do-mar?",
      alternativas: [
        "Vegetal", "Animal", "Peixe", "Coral"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual desses faz parte do zooplâncton?",
      alternativas: [
        "Copépodes", "Algas", "Corais", "Peixes"
      ],
      resposta: 0
    },
    {
      pergunta: "Qual a principal função dos recifes de coral?",
      alternativas: [
        "Abrigo para animais marinhos", "Proteger navios", "Produzir petróleo", "Aumentar a salinidade"
      ],
      resposta: 0
    }
  ]
};

// Funções utilitárias
function getNivel() {
  return localStorage.getItem('nivel');
}
function setNivel(nivel) {
  localStorage.setItem('nivel', nivel);
}
function getIndice() {
  return Number(localStorage.getItem('indice')) || 0;
}
function setIndice(i) {
  localStorage.setItem('indice', i);
}
function getPontuacao() {
  return Number(localStorage.getItem('pontuacao')) || 0;
}
function setPontuacao(p) {
  localStorage.setItem('pontuacao', p);
}
function resetQuiz() {
  setIndice(0);
  setPontuacao(0);
  localStorage.removeItem('nivel');
}
function getPerguntaAtual() {
  const nivel = getNivel();
  const i = getIndice();
  return perguntas[nivel][i];
}
function totalPerguntas() {
  const nivel = getNivel();
  return perguntas[nivel].length;
}

// --- Somente na tela inicial ---
if (document.getElementById('facil') && document.getElementById('dificil')) {
  document.getElementById('facil').onclick = () => {
    setNivel('facil');
    setIndice(0);
    setPontuacao(0);
    window.location.href = 'tela1.html';
  };
  document.getElementById('dificil').onclick = () => {
    setNivel('dificil');
    setIndice(0);
    setPontuacao(0);
    window.location.href = 'tela1.html';
  };
}

// --- Somente nas telas de pergunta ---
if (document.getElementById('pergunta')) {
  const indice = getIndice();
  const nivel = getNivel();
  const total = perguntas[nivel].length;
  const perguntaObj = perguntas[nivel][indice];

  // Preencher pergunta
  document.getElementById('pergunta').textContent = perguntaObj.pergunta;

  // Preencher alternativas
  const alternativasDiv = document.getElementById('alternativas');
  alternativasDiv.innerHTML = '';
  perguntaObj.alternativas.forEach((alt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = alt;
    btn.onclick = () => responder(idx, btn);
    alternativasDiv.appendChild(btn);
  });

  // Barra de progresso
  const progress = document.getElementById('progress');
  progress.style.width = `${((indice + 1) / total) * 100}%`;

  // Função de resposta
  function responder(idx, btn) {
    const buttons = alternativasDiv.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);
    const correta = perguntaObj.resposta;
    if (idx === correta) {
      btn.classList.add('certa');
      setPontuacao(getPontuacao() + 1);
      document.getElementById('acerto').play();
    } else {
      btn.classList.add('errada');
      buttons[correta].classList.add('certa');
      document.getElementById('erro').play();
    }
    document.getElementById('proxima').classList.remove('oculto');
  }

  // Próxima tela
  document.getElementById('proxima').onclick = () => {
    setIndice(indice + 1);
    if (indice + 1 < total) {
      window.location.href = `tela${indice + 2}.html`;
    } else {
      window.location.href = 'resultados.html';
    }
  };
}

// --- Somente na tela de resultados ---
if (document.getElementById('pontuacao')) {
  const nivel = getNivel();
  const total = perguntas[nivel].length;
  const pontos = getPontuacao();
  document.getElementById('pontuacao').innerHTML = `<strong>${pontos}</strong> de <strong>${total}</strong> acertos`;
  document.getElementById('reiniciar').onclick = () => {
    resetQuiz();
    window.location.href = 'index.html';
  };
}

// --- Dark/Light Mode ---
function setModo(modo) {
  document.documentElement.setAttribute('data-modo', modo);
  localStorage.setItem('modo', modo);
  document.querySelectorAll('.modo-btn').forEach(btn => {
    btn.textContent = modo === 'escuro' ? '🌙' : '☀️';
  });
}
function alternaModo() {
  const atual = localStorage.getItem('modo') || 'escuro';
  setModo(atual === 'escuro' ? 'claro' : 'escuro');
}
if (document.querySelector('.modo-btn')) {
  const modo = localStorage.getItem('modo') || 'escuro';
  setModo(modo);
  document.querySelectorAll('.modo-btn').forEach(btn => {
    btn.onclick = alternaModo;
  });
}

// --- Animação de bolhas (Canvas) ---
function animarBolhas() {
  const canvas = document.getElementById('bubbles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth, height = window.innerHeight;
  canvas.width = width; canvas.height = height;

  let bolhas = Array.from({length: 24}, () => ({
    x: Math.random() * width,
    y: height + Math.random() * height/1.5,
    r: Math.random() * 16 + 10,
    v: 1.2 + Math.random() * 1.7,
    op: Math.random() * 0.5 + 0.3
  }));

  function desenhar() {
    ctx.clearRect(0, 0, width, height);
    bolhas.forEach(b => {
      ctx.globalAlpha = b.op;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
      ctx.fillStyle = "#a2c7e5";
      ctx.fill();
      b.y -= b.v;
      if (b.y + b.r < 0) {
        b.x = Math.random() * width;
        b.y = height + b.r;
        b.r = Math.random() * 14 + 10;
        b.v = 1.2 + Math.random() * 1.5;
        b.op = Math.random() * 0.5 + 0.3;
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(desenhar);
  }
  desenhar();
  window.onresize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  };
}
animarBolhas();