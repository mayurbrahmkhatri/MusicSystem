import axios from "axios";

export class PlaceService {
  async getPlces() {
    const res = await axios.get("assets/data/countries.json");
    return res.data.data;
  }
}
