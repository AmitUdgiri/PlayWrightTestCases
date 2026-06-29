// Pyramid of Doom / Callback Hell
// Simulating a full E-Commerce order flow with 22 nested callbacks

function openBrowser(cb) {
  console.log("Opening Chrome browser...");
  setTimeout(function () { cb(); }, 500);
}

function navigateToUrl(cb) {
  console.log("Navigating to https://awesome-store.com");
  setTimeout(function () { cb(); }, 500);
}

function acceptCookies(cb) {
  console.log("Accepting cookies...");
  setTimeout(function () { cb(); }, 300);
}

function loginUser(cb) {
  console.log("Logging in with credentials...");
  setTimeout(function () { cb(); }, 500);
}

function searchProduct(cb) {
  console.log("Searching for 'wireless keyboard'...");
  setTimeout(function () { cb(); }, 400);
}

function filterByBrand(cb) {
  console.log("Filtering by brand 'LogiTech'...");
  setTimeout(function () { cb(); }, 300);
}

function sortByPrice(cb) {
  console.log("Sorting results by price low-to-high...");
  setTimeout(function () { cb(); }, 300);
}

function selectProduct(cb) {
  console.log("Clicking on product #3 in results...");
  setTimeout(function () { cb(); }, 400);
}

function checkAvailability(cb) {
  console.log("Checking warehouse stock...");
  setTimeout(function () { cb(); }, 500);
}

function selectVariant(cb) {
  console.log("Selecting variant: Black / US Layout...");
  setTimeout(function () { cb(); }, 300);
}

function addToCart(cb) {
  console.log("Adding item to shopping cart...");
  setTimeout(function () { cb(); }, 400);
}

function viewCart(cb) {
  console.log("Navigating to cart page...");
  setTimeout(function () { cb(); }, 300);
}

function applyCoupon(cb) {
  console.log("Applying coupon code 'SAVE20'...");
  setTimeout(function () { cb(); }, 400);
}

function removePromoPopup(cb) {
  console.log("Dismissing promotional modal...");
  setTimeout(function () { cb(); }, 200);
}

function proceedToCheckout(cb) {
  console.log("Clicking 'Proceed to Checkout'...");
  setTimeout(function () { cb(); }, 500);
}

function enterShippingAddress(cb) {
  console.log("Filling shipping address form...");
  setTimeout(function () { cb(); }, 600);
}

function selectShippingMethod(cb) {
  console.log("Selecting 'Express Delivery (2-day)'...");
  setTimeout(function () { cb(); }, 300);
}

function enterPaymentDetails(cb) {
  console.log("Entering card number **** **** **** 4242...");
  setTimeout(function () { cb(); }, 600);
}

function applyBillingAddress(cb) {
  console.log("Applying billing address same as shipping...");
  setTimeout(function () { cb(); }, 300);
}

function placeOrder(cb) {
  console.log("Clicking 'Place Order' button...");
  setTimeout(function () { cb(); }, 700);
}

function verifyOrderConfirmation(cb) {
  console.log("Verifying order confirmation page loads...");
  setTimeout(function () { cb(); }, 400);
}

function sendTestReport(cb) {
  console.log("Generating & sending test execution report...");
  setTimeout(function () { cb(); }, 500);
}

// ---------------------- PYRAMID OF DOOM ----------------------
// 22 levels of nesting — this is callback hell!

openBrowser(function () {
  navigateToUrl(function () {
    acceptCookies(function () {
      loginUser(function () {
        searchProduct(function () {
          filterByBrand(function () {
            sortByPrice(function () {
              selectProduct(function () {
                checkAvailability(function () {
                  selectVariant(function () {
                    addToCart(function () {
                      viewCart(function () {
                        applyCoupon(function () {
                          removePromoPopup(function () {
                            proceedToCheckout(function () {
                              enterShippingAddress(function () {
                                selectShippingMethod(function () {
                                  enterPaymentDetails(function () {
                                    applyBillingAddress(function () {
                                      placeOrder(function () {
                                        verifyOrderConfirmation(function () {
                                          sendTestReport(function () {
                                            console.log("TEST PASSED: End-to-End order flow completed successfully!");
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
