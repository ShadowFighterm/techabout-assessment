import { defineComponent } from 'vue'

export default defineComponent(() => () => (
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#top" aria-label="PKHosting VPS home"><span class="brand-mark">PK</span><span>PKHosting<span class="brand-dot">.</span></span></a>
      <nav aria-label="Main navigation">
        <a href="#plans">Plans</a><a href="#compare">Compare</a><a href="#faq">FAQ</a>
      </nav>
      <a class="button button-small button-outline" href="#plans">View plans <span aria-hidden="true">↗</span></a>
    </div>
  </header>
))
