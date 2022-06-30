import type { AuthProps, UserDataProps } from './types'
import { Input, Button, Checkbox } from '../../components'
import { useState, useCallback, type FormEventHandler, FormHTMLAttributes } from 'react'

const App: React.FC<AuthProps> = ({
  title,
  description,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [userData, setUserData] = useState<UserDataProps | null>(null)

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
      event.preventDefault()

      fetch('/login', {
        body: JSON.stringify({
          email,
          password,
        }),

        method: 'POST',
      })
        .then((res) => res.json())
        .then(setUserData)
    }, [email, password],
  )

  return (
    <div className="min-h-full m-auto h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {userData && (
        <div className="max-w-md w-full space-y-8">
          {Object.entries(userData).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-1">
              <p className="text-xs text-gray-600">{key}</p>

              <p className="font-medium text-indigo-600">{value}</p>
            </div>
          ))}
        </div>
      )}
      
      {! userData && (
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">{description}</a>
            </p>
          </div>
    
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" value="true" />
    
            <div className="flex flex-col gap-6">
              <Input 
                id="email-address" 
                name="email" 
                type="email" 
                value={email}
                label="Email address"
                required
                onChange={({ target }) => setEmail(target.value)}
                placeholder="Email address"
                autoComplete="email" 
              />
    
              <Input 
                id="password" 
                name="password" 
                type="password" 
                value={password}
                label="Password"
                required
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Password"
                autoComplete="current-password" 
              />
            </div>
    
            <div className="flex items-center justify-between">
              <Checkbox 
                id="remember-me" 
                name="remember-me"
                label="Remember me"
              />
    
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
              </div>
            </div>
    
            <Button type="submit">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
    
              Sign in
            </Button>
          </form>
        </div>
      )}
    </div>
  )
};

export default App;