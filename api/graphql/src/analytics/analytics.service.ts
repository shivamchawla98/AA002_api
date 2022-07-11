import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  findAll() {
    var totalOrders = 2;
    var analytics = {
      totalOrders:totalOrders
    }
    var data = {
      analytics:analytics
    }
    console.log("data");
    console.log(data.analytics.totalOrders);
    return data;
  }
}
