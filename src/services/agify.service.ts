import axios from "axios";
import { agifyUrl } from "../modules/config/config";

export class AgifyService {

    get = async () => {
        const result = await axios.get(agifyUrl(`Steven`));
        return result.data;
    }
}