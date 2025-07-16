import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Users, BarChart, Code, PenTool } from 'lucide-react'
import ProjectCard from '@/components/projects/project-card'
import TestimonialSlider from '@/components/testimonial-slider'
import { projects } from '@/lib/data'
import ScrollButton from '@/components/scroll-button'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40 dark:from-background/98 dark:via-background/90 dark:to-background/98 z-10" />
          <Image 
            src="/about/pexels-photo-ltd.jpg" 
            alt="新词官网" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              我们构建贯穿游戏生命周期的增长网络
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              致力于为重视长久用户关系的合作厂商，提供务实且长效的增长解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/projects">
                  了解更多
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
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">我们的能力</h2>
              <p className="text-muted-foreground whitespace-nowrap">
                与厂商同频共振，以"外部发行团队"模式，提供全链路增长服务。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PenTool className="h-10 w-10" />,
                title: '策略与规划',
                description: '通过我们的策略组合，在您游戏的生命周期中产生持续影响。'
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: '内容与创意',
                description: '擅长提供从广告创意、品宣物料到KOL、IP营销的全案内容。'
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: '社媒与社群',
                description: '将您的用户沉淀到活跃社群，并让游戏在社媒阵地广泛传播。'
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: '渠道与分发',
                description: '整合内容、ASO与付费广告，优化应用商店/平台用户获取。'
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
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">服务项目</h2>
              <p className="text-muted-foreground">
                精心设计与执行创新营销策略并展开发行支持。
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
      {/* 注释：隐藏客户评价部分 */}
      {/*
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            客户评价
          </h2>
          
          <TestimonialSlider />
        </div>
      </section>
      */}
      

    </div>
  )
}