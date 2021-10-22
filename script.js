var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
var expanded = false;

function showCheckboxesa() {
  var checkboxesa = document.getElementById("checkboxesa");
  if (!expanded) {
    checkboxesa.style.display = "block";
    expanded = true;
  } else {
    checkboxesa.style.display = "none";
    expanded = false;
  }
}

var expanded = false;

function showCheckboxesb() {
  var checkboxesb = document.getElementById("checkboxesb");
  if (!expanded) {
    checkboxesb.style.display = "block";
    expanded = true;
  } else {
    checkboxesb.style.display = "none";
    expanded = false;
  }
}
var expanded = false;

function showCheckboxesc() {
  var checkboxesc = document.getElementById("checkboxesc");
  if (!expanded) {
    checkboxesc.style.display = "block";
    expanded = true;
  } else {
    checkboxesc.style.display = "none";
    expanded = false;
  }
}
var expanded = false;

function showCheckboxesd() {
  var checkboxesd = document.getElementById("checkboxesd");
  if (!expanded) {
    checkboxesd.style.display = "block";
    expanded = true;
  } else {
    checkboxesd.style.display = "none";
    expanded = false;
  }
}
var settingsmenu = document.querySelector(".settings-menu");
var darkBtn= document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}