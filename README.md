# express-study-project

# Mongoid qyeries

Запрос на вставку книг:
db.books.insertMany([
    { title: "Book #1", description: "Book description #1", authors: "Book authors #1", favorite: 'Book favorite #1", fileCover: "Book fileCover #1", fileName: "Book fileName #1", fileBook: "Book fileBook #1" },
    { title: "Book #2", description: "Book description #2", authors: "Book authors #2", favorite: 'Book favorite #2", fileCover: "Book fileCover #2", fileName: "Book fileName #2", fileBook: "Book fileBook #2" }
]})

Запрос на поиск книг по заголовку:

db.books.find({ title: "Book #1" }) - вернёт результат
db.books.find({ title: "Book#1" }) - не вернёт ничего

Запрос на редактирование книг

db.books.updateMany({ title: "Book #1" }, { $set: { "description": "Book description #1 updated", "authors": "Book authors #1 updated" } })