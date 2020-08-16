export default function changeDonationValues(name){
    let s = "";
    switch(name) {
        //first 3 cases work with id=amount
        case "Equal Justice Initiative":
            window.location.href = "https://support.eji.org/give/153413/#!/donation/checkout";
            s = "Equal Justice Initiative";
            break;
        case "St. Jude Children's Research Hospital":
            window.location.href = "https://www.stjude.org/donate/donate-to-st-jude.html?sc_icid=header-btn-donate-now";
            s = "St. Jude Children's Research Hospital";
            break;
        case "UNICEF":
            window.location.href = "https://www.unicefusa.org/?form=donate";
            s = "UNICEF";
            break;

        //cases with unique id's
        case "amfAR: The Foundation for AIDS Research":
            window.location.href = "https://secure.amfar.org/site/Donation2;jsessionid=00000000.app362b?idb=651526772&df_id=1581&mfc_pref=T&1581.donation=form1&NONCE_TOKEN=F661C3105011FF5E7BC62F908E2666FE&idb=1326799096&_ga=2.82463318.1765749283.1597514009-1590760117.1597514008";
            s = "amfAR: The Foundation for AIDS Research";
            break;
        case "COVID-19 Response Fund (WHO)":
            window.location.href = "https://covid19responsefund.org/en/";
            s = "COVID-19 Response Fund (WHO)";
            break;
        case "ACLU":
            window.location.href = "https://action.aclu.org/give/now?ms_aff=NAT&initms_aff=NAT&ms=web_horiz_nav_hp&initms=web_horiz_nav_hp&ms_chan=web&initms_chan=web";
            s = "ACLU";
            break;
        case "Lebanese Red Cross":
            window.location.href = "https://supportlrc.app/donate/donate_guest.html";
            s = "Lebanese Red Cross";
            break;
        
    }

    chrome.storage.local.get(["accumulated"], result => {
        const change = result.accumulator || 0;

        if(s === "Equal Justice Initiative" || s === "St. Jude Children's Research Hospital" || s === "UNICEF"){
            document.getElementsById("amount").value = change;
        }else if(s === "amfAR: The Foundation for AIDS Research"){
            document.getElementsById(/* unique id of charity */).value = change;
        }else if(s === "COVID-19 Response Fund (WHO)"){
            document.getElementsById(/* unique id of charity */).value = change;
        }else if(s === "ACLU"){
            document.getElementsById(/* unique id of charity */).value = change;
        }else if(s === "Lebanese Red Cross"){
            document.getElementsById(/* unique id of charity */).value = change;
        }

        DocumentFragment.querySelectorAll('input[type=number').forEach(domNode => {
            if(domNode.attributes('className') == /* unique class of charity */){
                domNode.value = change;
            }else if(domNode.attributes('className') == /* unique class of charity */){
                domNode.value = change;
            }else if(domNode.attributes('className') == /* unique class of charity */){
                domNode.value = change;
            }
        }); 


    });
}





