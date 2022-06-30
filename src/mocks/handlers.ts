import { rest } from 'msw'

type Request = { 
  email: string;
  password: string;
}

export const handlers = [
  rest.get('/user', (_, res, ctx) => {
    return res(
      ctx.json({
        lastName: 'Maverick',
        firstName: 'John',
      }),
    )
  }),

  rest.post('/login', (req, res, ctx) => {
    const body = req.body;

    const { 
      email
     } = JSON.parse(body as any) as Request;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        email,
        lastName: 'Maverick',
        firstName: 'John',
      }),
    )
  }),
]