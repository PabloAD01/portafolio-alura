const aboutMeSection = document.getElementById("aboutMe");
const skillsSection = document.getElementById("skills");
const hobbiesSection = document.getElementById("hobbies");
const educationSection = document.getElementById("education");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");

const sectionArray = [
  aboutMeSection,
  skillsSection,
  hobbiesSection,
  educationSection,
  projectsSection,
  contactSection,
];

/* Data */

const skillsArray = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },

  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg",
  },
];

const hobbiesArray = [
  {
    name: "Estudiar",
    clase: "fa-solid fa-book",
  },
  {
    name: "Programar",
    clase: "fa-solid fa-code",
  },
  {
    name: "Hacer ejercicio",
    clase: "fa-solid fa-dumbbell",
  },
  {
    name: "Escuchar música",
    clase: "fa-solid fa-music",
  },
];

const navbarArray = [
  {
    id: "aboutMe",
    href: "#",
    name: "Sobre mí",
  },
  {
    id: "skills",
    href: "#",
    name: "Skills",
  },
  {
    id: "hobbies",
    href: "#",
    name: "Hobbies",
  },
  {
    id: "education",
    href: "#",
    name: "Formación",
  },
  {
    id: "projects",
    href: "#",
    name: "Proyectos",
  },
  {
    id: "contact",
    href: "#",
    name: "Contacto",
  },
];

const educationArray = [
  {
    url: "https://res.cloudinary.com/doa6b7qnk/image/upload/v1713324602/u-magallanes_ipdnk4.png",
    place: "Universidad de Magallanes",
    career: "Ingenieria civil química",
    date: "En curso",
  },
  {
    url: "https://res.cloudinary.com/doa6b7qnk/image/upload/v1713223324/aluraoracle_ofjy91.png",
    place: "Alura Latam",
    career: "Desarrollador Frontend",
    date: "En curso",
  },
];

const coursesArray = [
  {
    name: "MERN Stack Course - MongoDB, Express, React and NodeJS",
  },
  {
    name: "Vue - The Complete Guide (incl. Router & Composition API)",
  },
  {
    name: "Sistema de Gestión de Conducta Responsable en la Industria Química (Universidad de Magallanes)",
  },
  {
    name: "Curso de Inglés con examen TOEIC en Reading y Listening (Universidad de Magallanes)",
  },
  {
    name: "Cursos de desarrollo de habilidades blandas (Alura Latam)",
  },
  {
    name: "Lógica de programación con JavaScript (Alura Latam)",
  },
];

const projectsArray = [
  {
    image:
      "https://res.cloudinary.com/doa6b7qnk/image/upload/v1713223819/Captura_de_pantalla_2024-04-15_203003_pxx7iu.png",
    title: "Mi primera pagina web",
    url: "https://pabload01.github.io/My-first-website/",
  },
  {
    image:
      "https://res.cloudinary.com/doa6b7qnk/image/upload/v1713224085/Captura_de_pantalla_2024-04-15_203432_xgiuzr.png",
    title: "Encriptador de texto Alura",
    url: "https://github.com/PabloAD01/Encriptador_Alura",
  },
  {
    image:
      "https://res.cloudinary.com/doa6b7qnk/image/upload/v1713225035/Captura_de_pantalla_2024-04-15_204952_iftyah.png",
    title: "Job tracker App (Curso React)",
    url: "https://node-express-application-lnm9.onrender.com",
  },
  {
    image:
      "https://res.cloudinary.com/doa6b7qnk/image/upload/v1713226135/Captura_de_pantalla_2024-04-15_210838_qvhytz.png",
    title: "Mi primera app ",
    url: "https://github.com/PabloAD01/Copy_App",
  },
];

/*Funcion para mostrar las secciones */

function showSection(sectionId) {
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    sectionArray.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "flex";
        setTimeout(() => {
          section.style.opacity = 1;
        }, 100);
      } else {
        section.style.opacity = 0;
        setTimeout(() => {
          section.style.display = "none";
        }, 200);
      }
    });
  }
}

/*Funcion para redimensionar la sección */
function handleResize() {
  if (window.innerWidth < 1024) {
    sectionArray.forEach((section) => {
      section.style.display = "flex";
      section.style.opacity = 1;
    });
  } else {
    const selectedSectionId = sectionArray.find((section) => {
      return section.style.display !== "none";
    }).id;
    showSection(selectedSectionId);
  }
}

// Agregar manejadores de eventos para cada sección
sectionArray.forEach((section) => {
  section.addEventListener("click", () => {
    const sectionId = section.id;
    showSection(sectionId);
  });
});

// Agregar evento de redimensionamiento
window.addEventListener("resize", handleResize);

/*Funciones para poblar el navbar y las secciones */

