Router.route('/example', {where: 'server'})
  .get(function () {
    this.response.end("success");
  });