let daily=[];
if(localStorage.getItem("daily")){
   daily= JSON.parse(localStorage.getItem("daily"));
}

function isAccepted(msg, ...keys){
    const value=prompt(msg);
    if(keys.includes(value)){
        return value;
    }else {
        alert("Hatalı tuşlama yaptınız")
        return isAccepted(msg,...keys);
    }

}
function addDiary(){
    const date=prompt("Tarih giriniz");
    const dailyText=prompt("Günlük metninizi giriniz");
    daily.push(
        {
            date: date,
            dailyText: dailyText
        }
    )
    localStorage.setItem("daily", JSON.stringify(daily));
}

function listDaily(){
    const dailyLİst= daily.map((daily)=> `${daily.date} \n ${daily.dailyText}` )
    alert(dailyLİst);
}

function mainMenu(){
    const value=isAccepted("Yapmak istediğin işlemi seciniz:\n1.Günlüğe ekleme yap\n2.Günlüğü listele\n3.çıkış","1","2","3")
    if(value==1){
        return addDiary();
    }else if(value==2){
        return listDaily(); 
    }
}
mainMenu();