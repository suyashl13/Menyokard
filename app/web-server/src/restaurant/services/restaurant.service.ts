import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Restaurant from "../entities/restaurant.entity";
import { Repository } from "typeorm";
import UpdateRestaurantDto from "../dtos/update-restaurant.dto";

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

  async checkRestaurantOwnership(
    userId: string,
    restaurantId: string,
  ): Promise<boolean> {
    return await this.restaurantRepository.exists({
      where: { restaurantId, user: { userId } },
    });
  }

  async getRestaurantDetailsById(restaurantId: string) {
    return await this.restaurantRepository.findOne({
      where: {
        restaurantId: restaurantId,
      },
      relations: {
        restaurantTables: true,
        floors: true,
        user: true,
      },
      select: {
        user: {
          userId: true,
          email: true,
          phoneNo: true,
        },
      },
    });
  }

  async deleteRestaurant(restaurantId: string): Promise<Restaurant> {
    const restaurant: Restaurant = await this.restaurantRepository.findOneBy({
      restaurantId,
    });
    restaurant.isDeleted = true;
    return await this.restaurantRepository.save(restaurant);
  }

  async updateRestaurant(
    restaurantId: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant: Restaurant = await this.restaurantRepository.findOneBy({
      restaurantId,
    });
    Object.assign(restaurant, updateRestaurantDto);
    return await this.restaurantRepository.save(restaurant);
  }
}
