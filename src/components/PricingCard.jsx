import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    plan: { type: Object, required: true },
    formatPrice: { type: Function, required: true },
    effectiveMonthly: { type: Function, required: true },
    previousPlanName: { type: String, default: '' },
    period: { type: String, required: true }
  },
  setup(props) {
    return () => (
      <article class={['plan-card', { popular: props.plan.popular }]} data-plan={props.plan.id}>
        {props.plan.popular && <div class="popular-ribbon">Most popular</div>}
        <div class="card-top"><div><p class="plan-kicker">{props.plan.number}</p><h3>{props.plan.name}</h3></div><span class="plan-icon">{props.plan.icon}</span></div>
        <p class="plan-description">{props.plan.description}</p>
        <div class="price"><span class="price-value">{props.formatPrice(props.effectiveMonthly(props.plan.monthlyPkr))}</span><span class="price-period">/ month</span></div>
        <p class="annual-total" hidden={props.period !== 'annual'}>
          {props.period === 'annual' && <><strong>{props.formatPrice(props.plan.monthlyPkr * 10)}</strong> billed annually <span>Save {props.formatPrice(props.plan.monthlyPkr * 2)}</span></>}
        </p>
        <a class={['button', props.plan.popular ? 'button-primary' : 'button-dark']} href={`mailto:sales@pkhosting.com?subject=${encodeURIComponent(props.plan.subject)}`}>{props.plan.cta} <span aria-hidden="true">→</span></a>
        <p class="includes">{props.previousPlanName ? `Everything in ${props.previousPlanName}, plus` : 'Everything you need to begin'}</p>
        <ul class="feature-list">{props.plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </article>
    )
  }
})
