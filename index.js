// 'Hello World' nodejs10.x runtime AWS Lambda function
exports.handler = (event, context, callback) => {
    console.log('Hello, logs!');
    callback(null, 'great success');
}