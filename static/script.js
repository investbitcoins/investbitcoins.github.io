document.addEventListener('DOMContentLoaded', function() {
    // Get the theme switcher button
    const themeSwitcher = document.getElementById('themeSwitcher');

    // Add click event listener
    themeSwitcher.addEventListener('click', function() {
      // Get the body element
      const body = document.body;

      // Toggle the 'light' class
      body.classList.toggle('light');

      // Toggle the 'dark' class
      body.classList.toggle('dark');
    });

    // Detect the user's preferred color scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply the corresponding theme based on the user's preferred color scheme
    if (prefersDarkScheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
  });

// Calculate Systematic Investment Plan (SIP)
function calculateSIP() {
  const amountInput = document.getElementById('sip-amount');
  const amount = parseInt(amountInput.value);
  const resultDiv = document.getElementById('sip-result');

  if (amount > 0 && amount <= 5000) {
    const interestRate = amount <= 2500 ? 250 : 500;
    const years = [5, 10];
    let resultHTML = '';

    years.forEach(function(year) {
      const returns = amount + (amount * (interestRate / 100) * year);
      resultHTML += `<p>${year} Year Plan: $${returns.toFixed(2)}</p>`;
    });

    resultDiv.innerHTML = resultHTML;
  } else {
    resultDiv.innerHTML = '<p>Please enter a valid amount (Max $5000).</p>';
  }
}

// Calculate Prepaid Investment
function calculatePrepaid() {
  const amountInput = document.getElementById('prepaid-amount');
  const amount = parseInt(amountInput.value);
  const resultDiv = document.getElementById('prepaid-result');

  if (amount >= 100000) {
    const interestRate = 1000;
    const returns = amount + (amount * (interestRate / 100));
    resultDiv.innerHTML = `<p>1 Week Plan: $${returns.toFixed(2)}</p>`;
  } else {
    resultDiv.innerHTML = '<p>Please enter a valid amount (Min $100,000).</p>';
  }
}

// Calculate Custom Investment
function calculateCustom() {
  const amountInput = document.getElementById('custom-amount');
  const amount = parseInt(amountInput.value);
  const resultDiv = document.getElementById('custom-result');

  if (amount >= 1 && amount <= 10000) {
    let interestRate;
    let months;

    if (amount < 500) {
      interestRate = [250];
      months = [1, 3];
    } else if (amount >= 500 && amount <= 2500) {
      interestRate = [500];
      months = [3, 6];
    } else {
      interestRate = [1000];
      months = [12];
    }

    let resultHTML = '';

    months.forEach(function(month) {
      interestRate.forEach(function(rate) {
        const returns = amount + (amount * (rate / 100) * (month / 12));
        resultHTML += `<p>${month} Month Plan (${rate}%): $${returns.toFixed(2)}</p>`;
      });
    });

    resultDiv.innerHTML = resultHTML;
  } else {
    resultDiv.innerHTML = '<p>Please enter a valid amount ($1 - $10,000).</p>';
  }
}