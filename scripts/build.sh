#!/bin/bash
OS=unknown

# Detect Operating System
case "$(uname -s)" in

  Darwin)
    OS=mac
    ;;

  Linux)
    OS=linux
    ;;

  *)
    OS=unknown
    ;;
esac

# Clean dist folder
rm -rf dist

VUE_COMPONENTS="$(find src | grep .vue$)"

for VUE_COMPONENT in ${VUE_COMPONENTS}
do
  FILE_FULL_NAME=$(basename -- "$VUE_COMPONENT")
  FILE_NAME="${FILE_FULL_NAME%.*}"
  COMPONENT_NAME="Vue${FILE_NAME}"
  OUTPUT_DIR=dist/${COMPONENT_NAME}
  PACKAGE_NAME=vue$(echo ${FILE_NAME} | awk ' { gsub("[A-Z]","-&"); print }' | tr '[A-Z]' '[a-z]')
  BUILD_TIME=$(date +"%Y%m%d%H%M%S")

  echo Building ${COMPONENT_NAME} from ${VUE_COMPONENT}

  ./node_modules/.bin/vue-cli-service build --target lib --name ${COMPONENT_NAME} --dest ${OUTPUT_DIR} ${VUE_COMPONENT}
  rm ${OUTPUT_DIR}/demo.html
  cat > ${OUTPUT_DIR}/package.json <<EOL
{
  "name": "${PACKAGE_NAME}",
  "version": "1.0.${BUILD_TIME}",
  "description": "${COMPONENT_NAME}",
  "repository": "https://github.com/ansidev/vue-ui-ideas",
  "author": "Le Minh Tri <ansidev@gmail.com>",
  "license": "GPL-3.0-or-later",
  "private": false
}
EOL
  # npm publish ${OUTPUT_DIR}
done
