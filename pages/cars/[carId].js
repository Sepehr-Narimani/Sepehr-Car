import { useRouter } from "next/router";
import CarDetails from "../../components/templates/CarDetails";
import carsData from "../../data/carsData";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  console.log(router);
  const carDetails = carsData[carId - 1];

  return <CarDetails {...carDetails} />;
}

export default CarDetail;