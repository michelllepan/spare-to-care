export default function changeDonationValues(name){

    switch(name) {
        case "St. Jude Children's Research Hospital":
            window.location.href = "";
            break;
        case "amfAR: The Foundation for AIDS Research":
            window.location.href = "";
            break;
        case "COVID-19 Response Fund (WHO)":
            window.location.href = "";
            break;
        case "Equal Justice Initiative":
            window.location.href = "";
            break;
        case "ACLU":
            window.location.href = "";
            break;
        case "Lebanese Red Cross":
            window.location.href = "";
            break;
        case "UNICEF":
            window.location.href = "";
            break;
    }

    // chrome.storage.local.get(["accumulated"], result => {
    //     const change = result.accumulator || 0;

    //     if(/* parameter = St Jude's|| Equal Justice Initiative || Unicef (General) || Unicef Syria, Yemen, Beirut */){
    //         document.getElementsById("amount").value = change;
    //     }else if(/* parameter = another unique id charity */){
    //         document.getElementsById(/* unique id of charity */).value = change;
    //     }else if(/* parameter = another unique id charity */){
    //         document.getElementsById(/* unique id of charity */).value = change;
    //     }

    //     DocumentFragment.querySelectorAll('input[type=number').forEach(domNode => {
    //         if(domNode.attributes('className') == /* unique class of charity */){
    //             domNode.value = change;
    //         }else if(domNode.attributes('className') == /* unique class of charity */){
    //             domNode.value = change;
    //         }else if(domNode.attributes('className') == /* unique class of charity */){
    //             domNode.value = change;
    //         }
    //     }); 


    // });
}





