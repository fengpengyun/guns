package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.BussinessCostDoc;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 费用单据表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-19
 */
public interface BussinessCostDocMapper extends BaseMapper<BussinessCostDoc> {
    /**
     * 获取所有部门列表
     */
    List<Map<String, Object>> list(@Param("condition") String condition);
}
