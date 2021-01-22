["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/size.js"],"~:js","goog.provide(\"goog.math.Size\");\ngoog.math.Size = function(width, height) {\n  this.width = width;\n  this.height = height;\n};\ngoog.math.Size.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.width == b.width && a.height == b.height;\n};\ngoog.math.Size.prototype.clone = function() {\n  return new goog.math.Size(this.width, this.height);\n};\nif (goog.DEBUG) {\n  goog.math.Size.prototype.toString = function() {\n    return \"(\" + this.width + \" x \" + this.height + \")\";\n  };\n}\ngoog.math.Size.prototype.getLongest = function() {\n  return Math.max(this.width, this.height);\n};\ngoog.math.Size.prototype.getShortest = function() {\n  return Math.min(this.width, this.height);\n};\ngoog.math.Size.prototype.area = function() {\n  return this.width * this.height;\n};\ngoog.math.Size.prototype.perimeter = function() {\n  return (this.width + this.height) * 2;\n};\ngoog.math.Size.prototype.aspectRatio = function() {\n  return this.width / this.height;\n};\ngoog.math.Size.prototype.isEmpty = function() {\n  return !this.area();\n};\ngoog.math.Size.prototype.ceil = function() {\n  this.width = Math.ceil(this.width);\n  this.height = Math.ceil(this.height);\n  return this;\n};\ngoog.math.Size.prototype.fitsInside = function(target) {\n  return this.width <= target.width && this.height <= target.height;\n};\ngoog.math.Size.prototype.floor = function() {\n  this.width = Math.floor(this.width);\n  this.height = Math.floor(this.height);\n  return this;\n};\ngoog.math.Size.prototype.round = function() {\n  this.width = Math.round(this.width);\n  this.height = Math.round(this.height);\n  return this;\n};\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\n  var sy = typeof opt_sy === \"number\" ? opt_sy : sx;\n  this.width *= sx;\n  this.height *= sy;\n  return this;\n};\ngoog.math.Size.prototype.scaleToCover = function(target) {\n  var s = this.aspectRatio() <= target.aspectRatio() ? target.width / this.width : target.height / this.height;\n  return this.scale(s);\n};\ngoog.math.Size.prototype.scaleToFit = function(target) {\n  var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;\n  return this.scale(s);\n};\n","~:source","// Copyright 2007 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A utility class for representing two-dimensional sizes.\n * @author brenneman@google.com (Shawn Brenneman)\n */\n\n\ngoog.provide('goog.math.Size');\n\n\n\n/**\n * Class for representing sizes consisting of a width and height. Undefined\n * width and height support is deprecated and results in compiler warning.\n * @param {number} width Width.\n * @param {number} height Height.\n * @struct\n * @constructor\n */\ngoog.math.Size = function(width, height) {\n  /**\n   * Width\n   * @type {number}\n   */\n  this.width = width;\n\n  /**\n   * Height\n   * @type {number}\n   */\n  this.height = height;\n};\n\n\n/**\n * Compares sizes for equality.\n * @param {goog.math.Size} a A Size.\n * @param {goog.math.Size} b A Size.\n * @return {boolean} True iff the sizes have equal widths and equal\n *     heights, or if both are null.\n */\ngoog.math.Size.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.width == b.width && a.height == b.height;\n};\n\n\n/**\n * @return {!goog.math.Size} A new copy of the Size.\n */\ngoog.math.Size.prototype.clone = function() {\n  return new goog.math.Size(this.width, this.height);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing size.\n   * @return {string} In the form (50 x 73).\n   * @override\n   */\n  goog.math.Size.prototype.toString = function() {\n    return '(' + this.width + ' x ' + this.height + ')';\n  };\n}\n\n\n/**\n * @return {number} The longer of the two dimensions in the size.\n */\ngoog.math.Size.prototype.getLongest = function() {\n  return Math.max(this.width, this.height);\n};\n\n\n/**\n * @return {number} The shorter of the two dimensions in the size.\n */\ngoog.math.Size.prototype.getShortest = function() {\n  return Math.min(this.width, this.height);\n};\n\n\n/**\n * @return {number} The area of the size (width * height).\n */\ngoog.math.Size.prototype.area = function() {\n  return this.width * this.height;\n};\n\n\n/**\n * @return {number} The perimeter of the size (width + height) * 2.\n */\ngoog.math.Size.prototype.perimeter = function() {\n  return (this.width + this.height) * 2;\n};\n\n\n/**\n * @return {number} The ratio of the size's width to its height.\n */\ngoog.math.Size.prototype.aspectRatio = function() {\n  return this.width / this.height;\n};\n\n\n/**\n * @return {boolean} True if the size has zero area, false if both dimensions\n *     are non-zero numbers.\n */\ngoog.math.Size.prototype.isEmpty = function() {\n  return !this.area();\n};\n\n\n/**\n * Clamps the width and height parameters upward to integer values.\n * @return {!goog.math.Size} This size with ceil'd components.\n */\ngoog.math.Size.prototype.ceil = function() {\n  this.width = Math.ceil(this.width);\n  this.height = Math.ceil(this.height);\n  return this;\n};\n\n\n/**\n * @param {!goog.math.Size} target The target size.\n * @return {boolean} True if this Size is the same size or smaller than the\n *     target size in both dimensions.\n */\ngoog.math.Size.prototype.fitsInside = function(target) {\n  return this.width <= target.width && this.height <= target.height;\n};\n\n\n/**\n * Clamps the width and height parameters downward to integer values.\n * @return {!goog.math.Size} This size with floored components.\n */\ngoog.math.Size.prototype.floor = function() {\n  this.width = Math.floor(this.width);\n  this.height = Math.floor(this.height);\n  return this;\n};\n\n\n/**\n * Rounds the width and height parameters to integer values.\n * @return {!goog.math.Size} This size with rounded components.\n */\ngoog.math.Size.prototype.round = function() {\n  this.width = Math.round(this.width);\n  this.height = Math.round(this.height);\n  return this;\n};\n\n\n/**\n * Scales this size by the given scale factors. The width and height are scaled\n * by `sx` and `opt_sy` respectively.  If `opt_sy` is not\n * given, then `sx` is used for both the width and height.\n * @param {number} sx The scale factor to use for the width.\n * @param {number=} opt_sy The scale factor to use for the height.\n * @return {!goog.math.Size} This Size object after scaling.\n */\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\n  const sy = (typeof opt_sy === 'number') ? opt_sy : sx;\n  this.width *= sx;\n  this.height *= sy;\n  return this;\n};\n\n\n/**\n * Uniformly scales the size to perfectly cover the dimensions of a given size.\n * If the size is already larger than the target, it will be scaled down to the\n * minimum size at which it still covers the entire target. The original aspect\n * ratio will be preserved.\n *\n * This function assumes that both Sizes contain strictly positive dimensions.\n * @param {!goog.math.Size} target The target size.\n * @return {!goog.math.Size} This Size object, after optional scaling.\n */\ngoog.math.Size.prototype.scaleToCover = function(target) {\n  const s = this.aspectRatio() <= target.aspectRatio() ?\n      target.width / this.width :\n      target.height / this.height;\n\n  return this.scale(s);\n};\n\n\n/**\n * Uniformly scales the size to fit inside the dimensions of a given size. The\n * original aspect ratio will be preserved.\n *\n * This function assumes that both Sizes contain strictly positive dimensions.\n * @param {!goog.math.Size} target The target size.\n * @return {!goog.math.Size} This Size object, after optional scaling.\n */\ngoog.math.Size.prototype.scaleToFit = function(target) {\n  const s = this.aspectRatio() > target.aspectRatio() ?\n      target.width / this.width :\n      target.height / this.height;\n\n  return this.scale(s);\n};\n","~:compiled-at",1611327466743,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.size.js\",\n\"lineCount\":73,\n\"mappings\":\"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\",\n\"sources\":[\"goog/math/size.js\"],\n\"sourcesContent\":[\"// Copyright 2007 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A utility class for representing two-dimensional sizes.\\n * @author brenneman@google.com (Shawn Brenneman)\\n */\\n\\n\\ngoog.provide('goog.math.Size');\\n\\n\\n\\n/**\\n * Class for representing sizes consisting of a width and height. Undefined\\n * width and height support is deprecated and results in compiler warning.\\n * @param {number} width Width.\\n * @param {number} height Height.\\n * @struct\\n * @constructor\\n */\\ngoog.math.Size = function(width, height) {\\n  /**\\n   * Width\\n   * @type {number}\\n   */\\n  this.width = width;\\n\\n  /**\\n   * Height\\n   * @type {number}\\n   */\\n  this.height = height;\\n};\\n\\n\\n/**\\n * Compares sizes for equality.\\n * @param {goog.math.Size} a A Size.\\n * @param {goog.math.Size} b A Size.\\n * @return {boolean} True iff the sizes have equal widths and equal\\n *     heights, or if both are null.\\n */\\ngoog.math.Size.equals = function(a, b) {\\n  if (a == b) {\\n    return true;\\n  }\\n  if (!a || !b) {\\n    return false;\\n  }\\n  return a.width == b.width && a.height == b.height;\\n};\\n\\n\\n/**\\n * @return {!goog.math.Size} A new copy of the Size.\\n */\\ngoog.math.Size.prototype.clone = function() {\\n  return new goog.math.Size(this.width, this.height);\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a nice string representing size.\\n   * @return {string} In the form (50 x 73).\\n   * @override\\n   */\\n  goog.math.Size.prototype.toString = function() {\\n    return '(' + this.width + ' x ' + this.height + ')';\\n  };\\n}\\n\\n\\n/**\\n * @return {number} The longer of the two dimensions in the size.\\n */\\ngoog.math.Size.prototype.getLongest = function() {\\n  return Math.max(this.width, this.height);\\n};\\n\\n\\n/**\\n * @return {number} The shorter of the two dimensions in the size.\\n */\\ngoog.math.Size.prototype.getShortest = function() {\\n  return Math.min(this.width, this.height);\\n};\\n\\n\\n/**\\n * @return {number} The area of the size (width * height).\\n */\\ngoog.math.Size.prototype.area = function() {\\n  return this.width * this.height;\\n};\\n\\n\\n/**\\n * @return {number} The perimeter of the size (width + height) * 2.\\n */\\ngoog.math.Size.prototype.perimeter = function() {\\n  return (this.width + this.height) * 2;\\n};\\n\\n\\n/**\\n * @return {number} The ratio of the size's width to its height.\\n */\\ngoog.math.Size.prototype.aspectRatio = function() {\\n  return this.width / this.height;\\n};\\n\\n\\n/**\\n * @return {boolean} True if the size has zero area, false if both dimensions\\n *     are non-zero numbers.\\n */\\ngoog.math.Size.prototype.isEmpty = function() {\\n  return !this.area();\\n};\\n\\n\\n/**\\n * Clamps the width and height parameters upward to integer values.\\n * @return {!goog.math.Size} This size with ceil'd components.\\n */\\ngoog.math.Size.prototype.ceil = function() {\\n  this.width = Math.ceil(this.width);\\n  this.height = Math.ceil(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * @param {!goog.math.Size} target The target size.\\n * @return {boolean} True if this Size is the same size or smaller than the\\n *     target size in both dimensions.\\n */\\ngoog.math.Size.prototype.fitsInside = function(target) {\\n  return this.width <= target.width && this.height <= target.height;\\n};\\n\\n\\n/**\\n * Clamps the width and height parameters downward to integer values.\\n * @return {!goog.math.Size} This size with floored components.\\n */\\ngoog.math.Size.prototype.floor = function() {\\n  this.width = Math.floor(this.width);\\n  this.height = Math.floor(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the width and height parameters to integer values.\\n * @return {!goog.math.Size} This size with rounded components.\\n */\\ngoog.math.Size.prototype.round = function() {\\n  this.width = Math.round(this.width);\\n  this.height = Math.round(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * Scales this size by the given scale factors. The width and height are scaled\\n * by `sx` and `opt_sy` respectively.  If `opt_sy` is not\\n * given, then `sx` is used for both the width and height.\\n * @param {number} sx The scale factor to use for the width.\\n * @param {number=} opt_sy The scale factor to use for the height.\\n * @return {!goog.math.Size} This Size object after scaling.\\n */\\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\\n  const sy = (typeof opt_sy === 'number') ? opt_sy : sx;\\n  this.width *= sx;\\n  this.height *= sy;\\n  return this;\\n};\\n\\n\\n/**\\n * Uniformly scales the size to perfectly cover the dimensions of a given size.\\n * If the size is already larger than the target, it will be scaled down to the\\n * minimum size at which it still covers the entire target. The original aspect\\n * ratio will be preserved.\\n *\\n * This function assumes that both Sizes contain strictly positive dimensions.\\n * @param {!goog.math.Size} target The target size.\\n * @return {!goog.math.Size} This Size object, after optional scaling.\\n */\\ngoog.math.Size.prototype.scaleToCover = function(target) {\\n  const s = this.aspectRatio() <= target.aspectRatio() ?\\n      target.width / this.width :\\n      target.height / this.height;\\n\\n  return this.scale(s);\\n};\\n\\n\\n/**\\n * Uniformly scales the size to fit inside the dimensions of a given size. The\\n * original aspect ratio will be preserved.\\n *\\n * This function assumes that both Sizes contain strictly positive dimensions.\\n * @param {!goog.math.Size} target The target size.\\n * @return {!goog.math.Size} This Size object, after optional scaling.\\n */\\ngoog.math.Size.prototype.scaleToFit = function(target) {\\n  const s = this.aspectRatio() > target.aspectRatio() ?\\n      target.width / this.width :\\n      target.height / this.height;\\n\\n  return this.scale(s);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"math\",\"Size\",\"goog.math.Size\",\"width\",\"height\",\"equals\",\"goog.math.Size.equals\",\"a\",\"b\",\"prototype\",\"clone\",\"goog.math.Size.prototype.clone\",\"DEBUG\",\"toString\",\"goog.math.Size.prototype.toString\",\"getLongest\",\"goog.math.Size.prototype.getLongest\",\"Math\",\"max\",\"getShortest\",\"goog.math.Size.prototype.getShortest\",\"min\",\"area\",\"goog.math.Size.prototype.area\",\"perimeter\",\"goog.math.Size.prototype.perimeter\",\"aspectRatio\",\"goog.math.Size.prototype.aspectRatio\",\"isEmpty\",\"goog.math.Size.prototype.isEmpty\",\"ceil\",\"goog.math.Size.prototype.ceil\",\"fitsInside\",\"goog.math.Size.prototype.fitsInside\",\"target\",\"floor\",\"goog.math.Size.prototype.floor\",\"round\",\"goog.math.Size.prototype.round\",\"scale\",\"goog.math.Size.prototype.scale\",\"sx\",\"opt_sy\",\"sy\",\"scaleToCover\",\"goog.math.Size.prototype.scaleToCover\",\"s\",\"scaleToFit\",\"goog.math.Size.prototype.scaleToFit\"]\n}\n"]