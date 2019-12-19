
"use strict";
function report(msg, id, list) {
    out.innerHTML += "<br>"; msg += " ";
    out.appendChild(document.createTextNode(msg));
    let n1;
    if (id) {
        n1 = document.createElement("span");
        n1.appendChild(document.createTextNode(id));
        n1.classList.add("link");
        out.appendChild(n1); msg += id;
        //n1.addEventListener("click", doClick);
    }
    if (list) {
        let n2 = document.createElement("span");
        n2.appendChild(document.createTextNode(""));
        n2.innerHTML += list.join("<br>");
        n2.classList.add("course");
        if (n1) n1.appendChild(n2);
    }
    console.log(msg);
}
class Student{
    constructor (studentid,name,gpa, ...list){
    this.studentid=studentid;
    this.name=name;
    this.gpa=gpa;
    this.list=list;
}
}
class Course{
    constructor (courseid,time,date, ...list2){
    this.courseid=courseid;
    this.time=time;
    this.date=date;
    this.list2=list2;
}
}



const url = "https://maeyler.github.io/JS/data/";
function readData(file) {
    console.log("readData "+file);
    fetch(url+file)
        .then(r => r.text(), report)
.then(addCourses, report);
}

function parseCourses(line) {
    let [id, time, date, ...list] = line.split("\t");
    let course=new Course(id,time,date,list);
    return course;
}
function addCourses(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");

    for (let s of a) {
        let course =parseCourses(s);
        vals.push(course);
    }
    convertToCourse(vals);
    console.log(mapMy.entries());
}

function convertToCourse(arr) {
    for (let b of arr) {
        let n = mapMy.get(b.studentid)
        if (!n) { //not found
            n = new Array()
            mapMy.set(b.courseid, n)
        }
        n.push(b)
    }
    return mapMy;
}
function convertToStudent(arr) {
    for (let b of arr) {
        let n = mapMy2.get(b.studentid)
        if (!n) { //not found
            n = new Array();
            mapMy2.set(b.studentid, n)
        }
        n.push(b)
    }
    return mapMy2;
}

function readingData(file) {
    console.log("readData "+file);
    fetch(url+file)
        .then(r => r.text(), report)
.then(addStudents, report);
}
function addStudents(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    for (let s of a) {
        let std = parseStudent(s);
        vals2.push(std);
    }
    convertToStudent(vals2);
    console.log(mapMy2.entries());
}
function parseStudent(line) {
    let [studentid, name, gpa, ...list] = line.split("\t");
    let student=new Student(studentid,name,gpa,list);
    return student;
}


function doClick(evt) {
    //console.log(evt);
    let t = evt.target;
    //document.elementFromPoint(evt.clientX, evt.clientY);
    let s = t.innerText;
    if (/^\d+$/.test(s)) showStd(s); //s contains digits
    else if (t = t.firstElementChild) {
        t.style.visibility = "";
        let hide = function () {
            t.style.visibility = "hidden";
        };
        setTimeout(hide, 5000);
    }
}
function findID(id) {
    for(let b of mapMy2){
        if(id==b[1][0].studentid){
            console.log(b[1][0].gpa);
        }
    }
}

function studentsIn(code) {
    code = code.toUpperCase();
    let a = [];
    for (let std of vals)
        if (std.list.includes(code))
            a.push(std.id+" "+std.name);
    if (a.length > 0)
        report(code+": ", a.length+" students", a);
    else report("No students in "+code);
}
function randomStd() {
    let counter=0;
    let s="";
    let i = Math.trunc(mapMy2.size * Math.random());
    for(let b of mapMy2){
        if(counter==i){
            out.innerHTML=b[1][0].studentid +" "+b[1][0].name+" "+b[1][0].gpa ;
            console.log(b[1][0]);
        }
        counter++;
    }
}

