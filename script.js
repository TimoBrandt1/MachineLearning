//For these functions you need to have rawData.

function scaleDown(step){ // Normalize
    return {
        open: step.open / 138,
        high: step.high / 138,
        low: step.low / 138,
        close: step.close / 138
    }
}

console.log(scaleDown(rawData[0]));

function scaleUp(step){ // Denormalize
    return {
        open: step.open * 138,
        high: step.high * 138,
        low: step.low * 138,
        close: step.close * 138
    }
}

console.log(scaleUp(rawData[0]));