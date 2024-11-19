import { SignInForm, SignUpForm, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/'
import { useUserProvider } from '@/hook/user'
import { useEffect, useState } from 'react'

enum Tab {
  SignIn = 'sign in',
  SignUp = 'sign up'
}

function Auth() {
  const { user } = useUserProvider()
  const [changetab, setChangetab] = useState<Tab.SignIn | Tab.SignUp>(Tab.SignIn)

  useEffect(() => {
    setChangetab(user?.verify === 'not verify' ? Tab.SignIn : Tab.SignUp)
  }, [user])

  return (
    <main className='w-full flex items-center justify-center h-screen'>
      <Tabs
        value={changetab}
        onValueChange={(value) => setChangetab(value as Tab.SignIn | Tab.SignUp)}
        defaultValue={changetab}
        className='max-w-[450px] rounded-md shadow-2xl p-5 pt-3 w-full grid items-center justify-items-center'
      >
        <TabsList className='self-center'>
          <TabsTrigger value={Tab.SignIn}>Iniciar sesión</TabsTrigger>
          <TabsTrigger value={Tab.SignUp}>Registrarse</TabsTrigger>
        </TabsList>
        <TabsContent className='w-full rounded-md' value={Tab.SignIn}>
          <SignInForm />
        </TabsContent>
        <TabsContent className='w-full rounded-md' value={Tab.SignUp}>
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export { Auth }
