interface MultimediaContent {
  title: string;
  streamingPrice: number;
  downloadPrice: number;
  duration: number;
  adult: boolean;
  size: number;
  isPremiumContent: boolean;
}

interface PremiumContent extends MultimediaContent {
  isPremiumContent: true;
  additionalFee: number;
}

type MultimediaContentType = MultimediaContent & PremiumContent;

interface Service {
  timestamp: number;
  getMultimediaContent(): MultimediaContentType;
  isStreamingService: boolean;
  isDownloadService: boolean;
}

interface StreamingService extends Service {
  isStreamingService: true;
  isDownloadService: false;
}

interface DownloadService extends Service {
  isStreamingService: false;
  isDownloadService: true;
}

type ServiceType = StreamingService | DownloadService;

export default class RegisteredUser {
  private email: string;
  private password: string;
  private registration: string;
  private adult: boolean;

  private services: ServiceType[];

  constructor(services = []) {
    this.services = services;
  }

  getTotal(): number {
    let total = 0;

    this.services.forEach((service) => {
      const multimediaContent = service.getMultimediaContent();

      if (service.isStreamingService) {
        total += multimediaContent.streamingPrice;
      } else if (service.isDownloadService) {
        total += multimediaContent.downloadPrice;
      }

      if (multimediaContent.isPremiumContent) {
        total += multimediaContent.additionalFee;
      }
    });

    return total;
  }
}
