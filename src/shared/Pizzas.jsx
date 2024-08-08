import margherita from "../assets/images/PizzaDeMargherita.png"
import calabresa from "../assets/images/PizzaCalabresa.png"
import vegetariana from "../assets/images/PizzaVegetariana.png"
import havaiana from "../assets/images/PizzaHavaiana.png"
import bacon from "../assets/images/PizzaCalabresa.png"

const Pizzas = [
    {
        "id": 1,
        "nome": "Margherita",
        "descricao": "Molho de Tomate e Margherita",
        "imagem": margherita
    },

    {
        "id": 2,
        "nome": "Calabresa",
        "descricao": "Molho de tomate com Calabresa",
        "imagem": calabresa
    },

    {
        "id": 3,
        "nome": "Vegetariana",
        "descricao": "Legumes e Tomate...",
        "imagem": vegetariana
    },

    {
        "id": 4,
        "nome": "Havaiana",
        "descricao": "Queijo e legumes...",
        "imagem": havaiana
    },

    {
        "id": 5,
        "nome": "Bacon",
        "descricao": "Molho de Tomate, Queijo e Bacon",
        "imagem": bacon
    }
]

export default Pizzas;