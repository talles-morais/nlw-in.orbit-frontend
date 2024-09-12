import logo from '../assets/logo-in-orbit.svg'
import letStart from '../assets/lets-start-art.svg'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from '@radix-ui/react-dialog'

export default function EmptyGoals() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <img src={logo} alt="Logotipo do site, com os escritos in orbit" />
      <img src={letStart} alt="Arte ilustrativa de uma menina e um foguete" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
