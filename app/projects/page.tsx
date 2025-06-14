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
              我们的项目
            </h1>
            <p className="text-xl text-muted-foreground">
              探索我们在各个行业和领域的作品集。
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
              <Badge variant="outline" className="mb-6">精选项目</Badge>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Nova金融平台重新设计
              </h2>
              <p className="text-muted-foreground mb-6">
                对Nova金融数字平台的全面改造，专注于改善用户体验、可访问性和先进的金融工具。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  用户参与度提升42%
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  客户支持咨询减少35%
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  可访问性评分从76提升到98
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nova Finance Platform"
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
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              How we approach each project to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, audience, and objectives through in-depth research and stakeholder interviews.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs and goals.'
              },
              {
                number: '03',
                title: 'Creation',
                description: 'Our team of designers and developers bring the strategy to life with meticulous attention to detail.'
              },
              {
                number: '04',
                title: 'Optimization',
                description: 'We continuously analyze, test, and refine to ensure the solution performs optimally and achieves your goals.'
              }
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-card rounded-lg border border-border">
                <div className="text-5xl font-playfair font-bold text-muted/20 absolute top-4 right-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-6">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    </div>
  )
}



