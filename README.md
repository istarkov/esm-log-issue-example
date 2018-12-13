# ESM cloud function log issue

## Preinstall step

You need to have [Google Cloud SDK](https://cloud.google.com/sdk/install) istalled
[Intall instruction page for OSX](https://cloud.google.com/sdk/docs/downloads-interactive)

then `gcloud init`

## Deploy

```bash
yarn deploy
```

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
111 a non esm hello
Function execution took 71 ms, finished with status code: 304
```

Must be

```
Function execution started
111 a non esm hello
console log in module wrapped with esm
Function execution took 71 ms, finished with status code: 304
```