function showNavbar() {
  const navbar = document.getElementById("header__options");
  navbarArray.forEach((navbarItem) => {
    navbar.innerHTML += `
    <a
      href="${navbarItem.href}"
      class="options__item"
      onclick="showSection('${navbarItem.id}')"
      >${navbarItem.name}</a
    >`;
  });
}

function showSkills() {
  const skillItems = document.getElementById("skills__list");
  skillsArray.forEach((skills) => {
    const skillItem = document.createElement("li");
    skillItem.classList.add("skills__item");
    skillItem.innerHTML = `
    <img height="100px"  src="${skills.icon}" alt="${skills.name}">
    <p>${skills.name}</p>
    `;
    skillItems.appendChild(skillItem);
  });
}

function showHobbies() {
  const hobbyItems = document.getElementById("hobbies__list");
  hobbiesArray.forEach((hobbies) => {
    const hobbyItem = document.createElement("li");
    hobbyItem.classList.add("hobbies__item");
    hobbyItem.innerHTML = `
    <i height="100px" class="${hobbies.clase}"  alt="${hobbies.name}"></i>
    <p>${hobbies.name}</p>
    `;
    hobbyItems.appendChild(hobbyItem);
  });
}

function showEducation() {
  const educationItems = document.getElementById("education__list");
  const coursesItems = document.getElementById("courses__list");
  educationArray.forEach((education) => {
    const educationItem = document.createElement("li");
    educationItem.classList.add("education__item");
    educationItem.innerHTML = `
    <img height="100px" src="${education.url}" alt="${education.place}">
    <p>${education.place}</p>
    <p>${education.career}</p>
    <p>${education.date}</p>
    `;
    educationItems.appendChild(educationItem);
  });
  coursesArray.forEach((courses) => {
    const coursesItem = document.createElement("li");
    coursesItem.classList.add("courses__item");
    coursesItem.innerHTML = `
    <p>${courses.name} </p>
    `;
    coursesItems.appendChild(coursesItem);
  });
}

function showProjects() {
  const projectsItems = document.getElementById("projects__list");
  projectsArray.forEach((projects) => {
    const projectsItem = document.createElement("li");
    projectsItem.classList.add("projects__item");
    projectsItem.innerHTML = `
    <a href="${projects.url}">
    <img height="100px" class="projects__image" src="${projects.image}" alt="${projects.title}">
    </a>
    
    <p>${projects.title}</p>
    `;
    projectsItems.appendChild(projectsItem);
  });
}

/*LIGHT/DARK MODE */
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  sunIcon.classList.toggle("hide");
  moonIcon.classList.toggle("hide");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
});

const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  body.classList.add("dark-mode");
  sunIcon.classList.remove("hide");
  setTimeout(() => {
    body.classList.add("transition");
  }, 100);
} else {
  moonIcon.classList.remove("hide");
}

/*Inicializar navbar y secciones */
showNavbar();
showSkills();
showHobbies();
showEducation();
showProjects();

/* Manejador de redimensionamiento */
handleResize();

/*Validación de formulario */

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

/*Se validan los campos */
function validateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    nameError.style.display = "block";
    nameError.innerHTML = "El nombre no puede estar en blanco";
    return false;
  } else if (name.length > 50) {
    nameError.style.display = "block";
    nameError.innerHTML = "El nombre debe tener máximo 50 caracteres";
    return false;
  } else {
    nameError.style.display = "none";
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.style.display = "block";
    emailError.innerHTML = "El correo electrónico no puede estar en blanco";
    return false;
  } else if (!emailPattern.test(email)) {
    emailError.style.display = "block";
    emailError.innerHTML = "El correo electrónico no es válido";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

function validateSubject() {
  const subject = subjectInput.value.trim();
  if (subject === "") {
    subjectError.style.display = "block";
    subjectError.innerHTML = "El asunto no puede estar en blanco";
    return false;
  } else if (subject.length > 50) {
    subjectError.style.display = "block";
    subjectError.innerHTML = "El asunto debe tener máximo 50 caracteres";
    return false;
  } else {
    subjectError.style.display = "none";
    return true;
  }
}

function validateMessage() {
  const message = messageInput.value.trim();
  if (message === "") {
    messageError.style.display = "block";
    messageError.innerHTML = "El mensaje no puede estar en blanco";
    return false;
  } else if (message.length > 300) {
    messageError.style.display = "block";
    messageError.innerHTML = "El mensaje debe tener máximo 300 caracteres";
    return false;
  } else {
    messageError.style.display = "none";
    return true;
  }
}

/*Se verifica que todos los campos esten validados */

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
}

form.addEventListener("submit", (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
subjectInput.addEventListener("input", validateSubject);
messageInput.addEventListener("input", validateMessage);

/*Se inhabilita el botón de enviar inicialmente */
const submitButton = document.querySelector(".form__button");
submitButton.disabled = true;

/*Se activa el botón de enviar cuando todos los campos estén validados */
form.addEventListener("input", () => {
  submitButton.disabled = !validateForm();
});
