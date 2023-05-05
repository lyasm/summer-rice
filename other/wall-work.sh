#!/bin/bash

#spaces=$(hyprctl workspaces | grep ID | awk '{print $3}')
spaces=$(echo "1
2
3
4")
echo "$spaces"
#focused=$(hyprctl monitors | grep -B 4 "focused: yes" | awk 'NR==1{print $3}')
focused=1

i=1
while read -r line; do
  var="space_$i"
  declare "$var=$line"
  i=$((i+1))
done <<< "$spaces"


j=1
while [ $j -lt $i ]; do
  var="space_$j"
  if [ "${!var}" = "$focused" ]; then
    echo "${!var} is equal to $focused"
  else
    echo "${!var} is not equal to $focused"
  fi
  j=$((j+1))
done