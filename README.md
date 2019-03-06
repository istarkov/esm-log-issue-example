# ESM cloud function log issue

Import inside [./routes.js](./routes.js) file caused that some console.log commands stopped to output
data at gcloud functions. Like `console.log(Object)`, `console.log(Array)`, `console.log(JSON.stringify(Object, null, ' ' ))` etc

## Preinstall step

You need to have [Google Cloud SDK](https://cloud.google.com/sdk/install) istalled
[Intall instruction page for OSX](https://cloud.google.com/sdk/docs/downloads-interactive)

then `gcloud init`

## Deploy

```bash
yarn deploy
```

## Exec

Open [https://europe-west1-esm-test-233714.cloudfunctions.net/esm-log](https://europe-west1-esm-test-233714.cloudfunctions.net/esm-log)

## Logs

```bash
yarn logs
```

_Logs are not updated immediately and you need to wait usually 20-60sec_

## Use other esm version

I havent found a way how to prevent cloud function to override node_modules folder
so I placed esm folder from node_modules in sources and require it via relative path

## Issue

Now in logs is

```
Function execution started
HELLO
Function execution took 40 ms, finished with status code: 200
```

Must be

```
Function execution started
HELLO
{ a: 1 }
{
 "a": 1
}
[ 1 ]
Function execution took 15 ms, finished with status code: 200
```
