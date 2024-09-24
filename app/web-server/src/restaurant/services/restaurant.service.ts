import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Restaurant from "../entities/restaurant.entity";
import { Repository } from "typeorm";

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async getRestaurantsByUserId(userId: string): Promise<Restaurant[]> {
    return await this.restaurantRepository.query(
      `
                select r."restaurantId" , r."restaurantName" , r."restaurantEmail" , r."restaurantPhone" , r."restaurantAddress" , r."restaurantCity" , r."isBlocked" , r."createdAt" , r."updatedAt" , r."userUserId" 
                from restaurant r 
                where r."userUserId" = $1;
            `,
      [userId],
    );
  }

  async createRestaurantForUser({
    restaurantName,
    restaurantEmail,
    restaurantPhone,
    restaurantAddress,
    restaurantCity,
    userId,
  }: {
    restaurantName: string;
    restaurantEmail: string;
    restaurantPhone: string;
    restaurantAddress: string;
    restaurantCity: string;
    userId: string;
  }) {
    const restaurant = this.restaurantRepository.create({
      restaurantName,
      restaurantEmail,
      restaurantPhone,
      restaurantAddress,
      restaurantCity,
      user: {
        userId,
      },
    });
    return await this.restaurantRepository.save(restaurant);
  }
}
