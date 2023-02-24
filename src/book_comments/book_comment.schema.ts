
import * as Joi from 'joi';

export const bookCommentSchema = Joi.object().keys({
    bookId: Joi.string().required(),
    comment:  Joi.string().required()
});