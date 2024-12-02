// JavaScript source code

    function totalAssets(){
        const cash = parseFloat(document.getElementById("cash").value) || 0;
        const inventory = parseFloat(document.getElementById("inventory").value) || 0;
        const supplies = parseFloat(document.getElementById("supplies").value) || 0;
        const temporaryInvestments = parseFloat(document.getElementById("temporaryInvestments").value) || 0;
        const land = parseFloat(document.getElementById("land").value) || 0;
        const buildingAndImprovements = parseFloat(document.getElementById("buildingAndImprovements").value) || 0;
        const equipment = parseFloat(document.getElementById("equipment").value) || 0;
        const temporaryInvestments1 = parseFloat(document.getElementById("temporaryInvestments1").value) || 0;
        const tradeNames = parseFloat(document.getElementById("tradeNames").value) || 0;
        const goodwill = parseFloat(document.getElementById("goodwill").value) || 0;

        const totalAssets = cash + inventory + supplies + temporaryInvestments + land + buildingAndImprovements + equipment + temporaryInvestments1 + tradeNames + goodwill;

        document.getElementById("totalAssets").textContent = totalAssets.toFixed(2);

        
    }//end totalAssets
  

    function totalLiabilities(){
        const accountsPayable = parseFloat(document.getElementById("accountsPayable").value) || 0;
        const notesPayable = parseFloat(document.getElementById("notesPayable").value) || 0;
        const interestPayable = parseFloat(document.getElementById("interestPayable").value) || 0;
        const wagesPayable = parseFloat(document.getElementById("wagesPayable").value) || 0;
        const acccruedExpenses = parseFloat(document.getElementById("acccruedExpenses").value) || 0;
        const notesPayable1 = parseFloat(document.getElementById("notesPayable1").value) || 0;
        const bondsPayable = parseFloat(document.getElementById("bondsPayable").value) || 0;

        const totalLiabilities = accountsPayable + notesPayable + interestPayable + wagesPayable + acccruedExpenses + notesPayable1 + bondsPayable;

        document.getElementById("totalLiabilities").textContent = totalLiabilities.toFixed(2);

        
    }//end totalLiabilities

    function position(){
       const totalAssets = parseFloat(document.getElementById("totalAssets").textContent) || 0;
       const totalLiabilities = parseFloat(document.getElementById("totalLiabilities").textContent) || 0;

       const position = totalAssets - totalLiabilities;

       document.getElementById("position").textContent = position.toFixed(2);
       

    } //end position

   function toggleList(listId) {
       const ul = document.getElementById(listId);
       if (ul.style.display == "none" || ul.style.display === ""){
           ul.style.display = "block";
       }
       else{
           ul.style.display = "none";
       }
   }//end toggleList