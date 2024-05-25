const { readFileSync } = require('fs');
const { NaiveBayes } = require('ml-naivebayes');
const { csvParse } = require('d3-dsv');

// Read the CSV file
const filename = 'PlayTennis.csv';
const fileContent = readFileSync(filename, 'utf8');

// Parse CSV data
const data = csvParse(fileContent);

// Convert categorical variables to numerical values
const labelMap = {};
data.forEach(row => {
    Object.keys(row).forEach(key => {
        if (!labelMap[key]) {
            labelMap[key] = {};
        }
        if (!labelMap[key][row[key]]) {
            labelMap[key][row[key]] = Object.keys(labelMap[key]).length;
        }
        row[key] = labelMap[key][row[key]];
    });
});

// Separate features and target variable
const x = data.map(row => Object.values(row).slice(0, -1));
const y = data.map(row => row['Play Tennis']);

// Train the Naive Bayes model
const model = new NaiveBayes();
model.train(x, y);

// Predict on a new sample
const newSample = [[1, 1, 2, 1]]; // Assuming the same format as the training data
const prediction = model.predict(newSample);
console.log('Predicted class:', prediction);
