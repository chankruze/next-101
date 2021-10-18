/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 18 2021 17:20:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from "react";

// next js smartly matches fixed routing first then the dynamic routing
// for example, if we navigate to /product/123 or /product/jeans it will
// render [productId].js with productId == 123 and jeans respectively.

// but if we navogate to /product/sweater it will first check if any
// sweater.js is present inside the product  folder or not, if present,
// it will render the sweater.js page unlike [productId].js with
// productId == sweater.

export default function Sweater() {
  return <h1>Landing page for sweater</h1>;
}
