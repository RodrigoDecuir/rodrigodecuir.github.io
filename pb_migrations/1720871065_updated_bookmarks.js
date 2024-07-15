/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd")

  // remove
  collection.schema.removeField("f2ugxwhs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vowpnjwo",
    "name": "field",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("vowpnjwo")

  return dao.saveCollection(collection)
})
