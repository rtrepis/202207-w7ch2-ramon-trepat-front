interface RestRepositoryType<T> {
  getAll: () => Promise<T>;
}

class RestRepsitory<T> implements RestRepositoryType<T> {
  constructor(private url: string) {}

  async getAll() {
    const response = await fetch(this.url);
    return response.json();
  }
}

export default RestRepsitory;
