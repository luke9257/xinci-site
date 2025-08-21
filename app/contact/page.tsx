"use client"

import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
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
  Send,
  AlertCircle
} from 'lucide-react'

// 定义表单的验证规则，使用Zod进行校验
const formSchema = z.object({
  // 姓名字段：必须是字符串，最少2个字符
  name: z.string().min(2, { message: '姓名至少需要2个字符。' }),
  // 邮箱字段：必须是有效的邮箱格式
  email: z.string().email({ message: '请输入有效的邮箱地址。' }),
  // 电话字段：可选
  phone: z.string().optional(),
  // 公司字段：可选
  company: z.string().optional(),
  // 消息字段：必须是字符串，最少10个字符
  message: z.string().min(10, { message: '消息至少需要10个字符。' }),
  // 隐藏的Honeypot字段，用于防止机器人提交
  honeypot: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      honeypot: '',
    },
  })
  
  // 表单提交处理函数
  async function onSubmit(values: FormValues) {
    // 检查Honeypot字段是否被填写，如果被填写则很可能是机器人，直接返回
    if (values.honeypot) {
      console.log('Honeypot field filled, submission rejected.');
      return;
    }

    setIsSubmitting(true);

    // 直接在此处添加您的 Google Apps Script URL
    // 替换 'YOUR_GOOGLE_SCRIPT_URL_HERE' 为您部署后得到的实际 URL
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxoD1ge9ghOLPRpr1Yc6FXnxF9PN-5BXKhYd42dTxvhlhFke1Tur7iNIUo6G4YiApNd/exec';
    
    if (!googleScriptUrl) {
      console.error('Google Script URL is not configured');
      toast({
        variant: "destructive",
        title: "配置错误",
        description: "表单提交服务未正确配置，请联系管理员。",

      });
      setIsSubmitting(false);
      return;
    }

    try {
      // 使用fetch API将表单数据发送到Google Apps Script
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Scripts通常需要no-cors模式
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // 由于CORS限制，我们无法获取具体的响应状态
      // 但我们可以假设如果没有抛出错误，就是成功的
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "提交成功",
        description: "我们已收到您的消息，将尽快与您联系。",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "提交失败",
        description: "抱歉，提交表单时出现错误。请稍后重试或通过其他方式联系我们。",
      });
    } finally {
      // 无论成功或失败，最后都将提交状态设置为false
      setIsSubmitting(false);
    }
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
              期待了解您的需求，探讨如何助您达成目标。欢迎分享、咨询、交流。
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
                                <Input placeholder="您的姓名" {...field} required />
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
                                <Input type="email" placeholder="您的邮箱" {...field} required />
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
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Honeypot字段，用于防止机器人提交 */}
                      <FormField
                        control={form.control}
                        name="honeypot"
                        render={({ field }) => (
                          <FormItem className="hidden">
                            <FormControl>
                              <Input {...field} tabIndex={-1} autoComplete="off" />
                            </FormControl>
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
                        info@xenci.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">电话</h3>
                      <a href="tel:+86 17764204335" className="text-muted-foreground hover:text-foreground transition-colors">
                        +86 17764204335
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
                        武汉市洪山区，<br />
                        光谷大道3号，未来之光6-12
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
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* <div className="mt-8 pt-8 border-t border-border">
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
                </div> */}
              </div>
              
              <div className="h-[300px] relative rounded-lg overflow-hidden">
                <Image
                  src="/about/pexels-photo-16.jpg"
                  alt="办公地址"
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
                answer: '我们提供全面的服务，包括策略方案、创意制作、内容营销、IP营销、社媒社群和渠道推广。每项服务都根据客户需求量身定制。'
              },
              {
                question: '您的服务费用是多少？',
                answer: '我们的定价依据每个项目的范围和要求来确定。在咨询了解具体需求后，我们会提供详细报价。'
              },
              {
                question: '一个典型项目需要多长时间？',
                answer: '项目时间线因复杂性和范围而异。一条广告视频可能需要2-3天，而全面的产品发行和营销战役可能需要3-5个月。我们会在初步讨论中提供时间线估算。'
              },
              {
                question: '您与国际客户合作吗？',
                answer: '是的，我们与全球客户合作。我们的协作流程和工具使我们能够与客户进行远程合作。无论地理位置如何，都能有效展开。'
              },
              {
                question: '您的项目流程是什么？',
                answer: '我们的流程通常包括诊断、策略、执行以及优化。我们在整个过程中保持清晰的沟通，并让您参与关键决策，以确保最终交付符合您的愿景。'
              },
              {
                question: '项目完成后您提供持续支持吗？',
                answer: '是的，我们提供各种支持和维护套餐，以保持您的产品长效增长。我们会在项目规划期间讨论适合您需求的支持选项。'
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