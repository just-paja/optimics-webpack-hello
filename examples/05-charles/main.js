import { replaceHeadings } from './jquery-with-something-extra'

replaceHeadings()

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./jquery-with-something-extra', () => {
    console.log('replace')
    replaceHeadings()
  })
}
