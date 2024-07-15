/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("07fxso2c06m3myo");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "07fxso2c06m3myo",
    "created": "2024-07-13 07:51:56.083Z",
    "updated": "2024-07-13 07:51:56.083Z",
    "name": "photography",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "95qt0fsj",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
})
