import { defineComponent } from 'vue'
import { faqs } from '../data/plans'

export default defineComponent(() => () => (
  <section class="faq-section section" id="faq"><div class="container faq-grid"><div class="section-heading">
    <p class="eyebrow">Good to know</p><h2>Questions, answered.</h2><p>Still deciding? Our local team is happy to help you match a plan to your project.</p><a class="text-link" href="mailto:sales@pkhosting.com">Talk to a VPS specialist <span aria-hidden="true">→</span></a>
  </div><div class="faq-list">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}<span aria-hidden="true"></span></summary><p>{answer}</p></details>)}</div></div></section>
))
