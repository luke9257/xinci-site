"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/projects/project-card'
import { projects } from '@/lib/data'

// 从项目中获取唯一分类
const categories = ['全部', ...Array.from(new Set(projects.map(project => project.category)))]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')
  
  const filteredProjects = activeCategory === '全部' 
    ? projects
    : projects.filter(project => project.category === activeCategory)
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              我们的服务
            </h1>
            <p className="text-xl text-muted-foreground">
              提供覆盖广泛地区、平台和细分类型的营销服务和专业知识。
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">精选服务</Badge>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                手游硬核渠道发行
              </h2>
              <p className="text-muted-foreground mb-6">
                专注华为、OPPO、VIVO等手机应用市场，最大化产品的渠道用户量级与收益。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  用户新增量级提升100%
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  产品流水收益提升90%
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  产品运营周期提升70%
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  联系我们
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/projects/pexels-photo-9.jpg"
                alt="手游硬核渠道发行"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">我们的流程</h2>
            <p className="text-muted-foreground text-lg">
              经过验证的方法论，提供卓越的成果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: '发现',
                description: '我们通过调研分析和客户访谈，首先了解您的产品、目标和挑战。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                )
              },
              {
                number: '02',
                title: '策略',
                description: '基于我们的发现，量身定制符合您目标和市场机会的策略方案。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )
              },
              {
                number: '03',
                title: '执行',
                description: '我们的团队通过市场调研、内容制作与用户运营，将策略转化为现实。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" style={{filter: 'drop-shadow(0 0 1px rgba(221, 78, 82, 0.3))'}}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                    <path d="m9 12 2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                number: '04',
                title: '优化',
                description: '我们持续监测、调优与迭代，确保投入以数据为导向、最大化增长效率。',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" style={{filter: 'drop-shadow(0 0 1px rgba(221, 78, 82, 0.3))'}}>
                    {/* 上方箭头 */}
                    <path d="M4 7l3-3 3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* 上方圆弧 */}
                    <path d="M7 4v4a8 8 0 0 0 8 8h4" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* 下方箭头 */}
                    <path d="M20 17l-3 3-3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* 下方圆弧 */}
                    <path d="M17 20v-4a8 8 0 0 0-8-8H5" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="relative p-6 bg-card rounded-lg border border-border">
                {/* 第一行：图标和背景数字 */}
                <div className="flex items-start justify-between mb-3">
                  {/* 左侧图标 */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#F8EAEA' }}
                    >
                      <div style={{ color: '#DD4E52' }}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* 右侧背景数字 - 高度为图标的80% */}
                  <div 
                    className="font-playfair font-bold text-muted-foreground/20 leading-none"
                    style={{ fontSize: '2.4rem', height: '2.4rem' }}
                  >
                    {step.number}
                  </div>
                </div>
                
                {/* 第二行：标题 */}
                <div className="mb-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                
                {/* 第三行：内容描述 */}
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </div>
  )
}



