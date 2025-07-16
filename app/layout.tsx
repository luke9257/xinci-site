import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: '新词 | 游戏营销机构 | 您的游戏发行伙伴',
  description: '我们为重视长久用户关系的游戏厂商，提供务实且长效的增长解决方案。',
  keywords: ['游戏营销', '游戏发行', '内容营销', '创意机构', '外部发行团队', '创意服务', '渠道发行'],
  // 添加图标配置
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}