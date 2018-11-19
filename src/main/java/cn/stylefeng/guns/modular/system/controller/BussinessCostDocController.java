package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.common.annotion.BussinessLog;
import cn.stylefeng.guns.core.common.annotion.Permission;
import cn.stylefeng.guns.core.common.constant.dictmap.DeptDict;
import cn.stylefeng.guns.modular.system.warpper.DeptWarpper;
import cn.stylefeng.roses.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import cn.stylefeng.guns.modular.system.model.BussinessCostDoc;
import cn.stylefeng.guns.modular.system.service.IBussinessCostDocService;

import java.util.List;
import java.util.Map;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2018-11-19 13:26:34
 */
@Controller
@RequestMapping("/bussinessCostDoc")
public class BussinessCostDocController extends BaseController {

    private String PREFIX = "/system/bussinessCostDoc/";

    @Autowired
    private IBussinessCostDocService bussinessCostDocService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "bussinessCostDoc.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/bussinessCostDoc_add")
    public String bussinessCostDocAdd() {
        return PREFIX + "bussinessCostDoc_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/bussinessCostDoc_update/{bussinessCostDocId}")
    public String bussinessCostDocUpdate(@PathVariable Integer bussinessCostDocId, Model model) {
        BussinessCostDoc bussinessCostDoc = bussinessCostDocService.selectById(bussinessCostDocId);
        model.addAttribute("item",bussinessCostDoc);
        LogObjectHolder.me().set(bussinessCostDoc);
        return PREFIX + "bussinessCostDoc_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        List<Map<String, Object>> list = this.bussinessCostDocService.list(condition);
        return super.warpObject(new DeptWarpper(list));
    }

    /**
     * 新增
     */
    @BussinessLog(value = "添加部门", key = "simplename", dict = DeptDict.class)
    @RequestMapping(value = "/add")
    @Permission
    @ResponseBody
    public Object add(BussinessCostDoc bussinessCostDoc) {
        bussinessCostDocService.insert(bussinessCostDoc);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer bussinessCostDocId) {
        bussinessCostDocService.deleteById(bussinessCostDocId);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(BussinessCostDoc bussinessCostDoc) {
        bussinessCostDocService.updateById(bussinessCostDoc);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{bussinessCostDocId}")
    @ResponseBody
    public Object detail(@PathVariable("bussinessCostDocId") Integer bussinessCostDocId) {
        return bussinessCostDocService.selectById(bussinessCostDocId);
    }
}
