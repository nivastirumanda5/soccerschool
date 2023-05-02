//Nivas' multi page project

// Button Event listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
 //input
  let percentage = 0;
  

  let answer1 = document.getElementById("ans1-in").value.toLowerCase();
  let answer2 = document.getElementById("ans2-in").value.toLowerCase();
  let answer3 = document.getElementById("ans3-in").value.toLowerCase();
  let answer4 = document.getElementById("ans4-in").value.toLowerCase();

  let ans1 = 0;
  let ans2 = 0;
  let ans3 = 0;
  let ans4 = 0;

  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
//process
//conditional statements
  if (answer1 === "11" || answer1 === "a") {
    document.getElementById("answ").innerHTML = `correct`;
    ans1++
    
  } else {
    document.getElementById("answ").innerHTML = `incorrect` ;
  }
    if (answer2 === "midfield" || answer2 === "a") {
      document.getElementById("answ2").innerHTML = "correct";
      ans2++
      
    } else{
      document.getElementById("answ2").innerHTML = "incorrect";
    }
      if(answer3 === " any part of the head, body or feet is nearer to the opponents' goal line than both the ball and the second-last opponent." || answer3 === "b"){
        document.getElementById("answ3").innerHTML = "correct";
        ans3++
        
      } else {
        document.getElementById("answ3").innerHTML = "incorrect";
      }
        if (answer4 === "Ronaldo" || answer4 === "b") {
          document.getElementById("answ4").innerHTML = "correct";
          ans4++
          
      }  else{
          document.getElementById("answ4").innerHTML = "incorrect";
      }
      
      if(answer1 === "11" || answer1 === "a" && answer2 === "midfield" || answer2 === "a" && answer3 === " any part of the head, body or feet is nearer to the opponents' goal line than both the ball and the second-last opponent." || answer3 === "b" && answer4 === "Ronaldo" || answer4 === "b") {
        document.getElementById("charz-in").innerHTML = 'Good Job'
      } else if(answer1 != "11" || answer1 != "a" && answer2 != "midfield" || answer2 != "a" && answer3 != " any part of the head, body or feet is nearer to the opponents' goal line than both the ball and the second-last opponent." || answer3 != "b" && answer4 != "Ronaldo" || answer4 != "b"){
        document.getElementById("charz-in").innerHTML = "You stupid!!!!!!!";
      }
  
      //output
  let grade = (ans1 + ans2 + ans3 + ans4)*25
  let outOf = (ans1 + ans2 + ans3 + ans4)
  
  document.getElementById("char-info").innerHTML = `${grade} %`;
  document.getElementById("info-char").innerHTML = `${outOf} /4`;
  document.getElementById("charz-in").innerHTML = `${ok} `;
} 

