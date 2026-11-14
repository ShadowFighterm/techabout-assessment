import { defineComponent } from 'vue'
import { plans } from '../data/plans'
import { usePricing } from '../composables/usePricing'
import PricingCard from './PricingCard'

export default defineComponent({
  setup() {
    const pricing = usePricing()
    return () => (
      <section class="plans-section section" id="plans">
        <div class="container">
          <div class="section-heading centered"><p class="eyebrow">Pick your power</p><h2>VPS plans that scale with you.</h2><p>Start lean, grow with confidence. Every plan includes NVMe storage, a dedicated IPv4 address and our everyday support.</p></div>
          <div class="billing-bar">
            <div class="segmented" role="group" aria-label="Billing period">
              <button type="button" class={['period-button', { 'is-active': pricing.period.value === 'monthly' }]} aria-pressed={pricing.period.value === 'monthly'} onClick={() => { pricing.period.value = 'monthly' }}>Monthly</button>
              <button type="button" class={['period-button', { 'is-active': pricing.period.value === 'annual' }]} aria-pressed={pricing.period.value === 'annual'} onClick={() => { pricing.period.value = 'annual' }}>Annually <span class="save-chip">Save 16.7%</span></button>
            </div>
            <label class="currency-select">Currency <select id="currency" aria-label="Currency" value={pricing.currency.value} onChange={(event) => { pricing.currency.value = event.target.value }}><option value="PKR">PKR — Pakistani rupee</option><option value="USD">USD — US dollar</option><option value="GBP">GBP — British pound</option></select></label>
          </div>
          <p class="sr-only" aria-live="polite">{pricing.announcement.value}</p>
          <div class="cards-grid">{plans.map((plan, index) => <PricingCard key={plan.id} plan={plan} formatPrice={pricing.formatPrice} effectiveMonthly={pricing.effectiveMonthly} previousPlanName={plans[index - 1]?.name} period={pricing.period.value} />)}</div>
          <p class="pricing-note">All prices are exclusive of applicable taxes. Annual billing is charged as 10 months for 12.</p>
        </div>
      </section>
    )
  }
})