function findCourses(id){
//idyi kullanıcıdan al
    let txt="";
    for(let b of mapMy2){
        if(213861478==b[1][0].studentid){
            let ss=b[1][0].list[0];
            console.log("Ögrencinizin kursları bunlardır.")
            for(let se of ss){
                txt+=se+"<br>" ;
                console.log(se);
            }
        }
    }
    out.innerHTML=txt;
}
function moreThancourse(){
    //11den cokders alan ögrenciler
    console.log("11 den fazla ders alan öğrenci listesi.");
    for(let b of mapMy2){
        let ss=b[1][0].list[0];
        if(ss.length>9){
            console.log(b[1][0].studentid+" "+b[1][0].name+" 'in"+" " +ss.length+" "+" dersi vardir.");
        }
    }
}
function sınavTakvim(){
    console.log("116690070"+"  numarali ögrencinin sinav takvimi.");
    for(let b of mapMy2){
        if(116690070==b[1][0].studentid){
            let ss=b[1][0].list[0];
            for(let se of ss){
                for(let vf of mapMy){
                    if(se==vf[1][0].courseid){
                        console.log(vf[1][0].courseid+"  "+vf[1][0].date+"  "+vf[1][0].time);
                    }
                }
            }
        }
    }
}
function belirliodakurslistesi(){
    // class ı kullanıcıdan al
    console.log("B1003"+"  numarali oda kurs listesi.");

    for(let b of mapMy){
        let ss=b[1][0].list2[0];
        for(let c of ss){
            if(c=='B1003'){
                console.log(b[1][0].courseid+" "+b[1][0].date+" "+b[1][0].time+" "+c);
            }
        }
    }
}

function belirliodatoplamderssayisi(){
    // class ı kullanıcıdan al
    let counter=0;
    for(let b of mapMy){
        let ss=b[1][0].list2[0];
        for(let c of ss){
            if(c=='B1036'){
                counter++;
            }
        }
    }
    console.log('B1036'+"  sınıfındaki toplam kurs sayısı "+counter+"  dir.");
}





function bulogrenci(){
    //verilen dersi alan ögrenci listesi
    console.log('IE 316'+"  dersini alan ögrenci listesi.");
    for(let b of mapMy2){
        let ss=b[1][0].list[0];
        for(let x of ss){
            if(x=="IE 316"){
                console.log(b[1][0].name+" "+b[1][0].studentid);
                //  console.log(b[1][0]);
            }
        }
    }
}




function morePagesgpa() {
//kullanıcıdan al istedigi gpa'yı
    console.log("Not ortalaması 3.5 üstü olan ögrenciler");
    let a=0;
    for(let b of mapMy2){
        if(b[1][0].gpa>3.5){
            console.log(b[1][0].studentid+" "+b[1][0].name+" "+b[1][0].gpa);
            a++;
        }
    }
    console.log(a);
}


function findID(id) {
    //html'e bas student'ı
    for(let b of mapMy2){
        if(id==b[1][0].studentid){
            console.log(b[1][0]);
            return b[1][0].studentid;
        }
    }
}
function showStd(id) {
    let t = id+" ";
    let txt="";
    let std = findID(id);
    for(let b of mapMy2){
        let ss=b[1][0].list[0];
        if(b[1][0].studentid===std){
            // console.log b[1][0].name+" "+b[1][0].gpa;
            txt+= b[1][0].studentid+" "+b[1][0].name +" " +b[1][0].gpa+"<br>";
            for(let b of ss){
                txt+=b +"<br>";
            }
        }

    }
    out.innerHTML=txt;

}

function findBest() {
    let enbuyuk=0;
    for(let b of mapMy2){
        if(b[1][0].gpa>enbuyuk){
            enbuyuk=b[1][0].gpa;
        }
    }
    for(let b of mapMy2){
        if(b[1][0].gpa==enbuyuk){
            console.log(b[1][0].name+" "+ b[1][0].studentid);
            out.innerHTML=b[1][0].studentid +" "+b[1][0].name+" "+b[1][0].gpa ;
            break;
            // Eğer soner cıkmasını istiyorsak  break diyecez cünkü birden cok kayıt var;
        }
    }

}
