import React from 'react'

export interface Project {
  id: string
  title: string
  category: string
  description: string | React.ReactNode
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'nova-finance',
    title: 'Nova 金融平台',
    category: '金融科技',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>Nova 金融平台是一个现代化的银行界面，彻底改变了用户与其财务的互动方式。通过将直观设计与先进的金融技术相结合，为管理个人财务、投资和银行服务提供无缝体验。</p>
        
        <h3>直观简约的用户界面</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 简洁仪表板：</strong> 关键财务指标和近期活动概览</li>
          <li style={{ color: '#4e5461' }}><strong>2. 智能导航：</strong> 根据用户行为自适应的上下文感知菜单系统</li>
          <li style={{ color: '#4e5461' }}><strong>3. 可视化分析：</strong> 用于财务数据可视化的交互式图表和图形</li>
          <li style={{ color: '#4e5461' }}><strong>4. 财务健康评分：</strong> 全面评估用户财务状况并提供改进建议</li>
        </ul>
        
        <h3>高级财务分析功能</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 实时支出分类和跟踪：</strong> 自动分类交易并生成直观图表</li>
          <li style={{ color: '#4e5461' }}><strong>2. 预测性财务模型：</strong> 基于消费模式预测未来支出和储蓄趋势</li>
          <li style={{ color: '#4e5461' }}><strong>3. 情境比较分析：</strong> 与同龄人、行业同行或自定义群体比较消费习惯</li>
          <li style={{ color: '#4e5461' }}><strong>4. 财务健康评分：</strong> 全面评估用户财务状况并提供改进建议</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>这个现代化的银行界面代表了金融服务从交易处理向综合财务咨询的转变，通过技术赋能用户做出更明智的财务决策并实现个人财富目标。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['金融科技', 'React', 'Node.js', '银行业']
  },
  {
    id: 'eco-habitat',
    title: '生态栖息地',
    category: '品牌形象',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>生态栖息地是一个专注于可持续住房倡议的综合品牌形象项目。通过将环保意识设计原则与社区导向信息相结合，创造了一种强大的视觉语言，与环保意识消费者产生共鸣并促进可持续生活实践。</p>
        
        <h3>品牌设计系统</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 视觉识别：</strong> 环保色彩搭配和字体设计</li>
          <li style={{ color: '#4e5461' }}><strong>2. 标志设计：</strong> 可持续且现代的品牌标识</li>
          <li style={{ color: '#4e5461' }}><strong>3. 设计指南：</strong> 全面的品牌风格指南</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌物料：</strong> 在所有接触点的一致应用</li>
        </ul>
        
        <h3>材料指南</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 可持续材料：</strong> 环保印刷和生产选择</li>
          <li style={{ color: '#4e5461' }}><strong>2. 包装设计：</strong> 最小化废物的包装解决方案</li>
          <li style={{ color: '#4e5461' }}><strong>3. 数字资产：</strong> 针对各种平台优化</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌物料：</strong> 在所有接触点的一致应用</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>生态栖息地的品牌形象代表了对可持续生活的承诺，创造了一种视觉语言，激励和吸引社区，同时促进环保意识。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['品牌设计', '标志设计', '可持续发展']
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse 健身应用',
    category: '移动开发',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>Pulse 健身应用是一个综合性的移动健身解决方案，结合了个性化锻炼跟踪、营养指导和社交功能，创造引人入胜的健身体验。通过利用移动技术和数据分析，为用户提供便捷有效的方式来实现健身目标。</p>
        
        <h3>锻炼管理</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 定制例程：</strong> 个性化锻炼计划和练习</li>
          <li style={{ color: '#4e5461' }}><strong>2. 运动库：</strong> 全面的锻炼数据库</li>
          <li style={{ color: '#4e5461' }}><strong>3. 进度跟踪：</strong> 详细的表现监控</li>
          <li style={{ color: '#4e5461' }}><strong>4. 锻炼安排：</strong> 智能规划和提醒</li>
        </ul>
        
        <h3>营养跟踪</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 膳食规划：</strong> 个性化营养指导</li>
          <li style={{ color: '#4e5461' }}><strong>2. 食物记录：</strong> 简便的卡路里和宏量营养素跟踪</li>
          <li style={{ color: '#4e5461' }}><strong>3. 食谱数据库：</strong> 健康膳食建议</li>
          <li style={{ color: '#4e5461' }}><strong>4. 水分监控：</strong> 水分摄入跟踪</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>Pulse 健身应用通过创新的移动技术和全面的跟踪功能，使健身体验更加便捷、引人入胜且有效，从而改变了健身体验。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', '健康科技', 'UX设计']
  },
  {
    id: 'artisan-cafe',
    title: '工匠咖啡馆',
    category: '品牌形象',
    description: (
      <div>
        <h3>品牌识别系统</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 标志系统：</strong> 主要和次要标识，具有多样化应用</li>
          <li style={{ color: '#4e5461' }}><strong>2. 色彩搭配：</strong> 传达品牌个性的战略性色彩选择</li>
          <li style={{ color: '#4e5461' }}><strong>3. 字体层次：</strong> 独特且功能性的字体系列</li>
          <li style={{ color: '#4e5461' }}><strong>4. 视觉语言：</strong> 图像风格、图标设计和图形元素</li>
        </ul>
        
        <h3>品牌表达指南</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 品牌声音：</strong> 语调、个性和沟通原则</li>
          <li style={{ color: '#4e5461' }}><strong>2. 实施标准：</strong> 在所有接触点的一致应用</li>
          <li style={{ color: '#4e5461' }}><strong>3. 数字体验：</strong> 数字平台的UI/UX指南</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌演进：</strong> 在保持识别度的同时实现增长的框架</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>成功的品牌形象作为所有品牌互动的基础，与受众建立情感联系，同时建立信任和认知度，推动商业价值并培养持久的客户关系。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['品牌设计', '室内设计', '酒店业']
  },
  {
    id: 'nomad-travel',
    title: '游牧旅行平台',
    category: '网站开发',
    description: (
      <div>
        <h3>目的地智能服务</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 目的地情报：</strong> 气候、生活成本和签证要求分析</li>
          <li style={{ color: '#4e5461' }}><strong>2. 工作空间查找：</strong> 精选的联合办公空间及连接评级</li>
          <li style={{ color: '#4e5461' }}><strong>3. 住宿匹配：</strong> 游牧友好的住房，条件灵活</li>
          <li style={{ color: '#4e5461' }}><strong>4. 旅行物流：</strong> 综合交通和搬迁规划</li>
        </ul>
        
        <h3>社区与生活方式支持</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 游牧网络：</strong> 基于位置的社区连接和活动</li>
          <li style={{ color: '#4e5461' }}><strong>2. 知识交流：</strong> 目的地指南和当地见解</li>
          <li style={{ color: '#4e5461' }}><strong>3. 远程工作资源：</strong> 时区管理和生产力工具</li>
          <li style={{ color: '#4e5461' }}><strong>4. 健康服务：</strong> 健康资源和工作生活平衡支持</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>游牧旅行平台作为现代位置独立生活方式的综合伴侣，弥合旅行愿望与实际现实之间的差距，同时培养寻求自由、成长和真实体验的志同道合专业人士的全球社区。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/7625308/pexels-photo-7625308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', '旅行科技', 'UI设计']
  },
  {
    id: 'summit-events',
    title: '峰会活动',
    category: '数字营销',
    description: (
      <div>
        <h3>战略营销要素</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 受众洞察：</strong> 行为分析和细分方法论</li>
          <li style={{ color: '#4e5461' }}><strong>2. 渠道优化：</strong> 跨平台策略和预算分配</li>
          <li style={{ color: '#4e5461' }}><strong>3. 内容生态系统：</strong> 综合叙事和内容旅程映射</li>
          <li style={{ color: '#4e5461' }}><strong>4. 性能分析：</strong> ROI测量和归因建模</li>
        </ul>
        
        <h3>战术实施要素</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 搜索营销：</strong> SEO基础和付费搜索活动管理</li>
          <li style={{ color: '#4e5461' }}><strong>2. 社交媒体参与：</strong> 平台特定策略和社区建设</li>
          <li style={{ color: '#4e5461' }}><strong>3. 转化优化：</strong> 着陆页设计和漏斗分析</li>
          <li style={{ color: '#4e5461' }}><strong>4. 营销自动化：</strong> 个性化客户旅程和培育工作流</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>有效的数字营销超越了单个战术，在客户生命周期中创造连贯的品牌体验，将创造力与分析精度相结合，产生可衡量的商业成果，同时适应数字环境中快速发展的技术和消费者行为。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['数字营销', '活动', '网页设计']
  },
  // 新增的第一个峰会活动详情页面
  {
    id: 'tech-summit-2024',
    title: '科技峰会2024',
    category: '数字营销',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>科技峰会2024是一个综合性的数字营销项目，专注于为年度科技创新峰会打造全方位的品牌体验。通过整合创新的数字策略、用户体验设计和多渠道传播，为参会者创造了前所未有的互动体验。</p>
        
        <h3>数字营销策略</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 品牌定位：</strong> 确立科技峰会的独特价值主张和市场定位</li>
          <li style={{ color: '#4e5461' }}><strong>2. 目标受众分析：</strong> 深度分析科技行业专业人士的需求和行为模式</li>
          <li style={{ color: '#4e5461' }}><strong>3. 内容策略：</strong> 制定涵盖预热、进行中和后续的全周期内容计划</li>
          <li style={{ color: '#4e5461' }}><strong>4. 社交媒体矩阵：</strong> 跨平台的社交媒体传播策略和KOL合作</li>
        </ul>
        
        <h3>用户体验设计</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 响应式网站：</strong> 移动优先的峰会官网设计和开发</li>
          <li style={{ color: '#4e5461' }}><strong>2. 注册流程优化：</strong> 简化的用户注册和支付体验</li>
          <li style={{ color: '#4e5461' }}><strong>3. 互动功能：</strong> 实时问答、网络交流和议程定制功能</li>
          <li style={{ color: '#4e5461' }}><strong>4. 数据可视化：</strong> 实时参会数据和反馈展示系统</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>科技峰会2024项目成功地将传统会议模式转化为现代化的数字体验，不仅提升了参会者的满意度，还为主办方建立了强有力的品牌影响力和行业地位。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['科技峰会', '品牌推广', '用户体验', '多渠道营销']
  },
  // 新增的第二个峰会活动详情页面
  {
    id: 'innovation-conference',
    title: '创新大会',
    category: '数字营销',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>创新大会是一个突破性的数字化转型项目，致力于重新定义传统会议体验。通过融合最新的数字技术和创新的参与模式，为全球创新者打造了一个无界限的交流平台。</p>
        
        <h3>数字化转型策略</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 混合会议模式：</strong> 无缝整合线上线下参会体验</li>
          <li style={{ color: '#4e5461' }}><strong>2. 虚拟展厅：</strong> 3D虚拟空间展示和产品演示平台</li>
          <li style={{ color: '#4e5461' }}><strong>3. AI智能匹配：</strong> 基于兴趣和专业背景的参会者智能推荐</li>
          <li style={{ color: '#4e5461' }}><strong>4. 实时翻译：</strong> 多语言同声传译和字幕服务</li>
        </ul>
        
        <h3>沉浸式体验设计</h3>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. VR/AR技术：</strong> 虚拟现实演示和增强现实产品展示</li>
          <li style={{ color: '#4e5461' }}><strong>2. 互动工作坊：</strong> 在线协作工具和实时头脑风暴平台</li>
          <li style={{ color: '#4e5461' }}><strong>3. 个性化议程：</strong> AI驱动的个人兴趣推荐系统</li>
          <li style={{ color: '#4e5461' }}><strong>4. 社交网络：</strong> 专属的参会者社交平台和持续连接</li>
        </ul>
        
        <p style={{ color: '#4e5461' }}>创新大会项目开创了会议行业的新标准，通过技术创新和用户体验的完美结合，不仅扩大了会议的影响范围，还为参会者创造了更有价值和更具启发性的交流体验。</p>
      </div>
    ),
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['创新大会', '数字化转型', '沉浸式体验', '线上线下整合']
  }
];