import { Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateContentDto, @CurrentUser() user: { id: string }) {
    return this.contentsService.create(data, user.id);
  }

  @Get()
  findAll() {
    return this.contentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentsService.findOne(id);
  }
}
