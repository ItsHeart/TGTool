//图标
var Icon = function() {
  var path1,path2,path3;

  return {
    info:function(width,height){
      var infoIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
      infoIcon.setAttribute("viewBox","0 0 1024 1024");
      infoIcon.setAttribute("width",width);
      infoIcon.setAttribute("height",height);
      
      path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d","M512 524.8m-416 0a416 416 0 1 0 832 0 416 416 0 1 0-832 0Z");
      path1.setAttribute("fill","#5BC0DE");
      infoIcon.appendChild(path1);
      
      path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d","M512 435.2c-19.2 0-38.4 19.2-38.4 38.4V768c0 19.2 19.2 38.4 38.4 38.4s38.4-19.2 38.4-38.4V473.6c0-19.2-19.2-38.4-38.4-38.4z");
      path2.setAttribute("fill","#FFFFFF");
      infoIcon.appendChild(path2);
      
      path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path3.setAttribute("d","M512 300.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z");
      path3.setAttribute("fill","#FFFFFF");
      infoIcon.appendChild(path3);
      
      infoIcon.style.verticalAlign = "middle";
      return infoIcon;
    },
    warning:function(width,height){
      var warningIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
      warningIcon.setAttribute("viewBox","0 0 1024 1024");
      warningIcon.setAttribute("width",width);
      warningIcon.setAttribute("height",height);
      
      path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d","M512 512m-403.2 0a403.2 403.2 0 1 0 806.4 0 403.2 403.2 0 1 0-806.4 0Z");
      path1.setAttribute("fill","#F0AD4E");
      warningIcon.appendChild(path1);
      
      path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d","M512 608c-19.2 0-38.4-19.2-38.4-38.4V288c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4V576c0 12.8-19.2 32-38.4 32z");
      path2.setAttribute("fill","#FFFFFF");
      warningIcon.appendChild(path2);
      
      path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path3.setAttribute("d","M512 736m-44.8 0a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 1 0-89.6 0Z");
      path3.setAttribute("fill","#FFFFFF");
      warningIcon.appendChild(path3);
      
      warningIcon.style.verticalAlign = "middle";
      return warningIcon;
    },
    success:function(width,height){
      var successIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
      successIcon.setAttribute("viewBox","0 0 1024 1024");
      successIcon.setAttribute("width",width);
      successIcon.setAttribute("height",height);
      
      path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d","M512 76.8c-236.8 0-435.2 192-435.2 435.2s192 435.2 435.2 435.2 435.2-192 435.2-435.2S748.8 76.8 512 76.8z m249.6 320L480 704c-12.8 12.8-38.4 12.8-51.2 0L288 556.8c-12.8-12.8-12.8-38.4 0-51.2 12.8-12.8 38.4-12.8 51.2 0l115.2 115.2L704 339.2c12.8-12.8 38.4-12.8 51.2 0 25.6 12.8 25.6 38.4 6.4 57.6z");
      path1.setAttribute("fill","#5CB85C");
      successIcon.appendChild(path1);
      
      path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d","M710.4 339.2l-256 281.6-115.2-115.2c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2l147.2 140.8c12.8 12.8 38.4 12.8 51.2 0L768 390.4c12.8-12.8 12.8-38.4 0-51.2-19.2-12.8-44.8-12.8-57.6 0z");
      path2.setAttribute("fill","#FFFFFF");
      successIcon.appendChild(path2);

      successIcon.style.verticalAlign = "middle";
      return successIcon;
    },
    error:function(width,height){
      var errorIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
      errorIcon.setAttribute("viewBox","0 0 1024 1024");
      errorIcon.setAttribute("width",width);
      errorIcon.setAttribute("height",height);
      
      path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("d","M512 512m-435.2 0a435.2 435.2 0 1 0 870.4 0 435.2 435.2 0 1 0-870.4 0Z");
      path1.setAttribute("fill","#D9534F");
      errorIcon.appendChild(path1);
      
      path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("d","M563.2 512l108.8-108.8c12.8-12.8 12.8-38.4 0-51.2-12.8-12.8-38.4-12.8-51.2 0L512 460.8 403.2 352c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2L460.8 512 352 620.8c-12.8 12.8-12.8 38.4 0 51.2 12.8 12.8 38.4 12.8 51.2 0L512 563.2l108.8 108.8c12.8 12.8 38.4 12.8 51.2 0 12.8-12.8 12.8-38.4 0-51.2L563.2 512z");
      path2.setAttribute("fill","#FFFFFF");
      errorIcon.appendChild(path2);

      errorIcon.style.verticalAlign = "middle";
      return errorIcon;
    },
  }
}
//info图标


