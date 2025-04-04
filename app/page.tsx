import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Matsu Theme 测试</h1>
          <div className="flex flex-wrap gap-4">
            <Button>默认按钮</Button>
            <Button variant="destructive">危险按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
            <Button variant="link">链接按钮</Button>
          </div>
        </div>
        <UserButton />
        <Card>
          <CardHeader>
            <CardTitle>卡片标题</CardTitle>
            <CardDescription>这是一个使用 Matsu 主题的卡片组件</CardDescription>
          </CardHeader>
          <CardContent>
            <p>这是卡片的内容区域。您可以在这里添加任何内容。</p>
          </CardContent>
          <CardFooter>
            <Button>了解更多</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
