appsync-relay
=============

To run locally:

```
npm install
npm run serve
```

The app will be available at localhost:8080.

To deploy everything from scratch, create a file called `.environment` in the project root
with the following content:

```
STACK_NAME=<cloudformation stack name>
S3_BUCKET=<s3 bucket for assets and template resources>
TEMPLATE_PATH=<where in the bucket to publish the template>
```

Then run:

```
npm run build
script/deploy
```

```
