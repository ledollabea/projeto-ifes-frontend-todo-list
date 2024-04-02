var undone = [];

const onClick = (event) => {
  if (event.type == "click" && event.target.childElementCount == 0) {
    const { id } = event.target.parentElement.parentElement.parentElement;
    const li = document.getElementById(id);
    const aux = li.firstChild;
    const aux2 = li.lastChild;
    const s = document.createElement("s");
    const p = document.createElement("p");
    s.innerText = aux.innerText;
    p.appendChild(s);
    li.removeChild(li.firstChild);
    li.appendChild(p);
    li.appendChild(aux2);
  } else if (event.type == "click" && event.target.childElementCount == 1) {
    const { id } = event.target.parentElement.parentElement;
    const li = document.getElementById(id);
    const aux = li.firstChild;
    const aux2 = li.lastChild;
    const s = document.createElement("s");
    const p = document.createElement("p");
    s.innerText = aux.innerText;
    p.appendChild(s);
    li.removeChild(li.firstChild);
    li.appendChild(p);
    li.appendChild(aux2);
  }
};
const onDelete = (event) => {
  if (event.type == "click" && event.target.childElementCount == 0) {
    const { id } = event.target.parentElement.parentElement.parentElement;
    const { parentElement } = event.target.parentElement.parentElement;
    const ul = document.getElementById("tasks");
    ul.removeChild(parentElement);
    undone.forEach((child, i) => {
      if (i == id) {
        undone.splice(i, 1);
      }
    });
  } else if (event.type == "click" && event.target.childElementCount == 1) {
    const { id } = event.target.parentElement.parentElement;
    const { parentElement } = event.target.parentElement;
    const ul = document.getElementById("tasks");
    ul.removeChild(parentElement);
    undone.forEach((child, i) => {
      if (i == id) {
        undone.splice(i, 1);
      }
    });
  }
};

function onSubmit(event) {
  event.preventDefault();
  const { target } = event;
  const { value } = target[0];

  const li = document.createElement("li");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const buttonDone = document.createElement("button");
  const buttonExclude = document.createElement("button");
  const check = document.createElement("span");
  const close = document.createElement("span");

  p.innerText = value;
  check.innerText = "done";
  close.innerText = "close";

  div.classList.add("buttons");
  buttonDone.classList.add("done");
  buttonExclude.classList.add("exclude");
  check.classList.add("material-symbols-outlined");
  close.classList.add("material-symbols-outlined");

  check.style.fontSize = "0.75em";
  close.style.fontSize = "0.75em";

  buttonDone.type = "click";
  buttonExclude.type = "click";

  buttonDone.appendChild(check);
  buttonExclude.appendChild(close);
  div.appendChild(buttonDone);
  div.appendChild(buttonExclude);
  li.appendChild(p);
  li.appendChild(div);

  undone.push(li);
  const undoneTasks = document.getElementById("tasks");
  for (let i = 0; i < undone.length; i++) {
    undone[i].id = i;
    buttonDone.setAttribute("onclick", "onClick(event)");
    buttonExclude.setAttribute("onclick", "onDelete(event)");
    undoneTasks.appendChild(undone[i]);
  }
}
