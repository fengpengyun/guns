package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.BussinessCostDoc;
import com.baomidou.mybatisplus.service.IService;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 费用单据表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-19
 */
public interface IBussinessCostDocService extends IService<BussinessCostDoc> {
    List<Map<String, Object>> list(String condition);
}

