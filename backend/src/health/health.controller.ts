import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RedisService } from '../redis/redis.service';

@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Get()
  async checkHealth() {
    // DB check
    const dbCheck = await this.prisma.$queryRaw`SELECT 1`;

    // Redis check
    await this.redis.set('health-check', 'ok', 10);
    const redisCheck = await this.redis.get('health-check');

    return {
      database: dbCheck ? 'connected' : 'error',
      redis: redisCheck === 'ok' ? 'connected' : 'error',
    };
  }
}
