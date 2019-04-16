# [Webpack](https://webpack.js.org/)

Povídání a ukázky

---

## Ale nejdřív [npm](https://www.npmjs.com/)

[Nacho printing machine](https://github.com/npm/npm-expansions/blob/master/expansions.txt)

---

## Evoluce

* concat
* Makefile
* RequireJS (AMD)
* Browserify

---

## Je to bundler

Spojuje moduly do optimalizovaných balíků

*Příklad 1*

----

### Modul může být cokoliv

----

### Balík může vypadat jakkoliv

---

## Moduly

----

### [CommonJS moduly](https://nodejs.org/docs/latest/api/modules.html)

```javascript
const express = require('express')
const port = process.env.NODE_PORT

module.exports = function() {
  const app = express()
  app.server = app.listen(port, function() {
    console.log('Server started')
  })
  return app
}

module.exports.port = port
```

----

### ECMA Script moduly

```javascript
import express from 'express'

export const port = process.env.NODE_PORT

export default function() {
  const app = express()
  app.server = app.listen(port, function() {
    console.log('Server started')
  })
  return app
}
```

*Příklad 2*

----

### Další typy modulů

* JSON
* CSS / SASS / LESS
* File
* Cokoliv vás napadne

----

### Loadery

Preprocessing modulů

*Příklad 3*

---

## Kompatibilita

* Oficiálně IE8±
* Neřeší obsah

----

### Transpilace

Jak udržet [čistý kód](https://www.martinus.cz/?uItem=73286) při zachování kompatibility?

* [babel](https://babeljs.io/) na ECMA script
* [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) na kompatibilitu s cílovým prostředím
* [Reason](https://reasonml.github.io/), pokud myslíte daleko do budoucnosti
* [TypeScript](https://www.typescriptlang.org/), uvádím i špatné příklady

----

### Metody transpilace

* transformace, viz [Function*](https://babeljs.io/docs/en/babel-plugin-transform-regenerator)
* polyfill, viz [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Polyfill)

---

## Dev server

---

## Treeshaking
