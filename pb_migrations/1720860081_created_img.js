/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s9dg5zoxyppouwl",
    "created": "2024-07-13 08:41:21.664Z",
    "updated": "2024-07-13 08:41:21.664Z",
    "name": "img",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "plf7qhu4",
        "name": "test",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("s9dg5zoxyppouwl");

  return dao.deleteCollection(collection);
})
