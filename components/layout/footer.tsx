import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-16 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              {/* 亮色模式下显示深色logo - 高度37px，宽度自适应 */}
              <img 
                src="/logo-light.png" 
                alt="新词" 
                className="w-auto dark:hidden" 
                style={{ height: '37px' }}
              />
              {/* 暗色模式下显示浅色logo - 高度37px，宽度自适应 */}
              <img 
                src="/logo-dark.png" 
                alt="新词" 
                className="w-auto hidden dark:block" 
                style={{ height: '37px' }}
              />
            </div>
            <p className="text-muted-foreground max-w-xs">
              通过创新设计和战略思维提升品牌价值。
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">导航</h4>
            <ul className="space-y-3">
              {['首页', '增长业务', '合作伙伴', '关于我们', '联系我们'].map((item, index) => {
                const hrefs = ['/', '/projects', '/partners', '/about', '/contact'];
                return (
                  <li key={item}>
                    <Link 
                      href={hrefs[index]}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">服务</h4>
            <ul className="space-y-3">
              {['网站开发', '品牌识别', '用户体验设计', '数字营销', '内容创作'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">联系方式</h4>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>123 Design Street</p>
              <p>旧金山，加利福尼亚州 94103</p>
              <p className="pt-2">
                <a href="mailto:hello@新词.com" className="hover:text-foreground transition-colors">
                  hello@新词.com
                </a>
              </p>
              <p>
                <a href="tel:+14155555555" className="hover:text-foreground transition-colors">
                  +1 (415) 555-5555
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 新词. 保留所有权利。
          </p>

        </div>
      </div>
    </footer>
  )
}