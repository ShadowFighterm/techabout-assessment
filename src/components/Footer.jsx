import { defineComponent } from 'vue'
import Brand from './Brand'

export default defineComponent(() => () => (
  <footer class="site-footer"><div class="container footer-grid"><div><Brand /><p class="footer-copy">Practical hosting for Pakistan's builders, businesses and big ideas.</p></div><div><h2>Payment options</h2><p class="payment-note">We keep the essentials local and familiar.</p><div class="payments"><span>Bank transfer</span><span>Visa / Mastercard</span><span>JazzCash</span><span>EasyPaisa</span></div></div><div class="footer-contact"><h2>Need a hand?</h2><a href="mailto:sales@pkhosting.com">sales@pkhosting.com</a><p>Mon–Fri, 9am–6pm PKT</p></div></div><div class="container footer-bottom"><span>© 2026 PKHosting. Invented VPS plans for assessment.</span><a href="#top">Back to top ↑</a></div></footer>
))
