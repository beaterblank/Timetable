let permission = Notification.permission;
if(permission=="default"){
Notification.requestPermission().then(function (p) {
    console.log(Notification.permission)
})};
if(permission=="denied"){
Notification.requestPermission().then(function (p) {
    console.log(Notification.permission)
})};
permission = Notification.permission;
console.log(permission)
//reload after every 50000 ms
setTimeout(function(){
    window.location.reload(1);
 }, 10000);
//get the table from the html doc
 var table = document.getElementById("timeTableStyle").children[0].children
 //get todays date
 var today = new Date();
 var date = (((7-today.getDay())/7)>>0)*7 +today.getDay()
 //get time
 var hr = today.getHours()
 var m = today.getMinutes()
 now = hr * 60 + m
//choose which in row in table
 theory_index = 2 + 2 * date
 lab_index = 3 + 2 * date
//choosing colomns in the table
 theory_allot = 0
 if (intime(8, 0, 8, 50)) {
     theory_allot = 2
 }
 if (intime(8, 55, 9, 45)) {
     theory_allot = 3
 }
 if (intime(9, 50, 10, 40)) {
     theory_allot = 4
 }
 if (intime(10, 45, 11, 35)) {
     theory_allot = 5
 }
 if (intime(11, 40, 12, 30)) {
     theory_allot = 6
 }
 if (intime(12, 35, 13, 20)) {
     theory_allot = 7
 }
 if (intime(13, 25, 13, 55)) {
     theory_allot = 8
 }
 if (intime(14, 0, 14, 50)) {
     theory_allot = 9
 }
 if (intime(14, 55, 15, 45)) {
     theory_allot = 10
 }
 if (intime(15, 50, 16, 40)) {
     theory_allot = 11
 }
 if (intime(16, 45, 17, 35)) {
     theory_allot = 12
 }
 if (intime(17, 40, 18, 30)) {
     theory_allot = 13
 }
 if (intime(18, 35, 19, 25)) {
     theory_allot = 14
 }
 
 lab_allot = 0
 if (intime(8, 0, 8, 50)) {
     lab_allot = 1
 }
 if (intime(8, 50, 9, 40)) {
     lab_allot = 2
 }
 if (intime(9, 50, 10, 40)) {
     lab_allot = 3
 }
 if (intime(10, 40, 11, 30)) {
     lab_allot = 4
 }
 if (intime(11, 40, 12, 30)) {
     lab_allot = 5
 }
 if (intime(12, 30, 13, 20)) {
     lab_allot = 6
 }
 if (intime(13, 25, 13, 55)) {
     lab_allot = 7
 }
 if (intime(14, 0, 14, 50)) {
     lab_allot = 8
 }
 if (intime(14, 50, 15, 40)) {
     lab_allot = 9
 }
 if (intime(15, 50, 16, 40)) {
     lab_allot = 10
 }
 if (intime(16, 40, 17, 30)) {
     lab_allot = 11
 }
 if (intime(17, 40, 18, 30)) {
     lab_allot = 12
 }
 if (intime(18, 30, 19, 20)) {
     lab_allot = 13
 }
 
//change color of the current class to red
 table[theory_index].children[theory_allot].style.backgroundColor = "red"
 table[lab_index].children[lab_allot].style.backgroundColor = "red"
if(ontime(8,0)||ontime(8,55)||ontime(9,50)||ontime(10,45)||ontime(11,40)||ontime(12,35)||ontime(2,0)||ontime(2,55)||ontime(3,50)||ontime(4,45)||ontime(5,40)||ontime(6,35)){
 if(table[theory_index].children[theory_allot].innerText.length>5){
    if(permission === "granted") {
        showNotification("CLASS!!",table[theory_index].children[theory_allot].innerHTML);
    }
    console.log()
 }}

 if(table[lab_index].children[lab_allot].innerText.length>5){
    if(permission === "granted") {
        showNotification("lab!!",table[lab_index].children[lab_allot].innerHTML);
    }
    
 }

 function intime(h1, m1, h2, m2, err = 10) {
     n1 = now + err
     n2 = now
     l1 = h1 * 60 + m1
     l2 = h2 * 60 + m2
     if (l1 <= n1) {
         if (l2 >= n1) {
             return true
         }
     }
     if (l1 <= n2) {
         if (l2 >= n2) {
             return true
         }
     }
     return false
 }


function ontime(h,m,err=5){
    n1 = now-err
    n2 = now+err
    l  = h*60+m
    if(l>n1 && l<n2){
        return true
    }
    return false
}


function showNotification(title,body) {
   if(document.visibilityState === "visible") {
       return;
   }
   icon = "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
   var notification = new Notification(title, { body, icon });
   notification.onclick = () => { 
          notification.close();
          window.parent.focus();
   }
}
