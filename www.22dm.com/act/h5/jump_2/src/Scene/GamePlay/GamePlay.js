var GamePlayScene = cc.Scene.extend({
    backgroundLayer : null, // 背景层
    mainLayer       : null, // 玩法层
    UILayer         : null, // UI层
    ctor : function(){
        this._super();
    },
    onEnter : function () {
        this._super();
        this.registerEvent();
        this.loadBackgroundLayer();
        this.loadUILayer();
        this.loadMainLayer();
    },
    onExit : function(){
        this._super();
    },
    registerEvent : function(){
        
    },
    loadBackgroundLayer : function(){
        this.backgroundLayer = null;
        var node = new GPBackgroundLayer();
        this.addChild(node,0);
        this.backgroundLayer = node;
    },
    loadUILayer : function(){
        this.UILayer = null;
        this.UILayer = new GPUILayer();
        this.addChild(this.UILayer,20);
    },
    loadMainLayer : function(){
        this.mainLayer = null;
        this.mainLayer = new GPMainLayer();
        this.addChild(this.mainLayer,10);
    }
});