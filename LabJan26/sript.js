function calculateLongestIncreasingStreakInfo(numbers) {
    if (numbers.length === 0) {
        return { length: 0, sum: 0 };
    }

    let currentLength = 1, currentSum = numbers[0];
    let maxLength = 1, maxSum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1] + 1) {
            currentLength++;
            currentSum += numbers[i];
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxSum = currentSum;
            } else if (currentLength === maxLength) {
                maxSum = Math.max(maxSum, currentSum);
            }
            currentLength = 1;
            currentSum = numbers[i];
        }
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxSum = currentSum;
    } else if (currentLength === maxLength) {
        maxSum = Math.max(maxSum, currentSum);
    }

    return { length: maxLength, sum: maxSum };
}

// Test Cases
const test1 = [1, 2, 3, 6, 9, 34, 2, 6];
const test2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
const test3 = [100, 101, 102, 3, 4, 5, 6, 9];

// Display Results
document.addEventListener('DOMContentLoaded', () => {
    const result1 = calculateLongestIncreasingStreakInfo(test1);
    const result2 = calculateLongestIncreasingStreakInfo(test2);
    const result3 = calculateLongestIncreasingStreakInfo(test3);

    document.getElementById('results').innerHTML = `
        <p>In [${test1}], longest increasing streak: Length ${result1.length}, Sum ${result1.sum}</p>
        <p>In [${test2}], longest increasing streak: Length ${result2.length}, Sum ${result2.sum}</p>
        <p>In [${test3}], longest increasing streak: Length ${result3.length}, Sum ${result3.sum}</p>
    `;
});
