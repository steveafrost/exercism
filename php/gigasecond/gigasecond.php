<?php

function from($date) {
  $gigasecond = clone $date;
  $gigasecond->add(new DateInterval('PT1000000000S'));
  return $gigasecond;
}
