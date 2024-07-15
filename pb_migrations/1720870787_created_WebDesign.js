/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wl25di1oky7bgqy",
    "created": "2024-07-13 11:39:47.784Z",
    "updated": "2024-07-13 11:39:47.784Z",
    "name": "WebDesign",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "te3ptgaz",
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
  const collection = dao.findCollectionByNameOrId("wl25di1oky7bgqy");

  return dao.deleteCollection(collection);
})
