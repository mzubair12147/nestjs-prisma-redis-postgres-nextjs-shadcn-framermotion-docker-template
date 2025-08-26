import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RedisModule } from './redis/redis.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [RedisModule],
  providers: [PrismaService],
  controllers: [HealthController],
})
export class AppModule {}
