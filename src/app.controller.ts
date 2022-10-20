import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Payload, EventPattern } from '@nestjs/microservices';
import { Categoria } from './interfaces/categorias/categoria.interface';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger(AppController.name);

  @EventPattern('criar-categoria')
  async criarCategoria(@Payload() categoria: Categoria) {
    this.logger.log(`categoria: ${JSON.stringify(categoria)}`);

    this.appService.criarCategoria(categoria);
  }
}
