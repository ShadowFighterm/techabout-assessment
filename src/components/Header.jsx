import { defineComponent } from 'vue'
import Brand from './Brand'

export default defineComponent(() => () => (
  <header class="site-header">
    <div class="container nav-wrap">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#plans">Plans</a><a href="#compare">Compare</a><a href="#faq">FAQ</a>
      </nav>
      <a class="button button-small button-outline" href="#plans">View plans <span aria-hidden="true">↗</span></a>
    </div>
  </header>
))
