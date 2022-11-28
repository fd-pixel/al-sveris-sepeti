import "./App.css";
import Card from "./components/card/Card";
import { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

function App() {
  const initialState = [
    {
      id: "rec1JZlfCIBOPdcT2",
      title: "Samsung Galaxy S8",
      price: "399.99",
      image:
        "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
      amount: 0,
      info: "sds",
    },
    {
      id: "recB6qcHPxb62YJ75",
      title: "Google Pixel",
      price: "499.99",
      image:
        "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
      amount: 0,
      info: "sds",
    },
    {
      id: "recdRxBsE14Rr2VuJ",
      title: "Xiaomi Redmi Note 2",
      price: "699.99",
      image:
        "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
      amount: 0,
      info: "sds",
    },
    {
      id: "recwTo160XST3PIoW",
      title: "Samsung Galaxy S7",
      price: "599.99 ",
      image:
        "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
      amount: 0,
      info: "sds",
    },
  ];
  const [products, setProducts] = useState(initialState);
  const [basket, setBasket] = useState([]);
  const [tutar, setTutar] = useState(0);
  const array = [...basket];
  return (
    <div className="App">
      <h1>React Sepet Uygulaması</h1>
      <h2>Ürünler</h2>
      <div className="products">
        {products.map((product, id) => {
          return (
            <div key={id}>
              <Card
                title={product.title}
                image={product.image}
                price={product.price}
              ></Card>
              <div className="signs">
                <FaPlusSquare
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    if (
                      array.findIndex((ind) => {
                        return product.id === ind.id;
                      }) === -1
                    ) {
                      array.push(product);

                      setBasket(array);
                    } else {
                      array.map((item) => {
                        if (item.id === product.id) {
                          return (product.amount += 1);
                        }
                        setTutar(product.price * (product.amount + 1));
                        setBasket(array);
                      });
                    }
                    console.log(basket);
                  }}
                />
                {product.amount}
                <FaMinusSquare
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    array.map((item) => {
                      if (item.id === product.id) {
                        return (product.amount -= 1);
                      }
                      setBasket(array);
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="basket">
        <h2> Sepetiniz</h2>
        <ul className="Sepet">
          {basket.map((product, index) => {
            return (
              <li className="basket-items">
                {product.title +
                  "  " +
                  "----> " +
                  (product.amount + 1) +
                  "  " +
                  "Adet:" +
                  "Toplam Tutar" +
                  ((product.amount + 1) * product.price).toFixed(2)}
              </li>
            );
          })}
        </ul>

        <h2>Sepetinizdeki Toplam Tutar</h2>
        <p>{tutar}</p>
        {basket.length > 0 ? (
          <button
            onClick={() => {
              setBasket([]);
              setTutar(0);
            }}
          >
            Sepeti Temizle{" "}
          </button>
        ) : (
          <h2>Sepetinizde Ürün Bulunmamaktadır</h2>
        )}
      </div>
    </div>
  );
}

export default App;
