/**
 * 初始化部门详情对话框
 */
var BussinessCostDocInfoDlg = {
    deptInfoData : {},
    zTreeInstance : null,
    validateFields: {
        simplename: {
            validators: {
                notEmpty: {
                    message: '部门名称不能为空'
                }
            }
        },
        fullname: {
            validators: {
                notEmpty: {
                    message: '部门全称不能为空'
                }
            }
        },
        cost: {
            validators: {
                notEmpty: {
                    message: '金额不能为空'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
BussinessCostDocInfoDlg.clearData = function() {
    this.deptInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BussinessCostDocInfoDlg.set = function(key, val) {
    this.deptInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BussinessCostDocInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
BussinessCostDocInfoDlg.close = function() {
    parent.layer.close(window.parent.BussinessCostDoc.layerIndex);
}

/**
 * 收集数据
 */
BussinessCostDocInfoDlg.collectData = function() {
    this.set('id').set('simplename').set('fullname').set('tips').set('num').set('pid');
}

/**
 * 验证数据是否为空
 */
BussinessCostDocInfoDlg.validate = function () {
    $('#costInfoForm').data("bootstrapValidator").resetForm();
    $('#costInfoForm').bootstrapValidator('validate');
    return $("#costInfoForm").data('bootstrapValidator').isValid();
}

/**
 * 提交添加部门
 */
BussinessCostDocInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/bussinessCostDoc/add", function(data){
        Feng.success("添加成功!");
        window.parent.BussinessCostDoc.table.refresh();
        BussinessCostDocInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.deptInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
BussinessCostDocInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/bussinessCostDoc/update", function(data){
        Feng.success("修改成功!");
        window.parent.BussinessCostDoc.table.refresh();
        BussinessCostDocInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.BussinessCostDocInfoData);
    ajax.start();
};

$(function() {
    Feng.initValidator("costInfoForm", BussinessCostDocInfoDlg.validateFields);
});