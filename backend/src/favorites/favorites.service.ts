import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(contentId: string, userId: string) {
    return this.prisma.favorite.create({
      data: {
        contentId,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { content: true },
    });
  }

  async remove(contentId: string, userId: string) {
    return this.prisma.favorite.deleteMany({
      where: { contentId, userId },
    });
  }
}
