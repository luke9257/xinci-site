import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Users, BarChart, Code, PenTool } from 'lucide-react'
import ProjectCard from '@/components/projects/project-card'
import TestimonialSlider from '@/components/testimonial-slider'
import { projects, partners } from '@/lib/data'
import ScrollButton from '@/components/scroll-button'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20 dark:from-background/95 dark:via-background/80 dark:to-background/95 z-10" />
          <Image 
            src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Hero background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              我们打造提升品牌价值的数字化体验
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              为前瞻性品牌和企业提供策略驱动的设计与技术解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/projects">
                  服务项目
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white border border-red-400 hover:bg-red-50" asChild>
                <Link href="/contact">
                  联系我们
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <ScrollButton />
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services-section" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">我们的服务</h2>
              <p className="text-muted-foreground whitespace-nowrap">
                我们融合策略、设计和技术，创造具有影响力的数字化解决方案。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PenTool className="h-10 w-10" />,
                title: '品牌识别',
                description: '我们创造体现您品牌价值的独特视觉系统。'
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: '网站开发',
                description: '使用前沿技术构建定制化网站解决方案，确保性能和可扩展性。'
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: '用户体验设计',
                description: '以人为本的设计，为您的用户创造直观、引人入胜的体验。'
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: '数字营销',
                description: '数据驱动的策略，提升您的知名度并推动有意义的互动。'
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">精选项目</h2>
              <p className="text-muted-foreground">
                我们在各个行业的最新作品精选。
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                查看所有项目
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            客户评价
          </h2>
          
          <TestimonialSlider />
        </div>
      </section>
      

    </div>
  )
}