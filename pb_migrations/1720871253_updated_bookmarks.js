/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tewx1fn3",
    "name": "field2",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "s9dg5zoxyppouwl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yypzsg4yof25zpd")

  // remove
  collection.schema.removeField("tewx1fn3")

  return dao.saveCollection(collection)
})
