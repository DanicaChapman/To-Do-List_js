document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    }
      
  });
  
  document.querySelector("#additem").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });
  
  addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkBox = document.createElement("i");
    const trashSym = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;
  
    checkBox.className = "fa-solid fa-square-check";
    checkBox.style.color = "lightgray";
    checkBox.addEventListener("click", () => {
      checkBox.style.color = "limegreen";
    })
    div.appendChild(checkBox);
  
    trashSym.className = "fa-solid fa-trash-can";
    trashSym.style.color = "darkgray";
    trashSym.addEventListener("click", () => {
      item.remove();
    })
    div.appendChild(trashSym);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#todolist").appendChild(item);
    document.querySelector("#input").value = "";
  }