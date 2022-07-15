import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  findAll() {
    var totalOrders = 2;
    var analytics = {
      totalOrders:totalOrders,
      total_revenue:3
    }
    var data = {
      analytics:analytics
    }
    console.log("data");
    console.log(data.analytics.totalOrders);
    return data;
  }
}
