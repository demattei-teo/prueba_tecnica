import { BasicInfoUser } from '@/components/atoms/user/basic-info-user'
import { signUpSchema } from '@/eschema'
import { Public } from '@/eschema/api.schema'
import { z } from 'zod'

import { Line } from '@/components/atoms/line'
import { CommentInput } from '@/components/molecules/forms/comment-form'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { EllipsisVerticalIcon, PencilIcon, Trash2Icon } from 'lucide-react'
import { useState } from 'react'

interface PublicCardProps {
  public: Public
}

function PublicCard({ public: publication }: PublicCardProps) {
  const [showComments, setShowComments] = useState<'show comments' | 'hide comments'>('hide comments')
  const publicationUser: z.infer<typeof signUpSchema> = {
    username: publication.userName,
    email: publication.userEmail,
    avatar: publication.userAvatar,
    password: '123456',
    verify: 'not verify'
  }

  return (
    <article className='grid xl:min-w-[450px] p-5 gap-4 bg-white rounded-lg'>
      <div className='flex gap-2 justify-between items-center'>
        <BasicInfoUser user={publicationUser} variant='complete' />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='ghost' className='w-10 h-10' size='icon'>
              <EllipsisVerticalIcon className='w-6 h-6' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-full flex flex-col gap-3 p-4 rounded-md bg-white'>
            <Button variant='ghost' className='w-full'>
              Editar Publicación <PencilIcon className='w-6 h-6' />
            </Button>
            <Button variant='ghost' className='w-full'>
              Eliminar Publicación <Trash2Icon className='w-6 h-6' />
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <p>{publication.question}</p>
      </div>
      <Line />
      <CommentInput publication={publication} />
      <div className='flex gap-2 justify-end items-center'>
        {showComments === 'hide comments' && (
          <Button
            disabled={publication.comments.length === 0}
            onClick={() => setShowComments('show comments')}
            variant='ghost'
            className='text-sm text-gray-500'
          >
            {publication.comments.length} Comentarios
          </Button>
        )}

        {showComments === 'show comments' && (
          <Button onClick={() => setShowComments('hide comments')} variant='ghost' className='text-sm text-gray-500'>
            Ocultar Comentarios
          </Button>
        )}

        <span>|</span>
        <Button variant='ghost' className='text-sm text-gray-500'>
          35 veces compartido
        </Button>
      </div>
      {showComments === 'show comments' &&
        publication.comments.map((comment, index) => {
          const user: z.infer<typeof signUpSchema> = {
            email: comment.userEmail,
            password: '123456',
            username: comment.userName,
            verify: 'not verify',
            avatar: comment.userAvatar
          }

          return (
            <div key={index} className='grid p-5 gap-4 bg-white rounded-lg'>
              <div className='flex gap-2 justify-between items-center'>
                <BasicInfoUser user={user} variant='complete' />
              </div>
              <div>
                <p>{comment.comment}</p>
              </div>
            </div>
          )
        })}
    </article>
  )
}

export { PublicCard }
