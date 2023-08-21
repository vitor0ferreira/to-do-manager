
import RemoveButton from "@/components/RemoveButton";
import TaskSection from "@/components/TaskSection";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-start pt-8 gap-8 min-h-screen min-w-screen">
        <h1 className='block font-extrabold text-4xl'>
          TO DO MANAGER
        </h1>
        <section className="flex gap-2">
          <RemoveButton/>
        </section>
        <TaskSection/>
    </main>
  )
}
