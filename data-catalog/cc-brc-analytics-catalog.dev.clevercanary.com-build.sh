#!/usr/bin/env bash

echo \"Deleting ./out/\"
rm -rf ./out

echo \"Deleting ./build/\"
rm -rf ./build

n 20.10.0
npm ci
export NEXT_PUBLIC_BASE_PATH="/data"

mkdir -p build/data

# Build AnVIL
rm -rf ./out
npm run build:local
mv out/* build/data

export BUCKET=s3://tik-brc-analytics.dev.data/
export SRCDIR=build/

aws s3 sync  $SRCDIR $BUCKET --delete --profile excira
aws cloudfront create-invalidation --distribution-id E1OF5ESEGD5VAG --paths "/*" --profile excira