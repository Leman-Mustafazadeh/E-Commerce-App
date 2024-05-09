import { nanoid } from "nanoid";

export default class Product {
    constructor(name, salePrice, costPrice, imgSrc, discountPercentage, description, categoryId, stockCount) {
        this.id = nanoid()
        this.name = name
        this.salePrice = salePrice
        this.costPrice = costPrice
        this.createdAt = new Date()
        this.imgSrc = imgSrc
        this.discountPercentage = salePrice- (salePrice * (discountPercentage / 100))
        this.description = description
        this.categoryId = categoryId
        this.stockCount = stockCount
    }
}