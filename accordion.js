function Accordion(obj){
    this.navTitle=obj.navTitle;
    this.subNav=obj.subNav;
    this.activeClassName=obj.activeClassName;
    this.multiple=obj.multiple;

    this.bindEvent();
}
Accordion.prototype={
    
    
    bindEvent:function(){
        var _this=this;
        this.navTitle.click(function(){
            if(!_this.multiple){
                var className=$(this).attr("class");
                // 获取当前元素的父元素的兄弟元素的子元素中有一样className的
                $(this).parent().siblings().children("."+className).removeClass(_this.activeClassName).next().slideUp();
                
            }
            $(this).next().stop().slideToggle();
            $(this).toggleClass(_this.activeClassName);
            
        })
    }
}