class Square {
  constructor(row, coll) {
    this.row = row;
    this.coll = coll;
    this.rowIndex = 0;
    this.colIndex = 0;
    this.createInteractiveTable();
  }

  createInteractiveTable = () => {
    this.table = document.createElement("table");

    this.addRowButton = document.createElement("button");
    this.addRowButton.setAttribute("class", "addRow");
    this.addRowButton.innerHTML = "+";

    this.addColButton = document.createElement("button");
    this.addColButton.setAttribute("class", "addCol");
    this.addColButton.innerHTML = "+";

    this.delRowButton = document.createElement("button");
    this.delRowButton.setAttribute("class", "delRow delete-btn");
    this.delRowButton.innerHTML = "-";

    this.delColButton = document.createElement("button");
    this.delColButton.setAttribute("class", "delCol delete-btn");
    this.delColButton.innerHTML = "-";

    this.addRowButton.addEventListener("click", this.addRow);
    this.addColButton.addEventListener("click", this.addColumn);
    this.delRowButton.addEventListener("click", this.deleteRow);
    this.delRowButton.addEventListener("mouseenter", this.pointerMouseEnter);
    this.delRowButton.addEventListener("mouseleave", this.pointerMouseLeave);
    this.delColButton.addEventListener("click", this.deleteColumn);
    this.delColButton.addEventListener("mouseenter", this.pointerMouseEnter);
    this.delColButton.addEventListener("mouseleave", this.pointerMouseLeave);
    this.table.addEventListener("mouseenter", this.pointerMouseEnter);
    this.table.addEventListener("mouseleave", this.pointerMouseLeave);
    this.table.addEventListener("mousemove", this.pointerMouseMove);
  };

  pointerMouseEnter = () => {
    this.delRowButton.style.visibility = "visible";
    this.delColButton.style.visibility = "visible";
    this.delRowButton.style.display = this.table.querySelectorAll("tr")[1]
      ? "block"
      : "none";
    this.delColButton.style.display = this.table.querySelector("tr").children[1]
      ? "block"
      : "none";
  };

  pointerMouseLeave = () => {
    this.delRowButton.style.visibility = "hidden";
    this.delColButton.style.visibility = "hidden";
  };

  pointerMouseMove = e => {
    const { offsetTop, offsetLeft, nodeName, parentNode, cellIndex } = e.target;
    if (nodeName === "TD") {
      this.delRowButton.style.top = offsetTop + "px";
      this.delColButton.style.left = offsetLeft + "px";
      this.rowIndex = parentNode.rowIndex;
      this.colIndex = cellIndex;
    }
  };

  addRow = () => {
    const newRow = this.table.querySelector("tr").cloneNode(true);
    this.table.querySelector("tbody").appendChild(newRow);
  };

  addColumn = () => {
    this.trArray = this.table.querySelectorAll("tr");
    this.trArray.forEach(tr => {
      tr.appendChild(tr.querySelector("td").cloneNode());
    });
  };

  deleteRow = () => {
    this.trArray = this.table.querySelectorAll("tr");
    if (this.trArray.length > 1) {
      this.trArray[this.rowIndex].remove();
    }
    if (this.rowIndex === this.trArray.length - 1) {
      this.delRowButton.style.top = event.target.offsetTop - 55 + "px";
    }
    if (this.trArray.length - 1 === 1) {
      this.delRowButton.style.visibility = "hidden";
    }
  };

  deleteColumn = () => {
    this.trArray = this.table.querySelectorAll("tr");
    this.tdArray = this.trArray[0].querySelectorAll("td");
    if (this.tdArray.length > 1) {
      this.trArray.forEach(tr => {
        tr.querySelectorAll("td")[this.colIndex].remove();
      });
    }
    
    if (this.colIndex === this.tdArray.length - 1) {
      this.delColButton.style.left = event.target.offsetLeft - 55 + "px";
    }
    if (this.tdArray.length - 1 === 1) {
      this.delColButton.style.visibility = "hidden";
    }
  };


  show = () => {
    const box = document.createElement("div");
    box.setAttribute("class", "root");
    box.setAttribute("id", "root");
    const tableBody = document.createElement("tbody");
    for (let i = 0; i < this.row; i++) {
      const rows = document.createElement("tr");
      for (let j = 0; j < this.coll; j++) {
        const cell = document.createElement("td");
        rows.appendChild(cell);
      }
      this.table.appendChild(rows);
    }

    this.table.appendChild(tableBody);
    box.appendChild(this.table);
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(box);
    box.appendChild(this.addRowButton);
    box.appendChild(this.addColButton);
    box.appendChild(this.delRowButton);
    box.appendChild(this.delColButton);
  };
}

let square = new Square(5, 5);
square.show();



  
let table = document.getElementsByTagName('table')[0];
let container = document.getElementById('root');

table.onmousedown = function(e) {

  let coords = getCoords(container);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  container.style.position = 'absolute';
  document.body.appendChild(container);
  moveAt(e);

  container.style.zIndex = 1000;

  function moveAt(e) {
    container.style.left = e.pageX - shiftX - 55 + 'px';
    container.style.top = e.pageY - shiftY - 55 + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  document.onmouseup = function() {
    document.onmousemove = null;
    container.onmouseup = null;
  };

};

container.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}