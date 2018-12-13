#!/usr/bin/env bash

# example of preparation step if gcp-build + yarn is needed

rm -rf .function
mkdir -p .function
cp -r ./* ./.function
# rm .function/yarn.lock
touch .function/yarn.lock

# google has bug in their container if yarn is used
# then gcp-build could be run somekind of randomly
echo '# break cache' `date +%s%N` | cat - .function/yarn.lock > .function/yarn.tmp && mv .function/yarn.tmp .function/yarn.lock

cat << EOF > $PWD/.function/package.json
{
  "name": "realadvisor",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "express": "^4.16.4"
  },
  "engines": {
    "node": "8"
  },
  "scripts": {
    "gcp-build": "echo 666-gcp-aaabuild works > ./hello.txt"
  }
}
EOF

