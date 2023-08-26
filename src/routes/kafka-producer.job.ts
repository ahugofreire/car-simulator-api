import { Job } from 'bull';
import { Processor, Process } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { consumers } from 'stream';

@Processor('kafka-producer')
export class KafkaProducerJob {
  constructor(
    @Inject('KAFKA_SERVICE')
    private kafkaService: ClientKafka,
  ) {}

  @Process()
  async handle(job: Job<any>) {
    await this.kafkaService.emit('route', job.data);
    return {};
  }
}
