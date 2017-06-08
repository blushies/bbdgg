#!/bin/bash

# clean
rm -rf lib

webpack --progress --display-chunks --display-reasons --display-error-details --display-modules

cd dgg
# npm run build:production
cd ..

dgg_output_dir="dgg/static"
browsers=( 'chrome' 'firefox' )
for browser in "${browsers[@]}"
do
  browser_output_dir="lib/$browser"
  cp src/manifest.json "lib/$browser/manifest.json"
  mkdir -p "$browser_output_dir/dgg"
  cp -R "${dgg_output_dir}/fonts" "$browser_output_dir/dgg"
  cp -R "${dgg_output_dir}/img" "$browser_output_dir/dgg"
  cp -R static $browser_output_dir
  files=( 'chat.css' 'chat.js' 'common.css' 'common.js' )
  for file in "${files[@]}"
  do
    cp "${dgg_output_dir}/${file}" "$browser_output_dir/dgg"
  done
done
