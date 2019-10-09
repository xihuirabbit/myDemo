(function () {
    setTimeout(function () {
        alert("加载完成，请继续.....")
        let myObj = document.getElementById("ifrPage100002");
        console.log(myObj);

        //cookies备用
        const aa = document.cookie;
        let cookiesTotal= aa.split(";");
        let cookiesData = cookiesTotal[1].split("=");
        let cookies = cookiesData[1];
        console.log(cookies)


        // 新增按钮层
        let btyDiv = document.createElement("div");
        let divattr = document.createAttribute("id");
        divattr.value = "divTest";
        btyDiv.setAttributeNode(divattr);

        //创建按钮
        let input1 = document.createElement("input");
        var inputattr1 = document.createAttribute("type");
        inputattr1.value = "button";
        input1.setAttributeNode(inputattr1);
        var inputattr1 = document.createAttribute("value");
        inputattr1.value = "第一步";
        input1.setAttributeNode(inputattr1);

        btyDiv.appendChild(input1);

        let style = document.createAttribute("style");
        btyDiv.setAttributeNode(style);
        btyDiv.style.backgroundColor = "red";
        btyDiv.style.borderWidth = "20px";
        btyDiv.style.borderColor = "#000";
        btyDiv.style.width = "500px";
        btyDiv.style.height = "500px";
        btyDiv.style.position = "absolute";
        btyDiv.style.top = "0px";
        btyDiv.style.letf = "0px";
        btyDiv.style.zIndex = "9999";


        myObj.appendChild(btyDiv);
    },3000)
})();

