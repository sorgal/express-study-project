import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
  } from '@nestjs/websockets';
  
  import { Socket, Server } from 'socket.io';
  import { BookCommentsService } from './book_comments.service';
  import { CreateBookCommentDto } from './dto/create-book-comment.dto';
  
  @WebSocketGateway({ cors: true })
  export class BookCommentsGateway {
    @WebSocketServer()
    server: Server;
    service: BookCommentsService;

    @SubscribeMessage('addComment')
    handleMessage(
        @MessageBody() payload: CreateBookCommentDto,
        @ConnectedSocket() client: Socket
    ): string {
        return this.service.create(payload)
    }

    @SubscribeMessage('getAllComments')
    handleMessage(
        @MessageBody() bookId: string,
        @ConnectedSocket() client: Socket
    ): string {
        return this.service.findAll(bookId)
    }
  }