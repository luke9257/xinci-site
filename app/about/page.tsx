import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { team } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                营销之术 · 玩者之心
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                我们是一家提供全方位服务的<strong>增长营销机构</strong>，由行业资深人士创立，拥有丰富的<strong>产品发行经验</strong>和<strong>创意专家资源</strong>，并对行业充满热情。我们秉持玩者之心，为重视长久用户关系的发行商、工作室和品牌提供增长服务。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">
                    与我们合作
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    查看服务项目
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/about/pexels-photo-11.jpg"
                alt="团队介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的故事</h2>
            <p className="text-muted-foreground text-lg">
              源于热爱，精于求知，成于创新。
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                year: '缘起',
                title: '缘起新词',
                description: '新词，映射着一个时代的演进与文化的变迁。我们以此为名，自创立起便深度参与游戏行业，助力新锐产品的成功发布与经典产品的品牌焕新。',
                image: '/about/pexels-photo-12.jpg'
              },
              {
                year: '进化',
                title: '专业进化',
                description: '我们深知产品的成功是一项系统性工程。为此，新词提供从市场研究、发行策略到增长、品牌的全链路服务，并随行业持续进化我们的能力矩阵。',
                image: '/about/pexels-photo-13.jpg'
              },
              {
                year: '洞见',
                title: '洞见未来',
                description: '新词不仅仅专注在幕后创造价值，也乐于公开发现和分享新见解。我们未来将开放专项研究计划——与行业中优秀人才和核心品牌一同成长。',
                image: '/about/pexels-photo-14.jpg'
              },
              {
                year: '共鸣',
                title: '共鸣致远',
                description: '新词的一切行动都围绕着我们的核心使命：助力行业从业者，掌握长效经营之道。若我们的理念能让您产生共鸣，也热切期待与您深入交流。',
                image: '/about/pexels-photo-15.jpg'
              }
            ].map((milestone, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-muted-foreground mb-6">{milestone.description}</p>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的价值观</h2>
            <p className="text-muted-foreground text-lg">
              指导我们工作和关系的原则
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '卓越',
                description: '我们致力于在每一个环节都追求卓越品质，从策略到执行。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M12 2v4.5"/>
                    <path d="m20 10-4.5-2.5"/>
                    <path d="m18 20-3-5"/>
                    <path d="m6 20 3-5"/>
                    <path d="m4 10 4.5-2.5"/>
                    <path d="M12 12v2.5"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                )
              },
              {
                title: '协作',
                description: '我们深信最优秀的成果源于与客户及团队间的开放协作。',
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
                title: '创新',
                description: '我们不断探索新理念、新创意与新方法，打造前沿解决方案。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M2 12h5"/>
                    <path d="M17 12h5"/>
                    <path d="M12 2v5"/>
                    <path d="M12 17v5"/>
                    <path d="M12 12 2 2"/>
                    <path d="m12 12 10 10"/>
                    <path d="m12 12 10-10"/>
                    <path d="m12 12-10 10"/>
                  </svg>
                )
              },
              {
                title: '使命',
                description: '我们全力支持专注长久用户关系的合作伙伴，共创可持续成功。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="text-primary inline-flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的团队</h2>
            <p className="text-muted-foreground text-lg">
              了解我们创意解决方案背后经验丰富的专业人士
            </p>
          </div>
          
          {/* 团队成员卡片 - 3个成员，小图样式 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(0, 3).map((member, index) => (
              <div key={index} className="group text-center">
                {/* 小图样式 - 圆形头像，尺寸再次增加20% */}
                 <div className="relative mb-4 mx-auto w-36 h-36 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </div>
  )
}