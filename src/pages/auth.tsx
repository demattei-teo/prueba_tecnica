import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/'

function Auth() {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='account'>Iniciar sesión</TabsTrigger>
          <TabsTrigger value='password'>Registrarse</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>Make changes to your account here.</TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </main>
  )
}

export { Auth }
