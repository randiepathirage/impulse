var team = [
  "Lumos",
  "Team Frontline",
  "Team Elite",
  "Fixers",
  "Revive",
  "Explorers",
  "STP CIRCLE",
  "Team outOFScope",
  "Hyena",
  "Titans",
  "Team mini sharks",
  "thummulla_eksath",
  "Redskins",
  "Annihilators",
  "Incognito",
  "Team Argus",
  "Delta club",
  "Quatro",
  "D-TSKers",
  "KB+",
  "Team CYRAYS"
  ];
  var text = "";
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      var temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  
  function shuffler() {
    shuffle(team);
    document.getElementById("player-0").innerHTML = team[0];
    document.getElementById("player-1").innerHTML = team[1];
    document.getElementById("player-2").innerHTML = team[2];
    document.getElementById("player-3").innerHTML = team[3];
    document.getElementById("player-4").innerHTML = team[4];
    document.getElementById("player-5").innerHTML = team[5];
    document.getElementById("player-6").innerHTML = team[6];
    document.getElementById("player-7").innerHTML = team[7];
    document.getElementById("player-8").innerHTML = team[8];
    document.getElementById("player-9").innerHTML = team[9];
    document.getElementById("player-10").innerHTML = team[10];
    document.getElementById("player-11").innerHTML = team[11];
    document.getElementById("player-12").innerHTML = team[12];
    document.getElementById("player-13").innerHTML = team[13];
    document.getElementById("player-14").innerHTML = team[14];
    document.getElementById("player-15").innerHTML = team[15];
    document.getElementById("player-16").innerHTML = team[16];
    document.getElementById("player-17").innerHTML = team[17];
    document.getElementById("player-18").innerHTML = team[18];
    document.getElementById("player-19").innerHTML = team[19];
    document.getElementById("player-20").innerHTML = team[20];
  }
  
  // var myInterval = setInterval(shuffler, 50);
  // clearInterval(myInterval);
  
  document.getElementById("random").addEventListener("click", shuffler);
  
  window.addEventListener("keypress", checkKeyPressed, false);
   
  function checkKeyPressed(e) {
      if (e.charCode == "32") {
        document.getElementById("random").addEventListener("click", shuffler);    
      }
  }
  