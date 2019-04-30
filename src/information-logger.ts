import os from 'os';
import { name, version } from '../package.json';
export class InformationLogger {
  static logApplicationInformation(): void {
    console.log({
      application: {
        name,
        version,
      },
    });
  }
  static logSystemInformation(): void {
    console.log({
      system: {
        platform: process.platform,
        cpus: os.cpus().length,
      },
    });
  }
}