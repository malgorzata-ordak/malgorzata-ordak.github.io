import "../scss/main.scss";

console.log("🌞 Hi! My name is Gosia - nice to meet you 🌞");

fetch("https://api.github.com/users/malgorzata-ordak/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    const container = document.querySelector(".project-grid--js");
    for (let repo of resp) {
      console.log(repo);
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
       <div class="project__bar">
         <span class="project__element"></span>
         <span class="project__element"></span>
         <span class="project__element"></span>
       </div>
       <div class="project__box">
         <img src="img/Github-Icon.svg"
          class="project__box-icon" alt="" />
         <h3 class="project__grid project__h3">
           <span class="project__span-one">project: </span>
           <span class="project__span-two">${name}</span>
         </h3>
         <p class="project__grid">
           <span class="project__span-one project__span-one--special">description:</span>
           <span class="project__span-three project__span-three--special">${description}</span>
         </p>
         <p class="project__grid">
           <span class="project__span-one">demo:</span>
           <span>&lt;<a
           target="_blank"
           rel="noopener noreferrer" 
           class="project__span-four" 
           href="${homepage}"
           title="${name} - demo">see here</a>&gt;
           </span>
         </p>
         <p class="project__grid">
           <span class="project__span-one">github:</span>
           <span>&lt;<a
           target="_blank"
           rel="noopener noreferrer" 
           class="project__span-four"
           href="${html_url}" 
           title="${name} - code">source code</a>&gt;
           </span>
         </p>
       </div>
     </article>`;
      if (description) container.innerHTML += template;
    }
  })
  .catch((e) => console.log(e));
