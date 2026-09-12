import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReviewDto, userId: string, contentId: string) {
    try {
      return await this.prisma.review.create({
        data: {
          ...data,
          userId,
          contentId,
        },
      });
    } catch (error) {
    if(error.code === 'P2002'){
        throw new ConflictException('Você já avaliou este conteúdo.');
      }
      throw error;
    }
  }
  async findByContent(contentId: string) {
    return this.prisma.review.findMany({
      where: { contentId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }
}
