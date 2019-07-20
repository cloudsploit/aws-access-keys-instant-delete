# aws-access-keys-instant-delete

[<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateUrl=https%3A%2F%2Fs3.amazonaws.com%2Fconsole.cloudsploit.com%2Fother%2Faws-access-keys-instant-delete.json&stackName=iam-access-keys-delete)

CloudFormation template that deploys the resources necessary to monitor for the creation of IAM user access keys and delete them within seconds of creation.

* Lambda Function - Provides the compute necessary for deleting the access keys when triggered.
* CloudWatch Event Rules - Monitors AWS API calls for the IAM:CreateAccessKey call and triggers the Lambda function when detected.
* IAM Role - Gives permission to the Lambda function to delete IAM access keys.

# Installation

1. Log into your AWS account (us-east-1 region) as a user with permissions to create resources
2. Ensure AWS CloudTrail is enabled and monitoring your account for IAM events.s
3. Click [this quick link](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateUrl=https%3A%2F%2Fs3.amazonaws.com%2Fconsole.cloudsploit.com%2Fother%2Faws-access-keys-instant-delete.json&stackName=iam-access-keys-delete) to deploy the CloudFormation template
