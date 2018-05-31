export const cp = (obj) => {
  let res = {}
  for (let key in obj) {
    res[key] = `&${key}=${obj[key]}`
  }
  return res
}