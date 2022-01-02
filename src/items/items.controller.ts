import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() newItem: CreateItemDto): Promise<Item> {
    return this.itemService.create(newItem);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItem: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemService.update(id, updateItem);
  }
}
