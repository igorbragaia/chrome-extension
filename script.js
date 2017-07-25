var speechRecognizer;
var r;

try{
  if (!document.getElementById("botao1")) {

      var button = document.createElement("button");
      button.value = "botao";
      button.id = "botao1";
      button.style.color = "white";
      button.style.border = "none",
      button.style.background = "cornflowerblue";
      button.style.display = "inline-block";
      button.style.padding = "4%";
      button.appendChild(document.createTextNode("Speech to Text"));

      var x = document.getElementsByClassName("pas _1fng _51m-");
      x[x.length - 1].parentNode.lastChild.appendChild(document.createElement("span"));
      x[x.length - 1].parentNode.lastChild.lastChild.appendChild(button);

      document.getElementById("botao1").addEventListener("click", startConverting);

      r = document.getElementById("composer_text_input_box").firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
      r.removeChild(r.firstChild);
      console.log(r);
/*      r = document.getElementById("composer_text_input_box").firstChild.firstChild;



      r.removeChild(r.firstChild);
      r = r.firstChild.firstChild.firstChild.firstChild.firstChild;


      r.removeChild(r.firstChild);
      r.appendChild(document.createElement("span"));
      r.firstChild.setAttribute("data-offset-key",r.getAttribute("data-offset-key"));
      r = r.firstChild;

      r.appendChild(document.createElement("span"));
      r=r.firstChild;
      r.setAttribute("data-text",true);

      console.log(r);
*/
  }

  function startConverting() {
      if (document.getElementById("botao1").style.background == "cornflowerblue") {

          document.getElementById("botao1").style.background = "orangered";

          if ('webkitSpeechRecognition' in window) {
              speechRecognizer = new webkitSpeechRecognition();
              speechRecognizer.continuous = true;
              speechRecognizer.interimResults = true;
              speechRecognizer.lang = "pt";
              speechRecognizer.start();

              var finalTranscripts = '';

              speechRecognizer.onresult = function(event) {
                  var interimTranscripts = '';
                  for (var i = event.resultIndex; i < event.results.length; i++) {
                      var transcript = event.results[i][0].transcript;
                      if (event.results[i].isFinal) {
                          finalTranscripts += transcript;
                      } else {
                          interimTranscripts += transcript;
                      }
                  }
                  r.innerHTML ="<span data-text=\"true\">"+ finalTranscripts + interimTranscripts+"</span>";
              };
              speechRecognizer.onerror = function(event) {};
          } else {
              //r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
          }
      } else {
          var submit=document.getElementsByClassName("_1mf7 _4jy0 _4jy3 _4jy1 _51sy selected _42ft");

          speechRecognizer.stop();
          document.getElementById("botao1").style.background = "cornflowerblue";
          console.log(r);

      }
  };
} catch(e){
  var x = document.getElementsByClassName("_fmk UFICommentAttachmentButtons _5op2 _5op2");

  for(var i=0;i < x.length;i++){
    var text = x[i].parentNode.firstChild.lastChild.firstChild.firstChild.childNodes[1].firstChild.firstChild.firstChild.firstChild.firstChild;

    text.removeChild(text.firstChild);
    text.appendChild(document.createElement("span"));
    text=text.firstChild;

    var buttonC = document.createElement("button");
    buttonC.value = "buttonC";
    buttonC.id = "botao" + i.toString();
    buttonC.style.color = "white";
    buttonC.style.border = "none",
    buttonC.style.background = "cornflowerblue";
    buttonC.style.display = "inline-block";
    buttonC.style.padding = "4%";
    buttonC.appendChild(document.createTextNode("Speech to Text"));

    var span1 = document.createElement("span");
    span1.id = "span1" + i.toString();
    x[i].appendChild(span1);
    x[i].lastChild.appendChild(buttonC);

    document.getElementById(buttonC.id).addEventListener("click", function startConvertingComment(){

        var rC = text;

        if ('webkitSpeechRecognition' in window) {
          if (document.getElementById(buttonC.id).style.background == "cornflowerblue") {

              document.getElementById(buttonC.id).style.background = "orangered";

            var speechRecognizer = new webkitSpeechRecognition();
            speechRecognizer.continuous = true;
            speechRecognizer.interimResults = true;
            speechRecognizer.lang = "pt";
            speechRecognizer.start();

            var finalTranscripts = '';

            speechRecognizer.onresult = function(event) {
                var interimTranscripts = '';
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    var transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscripts += transcript;
                    } else {
                        interimTranscripts += transcript;
                    }
                }
                rC.textContent = finalTranscripts + interimTranscripts;
            };
            speechRecognizer.onerror = function(event) {};
        } else {
            rC.textContent = 'Your browser is not supported. If google chrome, please upgrade!';
        }
    } else {
      speechRecognizer.stop();
      document.getElementById(buttonC.id).style.background = "cornflowerblue";
    }
    });
  }
} finally{

}
