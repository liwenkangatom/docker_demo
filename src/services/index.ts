

class http {
  baseUrl: string;
  timeOut: number;
  token: string ;
  controller = new AbortController();

  constructor(baseUrl:string, timeout: number){
    this.baseUrl = baseUrl;
    this.timeOut = timeout;
    this.token = localStorage.getItem('token') || '';
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }
  async fetchToken() {
    // const token = fetch("getToken");
  }
  responseHandler(){

  }
  abortHttp(){
    this.controller.abort();
  }
  async post(){
    // const signal = this.controller.signal;
    // const result = await fetch("")
    // return this.responseHandler(result);
  }
  async get(){

  }
}

export default http;