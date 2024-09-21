// console.log(Math.ceil(11 / 3));
// console.log(Math.ceil(9 / 3));
// console.log(Math.ceil(7 / 3));
// console.log(Math.ceil(5 / 3));

< !DOCTYPE html >
    <html lang="bg">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Диамант</title>
                    <style>
                        pre {
                            font - family: monospace;
        }
                    </style>
                </head>
                <body>
                    <h1>Диамант с размер n</h1>
                    <label for="size">Въведете размер n (1 ≤ n ≤ 100):</label>
                    <input type="number" id="size" min="1" max="100">
                        <button onclick="drawDiamond()">Нарисувай диаманта</button>
                        <pre id="diamond"></pre>

                        <script>
                            function drawDiamond() {
            const n = parseInt(document.getElementById('size').value);
                            if (isNaN(n) || n < 1 || n > 100) {
                                alert('Моля, въведете валидно число между 1 и 100.');
                            return;
            }

                            const diamond = generateDiamond(n);
                            document.getElementById('diamond').textContent = diamond;
        }

                            function generateDiamond(n) {
                                let diamond = '';

                            // Горе диамант
                            for (let i = 0; i < n; i++) {
                                diamond += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
            }

            // Долу диамант
            for (let i = n - 2; i >= 0; i--) {
                                diamond += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
            }

                            return diamond;
        }
                        </script>
                </body>
            </html>