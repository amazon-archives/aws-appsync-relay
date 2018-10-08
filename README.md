AWS AppSync Relay
=================

This sample project shows how to use the Relay library together with an AWS AppSync backend. See [the blog post](https://medium.com/open-graphql/using-relay-with-aws-appsync-55c89ca02066) for more in-depth discussion.

Here are links to some of the key technologies used in the project:

- [AWS AppSync](https://docs.aws.amazon.com/appsync/latest/devguide/welcome.html)
- The [AWS Amplify Library](https://aws-amplify.github.io/amplify-js/media/quick_start?platform=purejs)
- [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
- [React](https://reactjs.org/docs/getting-started.html)
- [Relay](https://facebook.github.io/relay/docs/en/introduction-to-relay.html)

## Launching the AppSync backend

To run locally, you'll first need to deploy the backend in AWS, like this:

```
aws cloudformation package --template-file backend/template.yml --s3-bucket my-package-bucket > packaged_template.yml
aws cloudformation deploy --template-file packaged_template.yml --stack-name AppSyncRelay --capabilities CAPABILITY_NAMED_IAM
```

Replace "my-package-bucket" with any S3 bucket you want to use to store files required by the CloudFormation stack, such as the GraphQL schema. Note that the `--capabilities` option is required to allow CloudFormation to create IAM roles.

You can also do this with the `script/deploy` script, which requires setting the `S3_BUCKET` env var. You can also optionally set `STACK_NAME` for the name of the CloudFormation stack (the default is `AppSyncRelay`). Note that executable scripts in the `script` directory assume a Unix/macOS/Linux environment, Bash, and `jq` are available.

## Running the app locally

To point the app to the right backend resources, you'll need to set an env var with config info like this:
```
APPSYNC_CONFIG='{
    "UserPool": "<UserPoolId>",
    "AppSyncEndpoint": "<AppSyncEndpoint>",
    "ClientId": "<Cognito ClientId>",
    "AppSyncRegion": "<region>"
  }'
```

You can then run the app locally like this:

```
npm install
npm run serve
```

The app will be available at localhost:8080.

To automatically pull down the appropriate backend configuration from CloudFormation and run the app, you can also use `script/serve`. This requires the `STACK_NAME` env var to be set to the CloudFormation stack name.

## Deploying the frontend as a static site

If you want to deploy the frontend to the cloud as well, you can host it as a static site on S3. Once you have [configured a bucket appropriately](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html), you can build for production and deploy like this (you will again need backend config information exported in the `APPSYNC_CONFIG` env var as above):

```
npm run build
aws s3 sync dist s3://my-static-site-bucket
```

Here "my-static-site-bucket" should be replaced with your S3 bucket configured for static website hosting. You can alternatively use the `script/publish` script, which accepts `STATIC_SITE_BUCKET` as an env var.

## License Summary

This sample code is made available under a modified MIT license. See the LICENSE file.
