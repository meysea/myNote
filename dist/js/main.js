function init() {
    console.log(123)
    //如果你要操作界面元素的时候，由于该函数在head部分，所以可能会出现界面未加载完成，
    //而你要读取界面节点的情况，所以做一个延迟加载
}
setTimeout("init()",500)
