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
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                用心打造数字化体验
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                我们是一支由设计师、开发者和策略师组成的团队，致力于创造有意义的数字化体验。
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
                    查看我们的项目
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
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
              从初创到成为领先的创意机构
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                year: '2015',
                title: '起步阶段',
                description: 'Ascent成立时怀着创造真正有意义的数字化体验的愿景。从仅有三名团队成员和一个小办公室开始，我们专注于为与我们价值观相同的客户打造有意义的作品。',
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                year: '2018',
                title: '专业成长',
                description: '随着客户名单的增长，我们的团队和能力也在不断发展。我们扩展了服务范围，包括全面的品牌策略和数字营销，使我们能够提供端到端的解决方案。',
                image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                year: '2021',
                title: '国际认可',
                description: '我们对卓越的承诺获得了多项行业奖项的认可。我们开始与国际客户合作，并确立了作为前瞻性创意合作伙伴的声誉。',
                image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                year: '2023',
                title: '今日成就',
                description: '如今，Ascent是一支由充满激情的创意人员和策略师组成的团队，致力于帮助品牌在数字化领域中导航。我们持续发展、创新，并突破可能性的边界。',
                image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
                description: '我们致力于在所做的每一件事中都提供卓越的品质，从策略到执行。',
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
                description: '我们相信最好的工作是在与客户和彼此开放合作时产生的。',
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
                description: '我们持续探索新想法、新技术和新方法，以创造前瞻性的解决方案。',
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
                description: '我们选择从事能够产生积极影响并与我们价值观一致的项目。',
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
              认识我们创意解决方案背后的才华横溢的个人
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-[3/4]">
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