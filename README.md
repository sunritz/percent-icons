# percent-icons
一个百分比流量显示的小控件，包含流量球，进度条和进度环，可以自定义三种模式的百分比进度显示。

#从npm资源池安装

npm install percent-icons

#引入

import percentIcons from "percent-icons"

#模板
<div v-for="(item,index) in percenticons" 
:data-textcolor="item.textcolor" 
:data-bordercolor="item.bordercolor"  
:data-textbg="item.textbg"  
:data-barcolortwo="item.barcolortwo" 
:data-barcolor="item.barcolor" 
:type="item.type" 
:id="item.id" 
:key="item.id" 
:data-height="item.height" 
:data-width="item.width" 
:data-value="item.value" 
:data-size="item.size" 
:data-font="item.font" 
:data-color="item.color" 
:data-bgcolor="item.bgcolor">
</div>

#数据
export default {
    data () {
      return {
         percenticons:[
          {
            type:"ball",
            id:"x",
            value:80,
            size:150,
            font:"20px",
            color:"#00ff24",
            barcolor:"#c90000",
            bgcolor:"rgba(53, 142, 0, 1)",
            textcolor:"red"
          },
          {
            type:"hoop",
            id:"c",
            value:12.55,
            size:120,
            font:"20px",
            color:"red",
            bgcolor:"#ccc",
            width:"200",
            textcolor:"red"
          },
          {
            type:"bar",
            id:"d",
            value:34.55,
            font:"30px",
            bgcolor:"rgba(171, 226, 77, 0.6)",
            color:"#6DA807",
            barcolor:"#6DA807",
            barcolortwo:"#d3ff93",
            bordercolor:"transparent",
            height:"10",
            width:"300",
            textbg:"red",
            textcolor:"white"
          }
        ]
      }
    }
  }
  
  #使用
  mounted() {
    let regs = [this.percenticons[0].id,this.percenticons[1].id,this.percenticons[2].id]
    percentIcons.per(regs);
  }
  
  percent-icons是一个包含三种百分比进度图标定义的小工具，流量球，进度环和进度条，主要用于Vue框架内，每个图标的样式都可以在数据模型中自己定义，包括大小，长度，字号，颜色等等，可塑性很强。
模板属性的API请参阅以下表格。
http://www.i-mprove.cc/?p=2495
