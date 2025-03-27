const themeToggleIcon = document.querySelector("[data-iconSun]");
const listOfExtensions = document.querySelector("[data-listOfExtensions]");
const filterAll = document.querySelector("[data-filterAll]");
const filterActive = document.querySelector("[data-filterActive]");
const filterinActive = document.querySelector("[data-filterinActive]");

let currentFilter = "all";

// Fetch data from data.json
fetch("data.json")
     .then((response) => response.json())
     .then((data) => extensionsList(data));

function extensionsList(extensions) {
     for (let i = 0; i < extensions.length; i++) {
          const extension = extensions[i];
          const extensionElement = document.createElement("div");
          extensionElement.classList.add("extension-card");
          extensionElement.innerHTML = `
            <div class="logo-And-detailes">
                 <img class="extension-logo" src="${extension.logo}" alt="${extension.name}">
                 <div class="extension-detailes">
                    <h2>${extension.name}</h2>
                    <p>${extension.description}</p>
                 </div>
            </div>
            <div class="extension-buttons">
                <button class="remove-button">remove</button>
                <label class="switch">
                <input type="checkbox"/>
                <span class="slider-round"></span>
                </label>
            </div>
            `;
          listOfExtensions.appendChild(extensionElement);

          const checkbox = extensionElement.querySelector(
               "input[type='checkbox']"
          );
          checkbox.addEventListener("change", () => {
               filterExtensions(currentFilter);
          });
     }
}

// theme toggle mode
themeToggleIcon.addEventListener("click", themeToggle);

function themeToggle() {
     const body = document.body;

     // Toggle the light-mode class on the body
     body.classList.toggle("light-mode");

     // Switch the icon
     if (body.classList.contains("light-mode")) {
          themeToggleIcon.src = "./assets/images/icon-moon.svg"; // Switch to moon icon
     } else {
          themeToggleIcon.src = "./assets/images/icon-sun.svg"; // Switch to sun icon
     }
}

// filter tools-bar

const filterExtensions = (filter) => {
     currentFilter = filter;

     const extensionsCard =
          listOfExtensions.querySelectorAll(".extension-card");
     for (let i = 0; i < extensionsCard.length; i++) {
          const extensions = extensionsCard[i];
          const checkbox = extensions.querySelector("input[type='checkbox']");

          switch (filter) {
               case "all":
                    extensions.style.display = "block";
                    break;

               case "active":
                    if (checkbox.checked) {
                         extensions.style.display = "block";
                         console.log("is active");
                    } else {
                         extensions.style.display = "none";
                         console.log("not active");
                    }
                    break;

               case "inActive":
                    if (!checkbox.checked) {
                         extensions.style.display = "block";
                    } else {
                         extensions.style.display = "none";
                    }
                    break;

               default:
                    extensions.style.display = "block";
          }
     }
};

filterAll.addEventListener("click", () => filterExtensions("all"));
filterActive.addEventListener("click", () => filterExtensions("active"));
filterinActive.addEventListener("click", () => filterExtensions("inActive"));
