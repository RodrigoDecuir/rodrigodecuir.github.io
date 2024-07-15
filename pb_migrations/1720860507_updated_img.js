/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9dg5zoxyppouwl")

  collection.name = "photography"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9dg5zoxyppouwl")

  collection.name = "img"

  return dao.saveCollection(collection)
})
