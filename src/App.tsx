import { useState } from 'react';
import './styles/global.css';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const createUserFormSchema = z.object({
  avatar: z.instanceof(FileList),
  name: z.string()
    .min(1, 'Nome é obrigatório')
    .transform(name => {
      return name.trim().split(" ").map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z
    .string().min(1, { message: 'E-mail é obrigatório' })  
    .email('Formato de email inválido!')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('@email.com.br')
    }, 'O email precisa terminal com @email.com.br'),
  password: z
    .string()
    .min(6, "Senha precisa ter 6 caracteres"),
  techs: z.array(z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    knowledge: z.coerce.number().min(1).max(100)
  })).min(2, 'Pelo menos 2 tecnologias')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

function App() {
  const [ output, setOutput ] = useState("");
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    control
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs'
  });

  function addNewTech() {
    append({title: '', knowledge: 0})
  }

  function createUser(data: CreateUserFormData) {
    setOutput(JSON.stringify(data, null, 2));    
  }

  return (
    <main className='h-screen flex flex-col bg-zinc-950 text-zinc-300 flex items-center justify-center gap-4'>
      <form 
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-4'
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Avatar</label>
          <input 
            type="file"            
            className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-900'
            {...register('avatar')}
          />
          { errors.avatar && <span>{errors.avatar.message}</span> }
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome</label>
          <input 
            type="text"            
            className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-900'
            {...register('name')}
          />
          { errors.name && <span>{errors.name.message}</span> }
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email"            
            className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-900'
            {...register('email')}
          />
          { errors.email && <span>{errors.email.message}</span> }
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha</label>
          <input 
            type="password"             
            className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-900'
            {...register('password')}
          />
          { errors.password && <span>{errors.password.message}</span> }
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className='flex items-center justify-between'>
            Tecnologias

            <button
              type='button'
              className='text-emerald-500 text-sm'
              onClick={addNewTech}
            >
              Adicionar
            </button>
          </label>

          {fields.map((field, index) => {
            return (              
              <div className="flex gap-2" key={field.id}>
                <div className='flex-1 flex flex-col gap-1'>
                  <input 
                    type="text"
                    className='flex-1 border border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-900'
                    {...register(`techs.${index}.title`)}
                  />
                    
                  { errors.techs?.[index]?.title && <span>{errors.techs?.[index]?.title?.message}</span> }
                </div>
                    
                <div className='flex flex-col gap-1'>
                  <input 
                    type="number"
                    className='w-16 border border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-900'
                    {...register(`techs.${index}.knowledge`)}
                  />

                  { errors.techs?.[index]?.knowledge && <span>{errors.techs?.[index]?.knowledge?.message}</span> }
                </div>
              </div>              
            )
          })}
          { errors.techs && <span className='text-red-500 text-sm'>{errors.techs.message}</span> }
        </div>
          
        <button 
          type="submit"
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
        >
          Salvar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  );
}

export default App;
