

export default class APIService {

    _apiBase = "http://localhost:8000/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    async getPosts() {
        return await this.getResource(`/posts/`);
    }

}