const add_item = () => {
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  let note = document.getElementById("note");
  if (item.value != "") {
    let make_li = document.createElement("li");
    make_li.appendChild(document.createTextNode(item.value));
    list_item.appendChild(make_li);
    item.value = "";

    make_li.onclick = function () {
      this.parentNode.removeChild(this);
      note.innerHTML = null;
    };
    note.innerHTML = "Note: Click on item to delete it.";
  } else {
    alert("please add item in input box ");
  }
};
