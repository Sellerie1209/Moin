

function quader() {
    document.getElementById("dsplyvquader").value = vquader();
    document.getElementById("dsplyagquader").value = agrectangle();
    document.getElementById("dsplyamquader").value = amquader();
    document.getElementById("dsplyaoquader").value = aoquader();
}

function prisma() {
    document.getElementById("dsplyvprisma").value = vprisma().toFixed(nachkomma());
    document.getElementById("dsplyagprisma").value = agprisma().toFixed(nachkomma());
    document.getElementById("dsplyamprisma").value = amprisma().toFixed(nachkomma());
    document.getElementById("dsplyaoprisma").value = aoprisma().toFixed(nachkomma()); 
}

function spherer() {
    document.getElementById("dsplyvkugel").value = vsphere().toFixed(nachkomma());
    document.getElementById("diameter").value = radius() * 2;
    document.getElementById("dsplyaokugel").value = (4 * agcircle()).toFixed(nachkomma());
}

function sphered() {
    document.getElementById("radius").value = diameter() / 2;
    document.getElementById("dsplyvkugel").value = vsphere().toFixed(nachkomma());
    document.getElementById("dsplyaokugel").value = (4 * agcircle()).toFixed(nachkomma());
}

function zylinder() {
    document.getElementById("dsplyvzylinder").value = vzylinder().toFixed(nachkomma());
    document.getElementById("dsplyagzylinder").value = agcircle().toFixed(nachkomma());
    document.getElementById("dsplyamzylinder").value = amzylinder().toFixed(nachkomma());
    document.getElementById("dsplyaozylinder").value = aozylinder().toFixed(nachkomma());
}

function pyramide() {
    document.getElementById("dsplyvpyramide").value = ((1/3) * vprisma()).toFixed(nachkomma());
    document.getElementById("dsplyagpyramide").value = agprisma().toFixed(nachkomma());
    document.getElementById("dsplyampyramide").value = ampyramide().toFixed(nachkomma());
    document.getElementById("dsplyaopyramide").value = aopyramide().toFixed(nachkomma()); 
}

function agcircle() {
    return Math.PI * radius() ** 2;
}

function agtriangle() {
    let siteofag = document.getElementById("siteofag").value;
    let heightonsite = document.getElementById("heightonsite").value;
    return 0.5 * siteofag * heightonsite; 
}

function agprisma() { // Formel für Grundfläche eines REGELMÄSIGEN n-Ecks
    return (sites() * Math.pow(site(), 2)) / (4 * Math.tan(Math.PI / sites()));
}

function vsphere() {
    return (4/3) * agcircle() * radius();
}

function vprisma() {
    return height() * agprisma();
}

function amprisma() {
    return sites() * height() * site() ** 2;
}

function aoprisma() {
    return 2 * agprisma() + amprisma();
}

function ampyramide() {
    return sites() * site() * heightsite() * 0.5;
}

function aopyramide() {
    return 1 * agprisma() + 1 * ampyramide();
}

function amzylinder() {
    return circumference() * height();
}

function aozylinder() {
    return 2 * agcircle() + amzylinder();
}

function vzylinder() {
    return height() * agcircle();
}

function agrectangle() {
    return width() * depth();
}

function amquader() {
    return 2 * height() * width() + 2 * height() * depth();
}

function aoquader() {
    return 2 * agrectangle() + amquader(); 
}

function vquader() {
    return agrectangle() * height();
}
function circumference() {
    return radius() * Math.PI * 2;
}

function radius () {
    return document.getElementById("radius").value;
}

function height() {
    return document.getElementById("height").value;
}

function sites() { // Anzahl der Seiten
    return document.getElementById("sites").value;
}

function site() {
    return document.getElementById("site").value;
}

function width() {
    return document.getElementById("width").value;
}

function depth() {
    return document.getElementById("depth").value;
}

function diameter() {
    return document.getElementById("diameter").value;
}

function heightsite() {
    /*let innkreisr = (site() / (2 * Math.tan(Math.PI / sites())));*/
    return Math.sqrt(Math.pow(height(), 2) + Math.pow((site() / (2 * Math.tan(Math.PI / sites()))), 2));
}

function nachkomma() {
    return document.getElementById("nachkomma").value;
}