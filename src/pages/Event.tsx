import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Spin } from "../components/Spin"
import { Video } from "../components/Video"

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video lessonSlug={slug} /> : <Spin />}
        <Sidebar />
      </main>
    </div>
  )
}
