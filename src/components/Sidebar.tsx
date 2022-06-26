import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-[348px] bg-pink-500 bg-opacity-10 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lessons) => {
          return (
            <Lesson
              key={lessons.id}
              title={lessons.title}
              slug={lessons.slug}
              availableAt={new Date(lessons.availableAt)}
              type={lessons.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
