import { Controller, Post, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':contentId')
  @UseGuards(JwtAuthGuard)
  create(@Param('contentId') contentId: string, @CurrentUser() user: { id: string },) {
    return this.favoritesService.create(contentId, user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser() user: { id: string }) {
    return this.favoritesService.findAll(user.id);
  }

    @Delete(':contentId')
  @UseGuards(JwtAuthGuard)
  remove(@Param('contentId') contentId: string, @CurrentUser() user: { id: string }) {
    return this.favoritesService.remove(contentId, user.id);
  }
}
