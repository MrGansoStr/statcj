
export const CommentsModelMain = [
  {
    "_id": "6409090962688ef7678d565f",
    "idComment": 0,
    "userId": 1,
    "comment": "Comentario Editado ",
    "numberLikes": 10,
    "numberDislikes": 5,
    "timeComment": "2023-03-08T22:15:37.373Z",
    "childComments": [
      1,
      2
    ],
    "Usuario": {
      "_id": "640f895d4845da25c6738ee3",
      "idUser": 1,
      "username": "usuariotest",
      "gender": 1,
      "name": "new admin name",
      "lastName": "admin last name",
      "email": "adming@admin.com"
    },
    "Comments": [
      {
        "_id": "640a72b12af83d7ee8a3ef77",
        "idComment": 1,
        "userId": 1,
        "comment": "Comentario Auto Incrementable",
        "numberLikes": 7,
        "numberDislikes": 3,
        "timeComment": "2023-03-09T23:58:41.740Z",
        "childComments": [],
        "Usuario": {
          "_id": "640f895d4845da25c6738ee3",
          "idUser": 1,
          "username": "usuariotest",
          "gender": 1,
          "name": "new admin name",
          "lastName": "admin last name",
          "email": "adming@admin.com"
        }
      },
      {
        "_id": "640f4baa4845da25c6738ee1",
        "idComment": 2,
        "userId": 1,
        "comment": "Comentario de respuesta hijo",
        "numberLikes": 7,
        "numberDislikes": 3,
        "timeComment": "2023-03-13T16:13:30.957Z",
        "childComments": [],
        "Usuario": {
          "_id": "640f895d4845da25c6738ee3",
          "idUser": 1,
          "username": "usuariotest",
          "gender": 1,
          "name": "new admin name",
          "lastName": "admin last name",
          "email": "adming@admin.com"
        }
      }
    ]
  }
];

export const DefaultCommentModel = {
  idComment: 0,
  userId: 0,
  comment: "",
  numberLikes: 0,
  numberDislikes: 0,
  timeComment: new Date(),
  childComments: []
}

export const CommentModel1 = {
  idComment: 2,
  userId: 2,
  comment: "Comentario de respuesta",
  numberLikes: 7,
  numberDislikes: 3,
  timeComment: new Date(),
  childComments: []
}
/*
db.comments.update({"idComment": 0},{ $push: { childComments: {
  idComment: 2,
  userId: 2, 
  comment: "Comentario de respuesta",
  numberLikes: 7,
  numberDislikes: 3,
  timeComment: new Date(),
  childComments: []
} } });

*/