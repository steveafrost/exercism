<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b) {
  $aSplit = str_split($a);
  $bSplit = str_split($b);
  $distance = 0;

  if(count($aSplit) != count($bSplit)) {
    throw new InvalidArgumentException('DNA strands must be of equal length.');
  };

  for ($i = 0; $i < count($aSplit); $i++) {
    if($aSplit[$i] != $bSplit[$i]) {
      $distance++;
    };
  };

  return $distance;
};
