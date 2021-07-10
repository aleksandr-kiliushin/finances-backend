import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('api/book')
export class BookController {

  constructor(
    private readonly bookService: BookService
  ){}

  @Get()
  getAll() {
    return this.bookService.getAll()
  }

}
