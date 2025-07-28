export default class ErrorRepository {
  constructor() {
    this.map = new Map();

    // Пример ошибок
    this.map.set(404, "Not Found");
    this.map.set(500, "Internal Server Error");
    this.map.set(403, "Forbidden");
  }

  translate(code) {
    return this.map.get(code) || "Unknown error";
  }
}
