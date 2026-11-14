import { createApp, defineComponent } from 'vue'
import { plans, comparisonRows, faqs } from './data/plans.js'
import { usePricing } from './composables/usePricing.js'
import './css/main.css'

const Brand = () => <a class="brand" href="#top" aria-label="PKHosting VPS home"><span class="brand-mark">PK</span><span>PKHosting<span class="brand-dot">.</span></span></a>

const Header = defineComponent(() => () => <header class="site-header"><div class="container nav-wrap">
  <Brand /><nav aria-label="Main navigation"><a href="#plans">Plans</a><a href="#compare">Compare</a><a href="#faq">FAQ</a></nav>
  <a class="button button-small button-outline" href="#plans">View plans <span aria-hidden="true">↗</span></a>
</div></header>)

const Hero = defineComponent(() => () => <section class="hero"><div class="container hero-grid"><div>
  <p class="eyebrow"><span class="eyebrow-dot"></span> VPS hosting, made practical</p>
  <h1>More control.<br /><em>Less complexity.</em></h1>
  <p class="hero-copy">Reliable virtual servers with the performance your next project needs and a local team when you need a hand.</p>
  <div class="hero-actions"><a class="button button-primary" href="#plans">Choose your VPS <span aria-hidden="true">→</span></a><a class="text-link" href="#compare">See what's included <span aria-hidden="true">↓</span></a></div>
  <div class="trust-row"><span><strong>99.9%</strong> network uptime target</span><span><strong>24/7</strong> server monitoring</span><span><strong>PK</strong> local support</span></div>
</div><div class="hero-art" aria-label="Illustration of a protected server" role="img">
  <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="server">
    <div class="server-top"><span class="server-logo">PK</span><span class="server-label">VPS NODE</span><span class="status"><i></i> ONLINE</span></div><div class="server-lines"><span></span><span></span><span></span></div><div class="server-bottom"><span>CPU</span><b>64%</b><span>RAM</span><b>42%</b><span>SSD</span><b>28%</b></div>
  </div><div class="shield" aria-hidden="true">✓</div><div class="art-caption"><span class="pulse"></span> Infrastructure you can count on</div>
</div></div></section>)

