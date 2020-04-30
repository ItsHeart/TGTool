# TGTool
前端工具库

#Done  
1.alert
2.confirm

#Install

```html  
<link rel="stylesheet" type="text/css" href="TGTool.css">
<script type="text/javascript" src="TGTool.js"></script>
```

#Examples

1.alert
```JavaScript  
var tg = TGTool();
tg.info("提示");
tg.success("成功");
tg.warning("警告");
tg.error("失败");
```
2.connfirm
```JavaScript  
var tg = TGTool();
TG.confirm("提示","请确认",callback1,callback2);//callback2可选
```