function triangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);

    const area = 1/2 * triangleBase * triangleHeight;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}

function calculateRectangleArea() {
    const base = inputValueById('rectangle-width');
    const height = inputValueById('rectangle-length');
    const area = base * height;

    areaValue('rectangle-area', area);
}

function calculateParallelogramArea() {
    const base = inputValueById('parallelogram-base')
    const height = inputValueById('parallelogram-height');
    const area = base * height;
    areaValue('parallelogram-area', area);
} 

function calculateRhombusArea() {
    const diameterOne = inputValueById('rhombus-diameter-one');
    const diameterTwo = inputValueById('rhombus-diameter-two');
    const area = 0.5 * diameterOne * diameterTwo;

    areaValue('rhombus-area', area);
}

function calculatePentagonArea() {
    const pentagonPerimeter = inputValueById('pentagon-perimeter');
    const pentagonBase = inputValueById('pentagon-base');
    const area = 0.5 * pentagonPerimeter * pentagonBase;

    areaValue('pentagon-area', area);
}

function calculateEllipseArea() {
    const aAxis = inputValueById('ellipse-a-axis');
    const bAxis = inputValueById('ellipse-b-axis');
    const area = Math.PI * aAxis * bAxis;

    areaValue('ellipse-area', area.toFixed(2));
}


//reusable functions
function inputValueById(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputText = inputField.value;
    const inputFieldValue = parseFloat(inputText);

    return inputFieldValue;
}

function areaValue(value, area) {
    const inputField = document.getElementById(value);
    inputField.innerText = area;  
}

