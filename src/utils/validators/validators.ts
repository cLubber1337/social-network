export const requiredField = (value: string) => {
  console.log(value)
  if (value) return undefined
  return "Field is required"
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`
  return undefined
}
