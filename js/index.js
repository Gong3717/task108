function fill_in_the_blank(){
    var score1=0;
    var refer_answer=["统一建模语言","封装性","继承性","多态性"];
    var answer1=document.getElementById("answer1").value;
    var answer2=document.getElementById("answer2").value;
    var answer3=document.getElementById("answer3").value;
    var answer4=document.getElementById("answer4").value;
    var answer=[answer1,answer2,answer3,answer4];
    for(var i=0;i<answer.length;i++){
        if(answer[i]===refer_answer[i])
        score1=score1+5;
    }
        return score1;
}
function sigle_choice(){
    var score2=0;
   
    if((document.getElementById("A").checked===false) && (document.getElementById("B").checked===true) && (document.getElementById("C").checked===false) && (document.getElementById("D").checked===false)){
        score2=score2+10;
    }
   if((document.getElementById("A1").checked===true) && (document.getElementById("B1").checked===false) && (document.getElementById("C1").checked===false) && (document.getElementById("D1").checked===false)){
    score2=score2+10;
}
    return score2;
}
function mutiply_choice(){
    var score3=0;
   if((document.getElementById("a").checked===true) && (document.getElementById("b").checked===true) && (document.getElementById("c").checked===false) && (document.getElementById("d").checked===true)){
    score3=score3+10;
   }
   if((document.getElementById("a1").checked===true) && (document.getElementById("b1").checked===true) && (document.getElementById("c1").checked===true) && (document.getElementById("d1").checked===false)){
    score3=score3+10;
   }
    return score3;
}
function true_or_false(){
    var score4=0;
   if((document.getElementById("a2").checked===false) && (document.getElementById("b2").checked===true)){
    score4=score4+10;
   }
   if((document.getElementById("a3").checked===true) && (document.getElementById("b3").checked===false)){
    score4=score4+10;
   }
    return score4;

}
function short_answer(){
    var score5=0;
    var refer_answer="模型是对现实世界的简化和抽象。模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。";
    var answer=document.getElementById("answer").value;
    if(answer===refer_answer){
      score5=score5+20;
    }
    return score5;
}
function claculate(){
    var sum=0;
    sum=fill_in_the_blank()+sigle_choice()+mutiply_choice()+true_or_false()+short_answer();
    alert(sum);

}