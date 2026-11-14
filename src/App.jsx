import { defineComponent } from 'vue'
import Header from './components/Header'
import Hero from './components/Hero'
import PricingSection from './components/PricingSection'
import ComparisonTable from './components/ComparisonTable'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

export default defineComponent(() => () => <>
  <Header />
  <main id="top"><Hero /><PricingSection /><ComparisonTable /><FaqSection /></main>
  <Footer />
</>)
