// Generated by CoffeeScript 1.10.0
(function() {
  var Dict;

  Dict = (function() {
    Dict.uid = 0;

    Dict.key = '__dict_uid__';

    Dict.hasKeys = function(obj) {
      var key;
      for (key in obj) {
        return true;
      }
      return false;
    };

    Dict.getUID = function(key) {
      var name, type, uid;
      if (key == null) {
        return 'null';
      }
      name = Dict.key;
      uid = key[name];
      if (uid != null) {
        return uid;
      }
      type = typeof key;
      switch (type) {
        case 'string':
          return 's::';
        case 'number':
          return 'n::';
        case 'boolean':
          return 'b::';
      }
      uid = ++Dict.uid + '_' + Math.random();
      if (Dict.uid === Number.MAX_VALUE) {
        Dict.uid = 0;
      }
      if (Object.defineProperty != null) {
        Object.defineProperty(key, name, {
          value: uid
        });
      } else {
        key[name] = uid;
      }
      return uid;
    };

    function Dict() {
      this.datas = {};
    }

    Dict.prototype.map = function(key, value) {
      this.datas[Dict.getUID(key)] = {
        key: key,
        value: value
      };
      return value;
    };

    Dict.prototype.unmap = function(key) {
      delete this.datas[Dict.getUID(key)];
      return null;
    };

    Dict.prototype.get = function(key) {
      var ref;
      return (ref = this.datas[Dict.getUID(key)]) != null ? ref.value : void 0;
    };

    Dict.prototype.has = function(key) {
      return this.datas[Dict.getUID(key)] !== null;
    };

    Dict.prototype.clear = function() {
      return this.datas = {};
    };

    Dict.prototype.isEmpty = function() {
      var uid;
      for (uid in this.datas) {
        return true;
      }
      return false;
    };

    Dict.prototype.length = function() {
      var i, uid;
      i = 0;
      for (uid in this.datas) {
        ++i;
      }
      return i;
    };

    Dict.prototype.forEach = function(callback) {
      var data, ref, uid;
      ref = this.datas;
      for (uid in ref) {
        data = ref[uid];
        callback(data.key, data.value);
      }
      return null;
    };

    return Dict;

  })();

  module.exports = Dict["default"] = Dict;

}).call(this);

//# sourceMappingURL=jsdictionary.js.map
