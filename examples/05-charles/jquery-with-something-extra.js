import jquery from 'jquery'

global.jQuery = jquery

export const replaceHeadings = () => {
  console.log('volame')
  jquery(() => {
    console.log(jquery('h1').text('Mrdat'))
  })
}
