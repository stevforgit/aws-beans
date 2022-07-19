import Car, { ICar } from '../modules/models/car.model';

const CreateCar = async (model: ICar) => {
    const car = await Car.create(model);
    return car;
}

export {
    CreateCar
};