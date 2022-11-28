import connect from 'connect'
import colors from 'picocolors'

export async function createServer() {
  const server = connect()

  const startTime = Date.now()
  server.listen(3000, () => {
    console.log(
      colors.green('vite start success!'),
      `cost: ${Date.now() - startTime}ms`,
      `Server run at: ${colors.blue('http://localhost:3000')}`,
    )
  })
}

createServer()
