import { Column, Entity } from "typeorm"; 
import { Product as MedusaProduct } from '@medusajs/medusa/dist';
import { Entity as MedusaEntity } from "medusa-extender";

@MedusaEntity({ override: MedusaProduct })
@Entity()
export class Product extends MedusaProduct {
    @Column()
    customField: string;
}
