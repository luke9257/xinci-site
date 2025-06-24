import React from 'react'

export interface Project {
  id: string
  title: string
  category: string
  description: string | React.ReactNode
  image: string
  tags: string[]
}

// 删除重复导入,因为Project接口已在当前文件定义

export const projects: Project[] = [
  {
    id: "gtm",
    title: "新品上市策略",
    category: '策略与规划',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>新品上市策略涉及将营销的核心原则——市场细分、目标定位、市场定位，应用于为特定目标市场量身定制个性化增长方案。基于对受众和企业增长目标的理解，我们帮助您将流量和潜在用户转化为忠实玩家，从而为您实现加速增长奠定基础。</p>
        <h3>市场与产品定位</h3>
        <p style={{ color: '#4e5461' }}>通过市场洞察与精准定位，帮助产品建立差异化优势。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 市场环境分析：</strong> 研究目标市场和行业趋势，识别机会窗口。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 竞品对标研究：</strong> 分析竞争对手产品特性和策略，发现差异化机会。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 用户画像洞察：</strong> 构建精准用户画像，挖掘需求痛点。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 差异化定位策略：</strong> 明确独特价值主张，制定差异化切入策略。</li>
        </ul>
        <h3>GTM 整合策略</h3>
        <p style={{ color: '#4e5461' }}>定制产品从研发到上线的全周期上市（Go-to-Market）蓝图。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>5. 测试验证阶段：</strong> 产品内测与公测策略，收集用户反馈，优化产品体验。</li>
          <li style={{ color: '#4e5461' }}><strong>6. 市场预热策略：</strong> 上线前造势传播，建立用户期待，积累首发用户基础。</li>
          <li style={{ color: '#4e5461' }}><strong>7. 首发推广计划：</strong> 正式发布时的集中营销攻势，确保市场声量最大化。</li>
          <li style={{ color: '#4e5461' }}><strong>8. 版本迭代策略：</strong> 大版本更新的推广节奏，持续保持产品热度和用户活跃。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/6476193/pexels-photo-6476193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['市场与产品定位', 'GTM策略', '数据分析', '创意支持']
  },
  {
    id: 'brand-strategy',
    title: '品牌升级焕新',
    category: '策略与规划',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>品牌升级焕新围绕IP或系列作产品的品牌形象升级与用户认知焕新，我们通过深度圈层运营和关键节点营销，提升品牌价值感知、强化用户情感连接，驱动用户增长与品牌忠诚度提升，从而助您实现长效业绩增长。</p>
        <h3>品牌形象升级</h3>
        <p style={{ color: '#4e5461' }}>通过视觉体系升级和价值主张刷新，建立差异化品牌形象。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 视觉系统升级：</strong>重新设计 Logo、色彩、字体等，打造具有辨识度的品牌形象。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 价值主张重构：</strong>梳理并重新定义品牌核心价值，明确定位和差异化优势。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 品牌个性定义：</strong>基于 IP 世界观和目标用户特征，确立品牌个性和沟通风格。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌资产建设：</strong>构建完整的品牌资产库，确保各触点形象一致性。</li>
        </ul>
        <h3>用户认知焕新</h3>
        <p style={{ color: '#4e5461' }}>通过深度圈层运营和情感连接构建，提升品牌忠诚度和用户 LTV。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 核心圈层运营：</strong>深度运营 KO L、KOC 等关键圈层，放大品牌传播效果。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 关键节点营销：</strong>针对产品发布、重要更新等节点，进行精准营销投放。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 情感连接构建：</strong>通过内容营销、互动体验、用户共创强化用户情感连接。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 长效增长机制：</strong>建立产品体验优化和价值传播机制，实现持续业绩增长。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // 修改：替换为新的图片地址
    tags: ['内容创作', '种草运营', '达人营销', '直播运营']
  },
  {
    id: 'store-promotion',
    title: '渠道商店推广',
    category: '渠道与分发',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>渠道商店推广是产品在渠道分发里的核心环节。我们通过精准的渠道组合策略和专业的商店运营推广，帮助您的产品在竞争激烈的市场中获得最大化的曝光和下载转化，实现商业价值的有效释放。</p>
        <h3>渠道上架与商推</h3>
        <p style={{ color: '#4e5461' }}>专注于产品的渠道布局和流量获取，通过多元化渠道策略实现用户规模增长。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 应用商店布局：</strong> 覆盖iOS App Store, Android与鸿蒙应用市场，提供渠道发行服务。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 游戏平台运营：</strong> 拓展TapTap、Steam等游戏垂直平台，利用平台特性触达精准用户。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 资源与付费推广：</strong> 执行榜单优化、资源位获取、付费推广活动，实现高效用户获取。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 渠道数据分析：</strong> 监测各渠道用户质量和转化效果，优化渠道投放策略和预算分配。</li>
        </ul>
        <h3>商店优化与转化</h3>
        <p style={{ color: '#4e5461' }}>专注于产品在应用商店的展示优化和转化率提升，实现自然流量获取最大化。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. ASO信息优化：</strong> 优化游戏标题、副标题、描述文案，提升搜索排名和曝光。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 视觉素材设计：</strong> 制作高转化的iCON、截图、预览视频，突出游戏核心卖点。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 商店页面策划：</strong> 设计符合平台特性的商店页面布局，优化信息展示与用户体验。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 转化数据优化：</strong> 通过A/B测试持续优化页面元素，提升页面访问到下载的转化率。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['渠道商务', '渠道运营', '付费推广', '转化调优']
  },
  {
    id: 'creative-services',
    title: '创意服务',
    category: '内容与创意',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>策略性规划并制作符合产品调性与营销目标的高品质宣传素材，包括 CG动画、PV宣传片、实机演示视频、KOL合作视频脚本、信息流广告素材、KV主视觉、官方网站、落地页等，并持续跟进A/B测试与迭代优化。</p>
        <h3>广告投放素材</h3>
        <p style={{ color: '#4e5461' }}>专注于转化导向的广告投放素材，通过精准定位和数据优化提升广告效果。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 信息流广告素材：</strong> 策划制作适配各平台的信息流广告，针对不同用户群体定制化内容。</li>
          <li style={{ color: '#4e5461' }}><strong>2. KOL合作素材：</strong> 为KOL定制专属脚本和素材包，确保内容与博主风格和粉丝喜好匹配。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 落地页设计制作：</strong> 设计高转化率的落地页，优化用户从点击到转化的完整路径。</li>
          <li style={{ color: '#4e5461' }}><strong>4. A/B测试与优化：</strong> 持续跟进广告素材 A/B 测试，基于数据反馈优化素材效果。</li>
        </ul>
        <h3>品牌宣传物料</h3>
        <p style={{ color: '#4e5461' }}>聚焦产品品牌建设和内容传播，打造具有品牌辨识度的高品质品宣物料。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. CG与PV制作：</strong> 制作高品质的品宣CG和视频，展现品牌调性和产品特色。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 产品KV设计：</strong> 设计统一的产品主视觉，确保各触点视觉形象的一致性。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 官网设计制作：</strong> 设计符合产品调性的官方网站，提升品牌形象和用户体验。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 品牌内容素材：</strong> 策划制作体现产品品牌调性和文化内涵的内容素材。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/8100055/pexels-photo-8100055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['广告素材', '宣传片', '平面设计', '网页设计']
  },
  {
    id: 'content-marketing',
    title: '内容营销',
    category: '内容与创意',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>通过在各大主流平台精耕细作优质的产品衍生内容，精准对接并高效运营 KOL/KOC 及创作者资源，通过持续内容种草、直播合作、短视频营销等方式，实现品牌曝光、用户互动与效果转化。</p>
        <h3>平台内容运营</h3>
        <p style={{ color: '#4e5461' }}>聚焦各大主流平台的内容生产与运营，通过优质内容持续种草用户。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 平台内容策划：</strong> 针对不同平台特性制定差异化内容策略，确保内容与平台调性匹配。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 原生内容制作：</strong> 围绕产品核心卖点创作多样化内容形式，提升产品认知度。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 内容种草运营：</strong> 通过持续的优质内容输出，培养用户对品牌和产品的兴趣。</li>
        </ul>
        <h3>KOL/KOC营销</h3>
        <p style={{ color: '#4e5461' }}>精准对接达人资源，通过达人影响力和圈层优势放大产品传播声量。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 达人资源筛选：</strong> 精准匹配符合品牌调性和目标用户群体的 KOL/KOC 资源。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 创作者合作运营：</strong> 建立长期合作关系，提供专业的内容指导和运营支持。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 圈层影响力放大：</strong> 利用达人在特定圈层的影响力，实现品牌声量的快速传播。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 转化效果优化：</strong> 通过数据追踪和效果分析，持续优化合作策略，提升转化率。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/11234306/pexels-photo-11234306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['内容创作', '种草运营', '达人营销', '直播运营']
  },
  {
    id: 'co-marketing',
    title: '联合营销',
    category: '内容与创意',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>策划并执行创新性的跨界合作（与其他 IP、品牌）、品牌联动、线上线下事件营销、赛事、展会以及现场活动等，引爆市场话题度，扩大品牌影响网络，大幅度提升营销效率与转化。</p>
        <h3>跨界联动营销</h3>
        <p style={{ color: '#4e5461' }}>通过与其他IP、品牌的创新性合作，实现产品的品牌价值互补与放大。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. IP 跨界合作：</strong> 与知名IP进行联名合作，借助IP影响力扩大产品受众群体。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 品牌联动策划：</strong> 与互补品牌开展深度合作，实现用户群体的交叉覆盖。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 合作内容创新：</strong> 设计独特的合作形式和内容，提升合作的话题性和传播效果。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 联合营销推广：</strong> 整合双方资源，开展联合营销活动，最大化合作价值。</li>
        </ul>
        <h3>赛事展会营销</h3>
        <p style={{ color: '#4e5461' }}>通过参与或举办赛事、展会、活动等，制造市场话题，提升品牌关注度。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 赛事合作营销：</strong> 赞助或参与电竞赛事、体育赛事等，借助赛事影响力扩大品牌曝光。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 展会参展策划：</strong> 参加行业展会和消费展览，通过现场展示提升产品认知度。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 现场活动执行：</strong> 举办线下体验活动、发布会等，增强用户与产品的直接互动。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 活动传播放大：</strong> 通过多渠道传播活动内容，扩大活动影响力和品牌声量。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['IP合作', '品牌联动', '活动策划', '公关传播']
  },
  {
    id: 'social-media',
    title: '社媒运营',
    category: '社媒与社群',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>规划、搭建并精细化运营产品的官方社媒账号矩阵。通过专业的内容创作、策略制定和数据分析，将其打造为产品发声、用户沟通和活动组织的核心阵地，建立稳定、高效的官方用户沟通渠道，提升产品形象，增强用户粘性。</p>
        <h3>策略与内容创作</h3>
        <p style={{ color: '#4e5461' }}>基于目标群体分析制定社媒策略，确保内容及时性和品牌一致性。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 社媒策略制定：</strong> 分析目标群体，定制化社媒内容策略与发布规划。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 内容创作制作：</strong> 撰写优质文案，制作视觉素材和短视频内容。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 品牌人设打造：</strong> 建立一致的品牌人设，确保所有平台的统一呈现。</li>
        </ul>
        <h3>运营与数据分析</h3>
        <p style={{ color: '#4e5461' }}>执行社媒发布维护与数据分析，实现内容传播效果的持续优化。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 内容发布推广：</strong> 执行多平台内容发布，优化发布时机和频次。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 传播数据分析：</strong> 监测内容传播效果，分析用户行为数据，优化内容策略。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 品牌曝光管理：</strong> 通过付费推广、KOL 合作等方式扩大品牌影响力。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 竞品监测分析：</strong> 监测竞品动态，分析行业趋势，调整传播策略。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['账号运营', '内容创作', '数据分析', '竞品监测']
  },
  {
    id: 'community-management',
    title: '社群管理',
    category: '社媒与社群',
    description: (
      <div>
        <p style={{ color: '#4e5461' }}>在官方社群及核心玩家聚集地深度互动与关系维护。策划社群专属活动，收集反馈，激励 UGC 产出，引导核心玩家参与社群管理与内容共创，构建高活跃、高忠诚、自传播的可持续社群生态系统。</p>
        <h3>社群建设与运营</h3>
        <p style={{ color: '#4e5461' }}>专注于发现、培养和激励社群核心用户，建立可持续的社群生态。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 社群建设激活：</strong> 设计社群架构，建立用户分层体系，促进社群成长。</li>
          <li style={{ color: '#4e5461' }}><strong>2. 社群互动维护：</strong> 在核心社群及聚集地深度互动与关系维护，收集反馈，激励UGC产出。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 会员关系建设：</strong> 培养核心用户，建立用户成长体系，引导核心玩家参与社群管理与内容共创。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 社区文化塑造：</strong> 建立社区价值观和文化氛围，培养用户归属感。</li>
        </ul>
        <h3>活动策划与管理</h3>
        <p style={{ color: '#4e5461' }}>通过活动策划和机制完善，确保社群的健康发展和用户价值最大化。</p>
        <ul>
          <li style={{ color: '#4e5461' }}><strong>1. 社群活动策划：</strong> 策划仅限社群成员的专属活动，增强用户归属感。</li>
          <li style={{ color: '#4e5461' }}><strong>2. UGC激励与共创：</strong> 建立创作扶持机制，组织内容共创活动，激励优质UGC产出。</li>
          <li style={{ color: '#4e5461' }}><strong>3. 用户激励体系：</strong> 建立积分、等级、特权等激励机制，促进用户活跃。</li>
          <li style={{ color: '#4e5461' }}><strong>4. 社区规范管理：</strong> 制定明确的准则来规范社区行为，维护良好的社区环境。</li>
          <li style={{ color: '#4e5461' }}><strong>5. 社区自治建设：</strong> 培养社区管理员，建立用户自治机制。</li>
        </ul>
      </div>
    ),
    image: 'https://images.pexels.com/photos/7915392/pexels-photo-7915392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['社群建设', '活动策划', '创作者运营']
  }
];