var AWS = require('aws-sdk');
var iam = new AWS.IAM();
exports.handler = function(event, context, callback) {
if (event && event.detail && event.detail.eventName && event.detail.eventName == 'CreateAccessKey' && event.detail.responseElements && event.detail.responseElements.accessKey && event.detail.responseElements.accessKey.accessKeyId && event.detail.responseElements.accessKey.userName) {
var params = {AccessKeyId: event.detail.responseElements.accessKey.accessKeyId, UserName: event.detail.responseElements.accessKey.userName};
iam.deleteAccessKey(params, callback);
} else {
callback();
}
};