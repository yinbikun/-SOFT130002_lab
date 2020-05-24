# Lab8需求文档


## css修改

```
 h3{display:none;}
 table{width: 600px;
        margin:40px auto 10px auto;
        font-weight: bold;
        table-layout: fixed;
        border-radius:8px;

  }
```
将h3设置为不可见，然后将table放置在中间并将radius设为8px尽可能还原图例中的表格样式

## 任务一

```
if(index > 4){
        index = 0;
    }
```
需要注意在第一张和最后一张照片的时候，需要一个单独的判断条件来判断相关操作进行跳转，并对全局变量index进行相关操作

## 任务二

```
function auto () {
    timer = setInterval(function () {
        next_pic();
    },2000);
}
container.addEventListener("mouseover",function(){clearInterval(timer);});
container.addEventListener("mouseout",function(){auto();});
auto();
```
2s进行自动换照片，当有鼠标在照片box上时使用container.addEventListener进行判断，并将timer计时器重置，如果鼠标移开
就继续执行auto函数自动换照片

## 任务三

和任务二近似，可以将任务二的aotu函数和判断条件在这里调用，也需要单独判断图片1和5时的跳转操作

## 任务四

```
td[i].addEventListener('click',function(){
        td[i].setAttribute('contenteditable', 'true');
        let r=window.getSelection();
        r.collapse(td[i], 0);
```
主要难度是实现光标在最左边，以上代码实现了如果click发生就将光标置于最左边



