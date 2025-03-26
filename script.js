fetch("data.json")
     .then((response) => response.json())
     .then((data) => extensionsList(data));

function extensionsList(extensions) {
     const listOfExtensions = document.querySelector("[data-listOfExtensions]");
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
                <input type="radio"/>
            </div>
            `;
          listOfExtensions.appendChild(extensionElement);
     }
}
