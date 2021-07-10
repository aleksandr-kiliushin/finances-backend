import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getAll() {
    return [
      { id: 1, title: 'JS: The definitive guide' },
      { id: 2, title: 'Clean code' },
      { id: 3, title: 'Clean architecture' },
    ]
  }
}
