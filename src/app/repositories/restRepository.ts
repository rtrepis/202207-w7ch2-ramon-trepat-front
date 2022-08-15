interface Item {
  id: string;
}
interface RestRepositoryType<T extends Item, Response> {
  getAll: () => Promise<T[]>;
  delete: (id: T["id"]) => Promise<Response>;
}

class RestRepsitory<T extends Item, Response>
  implements RestRepositoryType<T, Response>
{
  constructor(private url: string) {}

  async getAll() {
    const response = await fetch(this.url);
    return response.json();
  }

  async delete(id: T["id"]) {
    const result = await fetch(this.url + "DELETE/" + id, {
      method: "DELETE",
    });
    return result as unknown as Promise<Response>;
  }
}

export default RestRepsitory;
