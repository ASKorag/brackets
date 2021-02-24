module.exports = check = (str, bracketsConfig) => {
  let newStr = str

  const escapedChars = '[()|'

  let isIdentity

  do {
    isIdentity = false

    for (paar of bracketsConfig) {
      const stringForRegExp = paar
        .map(char =>
          escapedChars.includes(char) === true ? `\\${char}` : char
        )
        .join('')

      const regExp = new RegExp(stringForRegExp, 'g')

      if (regExp.test(newStr)) {
        isIdentity = true
        newStr = newStr.replace(regExp, '')
      }
    }
  } while (isIdentity)

  return newStr.length === 0
}
