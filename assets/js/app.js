function hambOpen() {

    document.querySelector(".header-nav-wrapper").style.display = "block";
    document.querySelector(".header-end-content-wrapper").style.display = "block";
    document.querySelector(".hamb-icon-open").style.display = "none";
    document.querySelector(".hamb-icon-off").style.display = "block";
}
function hambOff() {

    document.querySelector(".header-nav-wrapper").style.display = "none";
    document.querySelector(".header-end-content-wrapper").style.display = "none";
    document.querySelector(".hamb-icon-open").style.display = "block";
    document.querySelector(".hamb-icon-off").style.display = "none";
}