    console.log("abc");
    
    var url = require('url');
    var adr = "https://colab.research.google.com/drive/1g_rojY93NSHsfpN3vwXvJbrpOPMi5pPM"
    var q = url.parse(adr, true);
    var a =q.y_predict
    document.getElementById("content").textContent = a; 
      function myFunction() {
  document.getElementById("here").innerHTML = "happy";
}
