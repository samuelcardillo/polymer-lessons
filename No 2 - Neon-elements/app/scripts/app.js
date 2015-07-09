/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.inShowcase = false;

  app.addEventListener('dom-change',function(){
    var d = new Date();
    var n = d.getHours();

    if(n >= 5 && n <= 7) {
      document.querySelector('#indexToolbar').style.backgroundImage = 'url(\'../images/sf/dawn.png\')';
    }
    if(n >= 8 && n <= 16) {
      document.querySelector('#indexToolbar').style.backgroundImage = 'url(\'../images/sf/day.png\')';
    }
    if(n >= 17 && n <= 23) {
      document.querySelector('#indexToolbar').style.backgroundImage = 'url(\'../images/sf/evening.png\')';
    }
    if(n >= 0 && n <= 4) {
      document.querySelector('#indexToolbar').style.backgroundImage = 'url(\'../images/sf/night.png\')';
    }
});

document.addEventListener('changePage',function(data){
  document.querySelector("neon-animated-pages").selected = (data.detail == "showcase") ? "showcase" : "finished";
})

document.addEventListener('updateShowcase',function(data){
  document.querySelector('portfolio-showcase').product = data.detail;
})

})(document);

// TODO: Decide if we still want to suggest wrapping as it requires
// using webcomponents.min.js.
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
// )(wrap(document));
