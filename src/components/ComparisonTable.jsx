import { defineComponent } from 'vue'
import { comparisonRows, plans } from '../data/plans'

export default defineComponent(() => () => (
  <section class="compare-section section" id="compare">
    <div class="container">
      <div class="section-heading"><p class="eyebrow">At a glance</p><h2>Compare every detail.</h2><p>Transparent specs, so you can choose based on your workload—not guesswork.</p></div>
      <div class="table-wrap"><table><caption class="sr-only">Comparison of VPS hosting plans</caption><thead><tr><th scope="col">Specification</th>{plans.map((plan) => <th scope="col" key={plan.id}>{plan.name}{plan.popular && <span class="table-popular">Popular</span>}</th>)}</tr></thead><tbody>{comparisonRows.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, index) => <td key={`${row[0]}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div>
    </div>
  </section>
))
