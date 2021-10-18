/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 18 2021 17:16:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  return <h3>Details about product {productId}</h3>;
}
