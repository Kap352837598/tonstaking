// Калькулятор для TON Stake
document.addEventListener('DOMContentLoaded', function() {
    const amountRange = document.getElementById('amount-range');
    const amountInput = document.getElementById('amount-input');
    const daysRange = document.getElementById('days-range');
    const daysInput = document.getElementById('days-input');
    const tariffName = document.getElementById('tariff-name');
    const rateValue = document.getElementById('rate-value');
    const profitValue = document.getElementById('profit-value');
    const totalValue = document.getElementById('total-value');

    function getPlan(amount) {
        if (amount >= 10 && amount < 900) return { name: 'Basic', rate: 0.04 };
        if (amount >= 900 && amount < 2200) return { name: 'Pro', rate: 0.07 };
        if (amount >= 2200) return { name: 'Premium', rate: 0.10 };
        return { name: 'Basic', rate: 0.04 };
    }

    function updateCalculator() {
        const amount = parseFloat(amountInput.value) || 10;
        const days = parseInt(daysInput.value) || 1;
        
        amountRange.value = amount;
        daysRange.value = days;
        
        const plan = getPlan(amount);
        const profit = amount * plan.rate * days;
        const total = amount + profit;
        
        tariffName.textContent = plan.name;
        rateValue.textContent = (plan.rate * 100) + '% / день';
        profitValue.textContent = '+' + profit.toFixed(2) + ' TON';
        totalValue.textContent = total.toFixed(2) + ' TON';
    }

    amountRange.addEventListener('input', function() {
        amountInput.value = this.value;
        updateCalculator();
    });

    amountInput.addEventListener('input', function() {
        let val = parseFloat(this.value) || 10;
        if (val < 10) val = 10;
        if (val > 10000) val = 10000;
        this.value = val;
        amountRange.value = val;
        updateCalculator();
    });

    daysRange.addEventListener('input', function() {
        daysInput.value = this.value;
        updateCalculator();
    });

    daysInput.addEventListener('input', function() {
        let val = parseInt(this.value) || 1;
        if (val < 1) val = 1;
        if (val > 365) val = 365;
        this.value = val;
        daysRange.value = val;
        updateCalculator();
    });

    updateCalculator();
});
