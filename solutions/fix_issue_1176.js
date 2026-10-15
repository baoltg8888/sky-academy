// Solution for issue #1176
// Generated automatically by Baobot

// sky-academy/lesson-times-tables.js
const lessons = [
    {
        level: 1,
        facts: [
            { number: 1, times: 2, result: 2 },
            { number: 2, times: 3, result: 6 },
            { number: 3, times: 4, result: 12 },
            { number: 4, times: 5, result: 20 },
            { number: 5, times: 6, result: 30 },
            { number: 6, times: 7, result: 42 },
            { number: 7, times: 8, result: 56 }
        ]
    }
];

function checkResult(result, expected) {
    return result === expected;
}

function isSecure(fact) {
    return lessons.some(lesson => lesson.facts.some(factToCheck => checkResult(factToCheck.result, fact.result) && factToCheck.number === fact.number && factToCheck.times === fact.times));
}

function secureFact(number, times, result) {
    const lessonIndex = lessons.findIndex(lesson => lesson.level === 1);
    const lesson = lessons[lessonIndex];
    const existingFactIndex = lesson.facts.findIndex(factToCheck => checkResult(factToCheck.result, result) && factToCheck.number === number && factToCheck.times === times);
    
    if (existingFactIndex !== -1) {
        console.log(`Fact for ${number} x ${times} is already secure.`);
    } else {
        lesson.facts.push({ number, times, result });
        console.log(`Fact for ${number} x ${times} is now secure.`);
    }
}

// Example usage:
secureFact(7, 8, 56);  // This will log "Fact for 7 x 8 is now secure."


This script defines a function `secureFact` that takes three parameters: `number`, `times`, and `result`. It checks if the fact is already secure and logs the appropriate message. If the fact is not secure, it adds it to the lesson facts array and logs a confirmation message.