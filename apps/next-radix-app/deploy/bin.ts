import * as cdk from '@aws-cdk/core';
import s3 from '@aws-cdk/aws-s3';

const app = new cdk.App();

class DeployStack extends cdk.Stack {
  constructor(scope, id, props?) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publicReadAccess: false,
      cors: [
        {
          allowedHeaders: ['*'],
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.POST],
          allowedOrigins: ['*'],
        },
      ],
    });
  }
}

new DeployStack(app, 'DeployCdkStack');
