(function () {
    // 获取cookie备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);


    let myObj = document.getElementById("ifrPage100002");
    console.log(myObj);

    //输入框s数据
    let inputObj  = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
    console.log(inputObj);
    let inputdata = "";
    if(inputObj){
        inputObj.onchange = function () {
            if(inputObj){
                inputdata = inputObj.value;
                console.log(inputdata)
            }
        }
    }



    // 搜索项选择
    let searchData = "accNbr";
    let divObj = "";
    let seacchBty = myObj.contentWindow.document.getElementsByClassName("yn-search-ico")[0];
    console.log(seacchBty);
    if(seacchBty){
        seacchBty.onclick = function () {
            let searchObj = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("span");
            console.log(searchObj);
            if(searchObj){
                searchData = searchObj[0].getAttribute("data-type");
                console.log(searchData);
                divObj = myObj.contentWindow.document.querySelector("#content1");
                console.log(divObj);
            }
        }
    }
    // let searchDiv = myObj.contentWindow.document.querySelector("#mainContent");
    // console.log(searchDiv);

    // if(searchDiv){
    //     searchDiv.onclick = function () {
    //         let searchObj = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("span");
    //         console.log(searchObj);
    //         if(searchObj){
    //             searchData = searchObj[0].getAttribute("data-type");
    //             console.log(searchData);
    //         }
    //     }
    // }

    // 新增按钮

    // divObj.onclick =
    // let divBty = myObj.contentWindow.document.createElement("input");
    // divBty.setAttribute("type", "button");
    // divBty.setAttribute("value", "数据");
    // divBty.setAttribute("id", "divBty");
    // divBty.style.width = "15px";
    // divBty.setAttribute("onclick", "getData()");
    // divObj.appendChild(divBty);
    //  function getData() {
    //      let params1 = `[${inputdata},${searchData},${cookies},"3c156b221d634851a79b446ad23246ec"]`;
    //      console.log(params1)
    //      let options = {
    //          "widgetName":"searchOffer",
    //          "methodName":"searchCustForFixedAccNum",
    //          "params":params1,
    //          "selector":"#searchList",
    //          "keyName":""
    //      };
    //      console.log(options);
    //      const xhr = new XMLHttpRequest();
    //      xhr.onreadystatechange = callback1;
    //      xhr.open("post", "http://crm3.yn.189.cn:9500/crm/so/refreshPart",true);
    //      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //      xhr.send(options);
    //
    //      function callback1() {
    //          if (xhr.readyState == 4 && xhr.status == 200) {
    //              let data = xhr.responseText;//获取数据
    //              console(data);
    //              // let answerObj =
    //              let dataCard = "";
    //              const card = myObj.contentWindow.document.querySelector("#certNumSuffix");
    //              if(card != null){
    //                  card.value = dataCard;
    //                  dataCard.removeAttribute('disabled');
    //              }
    //          }
    //      }
    //  }
})();