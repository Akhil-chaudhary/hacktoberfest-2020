let contributers=[
    {
        "name":"Akhil Chaudhary",
        "college":"ABES Institute of Technology",
        "image":"images/akhilchaudhary.jpg",
        "github":"https://github.com/Akhil-chaudhary/",
        "linkedin":"https://www.linkedin.com/in/akhil-chaudhary-0478a1187",
        "instagram":"https://www.instagram.com/akhilchaudhary.js/"
    },
    {
        "name":"Likhith RK",
        "college":"SCEM",
        "image":"images/likhith.jpg",
        "github":"https://github.com/luciferRK",
        "linkedin":"https://linkedin.com/in/likhith-rk",
        "instagram":"https://instagram.com/lucifer_rk_"
    },
    
    {
        "name":"Shobith Mallya",
        "college":"SCEM",
        "image":"images/Shobith_Mallya.png",
        "github":"https://github.com/ShobithMLYA",
        "linkedin":"https://www.linkedin.com/in/shobithmallya/",
        "instagram":"https://instagram.com/shobithmallya"
    },
    
    {
        "name":"K Samarth N Kamath",
        "college":"SCEM",
        "image":"images/Samarth Kamath.jpg",
        "github":"https://github.com/k-samarth",
        "linkedin":"https://www.linkedin.com/in/kamathsamarth",
        "instagram":"https://instagram.com/kamath_samarth"
    },
]






//_________________________________________________________________________________________________________________

//******************************************DO NOT CHANGE THE BELOW LINES******************************************
//_________________________________________________________________________________________________________________

function getPerson(person){
    let divi=document.createElement('div');
    divi.className="col-md-3 col-sm-6 col-xs-12 wow fadeIn";
    divi.setAttribute("data-wow-offset","50");
    divi.setAttribute("data-wow-delay","1.3s");
    divi.innerHTML= '<div class="team-wrapper"><img src="'+person.image+'" class="img-responsive" alt="team img 1"><div class="team-des"><h4>'+person.name+'</h4><span>'+person.college+'</span><ul class="social-icon"><li><a href="'+person.linkedin+'" target="_blank" target="_blank" class="fa fa-linkedin"></a></li><li><a href="'+person.github+'" target="_blank" class="fa fa-github"></a></li><li><a href="'+person.instagram+'" target="_blank"  class="fa fa-instagram"></a></li></ul></div></div>';
    return divi;
}

function fill(){
    let n=contributers.length;
    let container=document.getElementById('all_contributers');
    let row=document.createElement('div');
    row.className="row";

    let div=getPerson(contributers[0]);
    row.append(div);

    for(var i=1;i<n+4;i++){
        if (i>=n){
            container.append(row);
            break;
        }
        if(i%4==0){
            container.append(row);
            row=document.createElement('div');
            row.className="row";
            div=getPerson(contributers[i]);
            row.append(div);
        }
        else{
            div=getPerson(contributers[i]);
            row.append(div);
        }
    }
}

window.onload=fill;