const PricingCard = defineComponent({
  props: { plan: { type: Object, required: true }, formatPrice: Function, effectiveMonthly: Function, period: String },
  setup(props) {
    return () => <article class={['plan-card', { popular: props.plan.popular }]} data-plan={props.plan.id}>
      {props.plan.popular && <div class="popular-ribbon">Most popular</div>}
      <div class="card-top"><div><p class="plan-kicker">{props.plan.number}</p><h3>{props.plan.name}</h3></div><span class="plan-icon">{props.plan.icon}</span></div>
      <p class="plan-description">{props.plan.description}</p><div class="price"><span class="price-value">{props.formatPrice(props.effectiveMonthly(props.plan.monthlyPkr))}</span><span class="price-period">/ month</span></div>
      <p class="annual-total" hidden={props.period !== 'annual'}>{props.period === 'annual' && <><strong>{props.formatPrice(props.plan.monthlyPkr * 10)}</strong> billed annually <span>Save {props.formatPrice(props.plan.monthlyPkr * 2)}</span></>}</p>
      <a class={['button', props.plan.popular ? 'button-primary' : 'button-dark']} href={`mailto:sales@pkhosting.com?subject=${encodeURIComponent(props.plan.subject)}`}>{props.plan.cta} <span aria-hidden="true">→</span></a>
      <p class="includes">{props.plan.id === 'starter' ? 'Everything you need to begin' : `Everything in ${plans[plans.findIndex((plan) => plan.id === props.plan.id) - 1].name}, plus`}</p>
      <ul class="feature-list">{props.plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    </article>
  }
})

const PricingSection = defineComponent({
  setup() {
    const pricing = usePricing()
    return () => <section class="plans-section section" id="plans"><div class="container">
      <div class="section-heading centered"><p class="eyebrow">Pick your power</p><h2>VPS plans that scale with you.</h2><p>Start lean, grow with confidence. Every plan includes NVMe storage, a dedicated IPv4 address and our everyday support.</p></div>
      <div class="billing-bar"><div class="segmented" role="group" aria-label="Billing period">
        <button type="button" class={['period-button', { 'is-active': pricing.period.value === 'monthly' }]} aria-pressed={pricing.period.value === 'monthly'} onClick={() => { pricing.period.value = 'monthly' }}>Monthly</button>
        <button type="button" class={['period-button', { 'is-active': pricing.period.value === 'annual' }]} aria-pressed={pricing.period.value === 'annual'} onClick={() => { pricing.period.value = 'annual' }}>Annually <span class="save-chip">Save 16.7%</span></button>
      </div><label class="currency-select">Currency <select id="currency" aria-label="Currency" value={pricing.currency.value} onChange={(event) => { pricing.currency.value = event.target.value }}><option value="PKR">PKR — Pakistani rupee</option><option value="USD">USD — US dollar</option><option value="GBP">GBP — British pound</option></select></label></div>
      <p class="sr-only" aria-live="polite">{pricing.announcement.value}</p><div class="cards-grid">{plans.map((plan) => <PricingCard key={plan.id} plan={plan} formatPrice={pricing.formatPrice} effectiveMonthly={pricing.effectiveMonthly} period={pricing.period.value} />)}</div>
      <p class="pricing-note">All prices are exclusive of applicable taxes. Annual billing is charged as 10 months for 12.</p>
    </div></section>
  }
})

const ComparisonTable = defineComponent(() => () => <section class="compare-section section" id="compare"><div class="container">
  <div class="section-heading"><p class="eyebrow">At a glance</p><h2>Compare every detail.</h2><p>Transparent specs, so you can choose based on your workload—not guesswork.</p></div>
  <div class="table-wrap"><table><caption class="sr-only">Comparison of VPS hosting plans</caption><thead><tr><th scope="col">Specification</th>{plans.map((plan) => <th scope="col" key={plan.id}>{plan.name}{plan.popular && <span class="table-popular">Popular</span>}</th>)}</tr></thead><tbody>{comparisonRows.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, index) => <td key={`${row[0]}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div>
</div></section>)

const FaqSection = defineComponent(() => () => <section class="faq-section section" id="faq"><div class="container faq-grid"><div class="section-heading">
  <p class="eyebrow">Good to know</p><h2>Questions, answered.</h2><p>Still deciding? Our local team is happy to help you match a plan to your project.</p><a class="text-link" href="mailto:sales@pkhosting.com">Talk to a VPS specialist <span aria-hidden="true">→</span></a>
</div><div class="faq-list">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}<span aria-hidden="true"></span></summary><p>{answer}</p></details>)}</div></div></section>)

const Footer = defineComponent(() => () => <footer class="site-footer"><div class="container footer-grid"><div><Brand /><p class="footer-copy">Practical hosting for Pakistan's builders, businesses and big ideas.</p></div><div><h2>Payment options</h2><p class="payment-note">We keep the essentials local and familiar.</p><div class="payments"><span>Bank transfer</span><span>Visa / Mastercard</span><span>JazzCash</span><span>EasyPaisa</span></div></div><div class="footer-contact"><h2>Need a hand?</h2><a href="mailto:sales@pkhosting.com">sales@pkhosting.com</a><p>Mon–Fri, 9am–6pm PKT</p></div></div><div class="container footer-bottom"><span>© 2026 PKHosting. Invented VPS plans for assessment.</span><a href="#top">Back to top ↑</a></div></footer>)

const App = defineComponent(() => () => <><Header /><main id="top"><Hero /><PricingSection /><ComparisonTable /><FaqSection /></main><Footer /></>)

createApp(App).mount('#app')
