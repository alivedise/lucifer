(function(window) {
  $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };
  var Generator = {
    init: function() {
      var self = this;
      $('form').change(function() {
        self.submit();
      });

      $('form').submit(function(evt) {
        evt.preventDefault();
        self.submit();
        return false;
      });
    },

    submit: function() {
      var options = $('form').serializeObject();
      options.instance = '石川';

      $('#template').html(new EJS({url: 'lucifer.ejs'}).render(options));
    }
  };

  Generator.init();
}(this));