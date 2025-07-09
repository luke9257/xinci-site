import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { gamePartners, companyPartners } from '@/lib/data'

export default function PartnersPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              我们的合作案例
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              我们助力开发者、发行商和全球工作室，为其游戏和品牌提供支持。
            </p>
            <p className="text-xs text-muted-foreground/70 mb-0 italic px-2 py-1 rounded-full inline-block bg-muted">
              仅展示部分信息，排名不分先后
            </p>
          </div>
        </div>
      </section>
      
      {/* 游戏品牌合作案例 */}
      <section className="pb-16">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="text-center mb-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                游戏品牌
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {gamePartners.map((partner, index) => (
               <div key={index} className="group rounded-lg hover:shadow-lg transition-all duration-300 p-4 relative bg-card border border-border">
                 <div className="h-16 relative flex items-center justify-center">
                   <Image 
                     src={partner.logo}
                     alt={partner.name}
                     width={100}
                     height={50}
                     className="object-contain transition-all duration-300"
                     priority={index < 6}
                   />
                 </div>
                 {/* 鼠标悬停显示标题 */}
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <h3 className="font-medium text-sm text-white text-center px-2">{partner.name}</h3>
                   </div>
               </div>
             ))}           </div>

         </div>
       </section>

       {/* 公司品牌合作案例 */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="text-center mb-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                公司品牌
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {companyPartners.map((partner, index) => (
               <div key={index} className="group rounded-lg hover:shadow-lg transition-all duration-300 p-4 relative bg-card border border-border">
                 <div className="h-16 relative flex items-center justify-center">
                   <Image 
                     src={partner.logo}
                     alt={partner.name}
                     width={100}
                     height={50}
                     className="object-contain transition-all duration-300"
                     priority={index < 6}
                   />
                 </div>
                 {/* 鼠标悬停显示标题 */}
                 <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <h3 className="font-medium text-sm text-white text-center px-2">{partner.name}</h3>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* Partnership Approach */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                我们的合作方式
              </h2>
              <p className="text-muted-foreground mb-8">
                我们相信好的伙伴关系建立在共同价值观、开放沟通和共同成长的基础上。以下是我们与合作伙伴的合作方式：
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: '协作流程',
                    description: '我们在每个阶段都与合作伙伴密切合作，确保您的声音被听到，您的愿景得以实现。'
                  },
                  {
                    title: '长期关系',
                    description: '我们专注于建立持久的合作伙伴关系，而不是一次性项目，这让我们能够深入了解您不断变化的需求。'
                  },
                  {
                    title: '共享成功',
                    description: '您的成功就是我们的成功。我们通过为您的业务创造的积极影响来衡量我们的成果。'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Partnership approach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Benefits */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">合作优势</h2>
            <p className="text-muted-foreground text-lg">
              与新词合作时您可以期待的收获
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '全栈业务能力',
                description: '获得我们策略、设计和开发团队的支持，他们为您的项目带来多年的经验。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9Z"/>
                    <path d="M12 12h8.5"/>
                    <path d="M12 12H3.5"/>
                  </svg>
                )
              },
              {
                title: '前沿解决方案',
                description: '我们紧跟行业趋势和用户偏好，为您的挑战带来前沿解决方案。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M2 12h1"/>
                    <path d="M6 12h1"/>
                    <path d="M10 12h1"/>
                    <path d="M14 12h1"/>
                    <path d="M18 12h1"/>
                    <path d="M22 12h1"/>
                    <path d="M12 2v1"/>
                    <path d="M12 6v1"/>
                    <path d="M12 10v1"/>
                    <path d="M12 14v1"/>
                    <path d="M12 18v1"/>
                    <path d="M12 22v1"/>
                    <circle cx="12" cy="12" r="9"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="12" cy="12" r="1"/>
                  </svg>
                )
              },
              {
                title: '专业化服务',
                description: '一个致力于您成功的专业团队，提供持续的服务和优化。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              },
              {
                title: '成果导向',
                description: '我们专注于与您的业务目标一致并推动持续增长的可衡量成果。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                )
              },
              {
                title: '高效沟通',
                description: '在整个合作过程中保持清晰开放的沟通，定期提供更新和见解。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                )
              },
              {
                title: '资源网络',
                description: '获得我们的行业联系网络和资源，扩大您的影响力和覆盖范围。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="p-8 bg-card rounded-lg border border-border">
                <div className="text-primary mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </div>
  )
}