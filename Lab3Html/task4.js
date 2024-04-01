let mymap = document.getElementById('mymap');
let display=document.querySelector("input[value='displaymap']")
let show_info=document.querySelector("input[value='detailedinformation']")
var loc={latd:0,long:0,acc:0,tim:0}
display.addEventListener("click",getlocationdata)
function getlocationdata() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getposition, errorhandlere);
    } else {
        mymap.innerText = "Sorry , Update Your Browser And Try Again !";
    }
}
function getposition(e) {
    console.log(e);
    var lat = e.coords.latitude;
    var lon = e.coords.longitude;
    let accuarcy=e.coords.accuracy
    let time=e.timestamp
    time=new Date(time)
    console.log(accuarcy+" "+time)
    loc.latd=lat;
    loc.long=lon
    loc.acc=accuarcy
    loc.tim=time
    var location = new google.maps.LatLng(lat, lon);
    var specs = { zoom: 17, center: location };
    var map = new google.maps.Map(mymap, specs);
}
function errorhandlere(e) {
    alert('Error');
}
show_info.addEventListener("click",showinfo)
function showinfo(){
    mymap.innerHTML=""
    let creatlat=document.createElement("div")
    creatlat.classList.add("lat-info")
    creatlat.innerHTML="Latudide(deg)"+loc.latd
    mymap.appendChild(creatlat)

    let creatlong=document.createElement("div")
    creatlong.classList.add("lat-info")
    creatlong.innerHTML="longtitude(deg)"+loc.long
    mymap.appendChild(creatlong)

    let createdacc=document.createElement("div")
    createdacc.classList.add("lat-info")
    createdacc.innerHTML="accuarcy"+loc.acc
    mymap.appendChild(createdacc)

    let createdtime=document.createElement("div")
    createdtime.classList.add("lat-info")
    createdtime.innerHTML="Time is:"+loc.tim
        mymap.appendChild(createdtime)
    }