
import Repository from "./repository";

const resource="/category";
class CategoryService {
    get() {
        return Repository.get(`${resource}`);
    }
    create(category) {
        return Repository.post(`${resource}`, category);
    }
    edit(category) {
        return Repository.put(`${resource}/${category.id}`, category);
    }
    delete(id) {
        return Repository.delete(`${resource}/${id}`);
    }
}
export default new CategoryService();
