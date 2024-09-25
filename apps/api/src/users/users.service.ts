import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly dataBaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.dataBaseService.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.dataBaseService.user.findMany();
  }

  async findOne(email: string) {
    return this.dataBaseService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.dataBaseService.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return this.dataBaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
