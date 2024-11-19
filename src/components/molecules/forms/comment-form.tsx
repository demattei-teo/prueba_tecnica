import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { commentSchema } from '@/eschema'
import { Public } from '@/eschema/api.schema'
import { usePublicationProvider } from '@/hook/hook-publication'
import { useUserProvider } from '@/hook/hook-user'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, SendIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { BasicInfoUser } from '../../atoms/user/basic-info-user'

interface CommentInputProps {
  publication: Public
}

function CommentInput({ publication }: CommentInputProps) {
  const { setpublications, publications, setReload, reload } = usePublicationProvider()

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      newComment: ''
    }
  })
  const { user } = useUserProvider()

  function onSubmit(values: z.infer<typeof commentSchema>) {
    const nuevasPublicaciones: Public[] = publications?.map((pub) => {
      if (pub.id === publication.id) {
        return {
          ...pub,
          comments: [
            ...pub.comments,
            {
              id: pub.comments.length + 1,
              comment: values.newComment,
              userName: user?.username ?? 'Anonymous',
              userAvatar: user?.avatar ?? '',
              userEmail: user?.email ?? '',
              CommentcreatedAt: new Date().toISOString()
            }
          ]
        }
      }
      return pub
    })

    setpublications(nuevasPublicaciones)
    setReload(!reload)
    form.reset()
  }

  return (
    <div className='flex gap-2 items-center justify-between'>
      <BasicInfoUser user={user} variant='only logo' />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2 items-center justify-between w-full'>
          <FormField
            control={form.control}
            name='newComment'
            render={({ field }) => (
              <FormItem className='col-span-full w-full'>
                <FormControl>
                  <Input placeholder='Escribe tu comentario...' className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            className='w-10 h-10'
            variant='default'
            type='submit'
            disabled={form.formState.isSubmitting || form.watch('newComment').length === 0}
          >
            {form.formState.isSubmitting ? (
              <Loader2Icon size={20} className='animate-spin' />
            ) : (
              <SendIcon className='w-6 h-6' />
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export { CommentInput }
