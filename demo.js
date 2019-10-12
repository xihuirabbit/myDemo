(function () {
    let myObj = "";
    let cookies = "";
    getIframe();
    function getIframe() {
       myObj = document.getElementById("ifrPage100002");
        if(myObj){
            console.log(myObj);
            //cookies备用
            const aa = document.cookie;
            let cookiesTotal= aa.split(";");
            let cookiesData = cookiesTotal[1].split("=");
            cookies = cookiesData[1];
            console.log(cookies);
            getfirstModal ();
        }else{
            getIframe ();
        }
    }

    function getfirstModal() {
        let firstModal = myObj.contentWindow.document.querySelector("#searchList");
        if(firstModal){
            console.log(firstModal)
        }else{
            getfirstModal ();
        }
    }

})();


