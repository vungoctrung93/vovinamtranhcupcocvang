
function clearPoint() {
  for (const [index, point] of list.entries()) {
    list[index].point = 0;
  }
  reload();
}
let list = [
  {name: "Trần Lê Ngọc Như"},
  {name: "Nguyễn Bình Dương"},
  {name: "Trần Công Dương"},
  {name: "Nguyễn Tiến Nhật"},
  {name: "Lê Gia Bảo"},
  {name: "Trần Lê Linh Hương"},
  {name: "Lê Thư Kỳ"},
  {name: "Lê Khánh Vy"},
  {name: "Kpa Hờ Trương"},
  {name: "Trần Nhật Nam"},
  {name: "Võ Bá Thông"},
  {name: "Nguyễn Xuân Nhi"},
  {name: "Phạm Thanh Xuân"},
  {name: "Trần Quang Hưng"},
  {name: "Lê Nguyễn Ngọc Hân"},
  {name: "Nguyễn Ngọc Khánh Linh"},
  {name: "Đặng Ngọc Minh Anh"},
  {name: "Lê Nguyễn Như Quỳnh"},
  {name: "Nguyễn Linh Anh"},
  {name: "Hà Thảo Nguyên"},
  {name: "Đặng Thị Quỳnh"},
  {name: "Đoàn Gia Huy"},
  {name: "Dương Gia Hảo"},
  {name: "Nguyễn Huỳnh Mỹ Mỹ"},
  {name: "Trần Lê Ngọc Thủy"},
  {name: "Phan Thị Thanh Xuân"},
  {name: "Lưu Ngọc Ngân"},
  {name: "Nguyễn Văn Nhật Quang"},
  {name: "Âu Hương Trà"},
  {name: "Hờ Loan"}
]
if (localStorage.getItem("list")) {
  list = JSON.parse(localStorage.getItem("list"));
}
let textGroup = document.getElementById("textgroup");
function reload() {
  list.sort((a,b)=>{
    return Number(b.point) - Number(a.point)
  })
  textGroup.innerHTML = "";
  
  for (const [index, student] of list.entries()) {
    if (!list[index].point) {
      list[index].point = 0;
    }

    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = "student" + index
    if(list[index].done) {
      cell.style.color = "red";
    }
    textGroup.append(cell);



    let top = document.createElement("div")
    top.innerHTML = "TOP " + (index + 1)
    top.className = "top-rank"
    cell.append(top);

    let doneCheck = document.createElement("input");
    doneCheck.type = "checkbox";
    doneCheck.id = "donestudent" + index;
    doneCheck.name = "donecheck";
    doneCheck.checked = list[index].done 
    doneCheck.onclick = (e) => {
      list[index].done =  e.target.checked;
      reload();
    }
    cell.append(doneCheck);

    let name = document.createElement("span")
    name.innerHTML = student.name
    textGroup.append(cell);
    cell.append(name);


    let point = document.createElement("span");
    point.className = "point";
    point.innerHTML = list[index].point;
    cell.append(point);


    
    if(!list[index].done) {
      let buttonPlus = document.createElement("button")
      buttonPlus.className = "plus-button";
      buttonPlus.innerHTML = " + "
      buttonPlus.onclick = () => {
        let plus = prompt("Cộng bao nhiêu?");
        list[index].point = list[index].point - (-plus);
        reload();
      }
      cell.append(buttonPlus);
  
  
      let buttonMinus = document.createElement("button")
      buttonMinus.innerHTML = " - "
      buttonMinus.onclick = () => {
        let minus = prompt("Trừ bao nhiêu?");
        list[index].point = list[index].point - minus;
        if (list[index].point < 0) {
          list[index].point = 0
        }
        reload();
      }
      cell.append(buttonMinus);
  
    }
  }
  localStorage.setItem("list", JSON.stringify(list));
}

reload();