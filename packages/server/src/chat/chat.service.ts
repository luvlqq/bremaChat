import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  // messages: PrismaService;
  messages: Chat[] = [{ login: 'Oleg', text: 'hello' }];
  //TODO connect DB. это черновой вариант
  clientToUser = {};
  identify(login: string, clientId: string) {
    this.clientToUser[clientId] = login;
    return Object.values(this.clientToUser);
  }
  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  create(createChatDto: CreateChatDto) {
    // const message = this.prisma.messageModel.findMany(createChatDto);
    // this.messages.messageModel.create(createChatDto);
    // return message; //TODO improve
    const message = { ...createChatDto };
    this.messages.push(message);
    return message;
  }

  findAll() {
    //TODO return this.messages.from.db
    return `This action returns all chat`;
  }
}
