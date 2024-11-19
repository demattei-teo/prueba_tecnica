import { BasicInfoUser } from '@/components/'
import { signUpSchema } from '@/eschema'
import { Public } from '@/eschema/api.schema'
import { z } from 'zod'

import { Button, CommentInput, Line } from '@/components'
import { useState } from 'react'

interface PublicCardProps {
  /**
   * The publication to be displayed.
   * @param {Public} public - The publication to be displayed.
   */
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
      <div className='flex gap-2 justify-start items-center'>
        <BasicInfoUser user={publicationUser} variant='complete' />
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-sm font-semibold text-gray-500'>Pregunta relacionada con: {publication.name}</span>
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
          <Button
            onClick={() => setShowComments('hide comments')}
            variant='ghost'
            className='text-xs md:text-sm text-gray-500'
          >
            Ocultar Comentarios
          </Button>
        )}

        <span className='hidden md:block'>|</span>
        <Button variant='ghost' className='text-xs hidden md:block md:text-sm text-gray-500'>
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
