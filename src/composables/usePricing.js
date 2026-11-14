import { computed, ref, watch } from 'vue'

export const rates = { PKR: 1, USD: 278.50, GBP: 355.00 }
const symbols = { PKR: 'Rs', USD: '$', GBP: '£' }

function stored(key, fallback) {
  try { return localStorage.getItem(key) || fallback } catch { return fallback }
}

export function usePricing() {
  const period = ref(stored('pkhosting-period', 'monthly'))
  const currency = ref(stored('pkhosting-currency', 'PKR'))
  if (period.value !== 'monthly' && period.value !== 'annual') period.value = 'monthly'
  if (currency.value !== 'PKR' && currency.value !== 'USD' && currency.value !== 'GBP') currency.value = 'PKR'
  const formatPrice = (pkr) => {
    const value = pkr / rates[currency.value]
    return currency.value === 'PKR'
      ? `${symbols[currency.value]} ${Math.round(value).toLocaleString('en-PK')}`
      : `${symbols[currency.value]} ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }
  const effectiveMonthly = (pkr) => period.value === 'annual' ? (pkr * 10) / 12 : pkr
  const announcement = computed(() => `${period.value === 'annual' ? 'Annual' : 'Monthly'} billing selected. Prices shown in ${currency.value}.`)

  watch([period, currency], ([nextPeriod, nextCurrency]) => {
    try {
      localStorage.setItem('pkhosting-period', nextPeriod)
      localStorage.setItem('pkhosting-currency', nextCurrency)
    } catch { /* Continue without persistence when storage is unavailable. */ }
  })

  return { period, currency, formatPrice, effectiveMonthly, announcement }
}
