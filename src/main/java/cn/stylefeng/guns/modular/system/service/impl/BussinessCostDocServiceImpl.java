package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.dao.BussinessCostDocMapper;
import cn.stylefeng.guns.modular.system.model.BussinessCostDoc;
import cn.stylefeng.guns.modular.system.service.IBussinessCostDocService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 费用单据表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-19
 */
@Service
public class BussinessCostDocServiceImpl extends ServiceImpl<BussinessCostDocMapper, BussinessCostDoc> implements IBussinessCostDocService {

    @Override
    public List<Map<String, Object>> list(String condition) {
        return this.baseMapper.list(condition);
    }
}
