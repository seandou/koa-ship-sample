'use strict';

class HomeController extends BaseController {

  async index() {
    this.text('<h1>It works!</h1>');
  }

}

module.exports = HomeController;
