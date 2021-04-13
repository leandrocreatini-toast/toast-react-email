export const formatCurrency = (num, digits = 2) => {
  if (num === 0) return 'FREE'
  if (!num) return ''
  const convertedToString = num.toString().replace(/,/g, '')
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits
  }).format(convertedToString)
  return formatted
}
