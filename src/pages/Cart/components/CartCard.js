import { Link } from "react-router-dom";


export const CartCard = () => {

    const product ={
            "id": 10001,
            "name": "Basics To Advanced In React",
            "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
            "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
            "price": 29,
            "poster": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
            "image_local": "/assets/images/10001.avif",
            "rating": 5,
            "in_stock": true,
            "size": 5,
            "best_seller": true
          }

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to={`products/${product.id}`}>
            <img className="w-32 rounded" src={product.poster} alt={product.name} />
          </Link>
          <div className="">
            <Link to={`products/${product.id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
            </Link>            
            <button  className="text-base ml-2 text-red-400">Remove</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${product.price}</span>
      </div>
    </div>
  )
}