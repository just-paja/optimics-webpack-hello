import leftPad from 'left-pad'

const padding = 32

export function printMessage (message) {
  console.log(leftPad('=============', padding))
  console.log(leftPad(message, padding))
  console.log(leftPad('=============', padding))
}
