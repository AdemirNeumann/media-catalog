import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post(':contentId')
  @UseGuards(JwtAuthGuard)
  create(
    @Param('contentId') contentId: string,
    @Body() data: CreateReviewDto,
    @CurrentUser() user: { id: string },
  ) {
    return this.reviewsService.create(data, user.id, contentId);
  }

  @Get('content/:contentId')
  findByContent(@Param('contentId') contentId: string) {
    return this.reviewsService.findByContent(contentId);
  }
}
