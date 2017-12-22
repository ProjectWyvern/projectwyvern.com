#!/bin/sh

cd docs && rm -rf * && cd ..
yarn run poi build
mv dist/* docs
cp src/404.html docs
echo 'landing.projectwyvern.com' > docs/CNAME
rmdir dist
