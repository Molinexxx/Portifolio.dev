const githubUser = "Molinexxx";
const projectsGrid = document.querySelector("#projects-grid");
const repoCount = document.querySelector("#repo-count");
const hiddenRepositories = ["Portfolio.dev", "Molinexxx"];
const customProjects = [
  {
    name: "Jogo_da_memoria",
    title: "Jogo da Memoria",
    type: "Projeto em PHP",
    cover: "GAME",
    status: "Logica e sessao",
    description:
      "Jogo da memoria desenvolvido em PHP com emojis, controle por sessao, comparacao de pares, contador de tentativas e reinicio da partida.",
    stack: ["PHP", "HTML", "CSS", "Bootstrap", "Session"],
    imageCandidates: [
      "assets/projects/imagem_jogo-da_memoria.png",
      "assets/projects/Jogo_da_memoria.svg",
    ],
    repository: "https://github.com/Molinexxx/Jogo_da_memoria",
    demo: "https://github.com/Molinexxx/Jogo_da_memoria",
    updatedAt: "2026-03-23T22:05:00Z",
    stars: 0,
    year: 2026,
    repoName: "Jogo_da_memoria",
  },
];

const featuredOverrides = {
  "Tcc-avanchtech-php": {
    title: "TCC Avanch Tech PHP",
    type: "Projeto academico",
    cover: "PHP",
    status: "Em destaque",
    description:
      "Projeto de TCC em PHP com foco em estrutura web, organizacao de sistema, banco de dados e evolucao pratica no backend.",
    stack: ["PHP", "MySQL", "PDO", "Bootstrap"],
  },
  "project-barbearia": {
    title: "Projeto SaaS Barbearia",
    type: "Sistema web",
    cover: "PHP",
    status: "Projeto SaaS",
    description:
      "Sistema web para barbearia com foco em gestao, organizacao de atendimento, cadastros e experiencia administrativa.",
    stack: ["PHP", "MySQL", "CRUD", "Web"],
  },
  "Crud-em-java": {
    title: "CRUD em Java",
    type: "Aplicacao Java",
    cover: "CRUD",
    status: "Estudo pratico",
    description:
      "Projeto para praticar cadastro, listagem, edicao e exclusao em uma estrutura simples e objetiva.",
    stack: ["Java", "HTML"],
  },
  "TCC-avanca-tech-Java": {
    title: "TCC Avanca Tech Java",
    type: "Projeto academico",
    cover: "TCC",
    status: "TCC",
    description:
      "Repositorio academico que reforca minha base em Java e minha evolucao em desenvolvimento backend.",
    stack: ["Java"],
  },
  "Back-end---Mercado-List": {
    title: "Back-end Mercado List",
    type: "Backend",
    cover: "API",
    status: "Backend",
    description:
      "Projeto voltado para organizacao de codigo e fundamentos de aplicacoes backend para gerenciamento.",
    stack: ["Java"],
  },
  Aula_PHP: {
    title: "Aula PHP",
    type: "Estudos em PHP",
    cover: "PHP",
    status: "Laboratorio",
    description:
      "Repositorio com exercicios e praticas em PHP, HTML, CSS e JavaScript para consolidar fundamentos web.",
    stack: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  aula_java: {
    title: "Aula Java",
    type: "Estudos em Java",
    cover: "JAVA",
    status: "Fundamentos",
    description:
      "Projeto focado no aprendizado da linguagem Java, com exercicios e estruturas para reforcar logica.",
    stack: ["Java"],
  },
};

const featuredOrder = [
  "project-barbearia",
  "Crud-em-java",
  "Jogo_da_memoria",
  "TCC-avanca-tech-Java",
  "Back-end---Mercado-List",
  "Aula_PHP",
  "aula_java",
];

const localImageCandidates = [".svg", ".png", ".jpg", ".jpeg", ".webp"];

function formatDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function formatRepoName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getProjectImage(repoName) {
  const safeRepoName = encodeURIComponent(repoName);

  // A ordem abaixo facilita o uso de screenshots locais quando voce quiser destacar algum repositorio.
  const localCandidates = localImageCandidates.map(
    (extension) => `assets/projects/${safeRepoName}${extension}`
  );

  return [...localCandidates, `https://opengraph.githubassets.com/1/${githubUser}/${safeRepoName}`];
}

function detectStack(repo, override) {
  const stack = new Set(override?.stack || []);

  if (repo.language) {
    stack.add(repo.language);
  }

  if (/php/i.test(repo.name) || /php/i.test(repo.description || "")) {
    stack.add("PHP");
  }

  if (/java/i.test(repo.name) || /java/i.test(repo.description || "")) {
    stack.add("Java");
  }

  if (/html/i.test(repo.description || "")) {
    stack.add("HTML");
  }

  if (/css/i.test(repo.description || "")) {
    stack.add("CSS");
  }

  return [...stack].slice(0, 5);
}

function buildProjectData(repo) {
  const override = featuredOverrides[repo.name] || {};
  const imageCandidates = getProjectImage(repo.name);
  const stack = detectStack(repo, override);

  return {
    title: override.title || formatRepoName(repo.name),
    type: override.type || (repo.language ? `${repo.language} project` : "Repositorio"),
    cover: override.cover || (repo.language ? repo.language.slice(0, 4).toUpperCase() : "DEV"),
    status: override.status || (repo.archived ? "Arquivado" : "Atualizado"),
    description:
      override.description ||
      repo.description ||
      "Repositorio publico do meu GitHub com foco em pratica, estudo ou construcao de solucao.",
    stack,
    imageCandidates,
    repository: repo.html_url,
    demo: repo.homepage || repo.html_url,
    updatedAt: repo.updated_at,
    stars: repo.stargazers_count,
    year: new Date(repo.updated_at).getFullYear(),
    repoName: repo.name,
  };
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const stackItems = project.stack
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-cover">
      <img class="project-cover-image" src="${project.imageCandidates[0]}" alt="Capa do projeto ${escapeHtml(project.title)}">
      <div class="project-cover-overlay"></div>
      <span class="project-cover-badge">${escapeHtml(project.cover)}</span>
      <div class="project-cover-meta">
        <span class="project-year">${project.year}</span>
        <span class="project-status">${escapeHtml(project.status)}</span>
      </div>
    </div>
    <div class="project-body">
      <span class="project-type">${escapeHtml(project.type)}</span>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-metrics">
        <span>Atualizado em ${escapeHtml(formatDate(project.updatedAt))}</span>
        <span>${project.stars} estrela(s)</span>
      </div>
      <div class="project-stack">${stackItems}</div>
      <div class="project-links">
        <a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Abrir projeto</a>
        <a class="project-link" href="${project.repository}" target="_blank" rel="noreferrer">Repositorio</a>
      </div>
    </div>
  `;

  const image = card.querySelector(".project-cover-image");
  let imageIndex = 0;

  image.addEventListener("error", () => {
    imageIndex += 1;

    if (imageIndex < project.imageCandidates.length) {
      image.src = project.imageCandidates[imageIndex];
      return;
    }

    image.closest(".project-cover").classList.add("project-cover-fallback");
    image.remove();
  });

  return card;
}

function sortRepositories(repositories) {
  const featuredIndex = new Map(featuredOrder.map((repoName, index) => [repoName, index]));

  return [...repositories].sort((first, second) => {
    const firstFeatured = featuredIndex.has(first.name) ? featuredIndex.get(first.name) : Number.MAX_SAFE_INTEGER;
    const secondFeatured = featuredIndex.has(second.name) ? featuredIndex.get(second.name) : Number.MAX_SAFE_INTEGER;

    if (firstFeatured !== secondFeatured) {
      return firstFeatured - secondFeatured;
    }

    return new Date(second.updated_at) - new Date(first.updated_at);
  });
}

function renderMessage(message) {
  projectsGrid.innerHTML = `<article class="project-empty">${escapeHtml(message)}</article>`;
}

async function loadProjects() {
  renderMessage("Carregando repositorios do GitHub...");

  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Falha ao buscar repositorios: ${response.status}`);
    }

    const repositories = await response.json();
    const allPublicRepositories = repositories.filter(
      (repo) =>
        !repo.fork &&
        repo.name !== `${githubUser}.github.io` &&
        !hiddenRepositories.includes(repo.name)
    );
    const publicRepositories = allPublicRepositories.slice(0, 9);

    repoCount.textContent = String(allPublicRepositories.length);

    if (publicRepositories.length === 0) {
      renderMessage("Nenhum repositorio publico encontrado para exibir no portfolio.");
      return;
    }

    const sortedRepositories = sortRepositories(publicRepositories);
    const sortedProjects = [
      ...customProjects,
      ...sortedRepositories.map(buildProjectData),
    ].sort((first, second) => {
      const featuredIndex = new Map(featuredOrder.map((repoName, index) => [repoName, index]));
      const firstFeatured = featuredIndex.has(first.repoName)
        ? featuredIndex.get(first.repoName)
        : Number.MAX_SAFE_INTEGER;
      const secondFeatured = featuredIndex.has(second.repoName)
        ? featuredIndex.get(second.repoName)
        : Number.MAX_SAFE_INTEGER;

      if (firstFeatured !== secondFeatured) {
        return firstFeatured - secondFeatured;
      }

      return new Date(second.updatedAt) - new Date(first.updatedAt);
    });
    projectsGrid.innerHTML = "";

    sortedProjects.forEach((project) => projectsGrid.appendChild(createProjectCard(project)));
  } catch (error) {
    console.error(error);
    repoCount.textContent = "--";
    renderMessage("Nao foi possivel carregar os repositorios agora. Tente novamente em instantes.");
  }
}

loadProjects();
