/*
The MIT License (MIT)

Copyright (c) 2017 Diego F. Goberna diego@feiss.be

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
var KEYBOARDS = {
  'basic': {wrapCount: 30, inputOffsetY: 0.008, inputOffsetX: 0.08, img: 'sk-basic.png', layout: [{'key': '1', 'x': 0.044, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '2', 'x': 0.124, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '3', 'x': 0.203, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '4', 'x': 0.282, 'y': 0.226, 'w': 0.08, 'h': 0.152}, {'key': '5', 'x': 0.363, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '6', 'x': 0.442, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '7', 'x': 0.521, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '8', 'x': 0.601, 'y': 0.226, 'w': 0.08, 'h': 0.152}, {'key': '9', 'x': 0.681, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': '0', 'x': 0.761, 'y': 0.226, 'w': 0.079, 'h': 0.152}, {'key': 'Delete', 'x': 0.846, 'y': 0.227, 'w': 0.108, 'h': 0.146}, {'key': 'Enter', 'x': 0.847, 'y': 0.526, 'w': 0.108, 'h': 0.244}, {'key': 'q', 'x': 0.044, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'w', 'x': 0.124, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'e', 'x': 0.203, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'r', 'x': 0.282, 'y': 0.377, 'w': 0.08, 'h': 0.152}, {'key': 't', 'x': 0.363, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'y', 'x': 0.442, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'u', 'x': 0.521, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'i', 'x': 0.601, 'y': 0.377, 'w': 0.08, 'h': 0.152}, {'key': 'o', 'x': 0.681, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'p', 'x': 0.761, 'y': 0.377, 'w': 0.079, 'h': 0.152}, {'key': 'l', 'x': 0.729, 'y': 0.53, 'w': 0.08, 'h': 0.154}, {'key': 'a', 'x': 0.092, 'y': 0.53, 'w': 0.08, 'h': 0.154}, {'key': 's', 'x': 0.171, 'y': 0.53, 'w': 0.08, 'h': 0.154}, {'key': 'd', 'x': 0.251, 'y': 0.53, 'w': 0.08, 'h': 0.154}, {'key': 'f', 'x': 0.331, 'y': 0.53, 'w': 0.079, 'h': 0.154}, {'key': 'g', 'x': 0.41, 'y': 0.53, 'w': 0.08, 'h': 0.154}, {'key': 'h', 'x': 0.49, 'y': 0.53, 'w': 0.079, 'h': 0.154}, {'key': 'j', 'x': 0.57, 'y': 0.53, 'w': 0.079, 'h': 0.154}, {'key': 'k', 'x': 0.649, 'y': 0.53, 'w': 0.08, 'h': 0.154}, {'key': 'z', 'x': 0.172, 'y': 0.684, 'w': 0.079, 'h': 0.154}, {'key': 'x', 'x': 0.251, 'y': 0.684, 'w': 0.08, 'h': 0.154}, {'key': 'c', 'x': 0.331, 'y': 0.684, 'w': 0.079, 'h': 0.154}, {'key': 'v', 'x': 0.41, 'y': 0.684, 'w': 0.08, 'h': 0.154}, {'key': 'b', 'x': 0.49, 'y': 0.684, 'w': 0.08, 'h': 0.154}, {'key': 'n', 'x': 0.57, 'y': 0.684, 'w': 0.079, 'h': 0.154}, {'key': 'm', 'x': 0.649, 'y': 0.684, 'w': 0.08, 'h': 0.154}, {'key': ' ', 'x': 0.27, 'y': 0.838, 'w': 0.415, 'h': 0.126}, {'key': 'Shift', 'x': 0.042, 'y': 0.827, 'w': 0.068, 'h': 0.142}, {'key': 'Escape', 'x': 0.876, 'y': 0.823, 'w': 0.078, 'h': 0.134}, {'key': 'Insert', 'x': 0.058, 'y': 0, 'w': 0.881, 'h': 0.149}]},
  'numpad': {wrapCount: 20, inputOffsetY: 0.005, inputOffsetX: 0.32, img: 'sk-numpad.png', layout: [{'key': '7', 'x': 0.313, 'y': 0.254, 'w': 0.088, 'h': 0.177}, {'key': '8', 'x': 0.401, 'y': 0.254, 'w': 0.088, 'h': 0.177}, {'key': '9', 'x': 0.49, 'y': 0.254, 'w': 0.088, 'h': 0.177}, {'key': '4', 'x': 0.313, 'y': 0.431, 'w': 0.088, 'h': 0.177}, {'key': '5', 'x': 0.401, 'y': 0.431, 'w': 0.088, 'h': 0.177}, {'key': '6', 'x': 0.49, 'y': 0.431, 'w': 0.088, 'h': 0.177}, {'key': '2', 'x': 0.401, 'y': 0.608, 'w': 0.088, 'h': 0.177}, {'key': '1', 'x': 0.313, 'y': 0.608, 'w': 0.088, 'h': 0.177}, {'key': '3', 'x': 0.49, 'y': 0.608, 'w': 0.088, 'h': 0.177}, {'key': '0', 'x': 0.313, 'y': 0.785, 'w': 0.177, 'h': 0.161}, {'key': '.', 'x': 0.49, 'y': 0.785, 'w': 0.088, 'h': 0.161}, {'key': 'Escape', 'x': 0.578, 'y': 0.785, 'w': 0.105, 'h': 0.161}, {'key': 'Enter', 'x': 0.578, 'y': 0.431, 'w': 0.105, 'h': 0.354}, {'key': 'Delete', 'x': 0.578, 'y': 0.254, 'w': 0.105, 'h': 0.177}, {'key': 'Insert', 'x': 0.294, 'y': 0.001, 'w': 0.409, 'h': 0.19}]}
};

var FontFactors = {
  roboto: 17,
  aileronsemibold: 20,
  dejavu: 20.5,
  exo2bold: 20,
  exo2semibold: 20.3,
  kelsonsans: 22.8,
  monoid: 19.5,
  mozillavr: 9.5,
  sourcecodepro: 20.3
};

AFRAME.registerComponent('super-keyboard', {
  schema: {
    align: {default: 'left', oneOf: ['left', 'center', 'right']},
    blinkingSpeed: {type: 'int', default: 400},
    filters: {type: 'array'},
    // roboto aileronsemibold dejavu exo2bold exo2semibold kelsonsans monoid sourcecodepro
    font: {default: 'aileronsemibold'},
    hand: {type: 'selector'},
    imagePath: {default: '.'},
    injectToRaycasterObjects: {default: true},
    inputColor: {type: 'color', default: '#6699ff'},
    interval: {type: 'int', default: 50},
    keyBgColor: {type: 'color', default: '#000'},
    keyColor: {type: 'color', default: '#6699ff'},
    keyHoverColor: {type: 'color', default: '#1A407F'},
    keyPressColor: {type: 'color', default: '#5290F6'},
    label: {type: 'string', default: ''},
    labelColor: {type: 'color', default: '#aaa'},
    maxLength: {type: 'int', default: 0},
    model: {default: 'basic'},
    show: {default: true},
    multipleInputs: {default: false},
    value: {type: 'string', default: ''},
    width: {default: 0.8}
  },

  init: function () {
    this.el.addEventListener('click', this.click.bind(this));
    this.changeEventDetail = {};
    this.textInputObject = {};

    this.keys = null;
    this.focused = false;
    this.keyHover = null;
    this.prevCheckTime = null;
    this.shift = false;

    this.rawValue = this.data.value;
    this.defaultValue = this.data.value;

    this.userFilterFunc = null;
    this.intervalId = 0;

    // Create keyboard image.
    this.kbImg = document.createElement('a-entity');
    this.kbImg.classList.add('keyboardRaycastable');
    this.kbImg.classList.add('superKeyboardImage');
    this.kbImg.addEventListener('raycaster-intersected', this.hover.bind(this));
    this.kbImg.addEventListener('raycaster-intersected-cleared', this.blur.bind(this));
    this.el.appendChild(this.kbImg);

    // Create label.
    this.label = document.createElement('a-entity');
    this.label.setAttribute('text', {
      align: 'center',
      font: this.data.font,
      baseline: 'bottom',
      lineHeight: 40,
      value: this.data.label,
      color: this.data.labelColor,
      width: this.data.width,
      wrapCount: 30});
    this.el.appendChild(this.label);

    // Create input.
    this.textInput = document.createElement('a-entity');
    this.textInput.setAttribute('text', {
      align: this.data.align,
      font: this.data.font,
      value: this.data.value,
      color: this.data.inputColor,
      width: this.data.width,
      wrapCount: 20
    });
    this.el.appendChild(this.textInput);

    this.cursor = document.createElement('a-entity');
    this.cursor.object3D.position.set(0, 0, 0.001);
    this.cursor.setAttribute('material', {shader: 'flat', color: this.data.inputColor});
    this.textInput.appendChild(this.cursor);
    this.cursorUpdated = false;

    this.keyBgColor = new THREE.Color();
    this.keyHoverColor = new THREE.Color();
    this.keyPressColor = new THREE.Color();

    var self = this;
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 't') {
        var ss = '';
        var s = 'abcdefghijklmopqrstuvQWIEUTGASDLIGKBXACQWETL102394676457';
        var l = Math.floor(Math.random() * 20);
        for (var i = 0; i < l; i++) ss += s[Math.floor(Math.random() * s.length)];
        self.el.setAttribute('super-keyboard', {value: ss});
      }
    });

    document.addEventListener('show', this.open.bind(this));

    this.hand = null;
    this.handListenersSet = false;
    this.raycaster = null;
  },

  update: function (oldData) {
    var kbdata = KEYBOARDS[this.data.model];
    var w = this.data.width;
    var h = this.data.width / 2;
    var w2 = w / 2;
    var h2 = h / 2;

    if (kbdata === undefined) {
      console.error('super-keyboard ERROR: model "' + this.data.model + '" undefined.');
      return;
    }

    if (!oldData || this.defaultValue !== oldData.defaultValue) {
      this.rawValue = this.data.value;
      this.defaultValue = this.data.value;
      this.updateTextInput(this.filter(this.data.value));
    } else {
      this.updateTextInput(this.filter(this.rawValue));
    }

    if (this.data.width !== oldData.width ||
        this.data.height !== oldData.height ||
        this.data.keyColor !== oldData.keyColor) {
      this.kbImg.setAttribute('geometry', {primitive: 'plane', width: w, height: h});
      this.kbImg.setAttribute('material', {
        shader: 'flat',
        src: this.data.imagePath + '/' + kbdata.img,
        color: this.data.keyColor,
        transparent: true
      });
    }

    if (this.data.label !== oldData.label ||
        this.data.labelColor !== oldData.labelColor ||
        this.data.width !== oldData.width) {
      this.label.setAttribute('text', {
        value: this.data.label, color: this.data.labelColor, width: this.data.width});
      this.label.object3D.position.set(0, 0.3 * w, -0.02);
    }

    if (this.data.width !== oldData.width ||
        this.data.keyBgColor !== oldData.keyBgColor) {
      this.initKeyColorPlane();
    }

    var inputx = this.data.align !== 'center' ? kbdata.inputOffsetX * w : 0;
    if (this.data.align === 'right') { inputx *= -1; }

    if (this.data.font !== oldData.font ||
        this.data.inputColor !== oldData.inputColor ||
        this.data.width !== oldData.width ||
        this.data.align !== oldData.align) {
      this.textInput.setAttribute('text', {
        font: this.data.font,
        color: this.data.inputColor,
        width: w,
        wrapCount: kbdata.wrapCount,
        align: this.data.align
      });
    }

    // Some hack where the inputRect is stored in the Insert key.
    for (var i = 0; i < kbdata.layout.length; i++) {
      var kdata = kbdata.layout[i];
      if (kdata.key === 'Insert') {
        this.inputRect = kdata;
      }
    }

    this.textInput.object3D.position.set(
      inputx,
      (w / 4) - (this.inputRect.y + this.inputRect.h / 2) * w / 2 + kbdata.inputOffsetY * w,
      0.002
    );

    if (this.data.width !== oldData.width) {
      this.cursor.setAttribute('geometry', {
        primitive: 'plane', width: 0.03 * w, height: 0.01 * w});
    }

    this.updateCursorPosition();
    this.setupHand();

    this.keyBgColor.set(this.data.keyBgColor);
    this.keyHoverColor.set(this.data.keyHoverColor);
    this.keyPressColor.set(this.data.keyPressColor);

    if (this.data.show) {
      this.open();
    } else {
      this.close();
    }
  },

  tick: function (time) {
    var intersection;

    if (this.prevCheckTime && (time - this.prevCheckTime < this.data.interval)) { return; }
    if (!this.prevCheckTime) {
      this.prevCheckTime = time;
      return;
    }
    if (!this.raycaster) { return; }
    if (!this.focused) { return; }

    intersection = this.raycaster.getIntersection(this.kbImg);
    if (!intersection) { return; }

    var uv = intersection.uv;
    var keys = KEYBOARDS[this.data.model].layout;
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (uv.x > k.x && uv.x < k.x + k.w && (1.0 - uv.y) > k.y && (1.0 - uv.y) < k.y + k.h) {
        if (this.keyHover !== k) {
          // Update key hover.
          this.keyHover = k;
          this.updateKeyColorPlane(this.keyHover.key, this.keyHoverColor);
        }
        break;
      }
    }
  },

  play: function () {
    if (!this.cursorUpdated) { return; }
    this.startBlinking();
  },

  pause: function () {
    this.stopBlinking();
  },

  /**
   * The plane for visual feedback when a key is hovered or clicked
   */
  initKeyColorPlane: function () {
    var keyColorPlane = this.keyColorPlane = document.createElement('a-entity');
    keyColorPlane.classList.add('superKeyboardKeyColorPlane');
    keyColorPlane.object3D.position.z = 0.001;
    keyColorPlane.object3D.visible = false;
    keyColorPlane.setAttribute('geometry', {primitive: 'plane'});
    keyColorPlane.setAttribute('material', {shader: 'flat', color: this.data.keyBgColor,
                                            transparent: true});
    keyColorPlane.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'material') { return; }
      this.getObject3D('mesh').material.blending = THREE.AdditiveBlending;
    });
    this.el.appendChild(keyColorPlane);
  },

  /**
   * Move key color plane to appropriate position, scale, and change color.
   */
  updateKeyColorPlane: function (key, color) {
    var kbdata = KEYBOARDS[this.data.model];
    var keyColorPlane = this.keyColorPlane;

    // Unset.
    if (!key) {
      keyColorPlane.object3D.visible = false;
      return;
    }

    for (var i = 0; i < kbdata.layout.length; i++) {
      var kdata = kbdata.layout[i];
      if (kdata.key !== key) { continue; }
      var w = this.data.width;
      var h = this.data.width / 2;
      var w2 = w / 2;
      var h2 = h / 2;
      var keyw = kdata.w * w;
      var keyh = kdata.h * h;
      // Size.
      keyColorPlane.object3D.scale.x = keyw;
      keyColorPlane.object3D.scale.y = keyh;
      // Position.
      keyColorPlane.object3D.position.x = kdata.x * w - w2 + keyw / 2;
      keyColorPlane.object3D.position.y = (1 - kdata.y) * h - h2 - keyh / 2;
      // Color.
      keyColorPlane.getObject3D('mesh').material.color.copy(color);
      break;
    }
    keyColorPlane.object3D.visible = true;
  },

  setupHand: function () {
    if (this.hand && this.hand.ownRaycaster) {
      this.hand.removeAttribute('raycaster');
    }
    if (this.data.hand) {
      this.hand = this.data.hand;
    } else {
      this.hand = document.querySelector([
        '#hand-right',
        '[cursor]',
        '[vive-controls]',
        '[tracked-controls]',
        '[gearvr-controls]',
        '[oculus-go-controls]',
        '[oculus-touch-controls]',
        '[windows-motion-controls]',
        '[hand-controls]',
        '[daydream-controls] [cursor] > [raycaster]'
      ].join(','));
    }

    if (!this.hand) {
      console.error('super-keyboard: no controller found. Add <a-entity> with controller or specify with super-keyboard="hand: #selectorToController".');
    } else {
      if (!this.hand.hasLoaded) {
        this.hand.addEventListener('loaded', this.setupHand.bind(this));
        return;
      }
      var raycaster = this.hand.components['raycaster'];
      var params = {};

      if (!raycaster) {
        this.hand.ownRaycaster = true;
        params.showLine = this.data.show;
        params.enabled = this.data.show;
        if (this.data.injectToRaycasterObjects) {
          params.objects = '.keyboardRaycastable';
        }
        this.hand.setAttribute('raycaster', params);
      } else {
        this.hand.ownRaycaster = false;
        if (this.data.injectToRaycasterObjects) {
          var objs = raycaster.data.objects.split(',');
          if (objs.indexOf('.keyboardRaycastable') === -1) {
            objs.push('.keyboardRaycastable');
          }
          params.objects = objs.join(',').replace(/^,/, '');
          this.hand.setAttribute('raycaster', params);
        }
      }

      this.raycaster = this.hand.components.raycaster;
    }
  },

  filter: function (str) {
    if (str === '') { return ''; }
    for (var i = 0; i < this.data.filters.length; i++) {
      switch (this.data.filters[i]) {
        case 'custom': {
          if (this.userFilterFunc) str = this.userFilterFunc(str);
          break;
        }
        case 'allupper': {
          str = str.toUpperCase();
          break;
        }
        case 'alllower': {
          str = str.toLowerCase();
          break;
        }
        case 'title': {
          str = str.split(' ').map(function (s) { return s[0].toUpperCase() + s.substr(1); }).join(' ');
          break;
        }
        case 'numbers': {
          str = str.split('').filter(function (c) { return !isNaN(parseInt(c)) || c === '.'; }).join('');
          break;
        }
        case 'first': {
          str = str[0].toUpperCase() + str.substr(1);
          break;
        }
        case 'trim': {
          str = str.trim();
          break;
        }
      }
    }
    return this.data.maxLength > 0 ? str.substr(0, this.data.maxLength) : str;
  },

  click: function (ev) {
    if (!this.keyHover) { return; }

    switch (this.keyHover.key) {
      case 'Enter': {
        this.accept();
        break;
      }
      case 'Insert': {
        return;
      }
      case 'Delete': {
        this.rawValue = this.rawValue.substr(0, this.rawValue.length - 1);
        var newValue = this.filter(this.rawValue);
        this.el.setAttribute('super-keyboard', 'value', newValue);
        this.updateTextInput(newValue);
        this.changeEventDetail.value = newValue;
        this.el.emit('superkeyboardchange', this.changeEventDetail);
        break;
      }
      case 'Shift': {
        this.shift = !this.shift;
        this.keyHover.el.setAttribute('material', 'color',
          this.shift ? this.data.keyHoverColor : this.data.keyBgColor
        );
        break;
      }
      case 'Escape': {
        this.dismiss();
        break;
      }
      default: {
        if (this.data.maxLength > 0 && this.rawValue.length > this.data.maxLength) { break; }
        this.rawValue += this.shift ? this.keyHover.key.toUpperCase() : this.keyHover.key;
        var newValue = this.filter(this.rawValue);
        this.el.setAttribute('super-keyboard', 'value', newValue);
        this.updateTextInput(newValue);
        this.changeEventDetail.value = newValue;
        this.el.emit('superkeyboardchange', this.changeEventDetail);
        break;
      }
    }

    this.updateKeyColorPlane(this.keyHover.key, this.keyPressColor);
    var self = this;
    setTimeout(function () {
      self.updateKeyColorPlane(self.keyHover.key, self.keyHoverColor);
    }, 100);
    this.updateCursorPosition();
  },

  open: function () {
    this.el.object3D.visible = true;
    if (this.hand && this.hand.ownRaycaster) {
      this.hand.setAttribute('raycaster', {showLine: true, enabled: true});
    }
  },

  close: function () {
    this.el.object3D.visible = false;
    if (this.hand && this.hand.ownRaycaster) {
      this.hand.setAttribute('raycaster', {showLine: false, enabled: false});
    }
  },

  accept: function () {
    this.el.emit('superkeyboardinput', {value: this.data.value});
    if (this.data.multipleInputs) {
      this.rawValue = '';
      this.data.value = '';
      this.updateTextInput('');
    } else {
      this.el.object3D.visible = false;
      if (this.hand && this.hand.ownRaycaster) {
        this.hand.setAttribute('raycaster', {showLine: false, enabled: false});
      }
      this.data.show = false;
    }
  },

  dismiss: function () {
    this.data.value = this.defaultValue;
    this.updateTextInput();
    this.el.object3D.visible = false;
    if (this.hand && this.hand.ownRaycaster) {
      this.hand.setAttribute('raycaster', {showLine: false, enabled: false});
    }
    this.el.emit('superkeyboarddismiss');
    this.data.show = false;
  },

  blur: function (ev) {
    this.focused = false;
    if (this.keyHover && this.keyHover.key !== 'Shift') {
      this.updateKeyColorPlane(this.keyHover.key, this.keyBgColor);
    }
    this.keyHover = null;
  },

  hover: function (ev) {
    this.focused = true;
  },

  startBlinking: function () {
    this.stopBlinking();
    this.intervalId = window.setInterval(this.blink.bind(this), this.data.blinkingSpeed);
  },

  stopBlinking: function () {
    window.clearInterval(this.intervalId);
    this.intervalId = 0;
  },

  blink: function () {
    this.cursor.object3D.visible = !this.cursor.object3D.visible;
  },

  setCustomFilter: function (f) {
    this.userFilterFunc = f;
  },

  addCustomModel: function (name, model) {
    if (!name) { return; }
    KEYBOARDS[name] = model;
  },

  updateCursorPosition: function () {
    var font = this.textInput.components.text.currentFont;
    if (!font) {
      var self = this;
      this.cursor.object3D.visible = false;
      window.setTimeout(function () {
        self.updateCursorPosition();
        self.startBlinking();
      }, 700);
      return;
    }

    var w = this.data.width;
    var kbdata = KEYBOARDS[this.data.model];
    var posy = -this.inputRect.h / 2 * w / 2.4 + kbdata.inputOffsetY * w;
    var ratio = this.data.width / this.textInput.components.text.data.wrapCount;
    var pos = 0;
    var fontFactor = FontFactors[this.textInput.components.text.data.font];
    if (fontFactor === undefined) { fontFactor = 20; }
    for (var i = 0; i < this.data.value.length; i++) {
      var char = findFontChar(font.chars, this.data.value.charCodeAt(i));
      pos += char.width + char.xadvance * (char.id === 32 ? 2 : 1);
    }
    if (this.data.align === 'center') {
      pos = pos * ratio * fontFactor * 0.0011 / 2.0 + 0.02 * w;
    } else if (this.data.align === 'left') {
      pos = pos * ratio * fontFactor * 0.0011 + 0.02 * w;
      pos -= w / 2;
    } else if (this.data.align === 'right') {
      pos = -pos * ratio * fontFactor * 0.0011 - 0.02 * w;
      pos += w / 2;
    }
    this.cursor.object3D.position.set(pos, posy, 0.001);
    this.cursorUpdated = true;
  },

  updateTextInput: function (value) {
    this.textInputObject.value = value || this.data.value;
    this.textInput.setAttribute('text', this.textInputObject);
  }
});

function findFontChar (chars, code) {
  for (var i = 0; i < chars.length; i++) {
    if (chars[i].id === code) { return chars[i]; }
  }
  return null;
}