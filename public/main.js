(function () {
  'use strict';

  var rates = { PKR: 1, USD: 278.50, GBP: 355.00 };
  var currencyNames = { PKR: 'Rs', USD: '$', GBP: '£' };
  var period = localStorage.getItem('pkhosting-period') || 'monthly';
  var currency = localStorage.getItem('pkhosting-currency') || 'PKR';
  var cards = document.querySelectorAll('.plan-card');
  var currencySelect = document.querySelector('#currency');
  var announcement = document.querySelector('#price-announcement');

  if (!rates[currency]) currency = 'PKR';
  if (period !== 'annual' && period !== 'monthly') period = 'monthly';
  currencySelect.value = currency;

  function formatPrice(pkr) {
    var value = pkr / rates[currency];
    return currency === 'PKR'
      ? currencyNames[currency] + ' ' + Math.round(value).toLocaleString('en-PK')
      : currencyNames[currency] + ' ' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function renderPrices() {
    cards.forEach(function (card) {
      var monthly = Number(card.dataset.monthlyPkr);
      var effective = period === 'annual' ? (monthly * 10) / 12 : monthly;
      card.querySelector('.price-value').textContent = formatPrice(effective);
      card.querySelector('.price-period').textContent = '/ month';
      var annual = card.querySelector('.annual-total');
      if (period === 'annual') {
        annual.hidden = false;
        annual.innerHTML = '<strong>' + formatPrice(monthly * 10) + '</strong> billed annually <span>Save ' + formatPrice(monthly * 2) + '</span>';
      } else {
        annual.hidden = true;
        annual.textContent = '';
      }
    });
    document.querySelectorAll('.period-button').forEach(function (button) {
      var active = button.dataset.period === period;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    announcement.textContent = (period === 'annual' ? 'Annual billing selected. ' : 'Monthly billing selected. ') + 'Prices shown in ' + currency + '.';
    localStorage.setItem('pkhosting-period', period);
    localStorage.setItem('pkhosting-currency', currency);
  }

  document.querySelectorAll('.period-button').forEach(function (button) {
    button.addEventListener('click', function () { period = button.dataset.period; renderPrices(); });
  });
  currencySelect.addEventListener('change', function () { currency = currencySelect.value; renderPrices(); });
  renderPrices();
}());
