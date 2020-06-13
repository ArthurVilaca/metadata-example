module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('books', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING
    },
    publisher: {
      type: DataTypes.STRING
    },
    publication_date: {
      type: DataTypes.DATE
    },
    language: {
      type: DataTypes.STRING
    },
    subject: {
      type: DataTypes.STRING
    },
    license_rights: {
      type: DataTypes.STRING
    }
  }, {
    indexes: [{
        unique: false,
        fields: ['title']
      },
      {
        unique: false,
        fields: ['author']
      },
      {
        unique: false,
        fields: ['publication_date']
      }
    ],
    modelName: 'books'
  });
  return Books
}