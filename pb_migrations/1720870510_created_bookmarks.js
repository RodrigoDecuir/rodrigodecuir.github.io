/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yypzsg4yof25zpd",
    "created": "2024-07-13 11:35:10.000Z",
    "updated": "2024-07-13 11:35:10.000Z",
    "name": "bookmarks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f2ugxwhs",
        "name": "url",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd");

  return dao.deleteCollection(collection);
})
