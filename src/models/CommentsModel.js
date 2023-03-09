
export const CommentsModelMain = [
  {
    idComment: 0,
    userId: 2,
    comment: "Comentario Padre",
    numberLikes: 7,
    numberDislikes: 3,
    timeComment: new Date(),
    childComments: [
      {
        idComment: 2,
        userId: 2,
        comment: "Comentario de respuesta hijo",
        numberLikes: 7,
        numberDislikes: 3,
        timeComment: new Date(),
        childComments: []
      }, {
        idComment: 3,
        userId: 2,
        comment: "Comentario de respuesta hijo",
        numberLikes: 7,
        numberDislikes: 3,
        timeComment: new Date(),
        childComments: []
      }
    ]
  },
  {
    idComment: 4,
    userId: 2,
    comment: "Comentario padre",
    numberLikes: 7,
    numberDislikes: 3,
    timeComment: new Date(),
    childComments: [
      {
        idComment: 5,
        userId: 2,
        comment: "Comentario hijo",
        numberLikes: 2,
        numberDislikes: 3,
        timeComment: new Date(),
        childComments: [
          {
            idComment: 7,
            userId: 2,
            comment: "Comentario de respuesta hijo hijo",
            numberLikes: 4,
            numberDislikes: 3,
            timeComment: new Date(),
            childComments: [
              {
                idComment: 8,
                userId: 2,
                comment: "Comentario de respuesta hijo hijo hijo",
                numberLikes: 33,
                numberDislikes: 3,
                timeComment: new Date(),
                childComments: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    idComment: 6,
    userId: 2,
    comment: "Comentario de respuesta padre",
    numberLikes: 7,
    numberDislikes: 3,
    timeComment: new Date(),
    childComments: []
  }
];



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