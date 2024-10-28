
const balanceCtx = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(balanceCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Low Balance',
                data: [10, 15, 12, 18, 20],
                backgroundColor: 'rgba(0, 183, 255, 0.6)', // Light blue color
            },
            {
                label: 'Medium Balance',
                data: [10, 8, 10, 9, 10],
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black
            },
            {
                label: 'High Balance',
                data: [10, 5, 8, 5, 5],
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Light black with dashed pattern
                borderWidth: 1,
                borderColor: '#000',
                borderDash: [5, 5],
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Balance Statistics'
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
});

// Money Statistics - Line Chart
const moneyCtx = document.getElementById('moneyChart').getContext('2d');
const moneyChart = new Chart(moneyCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Expenses',
                data: [500, 600, 300, 400, 650, 550, 700],
                borderColor: 'rgba(0, 0, 0, 0.8)', // Black line
                fill: false,
                tension: 0.4, // Curved line
            },
            {
                label: 'Income',
                data: [200, 250, 450, 300, 500, 400, 600],
                borderColor: 'rgba(0, 183, 255, 0.8)', // Blue line
                fill: false,
                tension: 0.4, // Curved line
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Money Statistics'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});