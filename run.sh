#!/bin/sh
cd angularjs && yarn && cd -
cd react && yarn && yarn build && cd -

docker run --rm -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
