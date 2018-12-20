/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

// [START gceimages_quickstart]
const {GCEImages} = require('gce-images');
async function main() {
  const gceImages = new GCEImages();
  console.log(await gceImages.getAll());
}
main().catch(console.error);
// [END gceimages_quickstart]