var TGTool = function() {
  var body = document.getElementsByTagName("body")[0];
  var alertCount = 0;
  var icon = Icon();
  return {
    info: function(text) {
      alertCount ++;
      //外框
      var alertDiv = document.createElement("div");
      //颜色
      alertDiv.style.backgroundColor = "#EDF2FC";
      alertDiv.style.color = "#303133";
      //位置
      alertDiv.style.position = " fixed";
      alertDiv.style.zIndex = 9999999;
      alertDiv.style.top = (alertCount * 50 - 30) + "px";
      alertDiv.style.left = "50%";
      //调整左右位置
      alertDiv.style.marginLeft = "-" + ( getByteLength(text) * 7 + 70 ) / 2 + "px";
      alertDiv.style.borderRadius = "8px";
      alertDiv.style.fontSize = " 14px";
      alertDiv.style.textAlign = "center";
      alertDiv.style.padding = "12px 20px";
      //动画
      alertDiv.className = "animated  bounceInDown alertDiv";
      //标签
      alertDiv.appendChild(icon.info(20,20));
      //提示字
      var textNode = document.createElement("label");
      textNode.innerText = text;
      textNode.style.verticalAlign = "middle";
      textNode.style.marginLeft = "10px";
      alertDiv.appendChild(textNode);
      
      body.appendChild(alertDiv);
      setTimeout(function() {
        alertDiv.className="remove";
        //四秒后删除
        setTimeout(function() {
          body.removeChild(alertDiv);
          alertCount --;
        }, 4000);
      }, 4000);
      return true;
    },
    warning: function(text) {
      alertCount ++;
      //外框
      var alertDiv = document.createElement("div");
      //颜色
      alertDiv.style.backgroundColor = "#FDF6EC";
      alertDiv.style.color = "#F0AD4E";
      //位置
      alertDiv.style.position = " fixed";
      alertDiv.style.zIndex = 9999999;
      alertDiv.style.top = (alertCount * 50 - 30) + "px";
      alertDiv.style.left = "50%";
      //调整左右位置
      alertDiv.style.marginLeft = "-" + ( getByteLength(text) * 7 + 70 ) / 2 + "px";
      alertDiv.style.borderRadius = "8px";
      alertDiv.style.fontSize = " 14px";
      alertDiv.style.textAlign = "center";
      alertDiv.style.padding = "12px 20px";
      //动画
      alertDiv.className = "animated  bounceInDown alertDiv";
      //标签
      alertDiv.appendChild(icon.warning(20,20));
      //提示字
      var textNode = document.createElement("label");
      textNode.innerText = text;
      textNode.style.verticalAlign = "middle";
      textNode.style.marginLeft = "10px";
      alertDiv.appendChild(textNode);
      
      body.appendChild(alertDiv);
      setTimeout(function() {
        alertDiv.className="remove";
        //四秒后删除
        setTimeout(function() {
          body.removeChild(alertDiv);
          alertCount --;
        }, 4000);
      }, 4000);
      return true;
    },
    success: function(text) {
      alertCount ++;
      //外框
      var alertDiv = document.createElement("div");
      //颜色
      alertDiv.style.backgroundColor = "#F0F9EB";
      alertDiv.style.color = "#5CB85C";
      //位置
      alertDiv.style.position = " fixed";
      alertDiv.style.zIndex = 9999999;
      alertDiv.style.top = (alertCount * 50 - 30) + "px";
      alertDiv.style.left = "50%";
      //调整左右位置
      alertDiv.style.marginLeft = "-" + ( getByteLength(text) * 7 + 70 ) / 2 + "px";
      alertDiv.style.borderRadius = "8px";
      alertDiv.style.fontSize = " 14px";
      alertDiv.style.textAlign = "center";
      alertDiv.style.padding = "12px 20px";
      //动画
      alertDiv.className = "animated  bounceInDown alertDiv";
      //标签
      alertDiv.appendChild(icon.success(20,20));
      //提示字
      var textNode = document.createElement("label");
      textNode.innerText = text;
      textNode.style.verticalAlign = "middle";
      textNode.style.marginLeft = "10px";
      alertDiv.appendChild(textNode);
      
      body.appendChild(alertDiv);
      setTimeout(function() {
        alertDiv.className="remove";
        //四秒后删除
        setTimeout(function() {
          body.removeChild(alertDiv);
          alertCount --;
        }, 4000);
      }, 4000);
      return true;
    },
    error: function(text) {
      alertCount ++;
      //外框
      var alertDiv = document.createElement("div");
      //颜色
      alertDiv.style.backgroundColor = "#FEF0F0";
      alertDiv.style.color = "#D9534F";
      //位置
      alertDiv.style.position = " fixed";
      alertDiv.style.zIndex = 9999999;
      alertDiv.style.top = (alertCount * 50 - 30) + "px";
      alertDiv.style.left = "50%";
      //调整左右位置
      alertDiv.style.marginLeft = "-" + ( getByteLength(text) * 7 + 70 ) / 2 + "px";
      alertDiv.style.borderRadius = "8px";
      alertDiv.style.fontSize = " 14px";
      alertDiv.style.textAlign = "center";
      alertDiv.style.padding = "12px 20px";
      //动画
      alertDiv.className = "animated  bounceInDown alertDiv";
      //标签
      alertDiv.appendChild(icon.error(20,20));
      //提示字
      var textNode = document.createElement("label");
      textNode.innerText = text;
      textNode.style.verticalAlign = "middle";
      textNode.style.marginLeft = "10px";
      alertDiv.appendChild(textNode);
      
      body.appendChild(alertDiv);
      setTimeout(function() {
        alertDiv.className="remove";
        //四秒后删除
        setTimeout(function() {
          body.removeChild(alertDiv);
          alertCount --;
        }, 4000);
      }, 4000);
      return true;
    }
  }  
};

//函数
//计算字节长度
function getByteLength( str ){
  return str.replace(/[\u0391-\uFFE5]/g,"aa").length;
}