

class AutoFill{


     
    function getLink(){
        if(button is on st jude page or button id is st jude or smt){
            window.location.href = "";
        }else if(){
            window.location.href = "";
        }else if(){
            window.location.href = "";
        }else if(){
            window.location.href = "";
        }else if(){
            
        }
        

    }


     function changeDonationValues(link from getLink()){
        chrome.storage.local.get(["accumulated"], result => {
            const change = result.accumulator || 0;

            if(/* parameter = St Jude's|| Equal Justice Initiative || Unicef (General) || Unicef Syria, Yemen, Beirut */){
                document.getElementsById("amount").value = change;
            }else if(/* parameter = another unique id charity */){
                document.getElementsById(/* unique id of charity */).value = change;
            }else if(/* parameter = another unique id charity */){
                document.getElementsById(/* unique id of charity */).value = change;
            }

            DocumentFragment.querySelectorAll('input[type=number').forEach(domNode => {
                if(do
                  mNode.attributes('className') == /* unique class of charity */){
                    domNode.value = change;
                }else if(domNode.attributes('className') == /* unique class of charity */){
                    domNode.value = change;
                }else if(domNode.attributes('className') == /* unique class of charity */){
                    domNode.value = change;
                }
            }); 


        });
    }





