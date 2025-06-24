"use client"

import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Instagram, 
  Twitter, 
  Linkedin, 
  Send
} from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: '姓名至少需要2个字符。' }),
  email: z.string().email({ message: '请输入有效的邮箱地址。' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: '消息至少需要10个字符。' }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })
  
  function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
      form.reset()
    }, 1500)
  }
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              联系我们
            </h1>
            <p className="text-xl text-muted-foreground">
              我们很乐意听到您的声音。让我们开始讨论您的下一个项目。
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-lg border border-border p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">谢谢您！</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    您的消息已成功发送。我们会尽快回复您。
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    发送另一条消息
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">给我们发送消息</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>姓名</FormLabel>
                              <FormControl>
                                <Input placeholder="您的姓名" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>邮箱</FormLabel>
                              <FormControl>
                                <Input placeholder="您的邮箱" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>电话（可选）</FormLabel>
                              <FormControl>
                                <Input placeholder="您的电话号码" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>公司（可选）</FormLabel>
                              <FormControl>
                                <Input placeholder="您的公司" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>消息</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="告诉我们您的项目或咨询" 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? '发送中...' : '发送消息'}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">联系信息</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">邮箱</h3>
                      <a href="mailto:hello@ascent.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        hello@ascent.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">电话</h3>
                      <a href="tel:+14155555555" className="text-muted-foreground hover:text-foreground transition-colors">
                        +1 (415) 555-5555
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">地址</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Design Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">工作时间</h3>
                      <p className="text-muted-foreground">
                        周一至周五：上午9点 - 下午6点<br />
                        周六：上午10点 - 下午2点
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-medium mb-4">关注我们</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="h-[300px] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Office location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              常见问题
            </h2>
            <p className="text-muted-foreground text-lg">
              有疑问吗？我们有答案。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: '您提供哪些服务？',
                answer: '我们提供全面的服务，包括品牌识别设计、网站开发、用户体验设计和数字营销。每项服务都根据您企业的具体需求量身定制。'
              },
              {
                question: '您的服务费用是多少？',
                answer: '我们的定价根据每个项目的范围和要求进行定制。在初步咨询了解您的具体需求后，我们会提供详细的报价。'
              },
              {
                question: '一个典型项目需要多长时间？',
                answer: '项目时间线因复杂性和范围而异。一个简单的网站可能需要4-6周，而全面的品牌识别和数字平台可能需要3-4个月。我们会在初步讨论中提供时间线估算。'
              },
              {
                question: '您与国际客户合作吗？',
                answer: '是的，我们与全球客户合作。我们的协作流程和工具使我们能够与客户有效合作，无论地理位置如何。我们已成功为北美、欧洲和亚洲的客户完成项目。'
              },
              {
                question: '您的项目流程是什么？',
                answer: '我们的流程通常包括发现、策略开发、设计和开发以及发布。我们在整个过程中保持清晰的沟通，并在关键决策点让您参与，以确保最终产品符合您的愿景。'
              },
              {
                question: '项目完成后您提供持续支持吗？',
                answer: '是的，我们提供各种支持和维护套餐，以保持您的数字资产最佳性能。我们可以在项目规划期间讨论适合您需求的支持选项。'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}