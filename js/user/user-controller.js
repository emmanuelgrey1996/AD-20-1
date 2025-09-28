class UserController{
    
    constructor(){
        this.users = [];
    }
    
    getUsers(){
        return this.users;
    }

    add(user){
        this.users.push(user);
    }

    remove(user){
        this.users = this.users.filter(function(ele){
            return ele != user; 
        });
    }

    findByEmail(email){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].email === email)
                return this.users[i];
        } 
    }

    findById(id){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].id === id)
                return this.users[i];
        } 
    }


}


module.exports = UserController;



const User = require("./user");
const UserController = require("./user-controller");

describe("UserController - Tarea 2", () => {

  
  // Pruebas para add()
  
  test("Agrega un usuario que no está en la lista", () => {
    const controller = new UserController();
    const user = new User(1, "Emmanuel", "emmanuel@example.com");

    controller.add(user);

    expect(controller.getUsers()).toContain(user);
  });

  // Pruebas para remove()
  
  test("Intentar eliminar un usuario que no está en la lista no cambia la lista", () => {
    const controller = new UserController();
    const user = new User(1, "Emmanuel", "emmanuel@example.com");

    controller.remove(user);

    expect(controller.getUsers()).toEqual([]); // la lista sigue vacía
  });

 
  // Pruebas para findByEmail()

  test("Encuentra un usuario por email", () => {
    const controller = new UserController();
    const user = new User(1, "Emmanuel", "emmanuel@example.com");
    controller.add(user);

    const found = controller.findByEmail("emmanuel@example.com");
    expect(found).toBe(user);
  });

  test("Devuelve undefined si el email no existe", () => {
    const controller = new UserController();
    const found = controller.findByEmail("noexiste@example.com");
    expect(found).toBeUndefined();
  });

  
  // Pruebas para findById()
 
  test("Encuentra un usuario por ID", () => {
    const controller = new UserController();
    const user = new User(1, "Emmanuel", "j.greey1996@gmail.com");
    controller.add(user);

    const found = controller.findById(1);
    expect(found).toBe(user);
  });

  test("Devuelve undefined si el ID no existe", () => {
    const controller = new UserController();
    const found = controller.findById(99);
    expect(found).toBeUndefined();
  });

});
