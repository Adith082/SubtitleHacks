
 let timeToSearch;
 let displayArea;
 let totalText;
 let jsonText;


 //HERE WHEN THE SUBTITLE FILE IS UPLOADED IS BEING TRACKED AS A STRING INSIDE THE TOTAL TEXT STRING VARIABLE
document.getElementById('upload')
            .addEventListener('change', function() {   
            var fr=new FileReader();
            fr.onload=function(){
                totalText = fr.result;
            }
            fr.readAsText(this.files[0]);
        })

 //TRACKING THE WORDS ACCORDING TO THE TIME LIMIT USER GIVES AS INPUT AND THEN THE FUNCTION outputWord DOES THE REST OF THE PART.
function wordSearch(){
      timeToSearch = document.getElementById("searchBox").value;
        document.getElementById("searchResult").innerHTML = "";
        let tempo;
       for(let i = 0;i<totalText.length-7;i++){
        if(totalText[i] >= '0' && totalText[i] <= '9' && totalText[i+1] >= '0' && totalText[i+1] <= '9' && totalText[i+2] == ':' && totalText[i+3] >= '0' && totalText[i+3] <= '9' && totalText[i+4] >= '0' && totalText[i+4] <= '9' && totalText[i+5] == ':' && totalText[i+6] >= '0' && totalText[i+6] <= '9' && totalText[i+7] >= '0' && totalText[i+7] <= '9'){
            tempo = (totalText[i] + totalText[i+1] + totalText[i+2] + totalText[i+3] + totalText[i+4] + totalText[i+5] + totalText[i+6] + totalText[i+7]);  
             if(tempo > timeToSearch){
                let wordToSearch = "";
                let k = i+8;
                while(!(totalText[k] >= '0' && totalText[k] <= '9'   && totalText[k+1] >= '0' && totalText[k+1] <= '9' && totalText[k+2] == ':' && totalText[k+3] >= '0' && totalText[k+3] <= '9' && totalText[k+4] >= '0' && totalText[k+4] <= '9' && totalText[k+5] == ':' && totalText[k+6] >= '0' && totalText[k+6] <= '9' && totalText[k+7] >= '0' && totalText[k+7] <= '9')){
                    console.log(totalText[k]);
                    if((totalText[k] >= 'a' && totalText[k] <= 'z') || (totalText[k]>='A' && totalText[k]<='Z')){
                         wordToSearch += totalText[k];
                    }else{
                        if(wordToSearch != ""){
                               
                                outputWord(wordToSearch);
                                wordToSearch = "";
                        }
                    }
                    k++;
                }    break;
            }
        }  

       }

}   

//AFTER GETTING THE RESPECTIVE WORD , HERE WE ARE SENDING A REQUEST TO THE API TO GIVE INFORMATION ABOUT THE WORD AND THEN  THE INFO IS BEING APPENDED AS A CHILD INSIDE DIV searchResult.
function outputWord(wordToSearch){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en_US/' + wordToSearch, true);
    request.onload = function(){
         let data = JSON.parse(this.response);
          let temp = "   ";
          for(let i = 0;i<data[0].meanings.length;i++){
             for(let j = 0;j<data[0].meanings[i].definitions.length;j++){
                    temp += data[0].meanings[i].definitions[j].definition;
                    temp += "    ***    ";
             }
          }
          let mainWord = document.createElement("h1");
         mainWord.style.font = "2em";
         mainWord.innerHTML = data[0].word;
         document.getElementById("searchResult").appendChild(mainWord);
         let wordMeaning = document.createElement("p");
         wordMeaning.style.font = "4rem";
         wordMeaning.innerHTML = temp;
         document.getElementById("searchResult").appendChild(wordMeaning);
    }
    request.send();
}

    
