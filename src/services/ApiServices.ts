import axios from 'axios'

export class ApiServices {
  private static URL: string = "https://newsapi.org/v2/everything";

  public static getAllData() {
    let userURL: string = `${this.URL}/?q=apple&from=2022-12-25&to=2022-12-25&apiKey=5fd964901d354f33ac848b11445226f1`;
    return axios.get(userURL);
  }
}
