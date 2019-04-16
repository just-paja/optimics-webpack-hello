#!/usr/bin/env bash

for example in $(find examples -mindepth 1 -maxdepth 1 -type d); do
  cd $example
  npm install
  cd ../..
done
