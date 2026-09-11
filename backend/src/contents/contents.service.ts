import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';

@Injectable()
export class ContentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateContentDto, userId: string) {
    return this.prisma.content.create({
      data: {
        ...data,

        createdById: userId,
      },
    });
  }

  async findAll() {
    return this.prisma.content.findMany({
      include: {
        genres: true,
      },
    });
  }

  async findOne(id: string) {
    console.log('Buscando conteudo:', id);

    return this.prisma.content.findUnique({
      where: { id },

      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        genres: true,
      },
    });
  }
}
