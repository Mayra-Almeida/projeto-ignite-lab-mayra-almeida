import { DefaultUi, Player, Youtube } from "@vime/react"
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react"

import "@vime/core/themes/default.css"
import { useGetLessonsBySlugQuery } from "../graphql/generated"
import { Spin } from "./Spin"
import { Link } from "react-router-dom"

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonsBySlugQuery({
    variables: { slug: props.lessonSlug },
  })

  if (!data || !data.lesson) {
    return <Spin />
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-pink-600"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="p-4 text-sm bg-pink-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-pink-800 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Link>
            <Link
              to="/"
              className="p-4 text-sm border border-purple-700 text-purple-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-700 hover:text-gray-100 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </Link>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <Link
            to="/"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-pink-800 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </Link>

          <Link
            to="/"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-pink-800 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers Exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
