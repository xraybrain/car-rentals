const BaseModel = require("../db/models/index");

module.exports = class Pager {
  constructor(model, pageSize = 10, whereClause = {}) {
    this.page = 0;
    this.results = [];
    this.pageSize = pageSize;
    this.model = model;
    this.whereClause = whereClause;
    //-- using async in constructor
    (async (_this) => {
      _this.totalItems = await BaseModel[model].count({ where: whereClause });
      _this.totalPages = Math.ceil(_this.totalItems / _this.pageSize);
    })(this);
  }

  async getItems(page, include = []) {
    let offset = this.pageSize * page - this.pageSize;
    this.page = page;
    this.results = await BaseModel[this.model].findAll({
      where: this.whereClause,
      include,
      offset,
      limit: this.pageSize,
      order: [["createdAt", "DESC"]],
    });

    return this.results;
  }
};
