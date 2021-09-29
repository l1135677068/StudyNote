class Router {
    constructor() {
        // 存储不同url对应的回调
        this.route = {};
        this.currentUrl = "";
        this.updateView = this.updateView.bind(this);
        this.initHash = this.initHash.bind(this);
    }
    // 添加url和对应的url回调函数
    router(path, callback) {
        this.route[path] = callback || function () {
            console.log("this path doesn't exist")
        }
    }
    // hash清空
    initHash() {
        location.hash = "";
    }
    // 更新视图
    updateView() {
        // 获得当前hash值
        this.currentUrl = location.hash.slice(1) || '/';
        // 执行对应hash的回调函数
        this.route[this.currentUrl] && this.route[this.currentUrl]();
    }
    init() {
        // 添加监听事件
        window.addEventListener('load', this.initHash);
        window.addEventListener('hashchange', this.updateView);
    }
}
