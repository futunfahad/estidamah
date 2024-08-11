const urlParams = new URLSearchParams(window.location.search);
const SHEET_TITLE  = urlParams.get('Committee');
SHEET_RANGE="A:A"
/*if (SHEET_TITLE=="لجنة التقنية"){
    SHEET_RANGE="A1:A11"
}
else if (SHEET_TITLE=="لجنة الاستدامة"){
    SHEET_RANGE="A:A"
}
else if (SHEET_TITLE=="لجنة التقنية"){
    SHEET_RANGE="A1:A11"
}
else if (SHEET_TITLE=="لجنة التقنية"){
    SHEET_RANGE="A1:A11"
}
else if (SHEET_TITLE=="لجنة التقنية"){
    SHEET_RANGE="A1:A11"
}
else if (SHEET_TITLE=="لجنة التقنية"){
    SHEET_RANGE="A1:A11"
}
else if (SHEET_TITLE=="لجنة التقنية"){
    SHEET_RANGE="A1:A11"
}
*/
let SHEET_ID="1ElSZo6_UO2xiPP7r0xVJ8hWD13k3PiMH";
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));



let lsbody=document.getElementById('lsbody');
let length = data.table.rows.length;
let width = data.table.cols.length;

let j=0;
for(let i = 0;i<length||j<width;){
    let bodyrow=document.createElement("tr")
    for(let j = 0;j<width;j++){
        let bodycol = document.createElement('td');
        bodycol.id = ("bodybox"+i+j);
        bodycol.className = "bodytable_Style";
        bodyrow.append(bodycol)
        bodycol.innerHTML = data.table.rows[i].c[j].v;
    }
    if(i<=length){i++;}
    lsbody.append(bodyrow);
    
}
})
