import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

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
    console.log('Buscando conteúdo:', id);
    const content = await this.prisma.content.findUnique({
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
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    console.log(content);

    if (!content) {
      return null;
    }

    return content;
  }

  async update(id: string, data: UpdateContentDto) {
    const content = await this.prisma.content.findUnique({
      where: { id },
    });
    if (!content) {
      throw new NotFoundException('Content not found');
    }

    return this.prisma.content.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const content = await this.prisma.content.findUnique({
      where: { id },
    });
    if (!content) {
      throw new NotFoundException('Content not found');
    }

    await this.prisma.content.delete({
      where: { id },
    });

    return { message: 'Content deleted successfully', id };
  }
}
