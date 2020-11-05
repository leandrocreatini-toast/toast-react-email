export const formatCurrency = (num) => {
  if (num === 0) return 'FREE'
  if (!num) return ''
  const convertedToString = num.toString().replace(/,/g, '')
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(convertedToString)
  return formatted
}
