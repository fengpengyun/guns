/**
 * 管理初始化
 */
var BussinessCostDoc = {
    id: "BussinessCostDocTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
BussinessCostDoc.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '主键id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '排序', field: 'num', visible: true, align: 'center', valign: 'middle'},
            {title: '金额', field: 'cost', visible: true, align: 'center', valign: 'middle'},
            {title: '单据类型', field: 'costType', visible: true, align: 'center', valign: 'middle'},
            {title: '简称', field: 'simplename', visible: true, align: 'center', valign: 'middle'},
            {title: '全称', field: 'fullname', visible: true, align: 'center', valign: 'middle'},
            {title: '提示', field: 'tips', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
BussinessCostDoc.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        BussinessCostDoc.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
BussinessCostDoc.openAddBussinessCostDoc = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bussinessCostDoc/bussinessCostDoc_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
BussinessCostDoc.openBussinessCostDocDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bussinessCostDoc/bussinessCostDoc_update/' + BussinessCostDoc.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
BussinessCostDoc.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/bussinessCostDoc/delete", function (data) {
            Feng.success("删除成功!");
            BussinessCostDoc.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("bussinessCostDocId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询列表
 */
BussinessCostDoc.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    BussinessCostDoc.table.refresh({query: queryData});
};

//局部注册组件
var component= {
    template: '<div>A custom component from div-component!</div>'
};

$(function () {
    var defaultColunms = BussinessCostDoc.initColumn();
    var table = new BSTable(BussinessCostDoc.id, "/bussinessCostDoc/list", defaultColunms);
    table.setPaginationType("client");
    BussinessCostDoc.table = table.init();

    //创建vue实例
    var app7 = new Vue({
        el: '#apps-root2',
        components:{
            "div-component":component
        }
    })
});
