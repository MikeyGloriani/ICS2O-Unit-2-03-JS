// Copyright (c) 2022 Mikey Gloriani All rights reserved
//
// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * This function displays "Hello, World!".
 */
 function enterClicked() {
    // input
    const streetName = document.getElementById("street-name").value
    const streetNumber = parseInt(document.getElementById("age-entered").value)
  
    // output
    document.getElementById("address").innerHTML =
      "Your address is: " + streetName + streetNumber + "."
  }
  