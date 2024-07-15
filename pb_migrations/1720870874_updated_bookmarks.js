/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd")

  // remove
  collection.schema.removeField("jhbhktam")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhbhktam",
    "name": "relation",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wl25di1oky7bgqy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
