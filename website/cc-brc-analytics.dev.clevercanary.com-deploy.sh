#!/usr/bin/env bash

echo \"Deleting ./out/\"
rm -rf ./out

echo \"Deleting ./build/\"
rm -rf ./build

n 20.10.0
npm ci

mkdir -p build

# Build the website
rm -rf ./out
npm run build:local
mv out/* build

export BUCKET=s3://tik-brc-analytics.dev/
export SRCDIR=build/

aws s3 sync  $SRCDIR $BUCKET --delete --profile excira
aws cloudfront create-invalidation --distribution-id E1OF5ESEGD5VAG --paths "/*" --profile excira