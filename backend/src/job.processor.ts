import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor("job-queue")
export class JobProcessor {
    private readonly logger = new Logger(JobProcessor.name);

    constructor() {}

    @OnQueueActive()
    onActive(job: Job) {
  
      this.logger.debug(`Processing job ${job.id} of type ${job.name}.`)
    }
  
    @OnQueueCompleted()
    onComplete({ job, result }: { job: Job; result: any; }) {
  
      this.logger.debug(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`); 
      
      if (job.name === 'add-students' || job.name === 'student-batch-upload-job') {
      }
    }
  
    @OnQueueFailed()
    onError(job: Job<any>, error: any) {
      this.logger.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack)
    }
  
    @Process()
    async studentBatchUpload(job: Job<{ obj: any }>) {
        this.logger.log("job data" + job);
        return "test";
    }
}