export const arrayToXml = ({ array = [], depth = 1, prefix = '', suffix = '' }) => {
  if (array.length === 0) {
    return null;
  }

  const tag = array[0]
  const padding = new Array(depth).join(' ')
  const newPrefix = `${prefix}${padding}<${tag}>\n`
  const newSuffix = `${padding}</${tag}>\n${suffix}`
  if (array.length === 1) {
    return newPrefix + newSuffix
  }
  return arrayToXml({ array: array.slice(1, array.length), depth: depth + 1, prefix: newPrefix, suffix: newSuffix })
}