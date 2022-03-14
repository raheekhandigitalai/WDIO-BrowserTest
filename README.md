# WDIO-BrowserTest

Steps to run the tests:

1. Install necessary packages by running the following command:

```
npm install
```

2. Update your [Access Key](https://docs.experitest.com/display/TE/Obtaining+Access+Key) in wdio.conf.js > Capabilities:

```
capabilities: [{
 'experitest:accessKey': '', // // TODO: Populate with your Access Key
}],
```

3. Run the following command to trigger the test:

```
npx wdio wdio.conf.js
```
