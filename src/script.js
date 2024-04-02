var undone = [];

const onClick = (event) => {
  console.log(event.type);
  if (event.type == "click") {
    const { target } = event;
    const { parentElement } = target;
    const li = parentElement.parentElement.parentElement;
    const { id } = li;
    console.log(id);
  }
};

function onSubmit(event) {
  event.preventDefault();
  const { target } = event;
  const { value } = target[0];
  const li = document.createElement("li");
  const div = document.createElement("div");
  const buttonDone = document.createElement("button");
  const buttonExclude = document.createElement("button");
  const check = document.createElement("span");
  const close = document.createElement("span");

  li.innerText = value;
  check.innerText = "done";
  close.innerText = "close";

  div.classList.add("buttons");
  buttonDone.classList.add("done");
  buttonExclude.classList.add("exclude");
  check.classList.add("material-symbols-outlined");
  close.classList.add("material-symbols-outlined");

  check.style.fontSize = "0.75em";
  close.style.fontSize = "0.75em";

  buttonDone.appendChild(check);
  buttonExclude.appendChild(close);
  div.appendChild(buttonDone);
  div.appendChild(buttonExclude);
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
