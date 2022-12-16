import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: [String(process.env.KAFKA_BROKERS)],
        sasl: {
          mechanism: 'scram-sha-256',
          username: String(process.env.KAFKA_SASL_USER),
          password: String(process.env.KAFKA_SASL_PASS),
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
