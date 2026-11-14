import { defineComponent } from 'vue'

export default defineComponent(() => () => (
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow"><span class="eyebrow-dot"></span> VPS hosting, made practical</p>
        <h1>More control.<br /><em>Less complexity.</em></h1>
        <p class="hero-copy">Reliable virtual servers with the performance your next project needs and a local team when you need a hand.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#plans">Choose your VPS <span aria-hidden="true">→</span></a>
          <a class="text-link" href="#compare">See what's included <span aria-hidden="true">↓</span></a>
        </div>
        <div class="trust-row">
          <span><strong>99.9%</strong> network uptime target</span>
          <span><strong>24/7</strong> server monitoring</span>
          <span><strong>PK</strong> local support</span>
        </div>
      </div>
      <div class="hero-art" aria-label="Illustration of a protected server" role="img">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="server">
          <div class="server-top"><span class="server-logo">PK</span><span class="server-label">VPS NODE</span><span class="status"><i></i> ONLINE</span></div>
          <div class="server-lines"><span></span><span></span><span></span></div>
          <div class="server-bottom"><span>CPU</span><b>64%</b><span>RAM</span><b>42%</b><span>SSD</span><b>28%</b></div>
        </div>
        <div class="shield" aria-hidden="true">✓</div>
        <div class="art-caption"><span class="pulse"></span> Infrastructure you can count on</div>
      </div>
    </div>
  </section>
))
