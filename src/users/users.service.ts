import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/users.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  async create(createUserDto: CreateUserDto) {
    if(!createUserDto.name){
      return {err: 'Ошибка: отсутствует параметр name'}
    }

    if(!createUserDto.email){
      return {err: 'Ошибка: отсутствует параметр email'}
    }

    if(!createUserDto.password){
      return {err: 'Ошибка: отсутствует параметр password'}
    }

    if(await this.userModel.findOne({email: createUserDto.email})){
      return {err: 'Ошибка: данный email уже используется'}
    }
    
    const createdUser = new this.userModel({
      name      : createUserDto.name,
      email     : createUserDto.email,
      password  : createUserDto.password,
      createdAt : Date.now(),
      deletedAt : null
    })

    return createdUser.save()
  }

  findAll() {
    return this.userModel.find({deletedAt: null})
  }

  findOne(id: string) {
    return this.userModel.findOne({});
  }

  findByName(name: string){
    return this.userModel.find({name: name, deletedAt: null})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if(updateUserDto.email){
      if(await this.userModel.findOne({email: updateUserDto.email})){
        return {err: 'Ошибка: пользователь с указанным email уже существует'}
      }
    }

    await this.userModel.findByIdAndUpdate(id, {$set:{...updateUserDto}})
    return this.userModel.findById(id)
  }

  async remove(id: string) {
    await this.userModel.findByIdAndUpdate(id, {$set:{deletedAt: Date.now()}}) 
    return this.userModel.findById(id)
  }
}
